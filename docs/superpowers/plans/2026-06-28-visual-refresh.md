# Portfolio Visual Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply a subtle, site-wide visual polish (distinctive heading font, section eyebrow labels, refined depth, scroll-reveal motion) to the portfolio without changing the crimson dark palette or existing layout/structure.

**Architecture:** Add a `--font-display` (Space Grotesk) theme token and apply it to headings everywhere; introduce a reusable `SectionHeading.astro` (eyebrow + title + description) to DRY up section headers; add a JS-gated, reduced-motion-safe scroll-reveal utility driven by `IntersectionObserver`; add a single soft radial glow behind the hero. All changes are CSS/markup refinements on top of the existing Astro 5 + Tailwind 4 setup.

**Tech Stack:** Astro 5, Tailwind CSS 4 (`@theme` tokens in `src/styles/global.css`), TypeScript, i18n via `src/i18n/translations.ts`, Google Fonts (CDN).

**Testing note:** This repo has no unit-test framework. "Verify" steps use `pnpm astro check` (TypeScript/Astro diagnostics) and `pnpm build` (static build must succeed), plus explicit visual checks. There is no test runner to add for a CSS/markup refresh (YAGNI).

---

## File Structure

**Create:**
- `src/components/SectionHeading.astro` — reusable section header: eyebrow label + accent rule + title + optional description.

**Modify:**
- `src/styles/global.css` — add `--font-display` token; add scroll-reveal utility CSS (JS-gated + reduced-motion safe).
- `src/layouts/BaseLayout.astro` — load Space Grotesk; add inline `js` class bootstrap; add IntersectionObserver reveal script.
- `src/i18n/translations.ts` — add `eyebrow.*` keys (EN + FR).
- `src/pages/[lang]/index.astro` — hero radial glow + `font-display` on hero headings; replace section headers with `SectionHeading`; add `data-reveal`.
- `src/pages/[lang]/projects/index.astro` — `SectionHeading`; `data-reveal` on grid.
- `src/pages/[lang]/projects/[...slug].astro` — `font-display` on title.
- `src/pages/[lang]/404.astro` — `font-display` on title; fix `red-500`→`crimson-500` palette consistency.
- `src/components/Header.astro` — refined focus states (no structural change).
- `src/components/ProjectCard.astro` — `font-display` on title; refined surface.
- `src/components/SkillBadge.astro` — minor spacing consistency.
- `src/components/Footer.astro` — `font-display` on name.

---

## Task 1: Typography foundation (Space Grotesk + token)

**Files:**
- Modify: `src/layouts/BaseLayout.astro:73-76` (Google Fonts `<link>`)
- Modify: `src/styles/global.css:4-12` (`@theme` block)

- [ ] **Step 1: Add Space Grotesk to the Google Fonts link**

In `src/layouts/BaseLayout.astro`, replace the existing fonts `<link>`:

```astro
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
```

with:

```astro
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
```

- [ ] **Step 2: Add the `--font-display` token**

In `src/styles/global.css`, update the `@theme` block:

```css
@theme {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-display: 'Space Grotesk', 'Inter', system-ui, sans-serif;

  /* Custom crimson palette */
  --color-crimson-400: #f43f5e;
  --color-crimson-500: #e11d48;
  --color-crimson-600: #be123c;
}
```

In Tailwind v4, this auto-generates a `font-display` utility class.

- [ ] **Step 3: Verify typecheck/build still passes**

Run: `pnpm astro check`
Expected: PASS (0 errors). Warnings unrelated to these files are acceptable.

- [ ] **Step 4: Commit**

```bash
git add src/layouts/BaseLayout.astro src/styles/global.css
git commit -m "feat: add Space Grotesk display font token"
```

---

## Task 2: Section eyebrow translations

**Files:**
- Modify: `src/i18n/translations.ts` (add keys in both `en` and `fr` objects)

- [ ] **Step 1: Add `eyebrow.*` keys to the English block**

In `src/i18n/translations.ts`, inside the `en: { ... }` object, immediately after the `// Navigation` group (after line `'nav.skills': 'Skills',`), add:

```ts
    // Section eyebrows
    'eyebrow.work': 'Selected Work',
    'eyebrow.allWork': 'Archive',
    'eyebrow.about': 'About Me',
    'eyebrow.experience': 'Experience',
    'eyebrow.skills': 'Skills',
    'eyebrow.education': 'Education',
```

- [ ] **Step 2: Add `eyebrow.*` keys to the French block**

In the `fr: { ... }` object, immediately after `'nav.skills': 'Compétences',`, add:

```ts
    // Section eyebrows
    'eyebrow.work': 'Travaux choisis',
    'eyebrow.allWork': 'Archives',
    'eyebrow.about': 'À propos',
    'eyebrow.experience': 'Expérience',
    'eyebrow.skills': 'Compétences',
    'eyebrow.education': 'Formation',
```

Both blocks must stay in sync — `TranslationKey` is derived from `translations.en`, so any key used must exist in `en`. Keeping `fr` identical in keys avoids runtime fallback gaps.

- [ ] **Step 3: Verify typecheck passes**

Run: `pnpm astro check`
Expected: PASS (0 errors).

- [ ] **Step 4: Commit**

```bash
git add src/i18n/translations.ts
git commit -m "feat: add section eyebrow translation keys (en/fr)"
```

---

## Task 3: SectionHeading component

**Files:**
- Create: `src/components/SectionHeading.astro`

- [ ] **Step 1: Create the component**

Create `src/components/SectionHeading.astro` with this exact content:

```astro
---
interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  class?: string;
}

const { eyebrow, title, description, align = 'left', class: className = '' } = Astro.props;
---

<div class:list={['mb-10', align === 'center' && 'text-center', className]}>
  <div class:list={['flex items-center gap-3 mb-3', align === 'center' && 'justify-center']}>
    <span class="h-px w-8 bg-crimson-500/60" aria-hidden="true"></span>
    <span class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-crimson-400">
      {eyebrow}
    </span>
  </div>
  <h2 class="font-display text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
    {title}
  </h2>
  {description && <p class="mt-4 max-w-2xl text-zinc-400">{description}</p>}
</div>
```

- [ ] **Step 2: Verify typecheck passes**

Run: `pnpm astro check`
Expected: PASS (0 errors).

- [ ] **Step 3: Commit**

```bash
git add src/components/SectionHeading.astro
git commit -m "feat: add reusable SectionHeading component"
```

---

## Task 4: Scroll-reveal utility (CSS + script)

**Files:**
- Modify: `src/styles/global.css` (append to `@layer utilities` and the reduced-motion block)
- Modify: `src/layouts/BaseLayout.astro` (inline `js` bootstrap in `<head>`; reveal script before `</body>`)

- [ ] **Step 1: Add reveal CSS to `global.css`**

In `src/styles/global.css`, inside the existing `@layer utilities { ... }` block, append these rules (before the closing brace of `@layer utilities`):

```css
  /* Scroll reveal (JS-gated so no-JS users always see content) */
  .js [data-reveal] {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    transition-delay: var(--reveal-delay, 0ms);
    will-change: opacity, transform;
  }

  .js [data-reveal].is-visible {
    opacity: 1;
    transform: translateY(0);
  }
```

Then, in the existing reduced-motion media query inside `@layer base` (the block at lines ~90-96), add a rule so revealed content is always visible. Replace:

```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
```

with:

```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }

    .js [data-reveal] {
      opacity: 1 !important;
      transform: none !important;
    }
  }
```

- [ ] **Step 2: Add the `js` class bootstrap in `<head>`**

In `src/layouts/BaseLayout.astro`, add this inline script as the first child of `<head>` (right after the opening `<head>` tag, before `<meta charset>`). `is:inline` keeps it un-bundled so it runs before paint and avoids a content flash:

```astro
    <script is:inline>
      document.documentElement.classList.add('js');
    </script>
```

- [ ] **Step 3: Add the IntersectionObserver reveal script**

In `src/layouts/BaseLayout.astro`, inside the existing `<script>` block near the bottom (the back-to-top script), append the reveal logic before the closing `</script>`:

```js
      // Scroll reveal
      const revealEls = document.querySelectorAll('[data-reveal]');
      if (revealEls.length) {
        if ('IntersectionObserver' in window) {
          const revealObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  revealObserver.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
          );
          revealEls.forEach((el) => revealObserver.observe(el));
        } else {
          revealEls.forEach((el) => el.classList.add('is-visible'));
        }
      }
```

- [ ] **Step 4: Verify build passes**

Run: `pnpm build`
Expected: build completes with no errors; `dist/` regenerated.

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css src/layouts/BaseLayout.astro
git commit -m "feat: add JS-gated, reduced-motion-safe scroll reveal"
```

---

## Task 5: Polish the home page (`index.astro`)

**Files:**
- Modify: `src/pages/[lang]/index.astro`

- [ ] **Step 1: Import SectionHeading**

In the frontmatter of `src/pages/[lang]/index.astro`, add the import after the existing `ProjectCard` import:

```astro
import SectionHeading from '../../components/SectionHeading.astro';
```

- [ ] **Step 2: Add the hero radial glow and display font on hero headings**

Replace the hero `<section>` opening and headings. Change:

```astro
  <!-- Hero Section -->
  <section id="hero" class="min-h-[85vh] flex items-center px-6 pt-20">
    <div class="max-w-5xl mx-auto w-full">
      <h1 class="text-5xl md:text-7xl font-bold text-zinc-100 animate-fade-in-up animate-on-load delay-100 name-glow cursor-default inline-block" style="animation-fill-mode: forwards;">
        Riad Maaji
      </h1>
      <h2 class="text-2xl md:text-4xl font-bold text-zinc-400 mt-4 animate-fade-in-up animate-on-load delay-200" style="animation-fill-mode: forwards;">
        {t('hero.headline')}
      </h2>
```

to:

```astro
  <!-- Hero Section -->
  <section id="hero" class="relative min-h-[85vh] flex items-center px-6 pt-20 overflow-hidden">
    <div class="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[640px] max-w-[120vw] rounded-full bg-crimson-500/10 blur-[120px]"></div>
    </div>
    <div class="max-w-5xl mx-auto w-full">
      <h1 class="font-display text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 animate-fade-in-up animate-on-load delay-100 name-glow cursor-default inline-block" style="animation-fill-mode: forwards;">
        Riad Maaji
      </h1>
      <h2 class="font-display text-2xl md:text-4xl font-bold text-zinc-400 mt-4 animate-fade-in-up animate-on-load delay-200" style="animation-fill-mode: forwards;">
        {t('hero.headline')}
      </h2>
```

- [ ] **Step 3: Replace the Projects section header with SectionHeading**

In the Projects section, replace:

```astro
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-zinc-100 mb-4">{t('projects.featured')}</h2>
      <p class="text-zinc-400 mb-10">{t('projects.featuredDescription')}</p>
```

with:

```astro
    <div class="max-w-5xl mx-auto">
      <SectionHeading
        eyebrow={t('eyebrow.work')}
        title={t('projects.featured')}
        description={t('projects.featuredDescription')}
      />
```

- [ ] **Step 4: Add staggered reveal to the featured project grid**

Replace the featured grid map:

```astro
        <div class="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              title={project.data.title}
              description={project.data.description}
              tags={project.data.tags}
              image={project.data.images[0]}
              href={`/${lang}/projects/${project.id.replace(`${lang}/`, '').replace(/\.md$/, '')}`}
              featured={project.data.featured}
              showStar={true}
            />
          ))}
        </div>
```

with:

```astro
        <div class="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <div data-reveal style={`--reveal-delay: ${i * 100}ms`}>
              <ProjectCard
                title={project.data.title}
                description={project.data.description}
                tags={project.data.tags}
                image={project.data.images[0]}
                href={`/${lang}/projects/${project.id.replace(`${lang}/`, '').replace(/\.md$/, '')}`}
                featured={project.data.featured}
                showStar={true}
              />
            </div>
          ))}
        </div>
```

- [ ] **Step 5: Replace the About section header with SectionHeading**

Replace:

```astro
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-zinc-100 mb-10">{t('about.title')}</h2>
```

with:

```astro
    <div class="max-w-5xl mx-auto" data-reveal>
      <SectionHeading eyebrow={t('eyebrow.about')} title={t('about.title')} />
```

- [ ] **Step 6: Replace the Experience section header with SectionHeading**

Replace:

```astro
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-zinc-100 mb-10">{t('experience.title')}</h2>
```

with:

```astro
    <div class="max-w-5xl mx-auto" data-reveal>
      <SectionHeading eyebrow={t('eyebrow.experience')} title={t('experience.title')} />
```

- [ ] **Step 7: Replace the Skills section header with SectionHeading**

Replace:

```astro
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-zinc-100 mb-10">{t('skills.title')}</h2>
```

with:

```astro
    <div class="max-w-5xl mx-auto" data-reveal>
      <SectionHeading eyebrow={t('eyebrow.skills')} title={t('skills.title')} />
```

- [ ] **Step 8: Apply display font to the inner `h3` sub-headings**

The Skills section and Education block use `<h3 class="text-xl font-semibold text-zinc-100 ...">`. For each such `h3` in this file (Languages, Frameworks, Tools, Soft Skills, Education titles), add `font-display` to the class list. Example — change:

```astro
            <h3 class="text-xl font-semibold text-zinc-100 mb-4">{t('skills.languages')}</h3>
```

to:

```astro
            <h3 class="font-display text-xl font-semibold text-zinc-100 mb-4">{t('skills.languages')}</h3>
```

Apply the same `font-display` addition to the other `h3` headings in this file: `skills.frameworks`, `skills.tools`, `skills.soft`, `education.title`, and the experience role `h3` (`{t('experience.role')}`).

- [ ] **Step 9: Verify build passes**

Run: `pnpm build`
Expected: build completes, no errors.

- [ ] **Step 10: Commit**

```bash
git add src/pages/[lang]/index.astro
git commit -m "feat: polish home page (eyebrows, display font, hero glow, scroll reveal)"
```

---

## Task 6: Polish projects list, project detail, and 404

**Files:**
- Modify: `src/pages/[lang]/projects/index.astro`
- Modify: `src/pages/[lang]/projects/[...slug].astro`
- Modify: `src/pages/[lang]/404.astro`

- [ ] **Step 1: Projects list — import SectionHeading**

In `src/pages/[lang]/projects/index.astro` frontmatter, add after the `ProjectCard` import:

```astro
import SectionHeading from '../../../components/SectionHeading.astro';
```

- [ ] **Step 2: Projects list — replace the heading and stagger the grid**

Replace:

```astro
      <h1 class="text-4xl font-bold text-zinc-100 mb-4">{t('projects.all')}</h1>
      <p class="text-zinc-400 mb-10">{t('projects.description')}</p>
      
      {sortedProjects.length > 0 ? (
        <div class="grid md:grid-cols-2 gap-6">
          {sortedProjects.map((project) => (
            <ProjectCard
              title={project.data.title}
              description={project.data.description}
              tags={project.data.tags}
              image={project.data.images[0]}
              href={`/${lang}/projects/${project.id.replace(`${lang}/`, '').replace(/\.md$/, '')}`}
              featured={project.data.featured}
              showStar={true}
            />
          ))}
        </div>
```

with:

```astro
      <SectionHeading
        eyebrow={t('eyebrow.allWork')}
        title={t('projects.all')}
        description={t('projects.description')}
      />

      {sortedProjects.length > 0 ? (
        <div class="grid md:grid-cols-2 gap-6">
          {sortedProjects.map((project, i) => (
            <div data-reveal style={`--reveal-delay: ${(i % 4) * 80}ms`}>
              <ProjectCard
                title={project.data.title}
                description={project.data.description}
                tags={project.data.tags}
                image={project.data.images[0]}
                href={`/${lang}/projects/${project.id.replace(`${lang}/`, '').replace(/\.md$/, '')}`}
                featured={project.data.featured}
                showStar={true}
              />
            </div>
          ))}
        </div>
```

Note: the `SectionHeading` renders an `h2`, while the original used `h1`. For an internal listing page this is acceptable and visually identical at the chosen sizes; the page still has a single visible page title. (If strict `h1` semantics are later required, that is a separate change.)

- [ ] **Step 3: Project detail — apply display font to the title**

In `src/pages/[lang]/projects/[...slug].astro`, change:

```astro
        <h1 class="text-4xl font-bold text-zinc-100 animate-fade-in-up animate-on-load" style="animation-fill-mode: forwards;">{project.data.title}</h1>
```

to:

```astro
        <h1 class="font-display text-4xl font-bold tracking-tight text-zinc-100 animate-fade-in-up animate-on-load" style="animation-fill-mode: forwards;">{project.data.title}</h1>
```

- [ ] **Step 4: 404 — display font + palette fix**

In `src/pages/[lang]/404.astro`, change the title:

```astro
      <h1 class="text-6xl font-bold text-zinc-100 mb-4">{t('404.title')}</h1>
```

to:

```astro
      <h1 class="font-display text-6xl font-bold text-zinc-100 mb-4">{t('404.title')}</h1>
```

and fix the CTA button's off-palette `red-*` to the `crimson` token. Change:

```astro
        class="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
```

to:

```astro
        class="inline-flex items-center gap-2 px-6 py-3 bg-crimson-500 hover:bg-crimson-600 text-white rounded-lg transition-colors font-medium"
```

- [ ] **Step 5: Verify build passes**

Run: `pnpm build`
Expected: build completes, no errors.

- [ ] **Step 6: Commit**

```bash
git add "src/pages/[lang]/projects/index.astro" "src/pages/[lang]/projects/[...slug].astro" "src/pages/[lang]/404.astro"
git commit -m "feat: polish projects list, detail, and 404 pages"
```

---

## Task 7: Polish shared components

**Files:**
- Modify: `src/components/ProjectCard.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/components/Header.astro`

- [ ] **Step 1: ProjectCard — display font on title + crisper surface**

In `src/components/ProjectCard.astro`, change the title `h3`:

```astro
    <h3 class="text-xl font-semibold text-zinc-100 group-hover:text-crimson-400 transition-colors duration-300 flex items-center gap-2">
```

to:

```astro
    <h3 class="font-display text-xl font-semibold text-zinc-100 group-hover:text-crimson-400 transition-colors duration-300 flex items-center gap-2">
```

And tighten the card border for a crisper edge — change the root anchor class list:

```astro
    'group block relative rounded-2xl bg-zinc-900/80 overflow-hidden border border-zinc-800/50 card-glow cursor-pointer',
```

to:

```astro
    'group block relative rounded-2xl bg-zinc-900/70 overflow-hidden border border-zinc-800 card-glow cursor-pointer',
```

- [ ] **Step 2: Footer — display font on the name**

In `src/components/Footer.astro`, change:

```astro
        © {currentYear} <span class="text-zinc-400 hover:text-crimson-400 transition-colors">Riad Maaji</span>. {t('footer.rights')}
```

to:

```astro
        © {currentYear} <span class="font-display text-zinc-400 hover:text-crimson-400 transition-colors">Riad Maaji</span>. {t('footer.rights')}
```

- [ ] **Step 3: Header — add visible focus states on nav links**

In `src/components/Header.astro`, the desktop nav link class:

```astro
            class="text-sm font-medium transition-all duration-300 hover-underline text-zinc-300 hover:text-zinc-100"
```

to:

```astro
            class="text-sm font-medium transition-all duration-300 hover-underline text-zinc-300 hover:text-zinc-100 focus-visible:outline-none focus-visible:text-crimson-400 rounded"
```

and the mobile nav link class:

```astro
            class="block text-lg font-medium transition-all duration-300 py-2 text-zinc-300 hover:text-zinc-100"
```

to:

```astro
            class="block text-lg font-medium transition-all duration-300 py-2 text-zinc-300 hover:text-zinc-100 focus-visible:outline-none focus-visible:text-crimson-400"
```

- [ ] **Step 4: Verify build passes**

Run: `pnpm build`
Expected: build completes, no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectCard.astro src/components/Footer.astro src/components/Header.astro
git commit -m "feat: polish shared components (display font, surfaces, focus states)"
```

---

## Task 8: Final verification

**Files:** none (verification only)

- [ ] **Step 1: Typecheck**

Run: `pnpm astro check`
Expected: 0 errors.

- [ ] **Step 2: Production build**

Run: `pnpm build`
Expected: build completes with no errors; all `en`/`fr` routes emitted under `dist/`.

- [ ] **Step 3: Visual smoke check (preview)**

Run: `pnpm preview`
Then manually confirm at `localhost:4321/en/`:
- Headings render in Space Grotesk (distinct from Inter body).
- Each section shows a crimson `// eyebrow` label + accent rule above its title.
- Hero shows a soft crimson radial glow.
- Scrolling down reveals sections/cards with a fade-and-rise.
- Visit `/fr/` and confirm eyebrow labels are in French.
- Visit a project detail page and `/en/404` (e.g. `/en/nope`) — title uses display font; 404 button is crimson, not the old red.

- [ ] **Step 4: Reduced-motion check**

Enable "reduce motion" in OS/browser settings and reload `/en/`.
Expected: all content is immediately visible (no hidden sections), no fade/rise animation.

- [ ] **Step 5: Responsive check**

In dev tools, verify layout holds with no overflow/clipping at widths 375px, 768px, 1024px, and 1440px (hero glow must not cause horizontal scroll — it is clipped by `overflow-hidden` on the hero section).

- [ ] **Step 6: Confirm palette/structure unchanged**

Run: `git diff --stat main` (or review the branch diff)
Expected: changes are limited to fonts, headings, eyebrows, reveal, hero glow, focus states, and the 404 red→crimson fix. No color palette tokens changed; no sections added/removed/reordered.

---

## Self-Review

**Spec coverage:**
- §1 Typography → Tasks 1, 5 (Step 2/8), 6, 7. ✓
- §2 Section structure & eyebrows → Tasks 2, 3, 5, 6. ✓
- §3 Depth & background (hero glow, card surface) → Task 5 (Step 2), Task 7 (Step 1). ✓
- §4 Motion scroll-reveal (reduced-motion safe) → Task 4, applied in Tasks 5–6. ✓
- §5 Shared components & all pages → Tasks 5, 6, 7. ✓
- Constraints (palette/structure unchanged, EN/FR, a11y/focus, responsive, reduced-motion) → enforced in Tasks 2, 7, and verified in Task 8. ✓

**Placeholder scan:** No TBD/TODO; every code step shows complete code and exact commands. ✓

**Type/name consistency:** `--font-display` → `font-display` utility used consistently. `SectionHeading` prop names (`eyebrow`, `title`, `description`, `align`, `class`) match all call sites. `eyebrow.*` keys added in Task 2 match those referenced in Tasks 5–6 (`eyebrow.work`, `eyebrow.allWork`, `eyebrow.about`, `eyebrow.experience`, `eyebrow.skills`). `data-reveal` + `--reveal-delay` CSS (Task 4) matches usage in Tasks 5–6. ✓

**Note on `eyebrow.education`:** added for completeness/future use; the Education block is nested inside the Skills section and intentionally keeps its existing `h3` (no eyebrow) to avoid double eyebrows in one section — not a gap.
