# jinhopark8345.github.io

Source for my personal portfolio.

🌐 **Live:** <https://jinhopark8345.github.io/>

## Tech stack

| Layer | Choice |
| --- | --- |
| Static site generator | [Astro 5](https://astro.build) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Type system | TypeScript (strict) |
| Runtime | Node 22 |
| Hosting | GitHub Pages (free) |
| CI/CD | GitHub Actions — `.github/workflows/deploy.yml` |

Every push to `main` triggers the workflow, which runs `npm ci && npm run build`
and publishes the resulting `dist/` via `actions/deploy-pages`.

## Run it locally

```bash
# one-time
npm install

# dev server with live reload (http://localhost:4321)
npm run dev

# production build (outputs to dist/)
npm run build

# preview the production build locally
npm run preview
```

## Editing content

All resume content lives in one typed source of truth:

- **`src/data/resume.ts`** — name, role, contact, hero copy, skill groups,
  spoken languages, experience, education, achievements, open source.

Edit that file to add a job, a cert, a contribution, etc. — the page picks
it up automatically.

## Resume PDF

The one-page PDF at `public/resume.pdf` is rendered separately from the site
content. It is authored in [Typst](https://typst.app) at `resume/resume.typ`
and is **not** auto-synced with `src/data/resume.ts` — the PDF is hand-curated
to fit one page, while the site's About Me is intentionally more verbose.

Install Typst once (prebuilt binary, Linux x86_64):

```bash
curl -sL https://github.com/typst/typst/releases/latest/download/typst-x86_64-unknown-linux-musl.tar.xz \
  | tar -xJ -C /tmp
install /tmp/typst-x86_64-unknown-linux-musl/typst ~/.local/bin/
```

macOS: `brew install typst`. Other platforms: see the
[Typst release page](https://github.com/typst/typst/releases/latest).

Then, from the repo root:

```bash
# edit resume/resume.typ, then:
npm run resume:pdf            # → writes public/resume.pdf
```

Inter TTFs live in `resume/fonts/` and are passed to Typst via `--font-path`,
so the build does not depend on fonts being installed system-wide.

Commit the regenerated `public/resume.pdf` alongside the `.typ` change —
the GitHub Pages workflow does not run Typst, so the committed PDF is what
gets deployed.

## Repository layout

```
src/
  data/resume.ts         # all content
  components/            # one Astro component per section
    Navbar.astro
    Hero.astro
    About.astro
    Experience.astro
    Education.astro
    Achievements.astro
    OpenSource.astro
    Contact.astro
    Card.astro           # shared collapsible card
    ExpandAllButton.astro
  layouts/Layout.astro   # base HTML shell, dark-mode bootstrap
  lib/markdown.ts        # tiny inline markdown renderer used inside cards
  pages/index.astro      # homepage composition
  styles/global.css      # Tailwind entry + component classes
public/                  # static assets copied verbatim into dist/
.github/workflows/
  deploy.yml             # Pages deploy workflow
astro.config.mjs
tailwind.config.mjs
tsconfig.json
```
