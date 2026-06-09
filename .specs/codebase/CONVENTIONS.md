# Code Conventions

## Naming Conventions

**Files/Directories:** kebab-case for directories and component files (`card-mentor/`, `modal-cancel/`, `form-login/`); PascalCase for named component files (`DepoSectionLoader.tsx`, `HomeClient.tsx`, `ModalRoot.tsx`)
Examples: `card-mentor/index.tsx`, `form-register/FormRegisterFields/index.tsx`

**Components:** PascalCase named exports
Examples: `CardMentor`, `Button`, `ModalRoot`, `HeroSection`

**Functions/Hooks:** camelCase
Examples: `safeFetch`, `serverFetch`, `parseSession`, `handleError`, `useOnBoardingContext`

**Types/Interfaces:** PascalCase, interfaces prefixed with `I` for service/DTO shapes
Examples: `IMentor`, `IUserUpdate`, `ICalendlyUserInfo`, `UserLoginResponse`

**Constants:** camelCase for objects/arrays, SCREAMING_SNAKE_CASE not observed
Examples: `genders` (array in static-info.ts)

**Server Actions files:** always named `actions.ts` under `actions/` per feature

## Code Organization

**Import ordering:** third-party → internal (`@/features/...` → `@/shared/...`) → relative
**Path alias:** `@/` maps to `src/`
**Component file structure:** single named export per `index.tsx`; multi-part components export a namespace object (e.g. `Modal`, `Calendar`)

## Type Safety

**Approach:** TypeScript strict; interfaces for domain models, `yup.InferType` for form schemas
**`any` usage:** `warn` level in ESLint — present in some older components (`[key: string]: any` in ButtonProps)
**Form types:** inferred from Yup schema via `yup.InferType<typeof schema>`

## Error Handling

**API errors:** `readErrorMessage(response)` helper parses JSON `message` field (string or array), falls back to generic Portuguese string
**Display:** `react-toastify` toast errors via `handleError(message)` utility; success via `toast-success` component
**Server Actions return:** `{ error: string }` on failure, `{}` on success — callers check `result?.error`

## Comments/Documentation

**Style:** minimal; no JSDoc; occasional inline comments for non-obvious logic

## Styling

**Approach:** Tailwind utility classes as primary; inline `style` props for dynamic values when Tailwind isn't sufficient
**Composition:** `cn()` from `@/shared/lib/utils` (clsx + tailwind-merge) for conditional classes
**Variants:** CVA for reusable component variants (Button, Tag, etc.)
**Theme:** CSS custom properties defined in `globals.css`; JS theme tokens in `src/shared/styles/theme.ts`

## Formatting

- Single quotes, 2-space indent, semicolons, trailing commas (ES5), LF line endings
- Arrow functions: parens omitted for single param (`arrowParens: "avoid"`)
