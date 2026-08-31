# Prince — Creative Portfolio Website

A single-domain personal site organized around four disciplines, tuned like
four channels on a radio dial: **Create** (animation & art), **Connect**
(UGC & content), **Perform** (multimedia), **Build** (informatics).

No frameworks, no build step, no npm dependencies. Plain HTML, CSS and a
few lines of JS — chosen deliberately so it runs comfortably on low-powered
hardware (this was built with a Celeron N3060 / 4GB RAM machine in mind).

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
│   └── main.js           ← mobile nav toggle only, intentionally tiny
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

## Section banners

Each discipline page has a themed banner at the top, built entirely with
CSS gradients (no image files, so it stays light):

- **Create** — diagonal cross-hatching, like pencil sketch lines
- **Connect** — a content grid, like a feed/gallery layout
- **Perform** — vertical bars, like an audio equalizer
- **Build** — a fine grid with nodes, like a circuit board

Each banner also shows a large, faint version of that channel's frequency
number, tying back to the homepage dial. The homepage channel rows carry a
subtle version of the same texture too, so the two pages feel connected.
All of this lives in `css/style.css` under "Section banners" — change the
`color-mix()` percentages there to make any pattern bolder or fainter.

## What's already wired up

- Fully responsive (mobile nav collapses into a menu)
- Keyboard-focus visible, respects `prefers-reduced-motion`
- Each discipline page has a "status card" pattern for showing work that's
  still in progress — swap the copy for real projects as you finish them
- Cross-links between sections (e.g. Create ↔ Perform) so a visitor
  discovers your other work naturally

## Next steps (pick up anytime)

1. **Swap placeholder content** — the `.grid-preview` boxes in each page
   are labeled placeholders. Replace them with real project cards, images,
   embeds, etc. as you have work to show.
2. **Add real contact links** — `pages/about.html` has placeholder email/
   social links to fill in.
3. **Add a real CV file** — drop a PDF into `pages/` (e.g.
   `pages/prince-cv.pdf`) and point the "Download CV" button in
   `informatics.html` at it.
4. **Images/video** — when you're ready, create an `assets/` folder
   (`assets/images`, `assets/video`, `assets/audio`) and reference files
   from there. Keep images web-optimized (compressed JPG/WebP) so pages
   stay light on your machine and for visitors.
5. **Deploy for free** — once you're happy with it locally, this is a
   static site, so it can be hosted for free on GitHub Pages, Netlify, or
   Vercel with no backend needed. Ask me when you're ready and I'll walk
   you through it.
6. **Later, if you want it:** a lightweight local dev server, a simple
   templating step to avoid repeating the header/footer in every file, or
   eventually a small CMS/backend so you can add projects without editing
   code. None of this is needed to get the site live today.
