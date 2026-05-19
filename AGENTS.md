# AGENTS.md — Tubod Municipality Agriculture Information System

## Overview
Comprehensive agriculture information management system for Tubod Municipality, Surigao del Norte, designed to streamline farmer registration, crop monitoring, livestock tracking, and agricultural resource management. Fully compliant with RA 9184 (Government Procurement Reform Act), RA 10173 (Data Privacy Act), and National Privacy Commission guidelines for secure handling of farmer and agricultural data.

## Stack
- **Monorepo**: Turborepo + pnpm
- **Frontend**: Next.js 16 + Tailwind v4 + shadcn/ui
- **Backend**: NestJS 11 + Drizzle ORM
- **Auth**: Better Auth
- **Contracts**: oRPC + Zod
- **DB**: PostgreSQL 17

## Modules
- **Farmers** (`farmer`): Full Name, Barangay, Farm Size (hectares), Farm Type, Contact Number, Registration Date, Status, Notes
- **Crops** (`crop`): Crop Name, Variety, Planting Date, Expected Harvest, Area Planted (hectares), Farmer ID, Production Status
- **Livestock** (`livestock`): Animal Type, Breed, Quantity, Farmer ID, Health Status, Last Vaccination, Purpose
- **Programs** (`program`): Program Name, Description, Start Date, End Date, Budget, Target Beneficiaries, Status
- **Resources** (`resource`): Resource Name, Category, Quantity, Unit, Supplier, Date Acquired, Condition
- **Data Privacy** (`dataprivacy`): Request Type, Data Subject, Purpose of Processing, Consent Status, Filed Date, Resolved Date, Breach Reported, Privacy Impact Assessment

## Commands
- `pnpm dev` — Start all apps
- `pnpm build` — Build everything
- `pnpm db:push` — Push DB schema
- `pnpm db:seed` — Seed data
- `pnpm test` — Run tests
- `pnpm lint` — Lint all

## Structure
```
├── apps/web/         # Next.js frontend
├── apps/backend/     # NestJS API
├── packages/db/      # Drizzle ORM
├── packages/auth/    # Better Auth
├── packages/contracts/ # oRPC + Zod
└── tooling/          # Shared configs
```

Always use `pnpm` (never npm/yarn).