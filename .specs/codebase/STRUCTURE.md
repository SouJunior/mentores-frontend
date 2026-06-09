# Project Structure

**Root:** `/Users/brunobarreiras/projects/personal/mentores-frontend`

## Directory Tree

```
mentores-frontend/
├── docs/                        # Team documentation (git conventions, PR template, feature guide)
├── public/                      # Static assets (SVGs, images, logos, icons)
├── src/
│   ├── app/                     # Next.js App Router routes
│   │   ├── (auth)/              # Public: /login, /cadastro
│   │   │   ├── cadastro/page.tsx
│   │   │   └── login/page.tsx
│   │   ├── (with-header)/       # Protected: shared header layout
│   │   │   ├── account/         # /account/* tabs (personal-info, profile, password, schedule, delete-account)
│   │   │   ├── confirmacao/     # Email confirmation page
│   │   │   ├── faq/
│   │   │   ├── home/
│   │   │   ├── mentores/
│   │   │   ├── onBoarding/
│   │   │   ├── resetPassword/
│   │   │   └── setNewPassword/
│   │   ├── globals.css
│   │   └── layout.tsx           # Root layout (font, metadata, viewport)
│   ├── features/                # Feature slices
│   │   ├── account/
│   │   │   ├── actions/         # Server Actions for account mutations
│   │   │   ├── components/      # All account UI (tabs, modals, calendar, calendly)
│   │   │   └── types/
│   │   ├── auth/
│   │   │   ├── actions/         # Server Actions: login, logout, register, password reset
│   │   │   ├── components/      # Form components + modals
│   │   │   ├── constants/       # Error message strings
│   │   │   └── types/
│   │   ├── home/
│   │   │   └── components/      # Hero, mentor section, depo section, onboarding
│   │   └── mentors/
│   │       └── components/      # CardMentor, MentorsGrid, InputSearch
│   ├── proxy.ts                 # Next.js middleware (auth guard + redirect logic)
│   └── shared/
│       ├── components/          # Reusable UI components
│       │   ├── ui/              # shadcn/ui generated components
│       │   └── [component]/     # Custom: button, card, modal, select, spinner, etc.
│       ├── constants/           # static-info.ts (genders, specialties lists)
│       ├── context/             # React contexts (OnBoardingContext, EditPhotoContext)
│       ├── hooks/               # useBreakpoint
│       ├── layout/              # Header + Footer components
│       ├── lib/                 # fetch.ts, dayjs.ts, utils.ts (cn helper)
│       ├── styles/              # animations.ts, theme.ts
│       ├── types/               # Shared domain types (IMentor, Session, ICalendlyUserInfo, etc.)
│       └── utils/               # handleError, parse-session, validation schemas, etc.
├── Templates/                   # HTML email templates (register confirmation, reset password)
├── components.json              # shadcn/ui config
├── next.config.js
├── tsconfig.json
└── .prettierrc / .eslintrc.cjs
```

## Module Organization

### `src/features/account`

**Purpose:** All mentor account management (profile, personal info, password, schedule, Calendly integration, account deletion)
**Key files:** `actions/actions.ts` (all mutations), `components/account-page/` (tab views), `components/calendly-modals/` (4-step Calendly setup flow)

### `src/features/auth`

**Purpose:** Auth flows — login, register, password reset, email confirmation
**Key files:** `actions/actions.ts` (auth server actions), `components/form-login/`, `form-register/`, `form-new-pass/`

### `src/features/home`

**Purpose:** Landing page sections — hero, mentor highlights, testimonials, onboarding prompt
**Key files:** Loader/Skeleton pairs for async sections, `HomeInteractive.tsx` for client-side interactivity

### `src/features/mentors`

**Purpose:** Mentors listing page — grid, search/filter, mentor cards
**Key files:** `components/mentors-grid/`, `components/card-mentor/`, `components/input-search/`

### `src/shared`

**Purpose:** Everything reused across features
**Key files:** `lib/fetch.ts` (API client), `proxy.ts` (middleware), `lib/utils.ts` (cn), `components/modal/` (compound modal)

## Where Things Live

**API calls:** `src/shared/lib/fetch.ts` (primitives) → `src/features/*/actions/actions.ts` (usage)
**Auth guard:** `src/proxy.ts` (Next.js middleware)
**Route definitions:** `src/app/` directory structure
**Form validation schemas:** `src/shared/utils/*schema.ts`
**Global styles:** `src/app/globals.css`
**Domain types:** `src/shared/types/` + `src/features/*/types/`
