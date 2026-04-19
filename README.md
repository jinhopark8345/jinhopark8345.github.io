# jinhopark8345.github.io

Source for my personal portfolio.

**Live site:** <https://jinhopark8345.github.io/>

Hugo static site on the [hugo-profile](https://github.com/gurusabarish/hugo-profile)
theme. Auto-deploys from `main` to GitHub Pages via `.github/workflows/hugo.yml`.

## Local preview

```bash
git clone --recurse-submodules https://github.com/jinhopark8345/jinhopark8345.github.io
cd jinhopark8345.github.io
hugo server
```

Requires Hugo extended ≥ 0.114 and Dart Sass.
Open <http://localhost:1313/>.

## Layout

- `hugo.yaml` — site config and all portfolio content (hero, experience, education, achievements, contact).
- `layouts/partials/sections/` — custom overrides of the theme's section partials (collapsible cards, vertical list).
- `content/` — any extra pages.
- `archive/` — old TIL notes, parked here so Hugo ignores them.
- `themes/hugo-profile/` — theme as a git submodule.
