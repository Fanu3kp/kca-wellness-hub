# KCA Wellness Hub — Backend

Laravel API for the KCA University Peer Counselling & Wellness Hub.

## Project Overview

The KCA Wellness Hub backend is a Laravel API that provides:

- User authentication and registration with role-based access control
- Campus management and selection
- Wellness resource library (published/unpublished)
- Campus wellness events
- Training modules for peer counselors
- Social links
- Appointment booking with booking provider integration
- Support requests, conversations, and messaging
- Notifications with read/unread management
- Referrals and escalations
- User and role administration
- Audit logging

## Backend Technology

| Technology | Version |
|---|---|
| PHP | ^8.2 |
| Laravel Framework | ^12.0 |
| Laravel Sanctum | ^4.3 |
| Laravel Tinker | ^2.10.1 |
| Vite (asset building) | 5.4.19 |
| TailwindCSS | 4.1.11 |
| @tailwindcss/vite | 4.1.11 |
| Laravel Vite Plugin | 1.2.0 |

## Runtime Requirements

- **PHP 8.2 or newer**
- **Composer** (for PHP dependency management)
- **Node.js & npm** (for frontend asset building via `npm run dev` or `npm run build`)
- **MySQL** (configured as default database) or **SQLite** (fallback)

## Database

The backend uses **MySQL** as the primary database (configured in `.env` as `DB_CONNECTION=mysql`). The config file `config/database.php` also supports SQLite, MariaDB, PostgreSQL, and SQL Server.

### Database Details (from `.env`)

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=kca_wellness_hub
DB_USERNAME=root
DB_PASSWORD=
DB_CHARSET=utf8mb4
DB_COLLATION=utf8mb4_unicode_ci
```

> **Fixed:** The `.env` file previously used `DB_PORT=3307` (mismatched from `.env.example`'s `3306`). This has been corrected to `3306`. Verify the port matches your MySQL setup.

### Database Tables (from migrations)

The project includes 25 migration files covering the following tables:

- `users` — user accounts (name, email, password, is_active, last_login_at)
- `roles` — user roles (student, peer_counselor, guidance_staff, admin)
- `role_user` — role-user many-to-many relationship
- `profiles` — user profile details (campus_id, student_number, phone, emergency contacts, preferences)
- `campuses` — campus information
- `wellness_resources` — wellness resource articles/guides
- `events` — campus wellness events
- `training_modules` — peer counselor training content
- `social_links` — social media/contact links
- `booking_providers` — external appointment booking providers
- `support_requests` — student support requests
- `conversations` — chat conversations
- `conversation_participants` — conversation membership
- `messages` — chat messages
- `appointments` — booked appointments
- `notifications` — user notifications
- `referrals` — user referrals between staff
- `escalations` — escalated support cases
- `audit_logs` — action audit trail
- `personal_access_tokens` — Sanctum API tokens
- `cache`, `jobs` — Laravel system tables

## Prerequisites

Before setting up the backend, ensure you have:

- **PHP 8.2+** with extensions: pdo_mysql (or pdo_sqlite), mbstring, OpenSSL, Tokenizer, XML, Ctype, JSON, BCMath, Fileinfo, cURL — must be installed and available on your system PATH
- **Composer** (PHP dependency manager)
- **Node.js 18+** and **npm** (for frontend assets) — must be installed and available on your system PATH
- **MySQL** running on the configured port (default 3307 per `.env`; XAMPP MySQL listens on 3307)
- **SQLite** (optional, as fallback — used automatically if MySQL is unavailable)

> **Environment note:** If `php`, `composer`, `node`, or `npm` commands are not found, install them and ensure they are on your system PATH before following the installation steps below.

## Installation

### 1. Clone and enter the project

```bash
cd backend
```

### 2. Install PHP dependencies

```bash
composer install
```

### 3. Set up environment

```bash
cp .env.example .env
php artisan key:generate
```

### 4. Set up the database

For MySQL:
```bash
# Create the database 'kca_wellness_hub' in MySQL first, then:
php artisan migrate --force
```

For SQLite (if preferred):
```bash
touch database/database.sqlite
php artisan migrate --force
```

### 5. Seed the database (optional)

```bash
php artisan db:seed
```

This runs the following seeders in order:
- `RoleCampusSeeder` — default roles and campuses
- `UserSeeder` — test users
- `BookingProviderSeeder` — booking providers
- `ContentSeeder` — wellness content
- `DemoCounsellingSeeder` — demo counselling data

### 6. Install frontend assets

```bash
npm install
```

### 7. Build frontend assets

```bash
npm run build
```

### Automated Setup

The `composer.json` includes a `setup` script that runs all steps:

```bash
composer setup
```

## Environment Variables

All configuration is in `backend/.env`. Key variables:

```env
APP_NAME="KCA Wellness Hub API"
APP_ENV=local
APP_KEY=base64:...
APP_DEBUG=false
APP_URL=http://localhost:8000
APP_LOCALE=en
APP_FALLBACK_LOCALE=en

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=kca_wellness_hub
DB_USERNAME=root
DB_PASSWORD=
DB_CHARSET=utf8mb4
DB_COLLATION=utf8mb4_unicode_ci

# Session
SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=true
SESSION_SECURE_COOKIE=false

# Sanctum (SPA authentication)
SANCTUM_STATEFUL_DOMAINS=localhost,localhost:4200,127.0.0.1,127.0.0.1:4200

# CORS
FRONTEND_ALLOWED_ORIGINS=http://localhost:4200,http://127.0.0.1:4200

# Cache & Queue
CACHE_STORE=database
QUEUE_CONNECTION=database

# File Storage
FILESYSTEM_DISK=local

# Mail
MAIL_MAILER=log

# External Booking URLs
BOOKING_URL_BELINDA_MAIN=https://example.test/book/belinda-main
BOOKING_URL_BELINDA_VIRTUAL=https://example.test/book/belinda-virtual
BOOKING_URL_EMILY_MAIN=https://example.test/book/emily-main
BOOKING_URL_EMILY_VIRTUAL=https://example.test/book/emily-virtual
BOOKING_URL_TASHA_TOWN=https://example.test/book/tasha-town
BOOKING_URL_TASHA_VIRTUAL=https://example.test/book/tasha-virtual
```

## Authentication and Authorization

### Authentication: Laravel Sanctum

The backend uses **Laravel Sanctum** for API authentication with two modes:

1. **Stateful cookie authentication** — for first-party SPA clients (Angular frontend on `localhost:4200`). Configured via `SANCTUM_STATEFUL_DOMAINS` and `FRONTEND_ALLOWED_ORIGINS`.
2. **Bearer token authentication** — for API clients using `auth:sanctum` middleware. Tokens are issued on login/register via `User::createToken()`.

### Authorization: Role-Based Access Control

User roles are stored in the `roles` table and linked to users via `role_user` pivot table. Available roles:

- **`student`** — authenticated student users
- **`peer_counselor`** — peer counseling staff
- **`guidance_staff`** — guidance and counselling staff
- **`admin`** — system administrators

Custom middleware:

- **`active`** (`EnsureUserIsActive`) — rejects requests from disabled users (`is_active = false`)
- **`role`** (`EnsureRole`) — restricts access to users with specific roles (supports multiple comma-separated roles)

### Policy-based Authorization

Laravel policies are defined for all major models in `app/Policies/`:

- `UserPolicy` — admins only for list/update/delete; self-view allowed
- `RolePolicy` — admins only; cannot delete core system roles
- `WellnessResourcePolicy` — published resources viewable by all; create/update/delete admin only
- Plus policies for Appointment, Campus, Conversation, Event, Message, Notification, Profile, Referral, Escalation, SocialLink, SupportRequest, TrainingModule, BookingProvider, and AuditLog

## API Endpoints

All API endpoints are defined in `backend/routes/api.php` and prefixed with `/api`.

### Public Endpoints (no authentication)

| Method | Endpoint | Controller | Description |
|---|---|---|---|
| POST | `/register` | AuthController | Register a new user |
| POST | `/login` | AuthController | Authenticate and receive token |
| GET | `/campuses` | CampusController | List active campuses |
| GET | `/campuses/{campus}` | CampusController | Campus details |
| GET | `/wellness-resources` | WellnessResourceController | List published resources |
| GET | `/wellness-resources/{wellnessResource}` | WellnessResourceController | Resource details |
| GET | `/events` | EventController | List published events |
| GET | `/events/{event}` | EventController | Event details |
| GET | `/training-modules` | TrainingModuleController | List published modules |
| GET | `/training-modules/{trainingModule}` | TrainingModuleController | Module details |
| GET | `/social-links` | SocialLinkController | Active social links |
| GET | `/booking-providers` | BookingProviderController | Active booking providers |

### Authenticated Endpoints (`auth:sanctum` + `active` middleware)

| Method | Endpoint | Controller | Description |
|---|---|---|---|
| POST | `/logout` | AuthController | Revoke current token |
| GET | `/user` | AuthController | Current user profile |
| GET | `/profile` | ProfileController | User profile |
| PUT/PATCH | `/profile` | ProfileController | Update profile |
| GET/POST | `/support-requests` | SupportRequestController | List/create support requests |
| GET/POST | `/conversations` | ConversationController | List/create conversations |
| GET/POST | `/conversations/{conversation}/messages` | MessageController | List/send messages |
| GET/PUT/PATCH/DELETE | `/conversations/{conversation}/messages/{message}` | MessageController | Message CRUD |
| GET/POST | `/appointments` | AppointmentController | List/create appointments |
| GET | `/notifications` | NotificationController | List notifications |
| GET | `/notifications/{notification}` | NotificationController | Notification details |
| PATCH | `/notifications/{notification}/read` | NotificationController | Mark notification read |
| PATCH | `/notifications/read-all` | NotificationController | Mark all notifications read |

### Admin/Staff Endpoints (`auth:sanctum` + `role:peer_counselor,guidance_staff,admin`)

| Method | Endpoint | Controller | Description |
|---|---|---|---|
| GET/POST | `/referrals` | ReferralController | List/create referrals |
| GET/POST | `/escalations` | EscalationController | List/create escalations |

### Admin-Only Endpoints (`auth:sanctum` + `role:admin`)

| Method | Endpoint | Controller | Description |
|---|---|---|---|
| GET/POST/PUT/PATCH/DELETE | `/roles` | RoleController | Role management |
| GET/POST/PUT/PATCH/DELETE | `/users` | UserController | User management |
| POST/PUT/PATCH/DELETE | `/campuses` | CampusController | Campus CRUD |
| GET/POST/PUT/PATCH/DELETE | `/booking-providers` | BookingProviderController | Booking provider CRUD (index excluded) |
| GET/POST/PUT/PATCH/DELETE | `/wellness-resources` | WellnessResourceController | Resource CRUD (index/show excluded) |
| GET/POST/PUT/PATCH/DELETE | `/events` | EventController | Event CRUD (index/show excluded) |
| GET/POST/PUT/PATCH/DELETE | `/training-modules` | TrainingModuleController | Module CRUD (index/show excluded) |
| GET/POST/PUT/PATCH/DELETE | `/social-links` | SocialLinkController | Social link CRUD (index excluded) |
| GET | `/audit-logs` | AuditLogController | Audit log list |
| GET | `/audit-logs/{auditLog}` | AuditLogController | Audit log entry |

### Response Format

All API responses use the following JSON structure:

```json
{ "data": { ... } }
```

or for collections:

```json
{ "data": [ ... ] }
```

or paginated:

```json
{ "data": [ ... ], "current_page": 1, "last_page": 2 }
```

Error responses use Laravel's standard validation format:

```json
{ "message": "...", "errors": { ... } }
```

## Backend Folder Structure

```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Controller.php          (base controller with json(), message(), audit(), userPayload())
│   │   │   ├── AuthController.php
│   │   │   ├── UserController.php
│   │   │   ├── CampusController.php
│   │   │   ├── WellnessResourceController.php
│   │   │   ├── EventController.php
│   │   │   ├── TrainingModuleController.php
│   │   │   ├── SocialLinkController.php
│   │   │   ├── BookingProviderController.php
│   │   │   ├── ProfileController.php
│   │   │   ├── SupportRequestController.php
│   │   │   ├── ConversationController.php
│   │   │   ├── MessageController.php
│   │   │   ├── AppointmentController.php
│   │   │   ├── NotificationController.php
│   │   │   ├── ReferralController.php
│   │   │   ├── EscalationController.php
│   │   │   └── AuditLogController.php
│   │   ├── Middleware/
│   │   │   ├── EnsureUserIsActive.php   (401 if no user, 403 if disabled)
│   │   │   └── EnsureRole.php           (401/403 role check)
│   │   └── ...
│   ├── Models/
│   │   ├── User.php
│   │   ├── Role.php
│   │   ├── Profile.php
│   │   ├── Campus.php
│   │   ├── WellnessResource.php
│   │   ├── Event.php
│   │   ├── TrainingModule.php
│   │   ├── SocialLink.php
│   │   ├── BookingProvider.php
│   │   ├── SupportRequest.php
│   │   ├── Conversation.php
│   │   ├── ConversationParticipant.php
│   │   ├── Message.php
│   │   ├── Appointment.php
│   │   ├── Notification.php
│   │   ├── Referral.php
│   │   ├── Escalation.php
│   │   └── AuditLog.php
│   ├── Policies/
│   │   ├── UserPolicy.php
│   │   ├── RolePolicy.php
│   │   ├── WellnessResourcePolicy.php
│   │   └── ... (16+ additional policies)
│   └── Providers/
│       └── AppServiceProvider.php       (API rate limiting: 60/minute)
├── config/
│   ├── app.php
│   ├── auth.php                         (session guard, Eloquent user provider)
│   ├── sanctum.php                      (stateful domains, token expiration: 120min)
│   ├── cors.php                         (origins from FRONTEND_ALLOWED_ORIGINS env)
│   ├── database.php
│   └── ... (9 other config files)
├── database/
│   ├── migrations/                      (25 migration files)
│   ├── seeders/
│   │   ├── DatabaseSeeder.php
│   │   ├── RoleCampusSeeder.php
│   │   ├── UserSeeder.php
│   │   ├── BookingProviderSeeder.php
│   │   ├── ContentSeeder.php
│   │   └── DemoCounsellingSeeder.php
│   └── ...
├── resources/
│   ├── css/
│   ├── js/
│   └── views/
│       └── welcome.blade.php
├── routes/
│   ├── api.php                          (all API endpoints)
│   ├── web.php                          (single route: returns welcome view)
│   └── console.php
├── public/
│   ├── index.php
│   ├── .htaccess                        (URL rewriting, authorization header passthrough)
│   ├── favicon.ico
│   └── robots.txt
├── bootstrap/
│   └── app.php                          (middleware aliases: 'role', 'active'; stateful API; throttling)
├── storage/
├── tests/
├── vendor/
├── node_modules/
├── .env
├── .env.example
├── composer.json
├── composer.lock
├── vite.config.js                       (Laravel + TailwindCSS Vite plugins)
├── artisan
└── phpunit.xml
```

## Main Services, Controllers, and Modules

### Core Controller

**`Controller`** (`app/Http/Controllers/Controller.php`) — base controller providing:

- `json($data, $status)` — wraps data in `{"data": ...}` response
- `message($message, $status)` — wraps message in `{"message": ...}` response
- `audit($action, $entityType, $entityId, $metadata)` — records action to audit logs
- `userPayload($user)` — serializes user with roles and active status

### Authentication

**`AuthController`** (`app/Http/Controllers/AuthController.php`):

- `register` — validates name/email/password/campus_id, creates user with `student` role, creates profile, issues Sanctum token, records audit log. Returns `201` with user, profile, and token.
- `login` — validates email/password, checks account is active, issues Sanctum token, records audit log. Returns user, profile, and token.
- `logout` — revokes current access token.
- `user` — returns authenticated user and profile data.

### Key Controllers Summary

| Controller | Key Features |
|---|---|
| `CampusController` | Public read, admin CRUD with audit logging |
| `WellnessResourceController` | Published listing with search/filter/category; admin full CRUD |
| `EventController` | Published listing with date range filtering; admin full CRUD |
| `TrainingModuleController` | Published listing with level filter; admin full CRUD |
| `BookingProviderController` | Active providers with campus/mode filter; admin full CRUD |
| `AppointmentController` | Role-based visibility, conflict detection, booking provider validation, notification on creation |
| `ConversationController` | Participants-based visibility, support request linking |
| `MessageController` | Participant-only messaging, sender editing, guidance staff override |
| `NotificationController` | User-scoped, mark read, mark all read |
| `SupportRequestController` | Requester/staff visibility, status transitions |
| `ProfileController` | Profile CRUD with encrypted phone fields |
| `UserController` | Admin search/filter/role management with self-protection |
| `ReferralController` | Support request linkage, from/to user tracking |
| `EscalationController` | Severity levels, support request and conversation linkage |
| `SocialLinkController` | Active links sorted by platform |
| `AuditLogController` | Filterable audit trail with user info |

## Frontend-to-Backend Connection

The Angular frontend connects to the Laravel backend at:

```
http://localhost:8000/api
```

Configuration is in `frontend/src/environments/environment.ts`.

### Authentication Flow

1. Frontend sends `POST /login` or `POST /register` with credentials.
2. Backend returns a Sanctum plain-text token in `data.token`.
3. Frontend stores the token in session storage (`kca_access_token`).
4. Frontend sends the token in `Authorization: Bearer <token>` header on subsequent requests.
5. Frontend also uses `withCredentials: true` for cookie-based SPA authentication.
6. On logout, frontend calls `POST /logout` to revoke the token and clears session storage.

### CORS Configuration

CORS is configured in `backend/config/cors.php`:

- **Paths:** `api/*`, `sanctum/csrf-cookie`
- **Allowed methods:** `*` (all)
- **Allowed origins:** From `FRONTEND_ALLOWED_ORIGINS` env variable (default: `http://localhost:4200,http://127.0.0.1:4200`)
- **Allowed headers:** `Content-Type`, `X-Requested-With`, `Authorization`, `X-XSRF-TOKEN`
- **Supports credentials:** `true`

The `bootstrap/app.php` configures `$middleware->statefulApi()` and `$middleware->throttleApi('api')` (60 requests/minute per IP).

## How to Start the Backend

### Development

```bash
cd backend
php artisan serve
```

This starts the Laravel development server at `http://localhost:8000` (default).

### Running with Frontend Assets (full stack)

The `composer.json` provides a `dev` script that runs the server, queue listener, log viewer, and Vite dev server concurrently:

```bash
composer dev
```

### Using Laravel Sail (Docker)

```bash
composer sail install
sail up
```

### Production

1. Set `APP_DEBUG=false` in `.env`.
2. Build frontend assets:
   ```bash
   cd backend
   npm install
   npm run build
   ```
3. Run the queue worker (if using database queue):
   ```bash
   php artisan queue:work
   ```
4. Serve via a web server (Nginx/Apache) pointing to `backend/public/`:
   ```bash
   php artisan serve --host=0.0.0.0 --port=8000
   ```

Or use a production web server with the `public/` directory as the document root.

## Building Frontend Assets (Backend)

The backend uses Vite to build frontend assets:

```bash
cd backend
npm install
npm run dev      # Development mode with hot reload
npm run build    # Production build to public/build/
```

The `vite.config.js` uses `laravel-vite-plugin` with `resources/css/app.css` and `resources/js/app.js` as entry points, plus `@tailwindcss/vite` for TailwindCSS 4.

## Troubleshooting

### API returns 401 Unauthenticated

1. Verify the user is logged in and has a valid Sanctum token.
2. Check that `auth:sanctum` middleware is applied to the route.
3. For cookie-based auth, confirm the request comes from an allowed origin in `SANCTUM_STATEFUL_DOMAINS`.

### API returns 403 Forbidden

1. Check the user's role matches the required role for the endpoint.
2. Verify the user's account is active (`is_active = 1`). The `active` middleware rejects disabled accounts.

### Database connection fails

1. Confirm MySQL is running and accessible at `DB_HOST:DB_PORT`.
2. Verify `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` in `.env`.
3. Check that the `pdo_mysql` PHP extension is installed.
4. If using SQLite, ensure `database/database.sqlite` exists and is writable.

### CORS errors in the browser

1. Verify `FRONTEND_ALLOWED_ORIGINS` in `.env` includes the frontend origin.
2. Confirm `cors.php` config allows the required headers (`Authorization`, `Content-Type`).
3. Ensure `supports_credentials` is `true` in `cors.php`.
4. Clear Laravel config cache: `php artisan config:clear`.

### Migration fails

1. Check that the database exists.
2. Verify database credentials in `.env`.
3. Review the specific migration error message.
4. Run `php artisan migrate:fresh --seed` to reset and reseed (warning: deletes all data).

### Application key missing

1. Run `php artisan key:generate` in the `backend/` directory.
2. Verify `APP_KEY` is set in `.env`.

### Login/register returns 500 error

1. Check Laravel logs in `storage/logs/laravel.log`.
2. Verify `APP_KEY` is set in `.env` (run `php artisan key:generate` if missing).
3. Ensure the `users` and `profiles` tables exist (run migrations).

### Build or asset issues

```bash
cd backend
rm -rf node_modules public/build
npm install
npm run build
```

## Security Notes

- **Passwords** are hashed with bcrypt (`BCRYPT_ROUNDS=12` in `.env`).
- **Sessions** are encrypted (`SESSION_ENCRYPT=true`) and stored in the database.
- **Phone numbers** and **emergency contact phones** are encrypted at the model level (`Profile.php` casts).
- **API tokens** are issued as plain-text Sanctum tokens and should be transmitted over HTTPS only.
- **CORS** is restricted to configured origins only.
- **Rate limiting** is applied to the API (60 requests/minute per IP) and login endpoint (throttle:login — 5 attempts per 60 seconds, 30-minute lockout after 5 failed attempts).
- **Audit logging** records all authentication events, data mutations, and administrative actions with IP address and user agent.
- **CSRF protection** is active for stateful API routes via `ValidateCsrfToken` middleware (Sanctum configuration).
- **Cookies** are encrypted via `EncryptCookies` middleware.
- The `.env` file contains no production secrets by default and should never be committed to version control (already in `.gitignore`).
- **SQL queries** use parameter binding throughout; no raw SQL with user input is present.
