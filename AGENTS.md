# AGENTS.md

## Project context

This repository is an existing frontend codebase in evolution, not a new project.

Before any suggestion or change, inspect the real files and infer the project's current technologies, visual architecture, folder structure, naming conventions, component patterns, styling approach, routing, navigation, authentication, API contracts, and coding style from the code that already exists.

Observed stack and conventions:

- Next.js 13 with the Pages Router under `src/pages`.
- React 18 with TypeScript and path aliases using `@/*`.
- Styling uses `styled-components`, `ThemeProvider`, `GlobalStyle`, page style files under `src/styles/pages`, and a shared theme in `src/styles/theme.ts`.
- UI is organized with an atomic design-inspired structure under `src/components/atoms`, `src/components/molecules`, and `src/components/organisms`.
- Global app providers are configured in `src/pages/_app.tsx`, including React Query, auth context, styled-components theme, global styles, and the shared layout.
- `src/pages/_document.tsx` handles styled-components server-side style collection and document-level setup.
- API access uses the configured Axios instance in `src/lib/axios.ts`.
- Data fetching commonly uses `@tanstack/react-query` through service hooks under `src/services/user`.
- Forms use existing Formik/Yup patterns and local schema utilities where already established.
- Authentication/session state uses `src/context/Auth/AuthContext.tsx`, `getToken`, browser storage, JWT decoding, and existing user login/logout services.
- Additional shared state is implemented through local contexts only where the project already does so, such as onboarding and edit photo flows.
- Assets live under `src/assets` and are imported directly into pages/components.
- Navigation uses Next.js `Link`, `next/router`, and existing route names in `src/pages`.
- No dedicated test files or test scripts are currently present; use only scripts that exist in `package.json`.

## Frontend architecture rules

Preserve the existing frontend organization and responsibility boundaries.

Pages and screens must follow the role established by files under `src/pages`:

- Compose atoms, molecules, organisms, layout pieces, contexts, services, and page-level styled components.
- Handle route/query concerns with the existing Next.js router patterns.
- Keep page-specific layout styles in the existing `src/styles/pages` pattern when that is how similar pages are organized.
- Avoid embedding reusable UI primitives or API-client logic directly into pages when an existing component/service pattern applies.

Components must follow the current atomic design structure:

- Place small reusable primitives in `atoms`.
- Place composed form blocks, modals, cards, calendar parts, and medium-sized UI pieces in `molecules`.
- Place larger page sections, header/footer, account tabs, onboarding sections, grids, and feature-level UI assemblies in `organisms`.
- Keep component-local styled-components in nearby `style.ts`, `styles.ts`, `styled.ts`, or existing local style files according to the component's current folder pattern.

Hooks must remain focused and follow the existing `src/hooks` style:

- Use hooks for reusable browser/react behavior such as protected routes or breakpoints.
- Do not move ordinary component state into hooks unless the same reusable behavior is needed in more than one place.

Contexts/providers must follow the existing context patterns:

- Use contexts for cross-tree state that is already global or flow-level, such as auth/session or edit-photo/onboarding flows.
- Do not turn local component state into context without a proven need.

Services and API clients must follow the existing service structure:

- Keep the shared Axios client in `src/lib/axios.ts`.
- Keep React Query service hooks under `src/services/user` when following existing data-fetching patterns.
- Keep service interfaces under `src/services/interfaces`.
- Preserve existing backend endpoint paths, request payloads, response handling, session storage keys, and query keys unless a proven API contract change requires it.

Types must follow existing placement:

- Use service interface files for service/API shapes.
- Use local component types when they are only needed by one component.
- Preserve the existing styled-components theme type declaration under `src/@types`.

Routing and navigation must preserve the Pages Router:

- Do not introduce the App Router.
- Do not change route paths, redirects, query parameter names, protected page behavior, or layout inclusion/exclusion rules unless explicitly required.

## Styling rules

Preserve the existing visual system and styling stack.

- Use `styled-components` for styles.
- Use values from `src/styles/theme.ts` when matching existing color, font-size, and breakpoint patterns.
- Use `GlobalStyle` for global resets/classes only when a truly global style is required.
- Keep page styles in `src/styles/pages` when working on pages that already use that convention.
- Keep component styles colocated with the component when the component already follows that convention.
- Preserve the current visual language, layout density, responsive behavior, buttons, modals, cards, forms, tabs, dropdowns, spinners, toast usage, and asset usage.
- Reuse existing atoms/molecules/organisms before creating new UI components.
- Do not replace existing styled-components code with CSS modules, Tailwind, inline style systems, or a different design system.
- Do not replace existing Radix, MUI icon, Phosphor, Toastify, Swiper, or Next Image usage with alternatives unless explicitly requested.

## Dependency rules

Do not add new technologies, libraries, frameworks, routing systems, styling libraries, state management libraries, HTTP clients, test libraries, architecture styles, package managers, or folder structures unless explicitly requested.

Do not replace existing libraries. In particular, preserve the current use of Next.js Pages Router, React, TypeScript, styled-components, React Query, Axios, Formik, Yup, Radix UI, MUI icons, Phosphor, Toastify, cookies-next, jwt-decode, and npm.

Do not modify `package.json`, `package-lock.json`, `tsconfig.json`, ESLint config, Prettier config, Next config, environment files, build config, or bundler config unless the task explicitly requires it and the reason is explained first.

## Refactoring rules

Prefer small, focused, safe, and verifiable changes.

Do not perform broad rewrites or speculative refactors without explicit authorization.

Do not move files, rename folders, rename components, rename hooks, rename contexts, rename services, rename types, alter routes, alter public component props, or change API contracts unless there is a proven bug or a clear consistency problem that requires it.

Do not create new hooks, utils, contexts, services, providers, abstractions, base components, or shared helpers just because code could be extracted. Only do so when the project already uses that pattern for the same responsibility and the extraction solves a real local problem.

Do not transform everything into hooks, utils, contexts, or services if that is not the pattern already established for the affected feature.

Do not create alternative patterns for responsibilities that already have an established local pattern.

When fixing code, keep changes as close as possible to the affected page/component/service and preserve existing naming, props, response shapes, style conventions, and user-facing behavior.

## Review rules

When reviewing code, classify findings by priority:

- P0: broken user flow, security/session risk, data loss, build failure, serious runtime failure, or production-blocking issue.
- P1: architecture violation, API contract regression, route/navigation regression, authentication/session boundary issue, responsibility boundary problem, or duplicated logic with real maintenance risk.
- P2: accessibility issue, responsive/layout issue, readability, naming, organization, minor typing issue, local simplification, or missing focused verification.
- P3: optional polish or low-risk improvement.

Every finding must include:

- File path.
- Problem.
- Why it matters.
- Existing project pattern that should be followed.
- Suggested correction.
- Whether code should be changed now or only documented.

Lead reviews with findings, ordered by severity. Keep summaries secondary and brief.

## Testing and verification

After code changes, run only existing project commands from `package.json`.

Use the narrowest relevant existing checks:

- `npm run build`
- `npm run lint`

Use `npm run lint:fix` only when intentionally applying lint fixes.

Do not invent new test, typecheck, build, or validation commands. There is currently no dedicated `test` or `typecheck` script in `package.json`; if tests or typecheck are requested, explain that no matching script exists unless the project adds one explicitly.

For documentation-only changes, explain that runtime checks were not run because no executable code changed.

If a check cannot be run, explain why.

## Forbidden actions

- Do not treat this repository as greenfield.
- Do not add new dependencies.
- Do not change package managers.
- Do not replace Next.js Pages Router, React, TypeScript, styled-components, React Query, Axios, Formik/Yup, Radix, MUI icons, Toastify, or existing session/auth patterns.
- Do not introduce the Next.js App Router.
- Do not introduce new architecture or folder structures.
- Do not move files or rename public contracts without proven need.
- Do not alter routes, query parameters, navigation behavior, protected page behavior, API payloads, or API response expectations without proven need.
- Do not make broad refactors without explicit authorization.
- Do not turn local state into context or services without a real cross-tree/reuse need.
- Do not modify package, lock, TypeScript, lint, format, Next, environment, build, or bundler configuration files without explicit authorization.
- Do not alter unrelated files.
