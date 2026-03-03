# Architecture Documentation

## Overview

This is a **personal portfolio** for Eric Juquel, built as a React 19 single-page application with TypeScript and Tailwind CSS v4. The project is a full rewrite of a previous portfolio (React 17, JavaScript, Material UI) modernized with current best practices: TypeScript strict mode, Tailwind CSS v4 design tokens, and component-based architecture.

The application is **frontend-only** (no backend). The only server-side code is a single Vercel serverless function (`api/contact.ts`) that handles contact form submissions via SendGrid.

**Tech stack summary:**

| Layer          | Technology                                   |
| -------------- | -------------------------------------------- |
| UI framework   | React 19.1.0                                 |
| Language       | TypeScript 5.8 (strict mode)                 |
| Styling        | Tailwind CSS v4                              |
| Routing        | react-router-dom v7                          |
| i18n           | i18next + react-i18next                      |
| Forms          | react-hook-form + zod                        |
| Carousel       | embla-carousel-react + embla-carousel-fade   |
| Icons          | lucide-react + @fortawesome/fontawesome-free |
| Notifications  | react-toastify                               |
| Serverless API | Vercel functions + @sendgrid/mail            |
| Build tool     | Vite 7                                       |
| Linter         | Biome 2.x                                    |
| Tests          | Vitest + @testing-library/react              |

---

## Project Structure

```
src/
├── assets/                  # Static images and logos
├── locales/                 # i18n translation files (en.json, fr.json)
├── modules/                 # Feature modules (see Modules section)
├── shared/                  # Reusable components and utilities
│   ├── components/
│   │   ├── buttons/         # ButtonWave
│   │   ├── carousel/        # Embla carousel wrappers + hooks
│   │   └── modals/          # Modal, CarouselModal
│   └── utils/               # scroll.utils.ts, toast.utils.ts
├── tests/                   # Test utilities (testing.tsx, i18nForTests.ts)
├── App.tsx                  # Root component with routes and ToastContainer
├── i18n.ts                  # i18next configuration
├── index.css                # Tailwind imports + design tokens + utility classes
└── main.tsx                 # React DOM entry point

api/
└── contact.ts               # Vercel serverless function (SendGrid)

docs/
├── architecture.md          # This file
├── cleanup-report.md        # Dependency audit and cleanup log
└── ui-components.md         # UI component guidelines
```

---

## Routing

Routing is defined in [`src/modules/core/routes.ts`](../src/modules/core/routes.ts) and consumed in [`src/App.tsx`](../src/App.tsx) using `react-router-dom` v7 with `BrowserRouter`.

| Path              | Component          | Notes                                      |
| ----------------- | ------------------ | ------------------------------------------ |
| `/`               | Redirect           | Redirects to `/home`                       |
| `/home/*`         | `HomeView`         | Aggregates all sections in a scroll layout |
| `/skills/*`       | `SkillsView`       | Standalone skills page                     |
| `/achievements/*` | `AchievementsView` | Standalone achievements page               |
| `/contact/*`      | `ContactView`      | Standalone contact page                    |
| `/*`              | `NotFound`         | 404 fallback                               |

> **Note:** All five main sections (Home, Skills, Achievements, Contact) are rendered inside `HomeView` as a vertical scroll layout with anchor links (`#skills`, `#achievements`, `#contact`). The standalone routes exist for direct navigation via the side menu.

All routes are **lazy-loaded** (`React.lazy` + `Suspense`) to optimize initial bundle size.

---

## Modules

### `core/`

Core shell of the application.

| File                            | Role                                                               |
| ------------------------------- | ------------------------------------------------------------------ |
| `layout/Layout.tsx`             | Outer shell: `Navigation` + `<Outlet />`                           |
| `navigation/Navigation.tsx`     | Top navigation bar (desktop)                                       |
| `navigation/SideMenu.tsx`       | Slide-in side menu (mobile)                                        |
| `navigation/Burger.tsx`         | Hamburger icon button for mobile                                   |
| `navigation/Heading.tsx`        | Logo + brand heading (uses `Logo1.svg?react` via vite-plugin-svgr) |
| `navigation/SocialNetworks.tsx` | LinkedIn and GitHub icon links (FontAwesome)                       |
| `Languages.tsx`                 | Language switcher (FR / EN)                                        |
| `error/NotFound.tsx`            | 404 page                                                           |

### `home/`

| File           | Role                                                                     |
| -------------- | ------------------------------------------------------------------------ |
| `HomeView.tsx` | Scroll-based page aggregating Skills, Achievements, and Contact sections |

### `skills/`

| File                            | Role                                                     |
| ------------------------------- | -------------------------------------------------------- |
| `SkillsView.tsx`                | Full skills page                                         |
| `ProgressBox.tsx`               | Section displaying progress bars (technical proficiency) |
| `ChipBox.tsx`                   | Section displaying technology chips                      |
| `components/Chip.tsx`           | Individual technology tag chip                           |
| `components/SkillBar.tsx`       | Animated progress bar for a single skill                 |
| `components/SkillParagraph.tsx` | Text paragraph describing a skill category               |
| `skills.const.ts`               | Static data: skills list with levels and categories      |

### `contact/`

| File                | Role                                       |
| ------------------- | ------------------------------------------ |
| `ContactView.tsx`   | Contact page layout                        |
| `ContactForm.tsx`   | Form with react-hook-form + zod validation |
| `VisitCard.tsx`     | Business card component (phone, email)     |
| `contact.schema.ts` | Zod schema for form validation             |

The form submits to `/api/contact` (serverless function). See the [API section](#api--serverless-function) for details.

### `achievements/`

Divided into **professional** and **personal** sub-sections.

#### Professional

| File                           | Role                                               |
| ------------------------------ | -------------------------------------------------- |
| `frog/Frog.tsx`                | Project showcase card for "Frog"                   |
| `frog/FrogSVG.tsx`             | Inline SVG logo for Frog project                   |
| `woody/Woody.tsx`              | Project showcase with embedded `ReactPlayer` video |
| `woody/WoodySVG.tsx`           | Inline SVG logo for Woody project                  |
| `woody/woody-carousel.data.ts` | Static carousel slide data for Woody               |

#### Personal

| File                                   | Role                                                         |
| -------------------------------------- | ------------------------------------------------------------ |
| `lineshop/LineshopCard.tsx`            | Project card for Lineshop (iframe embed with image fallback) |
| `trainig-sites/TrainingSites.tsx`      | Training sites showcase with `CarouselModal`                 |
| `trainig-sites/tarining-sites-data.ts` | Static slide data for training sites carousel                |

---

## Shared Components

Located in [`src/shared/components/`](../src/shared/components/).

### `Divider`

A configurable horizontal/vertical divider. Accepts a `variant` or color prop.

### `Tooltip`

Pure CSS tooltip wrapper. No external dependency — wraps children and shows a text tooltip on hover via Tailwind utility classes.

### `ButtonWave`

CTA button with an animated SVG stroke wave effect. Used for primary call-to-action buttons.

### `Modal` (`shared/components/modals/Modal.tsx`)

Built on the native `<dialog>` HTML element. Supports:

- Image/document display
- Download action
- Navigation between multiple items (prev/next)

### `CarouselModal` (`shared/components/modals/CarouselModal.tsx`)

A `<dialog>`-based modal wrapping `EmblaCarousel`. Used for fullscreen image carousels (e.g., training sites screenshots).

### Embla Carousel (`shared/components/carousel/`)

| File                    | Role                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------ |
| `EmblaCarousel.tsx`     | Main carousel component (uses `embla-carousel-react` + `embla-carousel-fade` plugin) |
| `EmblaArrows.tsx`       | Previous/Next arrow buttons (lucide-react icons)                                     |
| `EmblaDots.tsx`         | Dot indicators                                                                       |
| `useEmblaNavigation.ts` | Hook managing prev/next navigation state                                             |
| `useEmblaDots.ts`       | Hook managing dot selection state                                                    |

---

## Styling

All styling uses **Tailwind CSS v4** with the `@import "tailwindcss"` directive in [`src/index.css`](../src/index.css).

### Design Tokens (`@theme`)

Defined in `src/index.css` inside an `@theme` block:

| Token                 | Purpose                   |
| --------------------- | ------------------------- |
| `--color-primary`     | Main brand color          |
| `--color-secondary`   | Accent color              |
| `--color-warning`     | Warning / highlight color |
| `--color-paper`       | Card background color     |
| `--color-paper-light` | Lighter card variant      |
| `--font-roboto`       | Body font                 |
| `--font-montserrat`   | Heading font              |
| `--font-capriola`     | Display/logo font         |

### Custom Utility Classes (`@layer components`)

| Class               | Usage                                          |
| ------------------- | ---------------------------------------------- |
| `.card-paper`       | Standard card with shadow and paper background |
| `.button-regular`   | Primary button style                           |
| `.button-secondary` | Secondary button style                         |
| `.body1`            | Standard body text size and weight             |
| `.icon`             | Burger menu icon bars                          |

### Fonts

Loaded via Google Fonts in `index.html`: **Roboto**, **Montserrat**, **Capriola**.

FontAwesome v6 is loaded via `@fortawesome/fontawesome-free` (imported in `App.tsx`) for the social network icons (LinkedIn, GitHub) in `SocialNetworks.tsx`.

---

## Internationalization (i18n)

Configured in [`src/i18n.ts`](../src/i18n.ts).

- **Library:** `i18next` + `react-i18next` + `i18next-browser-languagedetector`
- **Languages:** French (`fr`) and English (`en`)
- **Translation files:** [`src/locales/fr.json`](../src/locales/fr.json) and [`src/locales/en.json`](../src/locales/en.json)
- **Language switcher:** `Languages.tsx` component in the navigation bar

The browser language is auto-detected on first visit. The user can manually switch using the language toggle.

> **Known limitation:** Some static data files (`tarining-sites-data.ts`, `woody-carousel.data.ts`) call `t()` directly from `i18next` outside of a React component. This means translations in those files are evaluated once at module load time and do **not** react to language changes at runtime.

---

## API / Serverless Function

Located at [`api/contact.ts`](../api/contact.ts).

This is a **Vercel serverless function** that receives contact form submissions and sends emails via **SendGrid**.

### Flow

1. `ContactForm.tsx` submits a `POST` request to `/api/contact`
2. The function validates the body with `zod`
3. On success, sends an email via `@sendgrid/mail`

### Required Environment Variables

| Variable           | Description                                             |
| ------------------ | ------------------------------------------------------- |
| `SENDGRID_API_KEY` | Your SendGrid API key                                   |
| `CONTACT_SENDER`   | The "from" email address (must be verified in SendGrid) |
| `CONTACT_RECEIVER` | The "to" email address (your inbox)                     |

> ⚠️ Never commit real values. Set these via **Vercel Environment Variables** in the project dashboard.

For local development, create a `.env.local` file (git-ignored):

```env
# ⚠️ Never commit this file
SENDGRID_API_KEY=your_sendgrid_api_key_here
CONTACT_SENDER=noreply@your-domain.com
CONTACT_RECEIVER=you@your-email.com
```

---

## Testing

### Setup

- **Runner:** Vitest 3.x with `jsdom` environment
- **Utilities:** `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`
- **Setup file:** [`src/setupTests.ts`](../src/setupTests.ts) — imports `@testing-library/jest-dom` matchers

### Test Utilities

Located in [`src/tests/`](../src/tests/):

| File              | Role                                                                  |
| ----------------- | --------------------------------------------------------------------- |
| `testing.tsx`     | Exports `withRouter()` helper that wraps components in `MemoryRouter` |
| `i18nForTests.ts` | Initializes `i18next` synchronously in French for test runs           |

### Usage

```typescript
import { withRouter } from "@/tests/testing";
import { renderWithProviders } from "@/tests/testing";

test("renders component", () => {
  render(withRouter(<MyComponent />));
  // assertions...
});
```

### Test File Organization

Tests are co-located next to source files with `.spec.tsx` / `.spec.ts` extension:

```
src/
  modules/
    home/
      HomeView.tsx
      HomeView.spec.tsx
  shared/
    components/
      Tooltip.tsx
      Tooltip.spec.tsx
```

### Coverage

Run with: `pnpm test:cov`

Coverage provided by `@vitest/coverage-v8`.

---

## Build & Development

### Scripts

| Script       | Command                             | Description                             |
| ------------ | ----------------------------------- | --------------------------------------- |
| `dev`        | `vite`                              | Start development server with HMR       |
| `build`      | `tsc -b && vite build`              | Type-check + production build           |
| `type-check` | `tsc --noEmit -p tsconfig.app.json` | TypeScript check without emitting files |
| `lint`       | `biome lint .`                      | Lint all source files with Biome        |
| `format`     | `biome format .`                    | Auto-format all source files with Biome |
| `preview`    | `vite preview`                      | Preview the production build locally    |
| `test`       | `vitest run`                        | Run all tests once                      |
| `test:watch` | `vitest`                            | Run tests in watch mode                 |
| `test:cov`   | `vitest run --coverage`             | Run tests with coverage report          |

### Environment

- **Node.js:** 18+
- **Package manager:** pnpm
- **Deployment:** Vercel (automatic on push to main, serverless functions included)

---

## Known Issues & Technical Debt

| #   | Issue                                                                                                    | File                                               | Severity |
| --- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | -------- |
| 1   | Static data files call `t()` outside React — no reactivity on language change                            | `tarining-sites-data.ts`, `woody-carousel.data.ts` | Medium   |
| 2   | Modal/CarouselModal contain hardcoded French strings instead of using `t()`                              | `Modal.tsx`, `CarouselModal.tsx`                   | Low      |
| 3   | Typos in directory/file names: `trainig-sites/`, `tarining-sites-data.ts`, `useEmblaBNavigation.spec.ts` | Multiple                                           | Low      |
