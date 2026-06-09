# External Integrations

## Backend REST API

**Service:** Custom backend (NestJS presumed, not in this repo)
**Purpose:** All data — auth, mentor profiles, testimonials, Calendly info
**Implementation:** `src/shared/lib/fetch.ts` — `safeFetch` (mutations) + `serverFetch<T>` (reads)
**Configuration:** `NEXT_PUBLIC_API_URL` env var (default: `http://localhost:3000`)
**Authentication:** Bearer JWT from `token` httpOnly cookie injected on every request

### Key Endpoints Used

| Method | Path                                               | Feature                   |
| ------ | -------------------------------------------------- | ------------------------- |
| POST   | `/auth/login`                                      | Login                     |
| POST   | `/mentor`                                          | Register                  |
| PUT    | `/mentor`                                          | Update mentor data        |
| PATCH  | `/mentor/change_password`                          | Change password           |
| PATCH  | `/mentor/delete-mentor`                            | Soft-delete account       |
| POST   | `/mentor/restoreAccount/:email`                    | Send password reset email |
| PATCH  | `/mentor/restoreAccount/redefinePass?code=&email=` | Set new password          |
| POST   | `/calendly`                                        | Create Calendly info      |
| PUT    | `/calendly/mentorInfo`                             | Update Calendly info      |
| POST   | `/account-deletion-feedback`                       | Submit deletion reason    |

## Calendly

**Service:** Calendly scheduling platform
**Purpose:** Mentor scheduling — mentees book sessions via Calendly
**Implementation:** `src/features/account/components/calendly/` + `calendly-modals/` (4-step setup)
**Configuration:** Mentor stores `calendlyName` + `agendaName` via account settings
**Authentication:** No API key — uses public Calendly booking URLs
**Key URL pattern:** `https://calendly.com/{calendlyName}/{agendaName}`

### 4-Step Calendly Setup Flow

Located in `src/features/account/components/calendly-modals/`:

1. `ModalCalendlyStep1` — intro / instructions
2. `ModalCalendlyStep2` — enter Calendly username
3. `ModalCalendlyStep3` — enter agenda (event type) name
4. `ModalCalendlyStep4` — confirmation / copy link

## AWS S3

**Service:** Amazon S3 (bucket: `vagas-dev`)
**Purpose:** Mentor profile photo storage
**Implementation:** `next.config.js` remote pattern `vagas-dev.s3.amazonaws.com`; profile photos fetched via `mentor.profile` URL
**Authentication:** Public read URLs (no signed URLs observed)

## Freepik CDN

**Service:** Freepik image CDN
**Purpose:** Supplemental images (permitted remote pattern in next.config.js)
**Implementation:** `img.freepik.com` whitelisted for `next/image`

## Next.js Middleware (Auth Guard)

**Location:** `src/proxy.ts` (exported as `proxy` + `config`)
**Purpose:** Route protection — redirects unauthenticated users to `/login`, authenticated to `/` from auth routes
**Implementation:** Decodes JWT locally (no network call), checks `exp` claim + presence of `session` cookie
**Matcher:** `/account/:path*`, `/onBoarding/:path*`, `/login`, `/cadastro`, `/resetPassword`, `/setNewPassword`

## Email Templates

**Location:** `Templates/EmailRegister/`, `Templates/ResetPassword/`
**Purpose:** HTML email templates for registration confirmation and password reset
**Implementation:** Static HTML files — presumably sent by the backend, not Next.js directly
