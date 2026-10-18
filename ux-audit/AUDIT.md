# UX audit — before

Branch `ux/deslop`, cut from `feat/engineering-portfolio` at `9748fc2`.
Measured on a production build (`next build && next start`) in headless Chrome with
`prefers-reduced-motion: reduce` (so scroll-reveal content is visible in full-page captures).
Screenshots: `before/<route>-1440.jpg` and `before/<route>-375.jpg`, full page.

## Routes

| Route | What it is | Site navigation on the page |
|---|---|---|
| `/` | Everything: 13 sections | Top bar (5) + icon rail (8) + social rail (3) |
| `/about` | "Extended profile": volunteering, SDGs, offline mode, gallery (again) | A different numbered nav (01.–08.), all pointing back to `/#…` anchors |
| `/lab` | Lab index, 4 builds | None. One "← back_to_site" link |
| `/lab/adaclock`, `/lab/cardano-doorbell`, `/lab/hardware-totp-token` | Lab write-ups | None. Bracket links at the very bottom |
| `/physical-ai` | Physical AI essay | None |
| `/work/airchain`, `/work/pedal-power`, `/work/scan-rover` | Case studies | None. "[BACK_TO_WORK →]" at the bottom |
| `/work/more` | Estate access, self-hosted infra, Merkle Tree Anchor on one page | None |

## Home page sections (in order)

`home` (hero + AirChain diagram) · `it-reports` · `work` (5 cards + other work) · `experience` (3 roles + toolkit) ·
`community` (7 cards + Intersect credential panel) · `physical-ai` · `writing` · `about` · `stack` · `mission` ·
`side-quests` (9 cards) · `gallery` (marquee) · `contact`

## Navigation items

- Top bar: Abdulazeez Bello (home) · Work · Experience · Community · Contact · Resume
- Icon rail (right, xl screens): ⌂ Home · 0x Work · ≡ Experience · ◈ Community · ✦ Writing · ⚔ Side quests · ✉ Contact · ⚗ The lab
- Social rail (left, xl screens): GitHub · X · Email
- `/about` sidebar: 01.home · 02.projects · 03.about · 04.mission · 05.writing · 06.community · 07.contact · 08.gallery
- Mobile drawer: 10 links (Work … Profile) + Resume

## Measurements

| | 1440 px | 375 px |
|---|---|---|
| Home sections | 13 | 13 |
| Home full scroll height | 10,715 px (11.9 screens of 900 px) | 17,703 px (19.7 screens) |
| Distinct card styles on home (radius / background / border / padding) | 8 | 7 |
| Nav links visible at once on home | 16 | 1 menu button (10 links inside) |

Card contrast, computed from tokens (`ux-audit/contrast.mjs before`):

| Pair | Ratio | Target |
|---|---|---|
| Card background `#151516` vs page `#0b0b0c` | 1.08:1 | 3:1 |
| Card border (white 8 % on card) vs page | 1.34:1 | 3:1 |
| Card background vs page grid line | 1.03:1 | — |
| Body text `#e4e4e7` on card | 14.38:1 | 4.5:1 ✓ |
| Subtle text `#8b8b98` on card | 5.43:1 | 4.5:1 ✓ |

Text contrast is fine. The problem is the card *edges*: cards dissolve into the page.

## Problems

| Problem | Where | Why it hurts the visitor |
|---|---|---|
| Three navigation systems at once | Home: top bar, icon rail, social rail | Sixteen links compete; the icon rail's glyphs (⌂ 0x ≡ ◈ ✦ ⚔) mean nothing until hovered. |
| No navigation on subpages | All `/lab/*`, `/work/*`, `/physical-ai` | Once you open a project you can't reach anything else without scrolling to the bottom or pressing Back. |
| A second, different nav on `/about` | `/about` sidebar | Numbered `01.–08.` links all jump back to home anchors. Its "about" link goes to `/#about`, not the page you are on. |
| No "you are here" | Every page | The top bar underlines a *section* while scrolling, but never the page. Subpages have no breadcrumb. |
| Home is 13 sections, 20 phone screens | `/` | Work, experience, community, writing, about, stack, mission, quests, gallery, contact all compete. Contact sits under a gallery and side quests. |
| Same content twice | `/about` repeats the gallery; toolkit and "the stack" overlap; Physical AI card and community both pitch Cyberwave | Visitors re-read things and lose their place. |
| Card edges invisible | Every `.bento-card` | 1.34:1 edge contrast. Cards read as text floating on black, so grouping is lost. |
| Eight card styles on one page | Home | Radius 16 px everywhere, but four paddings, a hatched figure panel, an accent-filled image card, a nested credential panel. No shared rhythm. |
| Card-in-card | Work cards (bordered chips inside a bordered card); Intersect credential (image card inside a panel); status columns inside sections | Extra borders compete with the real card edge. |
| Flat surfaces | Page and cards are flat near-black; the grid is 2.5 % white and masked to the top of the viewport | Nothing separates page from surface; long pages feel like one slab. |
| Uppercase tracked mono labels on almost everything | `panel-eyebrow` on every card meta, uppercase `panel-title`, `[STATUS: …]` chips | Hard to scan; everything shouts at the same volume. |
| Decorative numbering | `0x01`…`0x09` on side quests, `[0x01]` in the lab, `01.` in the `/about` nav, `[PROJECT_ID: 0x02]` chips | Numbers that carry no order or meaning add noise. |
| Glass and floating widgets | Blurred top bar, drawer, rails, `[system]: uyo_node_active` ticker | The ticker covers card text at the bottom right on every page and shows Uyo as a status. Blur lowers legibility of anything underneath. |
| Decorative motion | Intro loader overlay (1.1 s), particles, cursor spotlight, scroll reveals, auto-scrolling gallery marquee, typing ticker | The loader blocks the first read; the marquee moves under the pointer; none of it helps orientation. |
| Section headings too quiet | `// work`, `// community` at 12 px subtle grey | Headings are the dimmest text on the page, so the outline is hard to see. |
| Lab/about pages have no own `<title>` | `/about`, `/lab` show the site title | Tabs and history all read the same. |
| Bracket link labels | `[BACK_TO_WORK →]`, `[REPO →]`, `read_build →` | Cute, but slower to read than plain words, and the way back is only at the bottom. |
