# Eric Juquel — Portfolio v2

Personal portfolio showcasing Eric Juquel's professional experience, skills, and achievements. Built as a full rewrite of a previous portfolio (React 17, JavaScript, Material UI) using modern patterns and tools: React 19, TypeScript strict mode, Tailwind CSS v4, and component-based architecture.

**Live:** deployed on Vercel

---

## Tech Stack

| Layer        | Technology                             |
| ------------ | -------------------------------------- |
| UI framework | React 19                               |
| Language     | TypeScript 5.8 (strict mode)           |
| Styling      | Tailwind CSS v4                        |
| Routing      | react-router-dom v7                    |
| i18n         | i18next + react-i18next (FR / EN)      |
| Forms        | react-hook-form + zod                  |
| Carousel     | embla-carousel-react                   |
| Linter       | Biome 2.x                              |
| Tests        | Vitest + @testing-library/react        |
| API          | Vercel serverless functions + SendGrid |

---

## Prerequisites

- **Node.js** 18+
- **pnpm** (recommended)

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

The contact form requires a Vercel serverless function backed by SendGrid.

Create a `.env.local` file at the root (this file is git-ignored — **never commit real values**):

```env
# ⚠️ Never commit this file with real values
SENDGRID_API_KEY=your_sendgrid_api_key_here
CONTACT_SENDER=noreply@your-domain.com
CONTACT_RECEIVER=you@your-email.com
```

For production, set these variables in the **Vercel Dashboard → Project Settings → Environment Variables**.

---

## Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `pnpm dev`        | Start development server with HMR    |
| `pnpm build`      | Type-check + production build        |
| `pnpm type-check` | TypeScript check without building    |
| `pnpm lint`       | Lint with Biome                      |
| `pnpm format`     | Auto-format with Biome               |
| `pnpm preview`    | Preview the production build locally |
| `pnpm test`       | Run all tests once                   |
| `pnpm test:watch` | Run tests in watch mode              |
| `pnpm test:cov`   | Run tests with coverage report       |

---

## Project Structure

```
src/
├── assets/             # Static images and logos
├── locales/            # i18n translation files (en.json, fr.json)
├── modules/
│   ├── core/           # Layout, Navigation, Language switcher, NotFound
│   ├── home/           # Main scroll page (aggregates all sections)
│   ├── skills/         # Skills section with progress bars and chips
│   ├── contact/        # Contact form and visit card
│   └── achievements/   # Professional and personal project showcases
├── shared/
│   ├── components/     # Reusable UI components (Carousel, Modal, ButtonWave…)
│   └── utils/          # Utility functions (scroll, toast)
├── tests/              # Test helpers and i18n setup for tests
├── App.tsx             # Root with routes and ToastContainer
├── i18n.ts             # i18next configuration
└── index.css           # Tailwind + design tokens + custom classes

api/
└── contact.ts          # Vercel serverless function (SendGrid email)
```

---

## Documentation

| File                                             | Description                                                               |
| ------------------------------------------------ | ------------------------------------------------------------------------- |
| [docs/architecture.md](docs/architecture.md)     | Full architecture reference (modules, routing, styling, i18n, API, tests) |
| [docs/ui-components.md](docs/ui-components.md)   | UI component guidelines and design principles                             |
| [docs/cleanup-report.md](docs/cleanup-report.md) | Initial audit log: removed dependencies, fixed scripts                    |
