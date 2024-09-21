# SSR-from-scratch

An experiment of creating React server components from scratch

```mermaid
graph TD
  A[Server: React Component Tree] -->|Convert to HTML| B[Server-Side Rendered HTML]
  B -->|Send HTML to Client| C[Browser: HTML Rendered]
  C -->|Last Contentful Paint (LCP)| D[LCP Reached]
  D -->|Request JavaScript Bundle| E[Client: Request JS Bundle from Server]
  E -->|Send JavaScript Bundle| F[Server: Send JS Bundle to Client]
  F -->|Hydration Process| G[Client: React App Hydrated]
  G -->|Fully Interactive| H[Client: React App Fully Functional]
```

## Run

```bash
npm install
npm start
```
