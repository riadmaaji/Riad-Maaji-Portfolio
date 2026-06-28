# Portfolio Visual Refresh — Design Spec

**Date:** 2026-06-28
**Status:** Approved (design)
**Scope:** Subtle visual polish across the entire site. No layout restructuring, same color palette, same dark theme.

## Goal

Make the portfolio more visually appealing while staying minimalistic and keeping the existing crimson-on-`zinc-950` dark palette. This is a *refinement* pass: typography, hierarchy, depth, and motion are improved without changing the page/section structure or information architecture.

## Constraints (non-negotiable)

- **Palette unchanged:** crimson accents (`#f43f5e` / `#e11d48` / `#be123c`) on `zinc-950` background, `zinc-100/300/400/500` text scale. No new accent hues.
- **Dark theme only**, same as today.
- **Layouts and sections unchanged:** hero, projects, about, experience, skills (home); projects list; project detail; 404. Section order and content stay the same.
- **Bilingual EN/FR preserved.** Any new visible copy (eyebrow labels) is either language-agnostic or routed through the existing `src/i18n` translation system.
- **Accessibility:** SVG icons only (no emoji), `cursor-pointer` on clickables, visible keyboard focus states, responsive at 375 / 768 / 1024 / 1440, all motion gated behind `prefers-reduced-motion`.
- **Tech stack unchanged:** Astro 5 + Tailwind CSS 4 (`@theme` tokens in `src/styles/global.css`).

## Design Decisions

Captured from brainstorming:

| Question | Decision |
| --- | --- |
| Refresh intensity | Subtle polish (keep layout/structure) |
| Scope | Entire site + shared components |
| Heading font | Add **Space Grotesk** for headings; keep Inter for body |
| Motion | Add **scroll-reveal** (sections fade/rise on viewport entry); keep existing hero load animation and glow effects |
| Eyebrow labels + hero glow | Approved |

## Work Units

### 1. Typography system
- Load **Space Grotesk** (weights 400–700) in `BaseLayout.astro` alongside the existing Inter + JetBrains Mono `<link>`.
- Add a `--font-display: 'Space Grotesk', ...` token in the `@theme` block of `global.css`.
- Apply `font-display` to all headings: hero `h1`, all section `h2`s, sub-headings (`h3`), `ProjectCard` title, project-detail `h1`, prose headings, footer name.
- Tighten large-heading letter-spacing (~`-0.02em`) and standardize the heading size scale so hero / section headers / card titles are consistent (today they mix `text-3xl` and `text-4xl`).
- Body remains Inter; code remains JetBrains Mono.

**Interface:** a `--font-display` token + a reusable heading treatment. Consumers just use the font utility; internals (which font, tracking) can change without touching consumers.

### 2. Section structure & rhythm
- Introduce an **eyebrow label** above each major section heading: uppercase, letter-spaced, small, crimson, mono (e.g. `// PROJECTS`), paired with a short accent rule.
  - Implemented as a small reusable `SectionHeading.astro` component (props: `eyebrow`, `title`, optional `description`) so the treatment is defined once and reused. This also reduces duplication across the home sections, projects list, and detail pages.
  - Eyebrow text comes from `src/i18n/translations.ts` (new keys) so EN/FR both work.
- Standardize section vertical padding and the alternating `bg-zinc-900/50` band treatment so section seams read intentionally.

### 3. Depth & background
- Keep the existing dot-grid body background.
- Add one soft crimson **radial glow** behind the hero that fades to transparent (low opacity, non-animated, pointer-events-none). Subtle atmosphere only.
- Refine card surface borders/shadows for crisper edges in dark mode (tune existing `card-glow` values; no behavioral change).

### 4. Motion — scroll reveal
- Add a small `IntersectionObserver`-based utility (a `data-reveal` attribute + a script, or a `ScrollReveal.astro` wrapper) that fades-and-rises elements in as they enter the viewport, with stagger support for grids.
- Apply to below-the-fold sections and card grids in place of the current load-only animation on those sections.
- Keep the hero's existing on-load `fade-in-up` sequence and existing glow/hover effects.
- **Reduced motion:** when `prefers-reduced-motion: reduce`, elements are visible immediately with no transform/opacity animation (the existing global reduced-motion rule already neutralizes durations; the reveal utility must also set the final visible state so content is never stuck hidden).

### 5. Shared components & pages touched
Polish propagates through shared components:
- `components/Header.astro` — heading font where applicable, refined spacing/focus.
- `components/ProjectCard.astro` — display font on title, refined surface, reveal-ready.
- `components/SkillBadge.astro` — minor spacing/consistency refinement.
- `components/Footer.astro` — display font on name.
- `components/SectionHeading.astro` — **new** shared component (eyebrow + title + description).
- Pages: `pages/[lang]/index.astro`, `pages/[lang]/projects/index.astro`, `pages/[lang]/projects/[...slug].astro`, `pages/[lang]/404.astro` — adopt `SectionHeading`, new font, and scroll-reveal.

## Out of Scope

- No palette/color changes.
- No new sections, pages, or content.
- No layout/structural redesign.
- No dependency changes beyond the Google Fonts `<link>` (fonts are loaded via CDN like the current setup).
- No light-mode support.

## Success Criteria

- Site looks more polished and intentional while immediately recognizable as the same design.
- Headings render in Space Grotesk; body in Inter; no FOUT regressions.
- Eyebrow labels appear in both EN and FR.
- Sections/cards reveal smoothly on scroll; with reduced motion enabled, all content is visible with no animation.
- No console errors; `pnpm build` succeeds; layout holds at 375 / 768 / 1024 / 1440.
- Palette and structure verifiably unchanged.
