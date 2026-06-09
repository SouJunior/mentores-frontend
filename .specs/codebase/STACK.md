# Tech Stack

**Analyzed:** 2026-06-09

## Core

- Framework: Next.js 16.2.7 (App Router)
- Language: TypeScript 5.1.6
- Runtime: Node.js (server components + server actions)
- Package manager: pnpm (pnpm-workspace.yaml)

## Frontend

- UI Framework: React 19.2.7
- Styling: Tailwind CSS 4.3 + CVA (class-variance-authority) + tailwind-merge + clsx
- State Management: React Context + Formik (form state)
- Form Handling: Formik 2.4.9 + Yup 1.7.1 (also react-hook-form resolvers installed but less used)
- Animation: Framer Motion 10.13
- Date: Day.js 1.11.21
- Carousel: Swiper 12.2

## UI Components

- Component system: custom shared components + shadcn/ui (Base UI headless primitives via @base-ui/react)
- Icons: Lucide React + Phosphor React

## Backend

- API Style: REST (external backend, not in this repo)
- Authentication: JWT stored in httpOnly cookies (`token`) + non-httpOnly session cookie (`session`)

## Testing

- Unit: none detected
- Integration: none detected
- E2E: none detected

## External Services

- Auth: custom JWT-based REST API
- Scheduling: Calendly (deep integration via username/agenda links)
- Images: AWS S3 (vagas-dev.s3.amazonaws.com) + Freepik CDN
- Notifications: react-toastify 11.1

## Development Tools

- Linter: ESLint 8 + @rocketseat/eslint-config + eslint-plugin-prettier
- Formatter: Prettier 3.2.5
- Build output: standalone (next.config.js `output: 'standalone'`)
