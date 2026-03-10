# Copilot Instructions — my-react-app

## 🧩 Big picture
- This is a **React + Vite** starter app (generated from Vite template). The app is built around a single entry point: `src/index.jsx`, which is imported from `index.html`.
- Vite serves as the dev server + build tool. It uses ESM imports and supports React Fast Refresh via `@vitejs/plugin-react`.
- There are currently no router/data layer frameworks; the codebase is intended to be minimal, so changes generally start in `src/` and propagate to the DOM via `ReactDOM.createRoot`.

## 🗂️ Key files & directories
- `src/index.jsx` — React entry point (render + root component). The current `App` implementation is incomplete and should return valid JSX.
- `index.html` — Vite HTML entry. It mounts the app into `<div id="root"></div>` and loads `src/index.jsx`.
- `vite.config.js` — Vite config, currently just enables `@vitejs/plugin-react`.
- `eslint.config.js` — ESLint config using the new flat config format. Key rule:
  - `no-unused-vars` is relaxed for identifiers starting with an uppercase letter (`^[A-Z_]`) to allow unused React components.

## 🚀 Common workflows (commands)
- **Start dev server (Fast Refresh):** `npm run dev` (defaults to `http://localhost:5173`).
- **Build for production:** `npm run build` (outputs to `dist/`).
- **Preview built output:** `npm run preview` (serves `dist/`).
- **Lint:** `npm run lint` (runs ESLint across `**/*.{js,jsx}`).

## ✅ Project conventions & patterns
- The project uses **ESM modules** (`type: "module"` in `package.json`). Prefer `import`/`export` over `require`.
- Keep React component files under `src/` and use `.jsx` extension for components that return JSX.
- Avoid adding new tooling unless needed; this repo is intentionally minimal.

## 🔎 What to watch for when editing
- `src/index.jsx` currently contains a broken `App` component (`return <text`). Fix it to return valid JSX (e.g., `<div>Hello</div>`).
- Since there are no tests, rely on manual dev server verification and linting (`npm run lint`).

## 🧩 Extending the app
- Add new components under `src/` and import them in `src/index.jsx` (or future feature entry points).
- Static assets (images, etc.) can go in `public/` and be referenced using absolute URLs (e.g., `/logo.png`).

---

> If any part of this setup is unclear (e.g., the intended app structure beyond `src/index.jsx`), ask and I can update this instruction doc to match the current roadmap.