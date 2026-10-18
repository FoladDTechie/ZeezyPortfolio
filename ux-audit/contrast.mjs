// WCAG 2.x contrast for the site tokens.
//   node contrast.mjs before   -> old tokens
//   node contrast.mjs after    -> new tokens, measured on the textured page
// "Textured" = the lightest pixel the page texture can produce: base colour with the
// major grid line (white at --grid-major alpha) and the grain's brightest speck on top.
const hex = (h) => { h = h.replace('#', ''); return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)); };
const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const L = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
const ratio = (a, b) => { const [x, y] = [L(a), L(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
const over = (fg, alpha, base) => fg.map((c, i) => Math.round(c * alpha + base[i] * (1 - alpha)));
const fmt = (n) => n.toFixed(2) + ':1';
const white = [255, 255, 255];

const mode = process.argv[2] ?? 'after';

if (mode === 'before') {
  const page = hex('#0b0b0c'), card = hex('#151516');
  const rows = [
    ['Card background vs page', ratio(card, page), 3],
    ['Card border (white 8% on card) vs page', ratio(over(white, 0.08, card), page), 3],
    ['Body text #e4e4e7 on card', ratio(hex('#e4e4e7'), card), 4.5],
    ['Subtle text #8b8b98 on card', ratio(hex('#8b8b98'), card), 4.5],
  ];
  for (const [n, r, t] of rows) console.log(`| ${n} | ${fmt(r)} | ${t}:1 | ${r >= t ? 'pass' : 'FAIL'} |`);
  process.exit(0);
}

// Keep in sync with globals.css @theme.
const T = {
  bg: '#111316',
  surface: '#1a1d22',
  surfaceHi: '#20242a',
  edge: '#767d88',
  rule: '#3a3f47',
  fgStrong: '#f5f6f8',
  fg: '#e4e6ea',
  muted: '#b9bec7',
  subtle: '#a0a6b0',
  accent: '#5eead4',
  accentInk: '#0b3b34',
};
const GRID_MAJOR = 0.05; // white alpha of the major grid line
const GRAIN_MAX = 0.035; // brightest grain speck, white alpha

const page = hex(T.bg);
const pageTextured = over(white, GRAIN_MAX, over(white, GRID_MAJOR, page));
const card = hex(T.surface);
const cardHi = hex(T.surfaceHi);

const rows = [
  ['Card edge `edge` vs page (flat)', ratio(hex(T.edge), page), 3],
  ['Card edge `edge` vs page (textured, lightest pixel)', ratio(hex(T.edge), pageTextured), 3],
  ['Card edge `edge` vs card surface', ratio(hex(T.edge), card), 3],
  ['Hover edge `accent` vs textured page', ratio(hex(T.accent), pageTextured), 3],
  ['`fg-strong` on card', ratio(hex(T.fgStrong), card), 4.5],
  ['`fg` (body) on card', ratio(hex(T.fg), card), 4.5],
  ['`fg-muted` on card', ratio(hex(T.muted), card), 4.5],
  ['`fg-subtle` (meta) on card', ratio(hex(T.subtle), card), 4.5],
  ['`fg-subtle` on card hover', ratio(hex(T.subtle), cardHi), 4.5],
  ['`fg` (body) on textured page', ratio(hex(T.fg), pageTextured), 4.5],
  ['`fg-muted` on textured page', ratio(hex(T.muted), pageTextured), 4.5],
  ['`fg-subtle` on textured page', ratio(hex(T.subtle), pageTextured), 4.5],
  ['`accent` link text on textured page', ratio(hex(T.accent), pageTextured), 4.5],
  ['`accent` link text on card', ratio(hex(T.accent), card), 4.5],
  ['Button text `accent-ink` on `accent`', ratio(hex(T.accentInk), hex(T.accent)), 4.5],
  ['Focus ring `accent` vs textured page', ratio(hex(T.accent), pageTextured), 3],
];
console.log('| Pair | Ratio | Target | Result |\n|---|---|---|---|');
for (const [n, r, t] of rows) console.log(`| ${n} | ${fmt(r)} | ${t}:1 | ${r >= t ? 'pass' : 'FAIL'} |`);
console.log(`\nTextured page lightest pixel: rgb(${pageTextured.join(', ')})`);
