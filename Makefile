.DEFAULT_GOAL := help
.PHONY: help install dev build preview pdf clean

help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install npm dependencies
	npm install

dev: ## Start Astro dev server (http://localhost:4321)
	npm run dev

build: ## Build the site for production (→ dist/)
	npm run build

preview: ## Serve the production build locally
	npm run preview

pdf: ## Compile resume/resume.typ → public/resume.pdf
	npm run resume:pdf

clean: ## Remove dist/ and Astro cache
	rm -rf dist node_modules/.astro
