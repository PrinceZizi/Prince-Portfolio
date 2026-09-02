# Prince — Creative Portfolio Website

A single-domain personal site organized around four disciplines, tuned like
four channels on a radio dial: **Create** (animation & art), **Connect**
(UGC & content), **Perform** (multimedia), **Build** (informatics).

No frameworks, no build step, no npm dependencies. Plain HTML, CSS and a
few dozen lines of vanilla JS — chosen deliberately so it runs comfortably
on low-powered hardware (this was built with a Celeron N3060 / 4GB RAM
machine in mind).

## Running it

You don't need Node, npm, or a dev server. Just open the file:

```
prince-portfolio/index.html
```

directly in any browser (double-click it, or right-click → Open with →
your browser).

**Optional, for a nicer local workflow:** if you have the VS Code
"Live Server" extension installed, right-click `index.html` → "Open with
Live Server". This auto-refreshes the page when you save a file — handy,
but not required.

## Project structure

```
prince-portfolio/
├── index.html            ← homepage ("the dial")
├── css/
│   └── style.css         ← all design tokens + styles live here
├── js/
│   └── main.js           ← nav, preloader, audio toggle, scroll reveal
├── assets/
│   ├── images/           ← drop your own banner photos here (see its README.txt)
│   └── audio/            ← drop one ambient audio file here (see its README.txt)
└── pages/
    ├── animation.html    ← Create
    ├── ugc.html          ← Connect
    ├── multimedia.html   ← Perform
    ├── informatics.html  ← Build
    └── about.html        ← About / Contact
```

## Design concept

The signature idea is a **frequency dial** — each discipline is a channel
you tune into (CH.01–CH.04, each with its own FM-style frequency number and
accent color). It's a deliberate nod to Multimedia/DJ work and to the idea
of "one signal, four channels" rather than four separate identities.

- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (data/labels)
- **Color:** near-black base, with each channel getting its own accent —
  amber (Create), magenta (Connect), cyan (Perform), periwinkle (Build)
- All colors and spacing are CSS custom properties at the top of
  `style.css` — change them once, they update everywhere.

## Section banners — and adding your own photos

Each discipline page has a themed banner at the top, built entirely with
CSS gradients by default (no image files, so it stays light):

- **Create** — diagonal cross-hatching, like pencil sketch lines
- **Connect** — a content grid, like a feed/gallery layout
- **Perform** — vertical bars, like an audio equalizer
- **Build** — a fine grid with nodes, like a circuit board
- **About** — a quiet static/noise texture, no channel color

Each banner also shows a faint version of that channel's frequency number.

**To swap any banner (or the homepage hero, or a channel row) for your own
photo:** add `class="has-image"` to that element, plus an inline
`style="--bg-image:url('path/to/your-image.jpg')"`. A dark gradient is
applied automatically on top so text stays readable regardless of the
photo underneath. Each page already has a commented example right above
the relevant element showing exactly what to uncomment/edit — see
`assets/images/README.txt` for the full instructions and filename
suggestions.

## Ambient music

There's a click-to-play sound toggle in the header on every page (real
autoplay is blocked by browsers anyway, and is generally poor UX). Add an
audio file to `assets/audio/` and point the `<audio>` element in the
header at it — full instructions are in `assets/audio/README.txt`.

Note: since this is a static multi-page site rather than a single-page
app, playback restarts when the visitor moves between pages, though their
on/off preference is remembered. Fine for a light ambient loop; if you
want gapless playback across navigation later, that's a bigger structural
change — ask me when you're ready.

## Loading screen

The homepage has a short "tuning in" preloader — it cycles through the
four channel frequencies before settling on "ON AIR" and revealing the
page. It has a minimum display time (so it doesn't just flash on a fast
load) and a hard maximum (so a slow connection never traps someone on it).
It only appears on `index.html`, since that's the entry point — inner
pages load straight in. It also fully respects `prefers-reduced-motion`.

## Other polish

- **Scroll reveal** — channel rows, status cards, and other key blocks
  fade/rise gently into view as you scroll. Marked with `data-reveal` in
  the HTML; logic lives in `main.js`. Content is always visible even
  without JS or with reduced motion on — this is enhancement, not gating.
- **Themed scrollbar & text selection** — small details, but they keep
  the whole page feeling considered rather than default-browser.

## What's already wired up

- Fully responsive (mobile nav collapses into a menu)
- Keyboard-focus visible, respects `prefers-reduced-motion` throughout
- Each discipline page has a "status card" pattern for showing work that's
  still in progress — swap the copy for real projects as you finish them
- Cross-links between sections (e.g. Create ↔ Perform) so a visitor
  discovers your other work naturally

## Next steps (pick up anytime)

1. **Swap placeholder content** — the `.grid-preview` boxes in each page
   are labeled placeholders. Replace them with real project cards, images,
   embeds, etc. as you have work to show.
2. **Add your real banner photos and ambient track** — see the two
   sections above.
3. **Add real contact links** — `pages/about.html` has placeholder email/
   social links to fill in.
4. **Add a real CV file** — drop a PDF into `pages/` (e.g.
   `pages/prince-cv.pdf`) and point the "Download CV" button in
   `informatics.html` at it.
5. **Deploy for free** — this is a static site, so it can be hosted for
   free on GitHub Pages, Netlify, or Vercel with no backend needed. Ask me
   when you're ready and I'll walk you through it.
6. **Later, if you want it:** a lightweight local dev server, a simple
   templating step to avoid repeating the header/footer in every file, or
   eventually a small CMS/backend so you can add projects without editing
   code. None of this is needed to get the site live today.
