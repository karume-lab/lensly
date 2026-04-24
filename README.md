# Lensly

<p align="center">
  <img src="packages/assets/logo.png" alt="Lensly Logo" width="200" />
  <br />
  <em>This is an image of a hacksaw</em>
</p>

A fullstack JavaScript/TypeScript monorepo template for rapidly building Web MVPs using modern tools. It features Next.js on the web, connected via end-to-end type-safe RPC (Elysia + Eden Treaty).

> [!NOTE]
> This template is designed for **MVPs and prototyping** — it prioritizes developer velocity over production-grade hardening. Use it as a starting point to validate ideas quickly, then harden as needed.
>
> For those seeking a more comprehensive and production-hardened template, consider <a href="https://www.better-t-stack.dev/" target="_blank" rel="noopener noreferrer">Better T-Stack</a>.

## Quick Start Tutorial

Learn how to build with Lensly by following the <a href="https://code2tutorial.com/tutorial/926b939b-24c9-487a-a3f9-359877d46087/index.md" target="_blank" rel="noopener noreferrer">Quick Start Tutorial</a>.

## Core Stack

- **Monorepo:** Turborepo & Bun Workspaces — Efficient management of shared packages and apps with high-performance dependency resolution.
- **Web App:** Next.js (App Router) — Modern React framework optimized for performance, SEO, and developer productivity.
- **Database & ORM:** Drizzle ORM + SQLite — Lightweight, local-first database with a type-safe, developer-friendly ORM.
- **Authentication:** Better Auth — A comprehensive authentication framework designed for safety and ease of integration.
- **Communication:** Elysia + Eden Treaty — High-performance, Bun-native RPC for seamless, end-to-end type safety between services.
- **API Documentation:** OpenAPI & Scalar — Automatically generated API schema and a beautiful developer-friendly reference UI.
- **State Management:** TanStack Query & nuqs — Robust server-state synchronization and type-safe URL search params.
- **Validation:** Zod — Schema-first validation for runtime safety and database schema inference.
- **UI & Styling:** Tailwind CSS & shadcn/ui — Utility-first styling with high-quality, accessible component primitives.
- **Linting & Formatting:** Biome — Ultra-fast, unified toolchain for maintaining code quality and consistent formatting.

## Project Structure

```text
.
├── apps/
│   └── web/                     # Next.js App Router (Dashboard & API)
├── packages/
│   ├── api/                     # Elysia API (End-to-end type-safety bridge)
│   ├── auth/                    # Better Auth (Authentication logic)
│   ├── db/                      # Drizzle ORM + SQLite (Database layer)
│   ├── types/                   # Shared TypeScript interfaces
│   ├── ui/                      # Shared UI system (Tailwind & Components)
│   ├── validators/              # Common Zod schemas
│   ├── utils/                   # Shared helper functions
│   └── assets/                  # Shared images and icons
└── package.json                 # Monorepo root & scripts
```

## Setup

### Prerequisites
- [Bun](https://bun.sh/) (latest version)
- Node.js (v20+ recommended)
- ADB (for Android development)

### 1. Installation

```bash
git clone https://github.com/karume-lab/lensly.git
cd lensly
bun install
```

### 2. Environment Variables

Each app and package may require environment variables. Copy the `.env.example` files to `.env` in the following locations:

- `.env`
- `apps/web/.env`

### 3. Database Initialization

Push your schema to the database and start the database studio:

```bash
# Push schema changes
bun db:push

# Generate migrations
bun db:generate

# Open Drizzle Studio to inspect data
bun db:studio

# Seed the database
bun db:seed
```

## Usage

### Development

Start all dev servers in parallel:

```bash
bun dev
```

Or run individual apps:

```bash
# Web only (Next.js)
bun dev:web
```

### API Documentation

The API documentation is automatically generated from your Elysia routes using the Swagger plugin. Lensly uses Swagger UI for a beautiful, interactive documentation experience.

- **OpenAPI Schema:** `http://localhost:3000/api/openapi.json`
- **Interactive Reference:** `http://localhost:3000/docs/api/reference`

### Adding New Features

#### New API Procedure
1. Define your Zod schema in `packages/validators`.
2. Implement the procedure in `packages/api/src/routers/`.
3. The type-safe client will be automatically available to `web`.

#### New UI Component
```bash
# Web (shadcn/ui)
bun ui:web [component-name]
```

### Code Quality

Run checks across the entire monorepo:

```bash
# Format and lint fix all apps and packages
bun clean

# Run linter checks
bun lint

# Run type checks
bun typecheck
```

Or target specific apps:

```bash
# Lint web app only
bun lint:web
```

## Available Scripts

| Script | Description |
| :--- | :--- |
| `bun dev` | Start all apps in watch mode |
| `bun build` | Build all apps and packages |
| `bun lint` | Lint all apps and packages |
| `bun typecheck` | Typecheck all apps and packages |
| `bun clean` | Fix linting/formatting issues across the repo |
| **Web App** | |
| `bun dev:web` | Start Next.js development server |
| `bun build:web` | Build Next.js for production |
| `bun lint:web` | Lint web app |
| **Database** | |
| `bun db:push` | Push schema to database |
| `bun db:generate` | Generate migration files |
| `bun db:studio` | Open Drizzle Studio |
| `bun db:seed` | Seed the database |

## Deployment

### Web (Next.js)
Deploy to [Vercel](https://vercel.com/) by connecting your repository. Ensure you set all environment variables in the Vercel dashboard.

## Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before getting started.

1.  **Create a Branch**: Create a new branch for your changes (`git checkout -b feature/[FEATURE_NAME]`).
2.  **Make Changes**: Implement your changes and ensure they follow the project's coding standards.
3.  **Run Tests**: Ensure all tests pass (`bun lint` and `bun typecheck`).
4.  **Submit a Pull Request**: Submit a pull request to the main repository.

---

Thank you for your interest in Lensly and remember to star the repo!
