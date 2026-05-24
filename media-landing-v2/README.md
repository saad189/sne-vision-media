# MediaLandingV2

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Supabase Integration

This project is configured to use Supabase for authentication (and can be extended for database / storage / realtime).

### 1. Create a Supabase Project

1. Go to https://supabase.com and create a new project.
2. Copy the Project URL and the public (anon) API key from Project Settings > API.

### 2. Configure Environment Values

Update both `src/app/environments/environment.ts` (development) and `environment.prod.ts` (production):

```ts
export const environment = {
  production: false,
  apiUrl: "http://localhost:3000",
  supabaseUrl: "https://YOUR_PROJECT_ID.supabase.co",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_PUBLIC_KEY",
};
```

Never commit service role keys or private keys to the frontend.

### 3. Supabase Service

`SupabaseService` (`src/app/services/supabase.service.ts`) exposes:

- `signInWithPassword(email, password)`
- `signUpWithPassword(email, password, metadata?)`
- `signOut()`
- `session$` observable for reactive session
- `currentSession` and `accessToken` getters

### 4. Authentication Guard

`AuthGuard` uses the Supabase session to determine route access. Protect routes by adding `canActivate: [AuthGuard]` in route definitions.

### 5. User Service Helper

`UserService` provides convenience helpers: `user$()`, `session$()`, `isAuthenticated()`.

### 6. Example Usage (Component)

```ts
import { Component, inject } from "@angular/core";
import { SupabaseService } from "./services";

@Component({ selector: "app-login", standalone: true, template: `...` })
export class LoginComponent {
  supabase = inject(SupabaseService);

  login(email: string, password: string) {
    this.supabase.signInWithPassword(email, password).subscribe(({ data, error }) => {
      if (error) {
        console.error(error.message);
      } else {
        console.log("Signed in", data.session);
      }
    });
  }
}
```

### 7. Extending With Database Tables

Create tables in Supabase (e.g., `profiles`) and query:

```ts
this.supabase.client
  .from("profiles")
  .select("*")
  .eq("id", userId)
  .then(({ data, error }) => {
    /* handle */
  });
```

### 8. Security Notes

- Never expose service-role keys in frontend code.
- Use Row Level Security (RLS) and policies in Supabase dashboard.
- Consider additional claims in a `profiles` table instead of relying only on auth metadata.

### 9. Future Enhancements

- Persisting profile data locally
- Handling password reset / magic link flows
- Adding OAuth providers
- Integrating Realtime channels

## Media Works Module

The project includes a `media_works` table in Supabase, surfaced via `MediaWorkService`.

### Table Structure (Supabase)

| Column         | Type                         | Notes                   |
| -------------- | ---------------------------- | ----------------------- |
| id             | uuid                         | Primary key (generated) |
| name           | text                         | Required                |
| title          | text                         | Optional                |
| description    | text                         | Optional                |
| manuscript_url | text                         | Optional                |
| youtube_url    | text                         | Optional                |
| github_url     | text                         | Optional                |
| image_url      | text                         | Optional                |
| type           | enum('projects','use-cases') | Required                |
| created_at     | timestamptz                  | Default now()           |
| updated_at     | timestamptz                  | Updated by trigger      |

### RLS Policies (Example)

Public read; authenticated users manage their own rows (add `owner_id` for strict ownership if desired).

### Angular Model Mapping

Database uses snake_case. Service maps rows to camelCase interface `MediaWork` with fields:
`manuscriptUrl`, `youtubeUrl`, `githubUrl`, `imageUrl`.

### Service Usage

```ts
mediaWorkService.list().subscribe((items) => console.log(items));
mediaWorkService.create({ name: "Tool A", type: "projects" }).subscribe();
```

### Form Component

`MediaWorkFormComponent` (`src/app/components/media-work-form/`) is a standalone reactive form for create/update flows.

## Admin Panel

Route base: `/admin`

### Routes

| Path             | Component               | Guard          | Description                     |
| ---------------- | ----------------------- | -------------- | ------------------------------- |
| /admin/login     | AdminLoginComponent     | -              | Auth login form                 |
| /admin           | AdminDashboardComponent | AdminAuthGuard | Simple menu (Add Media, Logout) |
| /admin/add-media | AdminAddMediaComponent  | AdminAuthGuard | Create a media work             |

### Components

- `AdminLoginComponent` – email/password login using Supabase auth.
- `AdminDashboardComponent` – navigation + logout.
- `AdminAddMediaComponent` – wraps `MediaWorkFormComponent`.

### Guard

Routes now use a unified `AuthGuard` that waits for Supabase auth readiness (`authReady$`) and the current session observable before allowing navigation. It redirects to `/admin/login` if unauthenticated.

### Logout Flow

Calls `supabase.signOut()` then navigates to `/admin/login`.

### Extending

- Add role-based checks: store role in user metadata and validate inside guard.
- Add list/edit pages: reuse `MediaWorkService.list()` and `update()`.
- Add toast notifications for success/error states.

## Troubleshooting: NavigatorLockAcquireTimeoutError

If you see errors like:

```
NavigatorLockAcquireTimeoutError: Timed out acquiring the lock.
```

This comes from contention over browser `navigator.locks` used internally by the Supabase Auth storage mechanism when multiple client instances compete simultaneously (e.g., during Angular HMR or rapid reloads).

### Mitigations Implemented

- Singleton Supabase client (survives HMR) to avoid duplicate initialization.
- Exponential backoff retry around initial `getSession()` calls.
- Fallback best-effort read from `localStorage` if lock acquisition fails repeatedly.
- Manual recovery helper: `SupabaseService.clearSessionCache()`.

### Manual Recovery Steps

1. Open DevTools > Application > Local Storage.
2. Remove keys starting with `sb-` that contain `auth-token`.
3. Hard refresh the page.

Or call the helper from console:

```
ng.getInjector(document.querySelector('app-root')).get(SupabaseService).clearSessionCache();
```

### Preventing Recurrence

- Avoid creating additional Supabase clients; always inject `SupabaseService`.
- Let the guard finish (it waits on readiness) before triggering rapid route changes in tests.
- If running multiple tabs, brief simultaneous reloads can still contend; usually they resolve after retries.

### When to Investigate Deeper

If lock errors persist for more than ~2 seconds after a single page load:

- Check that only one Angular app instance exists (no duplicate root mounts).
- Verify no custom code is instantiating `createClient` directly elsewhere.
- Consider a custom storage adapter (advanced: implementing `AuthStorageAdapter` that uses simpler localStorage semantics without locks).

Open an issue with stack traces if the above does not resolve the problem.
