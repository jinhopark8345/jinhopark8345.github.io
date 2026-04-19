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
