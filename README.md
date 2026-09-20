# Day 12 — Café Blah / Withington

An unofficial, bespoke frontend-only website concept by Prathamesh. Not commissioned by or affiliated with Café Blah.

## Files

- `index.html` — semantic page structure, venue details and direct event links.
- `css/style.css` — responsive editorial layout and animation.
- `js/main.js` — accessible mobile navigation and expiring event entries.
- `assets/room.svg` — original **illustrative** artwork, not a photograph of the venue.
- `assets/mark.svg` — original favicon.

## Verified source material (20 September 2026)

- [Official Linktree](https://linktr.ee/cafeblah): independent, community-focused café/bar/gallery/music venue/cinema, social links and bookings.
- [CAMRA](https://camra.org.uk/pubs/cafe-blah-withington-199061): current address and contact email.
- [The Mancunion](https://mancunion.com/2025/05/19/the-art-of-resistance-cafe-blah-returns-after-eviction-battle/): 2025 reopening at the current address.
- [BOOTGAZE on Fatsoma](https://www.fatsoma.com/e/77yoquan/bootgaze-at-cafe-blah-manchester): 28 October 2026.
- [Degurutieni on Fatsoma](https://www.fatsoma.com/e/2s1aw0lv/degurutieni-live-at-caf%C3%A9-blah): 4 November 2026.

Opening hours are deliberately omitted: external listings conflict. No third-party venue photographs have been reproduced without permission; the artwork is original and explicitly labelled illustrative. The page links to the venue’s real Instagram account. This is a pitch/demo site, not a live client website.

## Deployment

No dependencies, build command or backend. Keep `index.html`, `css/`, `js/`, `assets/` at repository root and deploy GitHub Pages from `main` / `/`.

## Maintenance and QA

Events are verified only as of 20 September 2026; link to the organiser and check availability before sharing. JavaScript hides entries after their UK-local calendar dates pass, replacing them with a link to the official event directory. With JavaScript disabled, entries remain visible with explicit dates and a dated warning. Obtain venue consent for actual photography and final copy approval before a client launch. Browser-based visual QA requires a browser that can open the preview URL.
