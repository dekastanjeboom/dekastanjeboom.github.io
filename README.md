# De Kastanjeboom

Website for the bed & breakfast **De Kastanjeboom**  
📍 Jabbeke, Belgium  
🌐 https://www.dekastanjeboom.be

This is a small React-based website consisting of a landing page and detail pages with contact / booking information.

---

## Tech overview

- React (Create React App)
- React Router
- Sass (Dart Sass)
- Bootstrap / Reactstrap
- Now UI Kit (theme)

The project was originally created with Create React App and has since been modernized to run on current tooling while keeping the same structure.

---

## Requirements

- **Node.js 18**
  - Recommended via `nvm`
  - `.nvmrc` is present in the repo

```
nvm use
```

- npm (comes with Node)

---

## Project structure (important bits)

- `src/` – React source code
- `src/assets/` – images, fonts, SCSS, compiled CSS
- `src/locales/` – translations (`<lang>/translation.json`)
- `build/` – production build output (generated, not committed)

---

## Environment variables

If present, environment-specific variables live in:

```
.env
```

(Usually not required for local development.)

---

## Running locally

```
npm install
npm start
```

This starts the development server at:

```
http://localhost:3000
```

---

## Building for production

```
npm run build
```

This creates a static production build in the `build/` directory.

---

## Deployment (GitHub Pages)

### Branch model

- `development` → source code (this is where you work)
- `master` → static build output (used by GitHub Pages)

### Deploy flow

1. Make changes on `development`
2. Commit and push `development`
3. Deploy using:

```
npm run deploy
```

This will:
- run a production build
- push the contents of `build/` to the `master` branch
- GitHub Pages serves the site from `master`

> ⚠️ Do **not** edit the `master` branch manually.  
> It only contains generated files.

---

## Notes for maintainers

- This is intentionally a **simple, stable setup**
- Dependencies are not aggressively upgraded to avoid breaking changes
- Sass deprecation warnings may appear but do not affect functionality
- If something breaks:
  - delete `node_modules`
  - delete `package-lock.json`
  - reinstall with `npm install`

---

## Contact

For questions or maintenance:

📧 bert.lievrouw@gmail.com
