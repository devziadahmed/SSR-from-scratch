# SSR-from-scratch

An experiment of creating React server components from scratch

```mermaid
flowchart LR
    A(React Component Tree) --> B(Server-Side Rendering)
    B --> C(HTML Sent to Client)
    C --> D(Initial Render)
    D --> E(LCP)
    E --> F(JavaScript Bundle Request)
    F --> G(JavaScript Bundle Sent)
    G --> H(Hydration Process)
```

## Run

```bash
npm install
npm start
```
