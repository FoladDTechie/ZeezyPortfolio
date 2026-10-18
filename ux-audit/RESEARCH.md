# Research

## Method, and why it is not Mobbin

The brief asked for six or more Mobbin `search_sections` queries. **The Mobbin MCP server is not
connected in this session** (no `mobbin` / `search_sections` tool is available), so I could not
run them. Instead I captured live public pages that each show one of the required layouts, using
headless Chrome, and took one principle from each. The queries below are the layout descriptions I
would have sent to Mobbin; each is answered by a real page instead. Re-run them in Mobbin when the
server is connected if you want app-sourced references too.

One reference I first considered for the case-study page was dropped because the site belongs to
an organisation that must not be named in this repository.

## References

| # | Layout searched for (as a Mobbin query) | Reference used | Principle taken (not the look) |
|---|---|---|---|
| 1 | "site header with five text links where the current section has a thick underline and bold label" | GOV.UK Design System, service navigation (`research/01-govuk-service-nav.jpg`) | Mark the current *page*, not the scroll position: one persistent indicator (underline bar + stronger text + `aria-current="page"`) that never moves while you read. |
| 2 | "mobile header with a single Menu button that opens a full-width list of the same links" | GOV.UK browse page at 390 px | On a phone the menu is one labelled button ("Menu", not just an icon) that opens the *same* list in the same order as desktop. Nothing hides behind hover. |
| 3 | "project archive page listing every project as a row with year, title, stack and link" | Brittany Chiang, All Projects | An index page is a scannable list in one reading order. Every row has the same fields in the same place, so comparing projects costs no effort. A back link to home sits above the title. |
| 4 | "hardware build guide with breadcrumb, title, one-line summary, metadata, and a list of sections down the side" | Adafruit Learn, PM2.5 Air Quality Sensor guide (`research/04-adafruit-guide.jpg`) | A case study opens with breadcrumb → title → one-line summary → facts, then a short list of what the page contains. The breadcrumb is the way back, at the top, not the bottom. |
| 5 | "blog index with a short intro and a plain list of posts, each a title with its publication beside it" | Julia Evans, jvns.ca | A writing index can be a list, not a card grid. Title first, source second; one line per post. |
| 6 | "grid of repository cards with a 1 px border on a plain surface, title link, one-line description, language" | GitHub profile, popular repositories (`research/06-github-repo-cards.jpg`) | Cards read because the *edge* is visible (1 px border clearly darker or lighter than the page) and every card has the same anatomy: linked title, one line, one meta row. No shadow, no nested boxes. |
| 7 | "organisation page with breadcrumb above the title and a list of task links" | GOV.UK, HM Revenue & Customs | The breadcrumb doubles as "you are here" and "way back" in one short line. Lists of links beat tiles when the visitor is choosing where to go. |

## Saved images

`research/01-govuk-service-nav.jpg`, `research/03-brittany-archive.jpg`,
`research/04-adafruit-guide.jpg`, `research/06-github-repo-cards.jpg`.

## What this means for the site

- One header on every page, with five page links and a visible current-page state (refs 1, 2).
- Breadcrumb at the top of every subpage (refs 4, 7).
- Work index as a list of identical cards in one column order (refs 3, 6).
- Writing index as a list, not cards (ref 5).
- One card anatomy everywhere: visible edge, linked title, one line, one meta row (ref 6).
