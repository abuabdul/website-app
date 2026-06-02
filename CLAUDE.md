# CLAUDE.md — Personal Portfolio Website

## Project Purpose
Personal portfolio website for a software/full-stack engineer targeting enterprise architect and director of engineering roles. Serves as CV, project showcase, blog, achievements/certifications portal, hobbies page, and contact hub.

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (CSS-first config via `@theme` in globals.css)
- **Blog**: MDX via `next-mdx-remote` with `gray-matter` for frontmatter
- **Icons**: `lucide-react`
- **Fonts**: `next/font/google` (Geist Sans for body, Geist Mono for code)
- **Linting**: ESLint with Next.js config + Prettier
- **Type checking**: TypeScript strict

## Key npm Commands
- `npm run dev` — start local dev server (localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build locally
- `npm run lint` — run ESLint
- `npm run type-check` — run `tsc --noEmit`
- `npm run format` — run Prettier on all files

## Project Structure
```
src/
  app/                  # Next.js App Router pages and layouts
    layout.tsx          # Root layout (fonts, metadata, Navbar/Footer)
    globals.css         # Tailwind v4 config (@theme), design tokens, base styles
    page.tsx            # Home (Hero + About + Featured Projects + Latest Posts)
    resume/page.tsx
    projects/page.tsx
    blog/
      page.tsx          # Blog listing with tag filter
      [slug]/page.tsx   # Individual MDX blog post
    achievements/page.tsx
    hobbies/page.tsx
    contact/page.tsx
    robots.ts           # Next.js MetadataRoute
    sitemap.ts          # Next.js MetadataRoute
  components/
    layout/             # Navbar, Footer, PageWrapper
    ui/                 # Reusable primitives: Button, Badge, Card, SectionHeader
    sections/           # Page-specific section components
    mdx/                # MDX component overrides
  content/
    blog/               # .mdx files (source of truth for blog posts)
    projects.ts         # Project data array
    resume.ts           # Work experience, education, skills data
    achievements.ts     # Certifications and achievements
    hobbies.ts          # Hobbies data
  lib/
    mdx.ts              # MDX parsing utilities (getAllPosts, getPostBySlug)
    utils.ts            # cn() helper, formatDate, estimateReadingTime
  types/
    index.ts            # All TypeScript interfaces
public/
  images/               # Profile photo, project screenshots
  resume.pdf            # Downloadable resume (replace placeholder)
```

## Architecture Decisions
- **App Router with RSC**: All data fetching happens server-side; client components only for interactive UI (tag filters, mobile nav).
- **No API routes**: Fully static. All data lives in `src/content/`.
- **No CMS**: Structured TypeScript objects + MDX files are the data layer.
- **Image optimization**: `next/image` with `unoptimized: true`.
- **Tailwind v4**: Design tokens defined in `globals.css` using `@theme {}` — no `tailwind.config.ts` needed.

## Design System (Tailwind v4 CSS variables)

All tokens are defined in `src/app/globals.css` inside `@theme {}`:

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#1E3A5F` | Headings, key UI elements |
| `--color-accent` | `#2563EB` | Links, CTAs, hover states |
| `--color-surface` | `#FFFFFF` | Page background |
| `--color-muted` | `#F8FAFC` | Alternate section backgrounds |
| `--color-border` | `#E2E8F0` | Dividers, card borders |
| `--color-text` | `#0F172A` | Primary text |
| `--color-text-muted` | `#64748B` | Secondary/meta text |

Use in Tailwind: `bg-primary`, `text-accent`, `border-border`, etc.

### Spacing
- Section vertical padding: `py-20` (desktop), `py-12` (mobile)
- Max content width: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`

## Component Conventions
- All components are function components with explicit TypeScript props interface above the component.
- Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class names.
- `src/components/ui/` — primitive/reusable, no business logic.
- `src/components/sections/` — page-specific, may import from `src/content/`.
- File naming: `kebab-case` files, `PascalCase` component names.
- Utility/hook files: named exports only. Page files: default export (Next.js requirement).
- Mark components `"use client"` only when they need `useState`, `useEffect`, `usePathname`, etc.

## How to Add a Blog Post
1. Create `src/content/blog/my-post-title.mdx`
2. Add required frontmatter:
   ```yaml
   ---
   title: "My Post Title"
   date: "2026-06-02"
   summary: "One-sentence summary shown in the listing."
   tags: ["architecture", "typescript"]
   published: true
   ---
   ```
3. Write content below the frontmatter in Markdown/MDX.
4. The post is automatically picked up by `getAllPosts()` in `src/lib/mdx.ts`.
5. Run `npm run build` to verify no MDX compilation errors.

## How to Add a Project
1. Open `src/content/projects.ts`
2. Add an entry to the `projects` array following the `Project` interface in `src/types/index.ts`
3. Set `featured: true` to show it on the home page (keep featured to ≤ 3)

## How to Add an Achievement or Certification
1. Open `src/content/achievements.ts`
2. Add an entry to the `achievements` array following the `Achievement` interface
3. Use `type: "certification"` for cloud/tech certs, `"award"` for recognition, `"milestone"` for career milestones

## Deployment
- `npm run build` → deploy the `.next` folder to Vercel
- **Vercel**: import repo, set framework to Next.js — zero config needed
- Replace `public/resume.pdf` and `public/images/profile-placeholder.png` with real files before deploying
