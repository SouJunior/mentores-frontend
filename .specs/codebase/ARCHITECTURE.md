# Architecture

**Pattern:** Feature-sliced monolith (Next.js App Router)

## High-Level Structure

```
src/
├── app/            # Next.js routes (thin pages, route groups)
│   ├── (auth)/     # Unauthenticated routes: /login, /cadastro
│   └── (with-header)/ # Authenticated routes with shared header layout
├── features/       # Feature modules (business logic + components)
│   ├── auth/
│   ├── account/
│   ├── home/
│   └── mentors/
└── shared/         # Cross-feature utilities, components, hooks, types
    ├── components/
    ├── context/
    ├── hooks/
    ├── layout/     # Header + Footer
    ├── lib/        # fetch, dayjs, utils
    ├── styles/
    ├── types/
    └── utils/
```

## Identified Patterns

### Server Actions

**Location:** `src/features/*/actions/actions.ts`
**Purpose:** All data mutations go through Next.js Server Actions (`'use server'`)
**Implementation:** Each action calls `safeFetch()`, reads cookies server-side, handles errors uniformly
**Example:** `src/features/auth/actions/actions.ts` — login, logout, register, password reset

### Server Components + Suspense Loaders

**Location:** `src/app/(with-header)/home/page.tsx`
**Purpose:** Async RSC fetches data; Suspense wraps with Loader/Skeleton pairs
**Implementation:** `*Loader.tsx` does the async fetch, `*Skeleton.tsx` is the fallback
**Example:** `MentorSectionLoader` + `MentorSectionSkeleton` in `src/features/home/components/mentor-section/`

### Feature Modules

**Location:** `src/features/[name]/`
**Purpose:** Self-contained slice with own components, actions, types, and constants
**Implementation:** Each feature owns: `actions/`, `components/`, `types/`, optional `constants/`
**Boundary:** Features may import from `shared/` but never from each other

### Compound Components

**Location:** `src/shared/components/modal/`, `src/features/account/components/calendar/`
**Purpose:** Composable UI primitives exposed as a namespace object
**Example:** `Modal.Root`, `Modal.Content`, `Modal.Control`, `Modal.Close`, etc.

### CVA Variants

**Location:** `src/shared/components/button/index.tsx`
**Purpose:** Type-safe, composable class variants using `class-variance-authority`
**Example:** `Button` with `variant` (primary/secondary/tertiary/danger) + `size` (xl/lg/md/sm)

## Data Flow

### Authentication

```
Browser → Next.js Middleware (proxy.ts)
  → checks cookies: token (JWT, httpOnly) + session (JSON, non-httpOnly)
  → redirects to /login if invalid/expired
  → server action (login) sets both cookies on success
  → redirect to / or /onBoarding based on registerComplete flag
```

### Data Fetching

```
RSC page → serverFetch<T>(path, { tags }) → NEXT_PUBLIC_API_URL + Bearer token from cookie
Client mutation → Server Action → safeFetch(path) → API → updateTag('tag') for cache invalidation
```

### Calendly Scheduling

```
Mentor sets calendlyName + agendaName via ScheduleTab
CardMentor constructs: https://calendly.com/{name}/{agenda}
User clicks → opens Calendly booking page in new tab
```

## Code Organization

**Approach:** Feature-sliced with shared layer
**Route groups:** `(auth)` for public auth routes, `(with-header)` for protected routes
**Client/Server split:** Pages are RSC by default; interactive parts use `'use client'` or separate `*Client.tsx` / `*Interactive.tsx` files
