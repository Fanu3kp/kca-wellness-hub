# KCA Wellness Hub — Frontend

Angular client for the KCA University Peer Counselling & Wellness Hub.

## Project Overview

The KCA Wellness Hub frontend is a standalone Angular application that provides:

- Public landing page and campus selection
- Student authentication (login/register)
- Student dashboard with mood check-in, wellness resources, appointments, and support pathways
- Peer counselor workspace with request management and chat
- Guidance & counselling staff dashboard with escalations
- Administrator dashboard for users, campuses, and resources
- Campus wellness events, notifications, and chat conversations

## Technology Stack

| Technology | Version |
|---|---|
| Angular | 17.3.x |
| TypeScript | ~5.4.2 |
| SCSS | Inline (Angular build) |
| Angular Router | 17.3.x |
| RxJS | ~7.8.0 |
| Zone.js | ~0.14.3 |
| Angular CLI | ^17.3.11 |
| Karma + Jasmine | ~5.1.0 / ~6.4.0 |

No external UI or icon libraries are included in `package.json`. The application uses its own shared UI components (buttons, cards, badges, alerts, modals, loading spinners, empty states, and icons). All styling uses SCSS with CSS custom properties defined in `src/styles.scss`.

**No third-party UI component frameworks** (e.g., Angular Material, PrimeNG, Bootstrap) are used.

## Prerequisites

- **Node.js 18 or newer** (Angular 17 requires Node 18+) — must be installed and available on your system PATH
- **npm** (included with Node.js)
- **Angular CLI** (installed locally via `node_modules`; run via `npx ng` or `npm start`)
- A running Laravel backend at `http://localhost:8000` (PHP and Composer required on the server)
- MySQL database configured for the backend (or SQLite as fallback)

> **Note:** This project requires both Node.js (for the frontend) and PHP (for the backend) to be installed and available on your system PATH. If `node`, `npm`, or `php` commands are not found, install them before proceeding.

## Installation

From the project root:

```bash
cd frontend
npm install
```

## Environment Configuration

The frontend has no `.env` file. Environment configuration is done through TypeScript files:

```
frontend/src/environments/environment.ts
```

Key configuration values:

```ts
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8000/api',
  bookingUrls: {
    belinda: 'https://example.com/kca-wellness/belinda',
    emily: 'https://example.com/kca-wellness/emily',
    tasha: 'https://example.com/kca-wellness/tasha'
  }
};
```

- `apiBaseUrl` — the Laravel API base URL. The frontend connects to the backend at this address.
- `bookingUrls` — external booking URLs for counsellor appointments.

For production builds, create a `environment.prod.ts` file (not present by default) or update `environment.ts` before building.

## Running the Development Server

```bash
npm start
```

Or equivalently:

```bash
npx ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The development server automatically reloads after source changes.

## Building for Production

```bash
npm run build
```

Production artifacts are written to:

```
frontend/dist/frontend
```

The build uses the production configuration defined in `angular.json`, which includes output hashing, budget warnings, and optimization.

## Running Tests

```bash
npm test
```

The test runner uses Chrome, Karma, and Jasmine. To run once without watch mode:

```bash
npm test -- --watch=false
```

## Frontend Folder Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── dashboard/
│   │   │       └── admin-dashboard.component.ts
│   │   ├── appointments/
│   │   │   └── appointments.component.ts
│   │   ├── academy/
│   │   │   └── academy.component.ts
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── login.component.ts
│   │   │   └── register/
│   │   │       └── register.component.ts
│   │   ├── campus-selection/
│   │   │   └── campus-selection.component.ts
│   │   ├── chat/
│   │   │   └── chat.component.ts
│   │   ├── events/
│   │   │   └── events.component.ts
│   │   ├── guidance/
│   │   │   └── dashboard/
│   │   │       └── guidance-dashboard.component.ts
│   │   ├── landing/
│   │   │   └── landing.component.ts
│   │   ├── layouts/
│   │   │   ├── public-layout/
│   │   │   │   └── public-layout.component.ts
│   │   │   ├── student-layout/
│   │   │   │   └── student-layout.component.ts
│   │   │   └── role-layout/
│   │   │       └── role-layout.component.ts
│   │   ├── notifications/
│   │   │   └── notifications.component.ts
│   │   ├── peer-counselor/
│   │   │   └── dashboard/
│   │   │       └── peer-counselor-dashboard.component.ts
│   │   ├── shared/
│   │   │   └── components/
│   │   │       ├── alert/
│   │   │       ├── badge/
│   │   │       ├── button/
│   │   │       ├── card/
│   │   │       ├── campus-selector/
│   │   │       ├── empty-state/
│   │   │       ├── footer/
│   │   │       ├── header/
│   │   │       ├── loading/
│   │   │       ├── modal/
│   │   │       ├── mobile-nav/
│   │   │       └── ui-icon/
│   │   ├── student/
│   │   │   ├── dashboard/
│   │   │   │   └── student-dashboard.component.ts
│   │   │   ├── peer-counselors/
│   │   │   │   └── peer-counselors.component.ts
│   │   │   ├── profile/
│   │   │   │   └── profile.component.ts
│   │   │   ├── quick-help/
│   │   │   │   └── quick-help.component.ts
│   │   │   ├── resources/
│   │   │   │   └── resources.component.ts
│   │   │   ├── urgent-help/
│   │   │   │   └── urgent-help.component.ts
│   │   │   └── wellness/
│   │   │       └── wellness.component.ts
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   ├── auth.guard.ts
│   │   │   │   └── role.guard.ts
│   │   │   ├── interceptors/
│   │   │   │   └── auth.interceptor.ts
│   │   │   ├── models/
│   │   │   │   └── domain.model.ts
│   │   │   └── services/
│   │   │       ├── api.service.ts
│   │   │       ├── auth.service.ts
│   │   │       ├── campus.service.ts
│   │   │       ├── notification.service.ts
│   │   │       └── wellness.service.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── app.component.spec.ts
│   ├── assets/
│   ├── environments/
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── .editorconfig
```

## Routes and Navigation

Routes are defined in `frontend/src/app/app.routes.ts`. The application uses standalone components with lazy-loaded routes.

### Public Routes (no authentication required)

| Path | Component | Description |
|---|---|---|
| `/landing` | `LandingComponent` | Public landing page |
| `/campus-selection` | `CampusSelectionComponent` | Select your campus |
| `/login` | `LoginComponent` | Sign in |
| `/register` | `RegisterComponent` | Create an account |
| `/events` | `EventsComponent` | Campus wellness events |

### Authenticated Student Routes (`AuthGuard` required)

| Path | Component | Description |
|---|---|---|
| `/student/dashboard` | `StudentDashboardComponent` | Student dashboard |
| `/student/quick-help` | `QuickHelpComponent` | Support navigator |
| `/student/wellness` | `WellnessComponent` | Breathing exercises, activities |
| `/student/resources` | `ResourcesComponent` | Wellness resource library |
| `/student/resources/:resourceId` | `ResourcesComponent` | Resource detail |
| `/student/appointments` | `AppointmentsComponent` | Appointment booking |
| `/student/peer-counselors` | `PeerCounselorsComponent` | Peer counselor directory |
| `/student/profile` | `ProfileComponent` | User profile |
| `/student/urgent-help` | `UrgentHelpComponent` | Urgent support contacts |
| `/student/chat` | `ChatComponent` | Messaging |
| `/student/academy` | `AcademyComponent` | Training modules |
| `/student/notifications` | `NotificationsComponent` | Notifications |

### Peer Counselor Routes (`RoleGuard`, role: `peer_counselor`)

| Path | Component | Description |
|---|---|---|
| `/peer-counselor/dashboard` | `PeerCounselorDashboardComponent` | Counselor workspace |
| `/peer-counselor/training` | `AcademyComponent` | Training modules |
| `/peer-counselor/requests` | `PeerCounselorDashboardComponent` | Requests view |
| `/peer-counselor/conversations` | `ChatComponent` | Messaging |

### Guidance Staff Routes (`RoleGuard`, role: `guidance_staff`)

| Path | Component | Description |
|---|---|---|
| `/guidance/dashboard` | `GuidanceDashboardComponent` | Guidance workspace |
| `/guidance/escalations` | `GuidanceDashboardComponent` | Escalations view |
| `/guidance/appointments` | `AppointmentsComponent` | Appointment management |
| `/guidance/resources` | `ResourcesComponent` | Resource management |

### Admin Routes (`RoleGuard`, role: `admin`)

| Path | Component | Description |
|---|---|---|
| `/admin/dashboard` | `AdminDashboardComponent` | Admin workspace |
| `/admin/users` | `AdminDashboardComponent` | User management view |
| `/admin/campuses` | `AdminDashboardComponent` | Campus management view |
| `/admin/reports` | `AdminDashboardComponent` | Reports view |

The root path `/` redirects to `/landing`. Unknown paths redirect to `/landing`.

## Layout Components

- **`PublicLayoutComponent`** — wraps landing, authentication, campus selection, and public content pages.
- **`StudentLayoutComponent`** — authenticated student navigation shell and dashboard layout.
- **`RoleLayoutComponent`** — shared shell for peer counselor, guidance staff, and administrator areas.
- **`HeaderComponent`** — desktop navigation, user controls, notification status, and role-specific links.
- **`MobileNavComponent`** — responsive mobile navigation sidebar.
- **`FooterComponent`** — public-page footer.
- **`CampusSelectorComponent`** — campus selection widget used across layouts.

## Shared Components

Located in `frontend/src/app/shared/components/`:

| Component | Purpose |
|---|---|
| `CardComponent` | Content card container |
| `BadgeComponent` | Status and category badges |
| `AlertComponent` | Informational and error alerts |
| `ButtonComponent` | Action buttons |
| `ModalComponent` | Dialog overlays |
| `LoadingComponent` | Loading spinner |
| `EmptyStateComponent` | Empty data placeholder |
| `UiIconComponent` | Icon rendering |
| `HeaderComponent` | Site header and navigation |
| `MobileNavComponent` | Mobile navigation |
| `FooterComponent` | Site footer |
| `CampusSelectorComponent` | Campus picker |

## Core Services

- **`ApiService`** (`core/services/api.service.ts`) — typed wrapper around Angular `HttpClient`. Provides `get`, `post`, `put`, `patch`, `delete` methods with automatic URL construction and query parameter handling.
- **`AuthService`** (`core/services/auth.service.ts`) — login, registration, logout, current-user state (RxJS `BehaviorSubject`), and role checks.
- **`CampusService`** (`core/services/campus.service.ts`) — campus API integration, local fallback campus data, and selected-campus state management via `BehaviorSubject` and session storage.
- **`WellnessService`** (`core/services/wellness.service.ts`) — resources, events, training modules, appointment options, appointment creation, social links, and support pathway recommendations. Includes local fallback data for offline use.
- **`NotificationService`** (`core/services/notification.service.ts`) — notification loading, unread counts, and mark-all-read behavior. Includes local fallback data.

## Models

All frontend models are defined in `frontend/src/app/core/models/domain.model.ts`:

- `UserRole` — `'student' | 'peer_counselor' | 'guidance_staff' | 'admin'`
- `Campus` — campus information with support types and accent color
- `User` — authenticated user with role and campus
- `SupportPathway` — wellness recommendation pathways
- `WellnessResource` — resource library items
- `AppointmentOption` — booking provider options
- `NotificationItem` — notification entries
- `TrainingModule` — peer counselor training modules
- `Appointment` — appointment data with status

## Guards and Interceptor

- **`AuthGuard`** (`core/guards/auth.guard.ts`) — loads the current user before protecting authenticated routes. Redirects to `/login` with `returnTo` query parameter if unauthenticated.
- **`RoleGuard`** (`core/guards/role.guard.ts`) — checks the current user's role before allowing role-specific routes. Redirects to `/student` if unauthorized.
- **`authInterceptor`** (`core/interceptors/auth.interceptor.ts`) — attaches the stored bearer token (`Authorization: Bearer <token>`) and `X-Requested-With: XMLHttpRequest` header to API requests. Uses `withCredentials: true` for cookie-based authentication.

## Authentication Approach

The frontend uses Laravel Sanctum token-based authentication:

1. On login/register, the backend returns a plain-text Sanctum token.
2. The token is stored in **browser session storage** under the key `kca_access_token`.
3. The `authInterceptor` attaches the token as an `Authorization: Bearer <token>` header on all API requests.
4. The `AuthService` maintains the current user state via a `BehaviorSubject<User | null>`.
5. The `AuthGuard` and `RoleGuard` check this state before allowing route navigation.
6. On logout, the token is removed from session storage and the backend token is deleted.

**Note:** Tokens are stored in session storage (not localStorage), so they are cleared when the browser session ends. No sensitive counselling content is stored in browser storage.

## API/Backend Connection Configuration

The main API base URL is configured in `frontend/src/environments/environment.ts`:

```ts
apiBaseUrl: 'http://localhost:8000/api'
```

The frontend expects Laravel JSON responses in either of these shapes:

```json
{ "data": [] }
```

or paginated:

```json
{ "data": { "data": [], "current_page": 1, "last_page": 1 } }
```

The service layer normalizes collection responses so components can work with arrays.

### Key API Endpoints Used by the Frontend

| Method | Endpoint | Service |
|---|---|---|
| POST | `/register` | AuthService |
| POST | `/login` | AuthService |
| POST | `/logout` | AuthService |
| GET | `/user` | AuthService |
| GET | `/campuses` | CampusService |
| GET | `/wellness-resources` | WellnessService |
| GET | `/events` | WellnessService |
| GET | `/training-modules` | WellnessService |
| GET | `/booking-providers` | WellnessService |
| POST | `/appointments` | WellnessService |
| GET | `/notifications` | NotificationService |
| PATCH | `/notifications/read-all` | NotificationService |
| GET | `/conversations` | ChatComponent |
| POST | `/conversations` | ChatComponent |
| GET/POST/PUT/PATCH/DELETE | `/conversations/{id}/messages` | ChatComponent |

### Booking URLs

External booking URLs are configured in `environment.ts` and used by the `AppointmentsComponent` to open external booking pages:

```ts
bookingUrls: {
  belinda: 'https://example.com/kca-wellness/belinda',
  emily: 'https://example.com/kca-wellness/emily',
  tasha: 'https://example.com/kca-wellness/tasha'
}
```

## Responsive Design

The application is designed for desktop, tablet, and mobile:

- **`MobileNavComponent`** provides a responsive mobile navigation sidebar.
- **`HeaderComponent`** handles desktop navigation.
- Layouts (`PublicLayout`, `StudentLayout`, `RoleLayout`) adapt to viewport size.
- Base styles in `src/styles.scss` set `min-width: 320px` and use relative units.
- SCSS is used for all component styles (configured in `angular.json` as `inlineStyleLanguage: 'scss'`).

The specific CSS breakpoints and responsive rules are defined within each component's SCSS file.

## Troubleshooting

### API requests fail

1. Confirm the Laravel server is running on port `8000`.
2. Confirm `apiBaseUrl` in `environment.ts` points to the correct API host.
3. Confirm the browser is allowed by Laravel CORS configuration (`FRONTEND_ALLOWED_ORIGINS` in backend `.env`).
4. Confirm the browser has a valid session token after login.

### Login succeeds but protected pages redirect to login

Clear the browser session storage, log in again, and confirm the `/user` endpoint returns the authenticated profile.

### Build fails after dependency changes

```bash
npm install
npm run build
```

If the installation is corrupted, remove `node_modules` and reinstall:

```bash
rm -rf node_modules dist
npm install
npm run build
```

On Windows PowerShell, use `Remove-Item -Recurse -Force node_modules,dist` instead of `rm -rf`.

### Campus data is unavailable

The campus service includes local fallback data so the interface remains usable if the API is temporarily unavailable. Campus records are loaded from the backend when available.

### Appointment booking URLs are placeholders

The booking URLs in `frontend/src/environments/environment.ts` (`https://example.com/kca-wellness/...`) are **placeholders**. These must be replaced with the actual external booking system URLs before deployment. The corresponding URLs are also configured in `backend/.env` as `BOOKING_URL_BELINDA_MAIN`, `BOOKING_URL_BELINDA_VIRTUAL`, `BOOKING_URL_EMILY_MAIN`, `BOOKING_URL_EMILY_VIRTUAL`, `BOOKING_URL_TASHA_TOWN`, and `BOOKING_URL_TASHA_VIRTUAL`.
