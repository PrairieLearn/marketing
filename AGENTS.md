# Project Overview

This is the PrairieLearn marketing website built with Next.js 16 and TypeScript. It showcases PrairieLearn's educational assessment platform features and hosts content from the PrairieLearn example course via a git submodule.

## Guidelines

- NEVER amend commits or force push unless specifically requested.
- NEVER rebase unless specifically requested, always use merge commits.
- NEVER use `as any` casts in TypeScript code to avoid type errors.
- Don't add extra defensive checks or try/catch blocks that are abnormal for that area of the codebase (especially if called by trusted / validated codepaths).
- Don't add extra comments that a human wouldn't add or that are inconsistent with the rest of the file.

## Commands

```bash
yarn dev          # Start development server on localhost:3000
yarn build        # Production build
yarn lint         # Run ESLint and Prettier checks
yarn format       # Auto-format with Prettier
```

## Git Submodule

The `PrairieLearn/` directory is a git submodule containing the example course content:

```bash
git submodule init && git submodule update    # Initial setup
git submodule update --remote                  # Update to latest
```

## Architecture

### Content Pipeline

The site pulls content from `PrairieLearn/exampleCourse/` and processes it for display:

- **src/lib/catalog/** - Utilities that read markdown files from the submodule, parse frontmatter with `gray-matter`, and expose content for pages
- **src/remarkPlugins/** - Custom Remark plugins for markdown processing (extractImages, loadCode, rewriteAssessmentLinks)
- `COURSE_ROOT` in `src/lib/catalog/util.ts` points to `PrairieLearn/exampleCourse/`

### MDX Configuration

MDX support is configured in `next.config.ts` with:
- Math rendering via `remark-math` and `rehype-katex`
- GitHub Flavored Markdown via `remark-gfm`
- Auto-linking headings via `rehype-slug` and `rehype-autolink-headings`

### Page Structure

- **src/pages/** - Next.js page routes (catalog/, about/, products/, pricing/, etc.)
- **src/components/** - Reusable React components with co-located `.module.scss` files
- **src/lib/images/** - Static image assets

### Key Components

- `ExampleQuestion.tsx` - Renders interactive PrairieLearn question examples
- `ExampleEditor.tsx` - Shows code editor examples
- `BlogMarkdownLayout.tsx` - Layout wrapper for markdown content pages
