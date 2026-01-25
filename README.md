# Riad Maaji - Portfolio

A personal developer portfolio built with Astro 5, Tailwind CSS 4, and deployed on Cloudflare Pages.

## Features

- **Bilingual Support** - Full English and French translations with language toggle
- **Project Showcase** - Multi-image gallery for each project with thumbnail navigation
- **Responsive Design** - Mobile-first with hamburger menu navigation
- **Dark Theme** - Modern dark UI with red accent colors
- **SEO Optimized** - Meta tags, Open Graph, and JSON-LD structured data
- **Fast Performance** - Static site generation with optimized assets

## Tech Stack

- **Framework:** [Astro 5](https://astro.build/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Typography:** [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **Package Manager:** pnpm

## Project Structure

```text
/
├── public/
│   ├── projects/          # Project images
│   ├── favicon.svg
│   └── riad.jpg           # Profile photo
├── src/
│   ├── components/        # Reusable UI components
│   ├── content/
│   │   └── projects/
│   │       ├── en/        # English project markdown files
│   │       └── fr/        # French project markdown files
│   ├── i18n/              # Translation system
│   ├── layouts/           # Page layouts
│   ├── pages/
│   │   ├── index.astro    # Redirects to /en/
│   │   └── [lang]/        # Locale-based routes
│   └── styles/            # Global CSS
├── astro.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Adding Projects

Create markdown files in both `src/content/projects/en/` and `src/content/projects/fr/` with matching slugs:

```yaml
---
title: "Project Name"
description: "Brief description under 160 characters."
date: 2025-01-25
tags: ["React", "Node.js", "MongoDB"]
images: ["/projects/project-1.png", "/projects/project-2.png"]
github: "https://github.com/username/repo"
live: "https://example.com"  # optional
featured: true  # optional
---

## The Problem
...

## The Solution
...

## Technical Highlights
...

## Outcome
...
```

## Commands

| Command | Action |
| :------ | :----- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview build locally |
| `pnpm astro check` | Run TypeScript diagnostics |

## License

All rights reserved.
