# jinhopark8345.github.io

Source for my personal portfolio.

**Live site:** <https://jinhopark8345.github.io/>

Built with [Astro](https://astro.build) + Tailwind CSS. Auto-deploys from
`main` to GitHub Pages via `.github/workflows/deploy.yml`.

## Local preview

```bash
npm install
npm run dev
```

Open <http://localhost:4321/>.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve dist/ locally
```

## Layout

- `src/data/resume.ts` — single source of truth for all content (hero, experience, education, achievements, open source, contact).
- `src/components/` — one Astro component per section plus a shared `Card` for collapsible entries.
- `src/layouts/Layout.astro` — base HTML shell, theme toggle.
- `src/lib/markdown.ts` — tiny zero-dependency inline-markdown renderer used inside cards.
- `src/pages/index.astro` — homepage composition.
- `src/styles/global.css` — Tailwind entry + a few component classes.
- `public/` — static assets copied verbatim to the build output.
- `archive/` — old Hugo-era TIL notes, parked here and not built.
