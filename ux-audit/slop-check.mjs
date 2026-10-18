// Stand-in for the avoid-ai-design detector (not installed on this machine).
// Scans the *built* site (.next/server/app/**/*.html and the emitted CSS) for the
// banned patterns in the brief and grades them P0 (must fix) / P1 (should fix) / P2 (note).
//
//   node ux-audit/slop-check.mjs portfolio/.next
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.argv[2] ?? "portfolio/.next";
const walk = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
};

const files = walk(root);
const html = files.filter((f) => f.includes(`${join("server", "app")}`) && f.endsWith(".html"));
const css = files.filter((f) => f.includes("static") && f.endsWith(".css"));

const findings = [];
const add = (level, rule, where, detail) => findings.push({ level, rule, where, detail });

// Class lists that actually ship in the pages.
const classAttr = /class="([^"]*)"/g;

for (const file of html) {
  const page = "/" + relative(join(root, "server", "app"), file).replace(/\\/g, "/").replace(/(index)?\.html$/, "");
  const src = readFileSync(file, "utf8");
  const body = src.slice(src.indexOf("<body"));
  const classes = [...body.matchAll(classAttr)].map((m) => m[1]);

  // P0: glass effects.
  for (const c of classes) if (/\bbackdrop-blur/.test(c)) add("P0", "glass (backdrop blur)", page, c);

  // P0: purple/blue gradients.
  for (const c of classes)
    if (/\bbg-gradient-|\bfrom-(blue|indigo|violet|purple|sky)-|\bto-(blue|indigo|violet|purple)-/.test(c))
      add("P0", "purple/blue gradient", page, c);

  // P0: card-in-card. Count .card openings nested inside an open .card.
  {
    const tagRe = /<(\/?)([a-z0-9]+)([^>]*)>/g;
    const stack = [];
    let m;
    while ((m = tagRe.exec(body))) {
      const [, close, tag, attrs] = m;
      if (/^(img|br|hr|input|meta|link|source|path|rect|line|circle|use)$/.test(tag) || attrs.endsWith("/")) continue;
      if (close) {
        stack.pop();
        continue;
      }
      const isCard = /class="[^"]*\bcard\b/.test(attrs);
      if (isCard && stack.includes(true)) add("P0", "card-in-card", page, attrs.slice(0, 80));
      stack.push(isCard);
    }
  }

  // P1: rounded-2xl/3xl with a shadow.
  for (const c of classes) if (/\brounded-(2xl|3xl)\b/.test(c) && /\bshadow/.test(c)) add("P1", "rounded-2xl shadow card", page, c);

  // P1: uppercase + tracked labels. Allowed occasionally; flag when frequent.
  const tracked = classes.filter((c) => /\buppercase\b/.test(c) && /\btracking-(wide|wider|widest|\[)/.test(c));
  if (tracked.length > 2) add("P1", "uppercase tracked labels on many elements", page, `${tracked.length} elements`);
  else if (tracked.length) add("P2", "uppercase tracked label", page, `${tracked.length} element(s)`);

  // P1: decorative numbering shown to readers.
  const text = body.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  const nums = text.match(/(\[0x0\d\]|\b0x0\d\b|(?:^|\s)0[1-9]\.(?=[a-z]))/gi) ?? [];
  if (nums.length) add("P1", "decorative 01/02/0x numbering", page, nums.slice(0, 4).join(", "));

  // P1: icons in rounded squares (fixed-size rounded box with a background holding an svg).
  const iconBox = /<(a|span|div)[^>]*class="[^"]*\b(h-(8|9|10|12)\b[^"]*w-(8|9|10|12)\b|w-(8|9|10|12)\b[^"]*h-(8|9|10|12)\b)[^"]*\brounded-(chip|md|lg|xl)\b[^"]*\bbg-[^"]*"[^>]*>\s*<svg/g;
  const icons = body.match(iconBox) ?? [];
  if (icons.length) add("P1", "icons in rounded squares", page, `${icons.length} element(s)`);

  // P1: bento cells with no reading order: col-span/row-span mixing inside one grid.
  if (/\b(md|lg):(col|row)-span-[2-9]\b/.test(classes.join(" "))) add("P1", "bento spans (mixed cell sizes)", page, "col/row-span found");
}

for (const file of css) {
  const src = readFileSync(file, "utf8");
  const name = relative(root, file).replace(/\\/g, "/");
  if (/backdrop-filter\s*:\s*blur/.test(src.replace(/\.backdrop-blur[^{]*\{[^}]*\}/g, "")))
    add("P2", "backdrop-filter rule present in CSS (check it is unused)", name, "");
  const grads = src.match(/linear-gradient\([^)]*\)/g) ?? [];
  for (const g of grads) {
    const hues = [...g.matchAll(/#([0-9a-f]{6})/gi)].map((h) => {
      const n = parseInt(h[1], 16), r = n >> 16, gg = (n >> 8) & 255, b = n & 255;
      return b > r + 40 && b > gg; // bluish/purplish
    });
    if (hues.some(Boolean)) add("P0", "purple/blue gradient in CSS", name, g.slice(0, 80));
  }
}

const order = { P0: 0, P1: 1, P2: 2 };
findings.sort((a, b) => order[a.level] - order[b.level] || a.where.localeCompare(b.where));
const count = (l) => findings.filter((f) => f.level === l).length;
console.log(`Scanned ${html.length} pages and ${css.length} stylesheets.`);
console.log(`P0: ${count("P0")}  P1: ${count("P1")}  P2: ${count("P2")}\n`);
console.log("| Level | Rule | Where | Detail |\n|---|---|---|---|");
for (const f of findings) console.log(`| ${f.level} | ${f.rule} | ${f.where} | ${f.detail.replace(/\|/g, "\\|")} |`);
process.exit(count("P0") + count("P1") > 0 ? 1 : 0);
