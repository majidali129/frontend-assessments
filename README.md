# Frontend Assessments Workspace

A scalable React + TypeScript workspace designed to implement and showcase multiple frontend assessments within a single codebase.

---

## Overview

This project acts as a **container application** that hosts multiple independent frontend assessments.
Each assessment is treated as an isolated module with its own logic, UI, and data layer, while sharing a common infrastructure.

---

## Objectives

- Keep assessments **isolated and maintainable**
- Ensure **reusability** of components and utilities
- Maintain a **clean and scalable architecture**
- Provide a **single entry point** to preview all assessments
- Avoid architectural clutter as the project grows

---

## Tech Stack

- **React (Vite) + TypeScript**
- **Tailwind CSS** (UI styling)
- **React Router** (navigation)
- **React Query** (data fetching & caching)
- Optional integrations per assessment (markdown, charts, etc.)

---

## Project Architecture

```txt
src/
├── app/                  # Application shell (routing, layout, providers)
├── assessments/          # Independent assessment modules
├── shared/               # Reusable UI, hooks, utils, services
├── features/             # Optional shared business logic
├── styles/               # Global styles
```

---

## Core Concept

### 1. App Shell

Handles:

- Routing
- Layout (header, container)
- Global providers (React Query, etc.)

### 2. Assessments (Feature Modules)

Each assessment is a **self-contained mini-app**:

```txt
assessment-x/
├── pages/
├── components/
├── hooks/
├── services/
├── types/
```

Rules:

- No cross-imports between assessments
- Logic stays local unless reused elsewhere

---

### 3. Shared Layer

```txt
shared/
├── components/ui/    # reusable UI (Button, Input, Card)
├── hooks/            # reusable hooks
├── utils/            # helper functions
├── services/         # API client + base config
├── types/            # common types
```

Used only when something is needed in **multiple assessments**.

---

## Assessment Registry

All assessments are registered in a central file:

```ts
assessments / registry.ts;
```

This powers:

- Routing
- Home page listing
- Lazy loading

---

## Routing Strategy

- `/` → Home page (list of assessments)
- `/assessment-x` → Individual assessment

Each assessment is loaded **lazily** for performance.

---

## Data & API Strategy

- API client lives in: `shared/services`
- Feature-specific APIs live in: `assessment-x/services`
- Mock/static data stays inside the respective assessment

---

## Best Practices

### Keep Things Local First

Only move to `shared/` if used in multiple places.

---

### Avoid Cross-Assessment Coupling

❌ Do NOT:

```ts
import from "../assessment-2"
```

---

### Separate Concerns

| Layer       | Responsibility      |
| ----------- | ------------------- |
| app         | routing, providers  |
| assessments | feature logic       |
| shared      | reusable primitives |

---

### Use Effects Properly

- `useEffect` → async side effects (API, subscriptions)
- `useLayoutEffect` → DOM measurement / layout fixes only

---

## Adding a New Assessment

1. Create a new folder:

```txt
src/assessments/assessment-x/
```

2. Add entry file:

```ts
index.tsx;
```

3. Register in:

```ts
assessments / registry.ts;
```

4. Add route automatically via registry

---

## Running the Project

```bash
npm install
npm run dev
```

---

## Future Improvements

- Markdown-based assessment descriptions
- Preview + code side-by-side layout
- Design system extraction
- API SDK abstraction
- Test setup per assessment

---

## Philosophy

- Build small, isolated, testable modules
- Share only what is truly reusable
- Prefer clarity over premature abstraction
- Optimize structure before optimizing code

---

## Summary

This project is designed to:

- Scale with multiple assessments
- Stay maintainable over time
- Demonstrate clean frontend architecture

---

## Author Notes

This workspace is intentionally structured to reflect **real-world frontend engineering practices**, not just task-based implementations.

---
