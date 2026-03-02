# Cleanup Report — Initial Audit (March 2026)

## Context

This report documents the initial audit of the `eric-j-portfolio-v2` codebase performed as the first LLM session on this project. The audit covered:

- Full codebase exploration (all source files read)
- Dependency usage analysis (each `package.json` entry traced to actual imports)
- Script correctness review
- Tooling configuration review

No UI components were modified. All changes are limited to configuration and documentation.

---

## Unused Dependencies Removed

The following packages were declared in `package.json` but had **zero imports** anywhere in the source code. They were removed with `pnpm remove`.

### `dependencies` (runtime)

| Package             | Version   | Reason for removal                                                           |
| ------------------- | --------- | ---------------------------------------------------------------------------- |
| `@headlessui/react` | `^2.2.4`  | No import found in any source file. Not used in any component.               |
| `zustand`           | `^5.0.11` | No import found. No store file exists. Likely a leftover from an early plan. |

### `devDependencies`

| Package                | Version   | Reason for removal                                                                     |
| ---------------------- | --------- | -------------------------------------------------------------------------------------- |
| `@eslint/js`           | `^9.29.0` | ESLint is **not configured** in this project. Biome replaces all ESLint functionality. |
| `globals`              | `^16.2.0` | ESLint companion package — same reason as above.                                       |
| `typescript-eslint`    | `^8.34.1` | ESLint companion — same reason as above.                                               |
| `@types/react-i18next` | `^7.8.3`  | Redundant since `react-i18next` v12+ ships its own TypeScript declarations.            |

**Total removed:** 6 packages (2 runtime dependencies, 4 dev dependencies).

---

## Script Fixes (`package.json`)

### `test` script — broken invocation

**Before:**

```json
"test": "NODE_NO_WARNINGS=1 test:cov test:default"
```

This was syntactically invalid — `test:cov` and `test:default` are not shell executables. The `pnpm run` prefix was missing entirely. The script would fail with a "command not found" error.

**After:**

```json
"test": "NODE_NO_WARNINGS=1 pnpm run test:default"
```

> The `test:cov` was removed from the default `test` command. Coverage should be run explicitly with `pnpm test:cov` to keep the standard test run fast.

### `test:watch` — removed log redirect

**Before:**

```json
"test:watch": "> console-errors.log && NODE_NO_WARNINGS=1 vitest"
```

The `> console-errors.log &&` prefix redirects stdout to a file before running vitest — this would suppress all vitest output in watch mode, making it unusable. Removed.

**After:**

```json
"test:watch": "NODE_NO_WARNINGS=1 vitest"
```

### Added `type-check` script

**Added:**

```json
"type-check": "tsc --noEmit -p tsconfig.app.json"
```

A dedicated TypeScript type-check script that emits no files. Previously, type checking was only performed as a side effect of `build`. This allows running type checks in CI or during development without triggering a full Vite build.

---

## Biome Schema Version Fix (`biome.json`)

**Before:**

```json
"$schema": "https://biomejs.dev/schemas/2.4.4/schema.json"
```

**After:**

```json
"$schema": "https://biomejs.dev/schemas/2.1.3/schema.json"
```

The installed version is `@biomejs/biome@2.1.3`. The schema URL referenced `2.4.4` which does not match any installed version, causing false IDE validation warnings.

---

## Issues Identified — Out of Scope

These issues were identified but **not fixed** in this session to avoid unintended UI regressions. They are tracked for future cleanup:

| #   | Issue                                                                                                                | File(s)                                                                                                                                                                                                    | Impact                                          |
| --- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 1   | `ContactForm.tsx` submits to `http://localhost:3000/api/contact` (hardcoded dev URL)                                 | [`src/modules/contact/ContactForm.tsx`](../src/modules/contact/ContactForm.tsx)                                                                                                                            | Contact form broken in production               |
| 2   | `t()` called outside React components in static data files — translations don't react to language changes at runtime | [`tarining-sites-data.ts`](../src/modules/achievements/personnal/trainig-sites/tarining-sites-data.ts), [`woody-carousel.data.ts`](../src/modules/achievements/professionnal/woody/woody-carousel.data.ts) | Carousel text not translated on language switch |
| 3   | Hardcoded French strings in modal components (`"Télecharger"`, `"Sortir"`, `"Fermer"`) instead of `t()`              | [`Modal.tsx`](../src/shared/components/modals/Modal.tsx), [`CarouselModal.tsx`](../src/shared/components/modals/CarouselModal.tsx)                                                                         | Modals always French regardless of language     |
| 4   | Typos in directory/file names: `trainig-sites/`, `tarining-sites-data.ts`, `useEmblaBNavigation.spec.ts`             | Multiple                                                                                                                                                                                                   | No functional impact, cosmetic only             |

---

## Summary

| Category                   | Before                                        | After                               |
| -------------------------- | --------------------------------------------- | ----------------------------------- |
| Total dependencies         | 19 runtime + 20 dev = **39**                  | 17 runtime + 14 dev = **31**        |
| Unused runtime deps        | 2                                             | 0                                   |
| Unused dev deps            | 4                                             | 0                                   |
| `type-check` script        | ❌ Missing                                    | ✅ Added                            |
| `test` script              | ❌ Broken                                     | ✅ Fixed                            |
| `test:watch` script        | ❌ Log redirect suppressed output             | ✅ Fixed                            |
| Biome schema version       | ❌ Mismatch (2.4.4 declared, 2.1.3 installed) | ✅ Aligned                          |
| Architecture documentation | ❌ Missing                                    | ✅ Created (`docs/architecture.md`) |
| README                     | ❌ Default Vite template                      | ✅ Updated                          |
