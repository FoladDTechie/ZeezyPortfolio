# Notes: UX deslop

Branch `ux/deslop`. Framework, stack and deploy setup unchanged (Next.js 16 App Router, Tailwind v4,
Vercel). No libraries added. Fonts are the two already in use (Space Grotesk, JetBrains Mono, both
self-hosted by `next/font` at build time); the two fonts only the old `/about` sidebar used (Poppins,
CyGrotesk) are no longer loaded.

Companion files: `AUDIT.md` (before), `RESEARCH.md`, `contrast.mjs`, `slop-check.mjs`,
`before/`, `after/`, `research/`.

## Sitemap

| Before | After |
|---|---|
| `/` — 13 sections: hero + diagram, it reports, work, experience, community, physical AI, writing, about, stack, mission, side quests, gallery, contact | `/` — 5: who I am, 3 featured projects, writing, one community line, contact |
| — | `/work` — all 5 projects + other work (new) |
| `/work/airchain`, `/work/pedal-power`, `/work/scan-rover` | same URLs. AirChain now also holds "It reports." and the message schema |
| `/work/more` (three builds on one page) | `/work/estate-access`, `/work/self-hosted`, `/work/merkle-tree-anchor`; `/work/more` → 308 to `/work` |
| — | `/writing` (new) |
| `/lab`, `/lab/adaclock`, `/lab/cardano-doorbell`, `/lab/hardware-totp-token` | same URLs |
| — | `/community` (new): roles, Physical AI, volunteering, Intersect credential |
| `/physical-ai` | same URL, filed under Community |
| `/about` — "Extended profile" (volunteering, SDGs, offline mode, gallery) | `/about` — bio, experience, toolkit, stack, mission, SDG commitments |
| — | `/side-quests` (new): goals, offline mode, visual archive |
| — | `/projects` → `/work`, `/blog` → `/writing` (convenience redirects) |

Old single-page anchors are mapped client-side by `HashRedirect` (a server never sees the hash):
`/#projects` and `/#work` → `/work`; `/#writing` → `/writing`; `/#community` → `/community`;
`/#about` → `/about`; `/#experience`, `/#stack`, `/#mission` → the matching `/about#…`;
`/#side-quests` → `/side-quests`; `/#gallery` → `/side-quests#gallery`; `/#physical-ai` → `/physical-ai`;
`/#it-reports` → `/work/airchain#it-reports`. `/#home` and `/#contact` still exist on home.
Verified in a browser for `#projects`, `#side-quests`, `#experience`, `#gallery`, `#contact`.

Link check (crawl from `/`, every internal link on every page, plus every `#anchor` target):
17 pages, **0 broken links, 0 missing anchors**, every external link opens in a new tab, all three
redirects land with 200.

Navigation: one header on every page (Work · Writing · Lab · Community · About · Resume ↗ = 6 items),
`aria-current="page"` plus a 3 px accent bar and bold text on the current page, a labelled "Menu"
button on phones that marks "You are here", a skip link (first Tab stop), and a breadcrumb at the top
of every subpage. Verified: each of the 17 pages has exactly one `h1`, `#main`, the skip link, a
current-page marker in the header, and (subpages) a breadcrumb. Any project is 1 click from home (the
three featured ones) or 2 clicks (Home → Work → project).

## Measurements, before → after

| | Before | After |
|---|---|---|
| Home sections | 13 | 5 |
| Home height at 1440 px | 10,715 px | 2,241 px |
| Home height at 375 px | 17,703 px | 3,735 px |
| Card styles on home | 8 | 1 (+ the compact variant, used on `/work` only) |
| Navigation systems on home | 3 (top bar, icon rail, social rail), 16 links | 1, 6 links |
| Pages with site navigation | 2 of 11 (home and `/about`, each with a different nav) | 17 of 17, all the same header |
| Card edge vs page | 1.34:1 | 3.84:1 measured on a real pixel (see below) |
| Horizontal overflow at 375 px | none | none |

## Design decisions

| Decision | Reference | Why |
|---|---|---|
| One header, five page links, current page shown with a bar under the link + bold + `aria-current` | GOV.UK service navigation | It marks the page you are on, not your scroll position, and never moves while you read. The old header underlined the *section* you had scrolled to. |
| Phone menu is a button labelled "Menu" that opens the same links in the same order, with "You are here" | GOV.UK header at phone width | A word beats an icon; the same list in the same order means nothing is learned twice. |
| Breadcrumb at the top of every subpage, last crumb not a link | Adafruit Learn guide; GOV.UK organisation page | One line answers "where am I" and "how do I go back". The old back links were at the very bottom. |
| `/work` is a list of identical cards in one reading order (two columns, row by row, no spans) | Brittany Chiang, All Projects | Same fields in the same place, so projects compare at a glance. Bento spans removed. |
| `/writing` and home "Writing" are plain lists, title first, source second | Julia Evans, jvns.ca | Three posts do not need cards; a list is faster to scan. |
| One card: opaque surface, 1 px edge at ≥3:1, 6 px radius, no shadow; whole card clickable via its title link | GitHub repository cards | The edge, not a shadow, makes the card visible. The same anatomy everywhere: meta, linked title, one paragraph, facts, footer. |
| Cards only for things you click or compare (projects, lab builds, community roles, goals); lists and rules for everything else (experience, toolkit, volunteering, stack) | GitHub profile (cards for repos, plain text for everything else) | Fewer boxes means the boxes that remain mean something. Removes card-in-card. |
| Dark graphite page kept, with an engineering grid (24 px minor, 120 px major) and fine grain, on the page background only | Terminal/engineering identity (no external reference) | Gives the surface texture without touching readability: cards are opaque, so no texture sits behind card text. |
| Headings keep one terminal nod: an accent `//` before each section title; metadata in mono, sentence case, untracked | — | The identity stays, but headings are now the brightest text in a section instead of the dimmest. |
| One primary button per screen (hero "View work"); everything else is a secondary button or a text link | — | One obvious next step per screen. |
| Motion removed: intro loader, particles, cursor spotlight, scroll reveals, marquee gallery, typing ticker, hide-on-scroll header | — | None of it helped orientation; the loader blocked the first read and the marquee moved under the pointer. Hover colour changes stay (150 ms); reduced motion turns those off too. |

## Framing changes (before → after)

Facts, descriptions, bios, posts, dates, roles and numbers are unchanged. Text moved between pages
was moved verbatim. These are the only wording changes:

**Navigation**
- Top bar "Work · Experience · Community · Contact · Resume" + icon rail "⌂ 0x ≡ ◈ ✦ ⚔ ✉ ⚗" + social rail "GitHub X Email" → "Work · Writing · Lab · Community · About · Resume ↗"
- Brand "Abdulazeez Bello" → "Azeez Bello" (matches the home `h1`)
- `/about` sidebar "01.home … 08.gallery" and the "Embedded Systems Engineer / Blockchain Technical Writer / IoT Developer / Smart Systems Developer" typewriter → removed (the page uses the shared header)
- Mobile menu icon button → "Menu" button; current item shows "You are here"
- "Profile" (link to `/about`) → merged into "About"
- New footer: "Based in Uyo, Akwa Ibom, Nigeria." (factual location), page links, elsewhere links, email

**Page titles** (browser tab; template is "%s · Azeez Bello")
- Default "Abdulazeez Bello | Embedded Systems Engineer" → "Azeez Bello, embedded systems engineer"
- `/about` (site default) → "About"; `/lab` (site default) → "Lab"
- "ADAClock — the_lab" → "ADAClock · Lab"; same for "Cardano Doorbell", "Hardware TOTP Token"
- "AirChain node — Azeez Bello" → "AirChain node"; same for "Pedal Power", "Scan Rover"
- "now exploring: physical ai — Azeez Bello" → "Physical AI"
- "More builds — Azeez Bello" → "Estate access control", "Self-hosted infrastructure", "Merkle Tree Anchor"
- New: "Work", "Writing", "Community", "Side quests"

**Meta descriptions**: new for `/work`, `/writing`, `/community`, `/about`, `/lab`, `/side-quests`, and the three split pages (each built only from that page's own content). Existing ones unchanged.

**Page and section headings**
- `/about` h1 "Extended profile" → "About"; `/lab` h1 "// the_lab" → "Lab"
- "// work" → "// Featured work" (home) and "// Projects" (`/work`); "// other work" → "// Other work"
- "// experience" → "// Experience"; "// toolkit" → "// Toolkit"; "// the stack" → "// The stack"; "// mission" → "// Mission"
- "// community" → "// Roles and memberships"; "// intersect credential" → "// Intersect credential"; "Community & volunteering" → "// Volunteering"
- "// physical_ai" → "// Physical AI"; "// writing" → "// Writing"; "// contact" → "// Contact"
- "// side quests" → page "Side quests", section "// Goals"; "// visual archive" → "// Visual archive"
- "It reports." (home feature) → "// it_reports" section on `/work/airchain`
- Stack column labels "INFRA / FIRMWARE / POWER" → "Infra / Firmware / Power"
- New lab-style sections on split pages: "// key_facts", "// stack"

**One-line intros (new)**
- Work: "Hardware first: sensors, power, radios and firmware. Each project has its own page."
- Other work: "Software and research projects, kept here below the hardware work."
- Writing: "Essays published on Substack. Each link opens the full post."
- Community: "Where I organise, take part and volunteer."
- About: "Background, experience and the tools I use."
- Side quests: "Goals outside work, tracked in public, plus a few photos."
- `/work/more` hook "Shorter notes on builds that do not have a full write-up yet." → removed with the page

**Buttons and links**
- Hero "View work" (→ `#work`) → "View work →" (→ `/work`); "Read writing" button → text link (→ `/writing`)
- Work card "Read more →" → "Case study →"; other-work "Read the note →" / "haulink.xyz ↗" → the title is the link
- "More experiments in the lab →" → "Smaller experiments live in the lab."
- Home section links (new): "All 5 projects →", "All writing →", "All community work →"
- "[BACK_TO_WORK →]" → "← All work"; "[BACK_TO_LAB →]" → "← Back to the lab"; "[BACK_TO_HOME →]" → "← Community"; "← back_to_site" → breadcrumb
- "[REPO →]" → "Source on GitHub"; "[PI_JAM_VOL2 →]" → "Pi Jam Vol. 2 event page"; "[PHYSICAL_AI →]" → "Why Physical AI →"; "[airchain.ng →]" / "[gndbase.xyz →]" → "airchain.ng" / "gndbase.xyz"
- Lab "read_build →" → "Read the build →"; Pico W ADA Ticker (no page) → "No write-up yet"
- "How the node is built →" → removed (the feature now lives on that page)
- Community "Why Physical AI" / "Scan Rover" buttons → text links "Why I'm exploring it →", "Scan Rover, my first Physical AI build →"
- Intersect card: new link "View the credential ↗" (same explorer URL the old panel title used)
- "Read all →" → "All posts on Project Genius ↗"
- About: "Off the clock: side quests, benchmarks and photos." (new link to `/side-quests`); "Resume ↗" link under Experience
- Gallery "Pause / Play" → removed (no marquee); lightbox close icon → "Close" button
- "Extended profile →" → removed (merged)

**Labels**
- Uppercase tracked eyebrows (e.g. "CO-FOUNDER · 2026 TO PRESENT") → shown as written, sentence case ("Co-founder · 2026 to present"); the source strings were never changed, only the CSS that uppercased them
- Uppercase card titles ("AIRCHAIN NODE") → as written ("AirChain node")
- "[STATUS: BENCH BUILD] [CATEGORY: EMBEDDED • POWER • CELLULAR]" chips → one meta line "[bench build] [embedded • power • cellular]"; "[PROJECT_ID: 0x02]" → removed
- Side quests "0x01…0x09" → removed; category "PRODUCTIVITY" chip → "Productivity"
- Lab "[0x01] STATUS: FUNCTIONAL [HARDWARE] [CARDANO]" → "Functional · Hardware · Cardano"
- New category labels on split pages: "Hardware • Security", "Infrastructure", "Cardano • Data integrity"; Merkle stack "plutus v3, aiken" → "Plutus V3", "Aiken" (capitalisation only)
- Floating ticker "[system]: uyo_node_active / [focus]: airchain_infrastructure / [status]: open_to_collaboration" → removed. This was the one place Uyo read as a status line.

**Uyo after this change** (all factual location, venue or event name): About bio "based in Uyo, Akwa Ibom, Nigeria"; footer; BuildATech place "Uyo, Nigeria"; Cyberwave card and `/physical-ai` "in-person meetups … in Uyo"; "Founders Friday Uyo"; Haulink "Pilot route Uyo to Lagos"; Cardano Doorbell "a room in Uyo", "Pi Jam Uyo Vol. 2". It is not in any title, heading, nav label or meta description.

## Colour tokens and contrast

Measured on the **textured** page. Model (`node ux-audit/contrast.mjs`): lightest pixel where a major
and a minor grid line cross in both directions with the brightest grain speck on top = rgb(49, 51, 54).
Real screenshot (1440 px home, 220 × 930 px empty strip): lightest pixel rgb(47, 49, 52).

| Token | Value | Use |
|---|---|---|
| `bg` | `#111316` | page (under grid 4 % / 1.8 % white, grain ≤ 3 % white) |
| `surface` | `#1a1d22` | card fill (opaque) |
| `surface-hi` | `#20242a` | card hover |
| `edge` | `#848c98` | card edges, header and footer rules |
| `rule` | `#3a3f47` | dividers inside lists and cards (decorative) |
| `fg-strong` | `#f5f6f8` | headings |
| `fg` | `#e4e6ea` | body |
| `fg-muted` | `#b9bec7` | secondary text |
| `fg-subtle` | `#a0a6b0` | metadata (smallest step) |
| `accent` | `#5eead4` | links, current page, focus ring, primary button |
| `accent-ink` | `#0b3b34` | text on accent |

| Pair | Ratio | Target |
|---|---|---|
| Card edge vs textured page (model) | 3.73:1 | 3:1 ✓ |
| Card edge vs textured page (**real pixel**) | **3.84:1** | 3:1 ✓ |
| Card edge vs card fill (real pixel) | 4.98:1 | 3:1 ✓ |
| Card edge vs flat page | 5.48:1 | 3:1 ✓ |
| `fg-strong` on card | 15.63:1 | 4.5:1 ✓ |
| `fg` on card | 13.52:1 | 4.5:1 ✓ |
| `fg-muted` on card | 9.05:1 | 4.5:1 ✓ |
| `fg-subtle` on card | 6.90:1 | 4.5:1 ✓ |
| `fg-subtle` on card hover | 6.37:1 | 4.5:1 ✓ |
| `fg` on textured page | 10.14:1 | 4.5:1 ✓ |
| `fg-muted` on textured page | 6.79:1 | 4.5:1 ✓ |
| `fg-subtle` on textured page (model / real pixel) | 5.17:1 / 5.33:1 | 4.5:1 ✓ |
| `accent` link on textured page | 8.57:1 | 4.5:1 ✓ |
| `accent` link on card | 11.42:1 | 4.5:1 ✓ |
| `accent-ink` on `accent` (button) | 8.40:1 | 4.5:1 ✓ |
| Focus ring / hover edge `accent` vs textured page | 8.57:1 | 3:1 ✓ |

Before, for comparison: card edge vs page 1.34:1, card fill vs page 1.08:1 (text was already fine).

## Slop gate

**The avoid-ai-design scanner is not installed on this machine** (`~/.claude/skills/avoid-ai-design`
does not exist on Windows or in WSL). `ux-audit/slop-check.mjs` is a stand-in that scans the built
HTML and CSS (`portfolio/.next`) for every pattern on the banned list: glass/backdrop blur,
purple/blue gradients (classes and CSS), card-in-card (DOM nesting of `.card`), rounded-2xl + shadow,
uppercase tracked labels, decorative 0x/01. numbering, icons in rounded squares, and bento spans.

- Self-test: a seeded page with all nine patterns → 9 findings (4 P0, 5 P1). The checker works.
- Site, final build: **19 pages, 14 stylesheets, P0 0, P1 0, P2 0.**

Run the real scanner when it is available:
`node ~/.claude/skills/avoid-ai-design/scripts/detect.mjs portfolio/.next`

## Critique

For every page: before and after shots at 1440 and 375 px are in `before/` and `after/`
(`home`, `work_airchain`, `lab_adaclock`, …). New pages (`work`, `writing`, `community`,
`side-quests`, the three split work pages) have no "before" because they did not exist; their
content was on `/` or `/work/more`.

| Question | Before | After |
|---|---|---|
| Can a first-time visitor tell where they are? | No: no page marker; 16 links on home, none on subpages | Yes: current page bar + bold in the header, breadcrumb on every subpage, one `h1` per page |
| Can they reach any project in 2 clicks? | Home sections yes; subpages had no nav (Back button or scroll to bottom) | Featured projects in 1 click, all projects in 2 (Home → Work → project), from any page |
| Can they read every card? | Text yes, cards no (1.34:1 edges) | Yes: edges 3.84:1 on the real textured pixel, text ≥ 6.37:1 |

Fixes made in the critique round:
1. **Mojibake** in card meta lines ("Â·", "Ã—"): an earlier PowerShell edit re-encoded `work.ts`.
   Restored the file from git and re-applied only the link changes; scanned `src` for any other damage (none).
2. **Card edge failed on a real pixel** (2.84:1 where grid lines cross): the first contrast model counted
   one grid line, the page stacks five layers. Fixed the model, lowered the grid to 4 % / 1.8 % and the
   grain to 3 %, lightened `edge` to `#848c98`. Re-measured on a real pixel: 3.84:1.
3. **Focus ring faded in from grey** on header links: Tailwind's `transition-colors` animates
   `outline-color`. Focus states now skip that transition, so the ring appears at full accent
   immediately (checked with real Tab key presses: skip link → nav → buttons all show a 2 px accent ring).
4. **Other work cards stretched** to the long Haulink card's height, leaving two tall empty boxes:
   cards in that row now size to their content.
5. **Line length on wide case-study pages** ran past 75 characters for prose: prose and lists inside
   sections are capped at 72ch; tables and figures keep the full width.
6. **AirChain tab title** doubled the site name ("— Azeez Bello · Azeez Bello"); fixed.
7. **Lab code/table boxes** still used the old 8 %-white edges; now use the card edge and divider tokens.

Known, not changed:
- On a 375 px phone the hero (photo, name, three-sentence bio, buttons) is about 800 px, so on shorter
  phones the "View work" button sits just below the fold. The bio is content, so it was not shortened.
- `/work/airchain` method note reads "2026." after an owner edit on disk (it used to describe AI
  assistance on the firmware and board files). Kept as committed; check it is intended.
- `framer-motion` and `react-simple-typewriter` are no longer imported anywhere. They are still in
  `package.json`; removing them is safe but was left for you to decide.
- `public/fonts/` still contains font files that are no longer loaded (Iosevka, Space Mono, CyGrotesk,
  JetBrains Mono TTFs). Harmless; not served unless requested.
