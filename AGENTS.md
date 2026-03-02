# Agent Instructions for Link Shortener Project

This document provides comprehensive guidelines for AI agents and LLMs working on this project. These instructions ensure consistency, quality, and adherence to project standards.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Coding Standards](#coding-standards)
4. [Unit Testing](#unit-testing)
5. [Documentation](#documentation)

## ⚠️ CRITICAL: Required Reading Before Code Generation

**🚨 MANDATORY REQUIREMENT 🚨**

Before generating ANY code, you MUST:

1. **READ the relevant documentation files** in the `/docs` directory that apply to your task
2. **FOLLOW the patterns and guidelines** specified in those files
3. **DO NOT proceed** with code generation until you have reviewed the applicable documentation
4. **ONLY English** - All code, documentation, markdown files, code comments, JSDoc, and README files MUST be written in ENGLISH. This includes variable names, function names, type names, constants, file names, code comments, JSDoc documentation, markdown files in `/docs`, README files, commit messages, console logs, and error messages in code. The only exception is user-facing UI text in the application which can be in French.

This is **NOT OPTIONAL**. Failure to read the relevant documentation before generating code will result in:

- Incorrect implementations that don't follow project patterns
- Security vulnerabilities from improper authentication/authorization
- Inconsistent UI components that don't match the project's design system
- Wasted time fixing preventable mistakes

### Required Documentation by Topic

Consult these files based on the task at hand:

- **🔐 [Project Architecture](docs/architecture.md)** - **MUST READ** before implementing any authentication, route protection, user data access, or auth-related features
- **🎨 [UI Guidelines](docs/ui-compoents.md)** - **MUST READ** before implementing UI components;

**Workflow:**

1. Identify what you need to implement
2. Read the corresponding documentation file(s) completely
3. Apply the patterns and guidelines from the documentation
4. Only then generate code
5. After each generation run unit tests,run typescript type checking and linting to catch any issues early

## Project Overview

**Goal:** This is a personal portfolio describing Eric Juquel professional experience using React and TypeScript to showcase my work and skills . The portfolio uses French/English for its language using i18next.This project is a refacto from my existing portfolio that was coded by me 4 years ago in javascript and React 17 with MUI and the goal is to use modern pattern and architecture, only with Typescript and tailwind without MUI librarie. **/locales**.

**Starter:** You start from Human made from scratch codebase. Your task is to refactor and complete the implementation while adhering to the project's architectural and UI guidelines..

**Project Type:** React.js application  
**Styling:** Tailwind CSS v4

## Technology Stack

This application is frontend-only, built with React.js and TypeScript. It uses Tailwind CSS for styling and follows a component-based architecture. The project is structured as a monorepo using pnpm workspaces, allowing for modular development and shared dependencies.this is a serverless application, so there is no backend code. The only api reference is a mail sending api using Sengrid with credentials.

### Core Technologies

- **Runtime:** React 19.1.0
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x

### Development Tools

- **Package Manager:** pnpm (implied from workspace)
- **Linter:** biomejs/biome 2.1.3

### UI Libraries

- **Icons:** lucide-react: 0.575.0
- **Utilities:** vite-plugin-svgr, react-hook-form, embla-carousel-react

## Coding Standards

### General Principles

1. **Type Safety First**
   - Always use TypeScript with strict mode enabled
   - Avoid `any` types; use `unknown` or proper type definitions
   - Export and reuse type definitions across files

2. **Component Organization**
   - Use functional components with TypeScript
   - Place reusable components in appropriate directories
   - Keep components focused and single-responsibility

3. **File Naming**
   - Use kebab-case for directories: `link-manager/`
   - Use PascalCase for React components: `LinkCard.tsx`
   - Use camelCase for utilities and hooks: `useLinks.ts`
   - Use kebab-case for regular TypeScript files: `api-client.ts`

4. **Import Organization**
   - Group imports: external packages → internal modules → types → styles
   - Use path aliases (`@/`) defined in tsconfig.json
   - Avoid circular dependencies

5. **Code Style**
   - Use 2-space indentation
   - Use double quotes for strings (match ESLint config)
   - Use semicolons (TypeScript standard)
   - Prefer const over let; avoid var
   - Use arrow functions for callbacks and functional components

IMPORTANT: NO OVERINGENEERING. DO NOT ADD EXTRA FEATURES OR FUNCTIONALITY BEYOND WHAT IS SPECIFIED IN THE DOCUMENTATION AND REQUIREMENTS. FOCUS ON FOLLOWING THE GUIDELINES AND PATTERNS EXACTLY AS DESCRIBED.

### React.js Specific

1. **App Router Convention**
   - use react-router-dom: 7.6.0
   - Use file-based routing with `src/modules/core` directory
   - routes defined in `src/modules/core/router.ts` with lazy loading
   - Use `useNavigate` for programmatic navigation

### Security & Secrets

**⚠️ CRITICAL: NEVER commit secrets or sensitive data to version control.**

1. **Environment Files - What to Commit**

   **NEVER commit these files:**
   - ❌ `.env.local` - contains real secrets for development
   - ❌ `.env.production` - contains real production credentials
   - ❌ `.env.*.local` - any file with `.local` suffix

   **CAN be versioned (safe templates only):**
   - ✅ `.env.example` - template with placeholder values
   - ✅ `.env.production.example` - production template with placeholders

2. **Deployment Secrets**

   **For production deployments:**
   - Set environment variables via deployment platform ( Vercel Environment Variables)
   - Use platform-specific secret management (Vercel Environment Variables)
   - Never hardcode secrets in source code or commit them to git

3. **What Counts as a Secret**
   - API tokens and keys
   - Database connection strings
   - Service account credentials
   - OAuth client secrets
   - Encryption keys
   - Production URLs (if they expose internal infrastructure)

4. **Template Files**
   - Use `.example` suffix for safe template files
   - Replace all real values with `your_token_here` or similar placeholders
   - Add ⚠️ warnings in comments
   - Include instructions for developers

5. **Recovery from Accidental Commits**
   If secrets were committed:
   - Immediately rotate/revoke the exposed credentials
   - Remove from git history: `git rm --cached <file>` + commit
   - Never rely solely on deleting files - git history preserves them
   - Consider using tools like BFG Repo-Cleaner for history rewrite if needed

6. **Documentation Guidelines**

   **⚠️ CRITICAL: Never hardcode secrets in documentation files**
   - ❌ NEVER include real tokens, passwords, or API keys in `.md` files
   - ❌ NEVER include production URLs that expose infrastructure details
   - ✅ Use placeholders: `${VITE_API_BASE_URL}`, `${VITE_DIRECTUS_TOKEN}`
   - ✅ Use generic examples: `your_token_here`, `https://your-instance.example.com`
   - ✅ Add security warnings in documentation: "⚠️ Never commit this file with real values"

   **Examples:**

   ```markdown
   # ❌ BAD - Real credentials

   Token: QGZNfevT0qDPEckaCyqMNTFOL_3LGBtg
   URL: https://front-poc-lcl-d5cbb0crb6cbg6b8.azurewebsites.net

   # ✅ GOOD - Placeholders

   Token: ${VITE_DIRECTUS_TOKEN} (from environment variables)
   URL: ${VITE_API_BASE_URL} (configured in .env.local)

   # ✅ GOOD - Generic examples

   Token: your_directus_token_here
   URL: https://your-directus-instance.azurewebsites.net
   ```

   **Reason:** Documentation files are committed to git and shared publicly/internally. Exposing credentials creates security vulnerabilities.

### Database & CMS

### Authentication

## Unit Testing

### Philosophy

**Quality over quantity.** Focus on testing critical code paths that prevent regressions when adding new features. Avoid testing for coverage metrics alone.

### What to Test

1. **Critical Business Logic**
   - Functions with complex logic (use **vi.mock**)
   - Utility functions with edge cases (use **vi.mock** if needed)
   - Components with complex state or behavior

2. **Regression Prevention**
   - Bug fixes (add test that would have caught the bug)
   - Features that broke before
   - Public APIs that other code depends on

### What NOT to Test

- Simple presentational components
- Trivial getters/setters
- Third-party library behavior
- Implementation details (internal state, private functions)

### Testing Utilities

**Always use the wrappers from `src/tests/test-utils.tsx`:**

```typescript
// For components
import { renderWithProviders } from "@/tests/testing.tsx";

test("renders component", () => {
  renderWithProviders(<MyComponent />);
  // assertions...
});

// For React Query hooks
import { renderHookWithProviders } from "@/tests/test-utils";

test("fetches data", async () => {
  const { result } = renderHookWithProviders(() => useMyHook());
  // assertions...
});
```

**Benefits:**

- No cache bleed between tests
- Centralized provider setup

### File Organization

- Place tests in `__tests__/` directory next to source files
- Name test files: `[filename].test.ts` or `[filename].test.tsx`
- Use `.tsx` extension when testing JSX/hooks

```
src/
  modules/
      home
        __tests__/
            HomeView.test.tsx
```

### Best Practices

1. **Clean Mocks Between Tests**

   ```typescript
   beforeEach(() => {
     vi.clearAllMocks();
   });
   ```

2. **Use Proper Types**
   - Avoid `as any` - use `Partial<Type>` for partial mocks
   - Import and use actual types from source code

3. **Test Behavior, Not Implementation**
   - Test what the user/consumer sees
   - Don't test internal logic details

4. **Run Tests Before Commits**

   ```bashs

   ```

#### Example 1: Service Unit Test (with vi.mock)

```typescript
import { describe, it, expect, vi, beforeEach } from "vitest";
import { apiClient } from "@/api/client";
import { featureService } from "./feature.service";

vi.mock("@/api/client");

describe("featureService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should transform API response correctly", async () => {
    // Arrange
    const mockApiResponse = { data: [{ id: 1, title: "Test" }] };
    vi.mocked(apiClient.get).mockResolvedValue({ data: mockApiResponse });

    // Act
    const result = await featureService.getAll();

    // Assert
    expect(apiClient.get).toHaveBeenCalledWith(
      "/items/Feature",
      expect.any(Object),
    );
    expect(result).toEqual(mockApiResponse.data);
  });
});
```

## Documentation

### Code Comments

1. **When to Comment**
   - Complex business logic
   - Non-obvious algorithmic decisions
   - Workarounds for known issues
   - Public API functions

2. **JSDoc for Functions**

   ```typescript
   /**
    * Shortens a URL and stores it in the database
    * @param url - The original URL to shorten
    * @param userId - The authenticated user's ID
    * @returns The shortened URL object
    */
   ```

3. **Avoid Obvious Comments**
   - Don't comment what the code clearly shows
   - Focus on "why" not "what"

### Documentation Language

**CRITICAL:** All code, documentation, markdown files, code comments, JSDoc, and README files **MUST** be written in **ENGLISH**.

**This includes:**

- ✅ **Variable names**: `userName`, not `nomUtilisateur`
- ✅ **Function names**: `getUserData()`, not `obtenirDonneesUtilisateur()`
- ✅ **Type names**: `interface User`, not `interface Utilisateur`
- ✅ **Constants**: `MAX_RETRY_COUNT`, not `NOMBRE_MAX_TENTATIVES`
- ✅ **File names**: `user-profile.ts`, not `profil-utilisateur.ts`
- ✅ **Code comments**: English explanations only
- ✅ **JSDoc documentation**: English descriptions and examples
- ✅ **Markdown files in `/docs`**: English content
- ✅ **README files**: English instructions
- ✅ **Commit messages**: English descriptions
- ✅ **Console logs**: English messages (e.g., `console.log("User not found")`)
- ✅ **Error messages in code**: English text (e.g., `throw new Error("Invalid token")`)

**Exception:** Only the user-facing UI text in the application uses French (text displayed to end users in components).

**Examples:**

```typescript
// ❌ BAD - French naming
const nomUtilisateur = "Jean";
function obtenirDonnees() {
  /* ... */
}
interface ProfilUtilisateur {
  nom: string;
}

// ✅ GOOD - English naming
const userName = "Jean";
function getUserData() {
  /* ... */
}
interface UserProfile {
  name: string;
}
```

**Rationale:** English is the universal language for software development, ensuring code readability for international teams, easier collaboration, and compatibility with global libraries and frameworks.

### Git Commit Messages

**Format:** Keep commit messages simple, short, and understandable.

**Structure:**

```
<type>(<scope>): <short description>

<optional body with key details>
- Bullet points for main changes
- Test results if relevant
- Known issues if any
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build/tooling changes

**Best Practices:**

1. **Keep it concise** - Title under 72 characters
2. **Be specific** - Describe what changed, not why (details in body)
3. **List key changes** - Use bullet points in body for clarity
4. **Include metrics** - Test counts, files changed, etc.
5. **Note issues** - Mention known problems or blockers

**Good Examples:**

```bash
# Simple feature
feat(api): Add Directus services for Feature and Universe



# Bug fix
fix(auth): Resolve token refresh infinite loop



# Documentation
docs: Update Phase 2 summary and migration plan


```

**Bad Examples:**

```bash
# Too vague
feat: stuff

# Too detailed (details belong in body)
feat(api): Add directus-feature.service.ts with getAll, getById, getRelatedFeatures methods and directus-feature-query.ts hooks...

# Missing context
fix: bug

# Wrong language
feat: Ajout des services Directus
```

### Component Documentation

1. **Props Interface**
   - Document complex props with JSDoc
   - Provide examples for non-trivial usage
   - Export prop types for reuse

2. **Component Purpose**
   - Add brief description for complex components
   - Document any non-standard behavior
   - Note dependencies or requirements

## Quick Reference

### Common Commands

```bash
pnpm  dev          # Start development server
pnpm  build        # Build for production
npm  type-check     # Typescript check
npm  lint         # Run ESLint

```

### Path Alias

- Use `@/` to reference project root: `import { db } from "@/db"`

### Environment Variables

Required variables (add to `.env`):

- `FIGMA_TOKEN` - Figma API token for design reference

---

**Note:** This is a living document. Update these guidelines as the project evolves. When in doubt, prioritize consistency with existing code patterns in the project.
