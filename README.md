## VennCoat — Landing Page React (Vite + Tailwind)

Proiect frontend pentru prezentarea serviciilor VennCoat (tencuieli, vopsitorii, finisaje). Stack modern, performanță ridicată și stiluri utilitare cu Tailwind v4.

### Tech stack

- React 19 + Vite 7
- Tailwind CSS v4 (preset `@tailwindcss/vite`)
- Heroicons React
- ESLint + Prettier (cu plugin Tailwind)

---

### Cerințe

- Node.js 18+ (recomandat LTS 20+)
- pnpm / npm / yarn (orice manager de pachete)

### Instalare

```bash
npm install
```

### Dezvoltare

```bash
npm run dev
```

Deschide apoi aplicația la `http://localhost:5173` (implicit Vite).

### Build producție

```bash
npm run build
npm run preview   # servește build-ul local pentru verificare
```

### Scripturi utile

- `npm run dev` – server de development Vite
- `npm run build` – build producție
- `npm run preview` – previzualizare build
- `npm run lint` – rulează ESLint
- `npm run format` – rulează Prettier (cu sortare de clase Tailwind)

---

### Structură proiect (scurt)

```
src/
  assets/           # imagini, svg, media (ex: star.svg, hero-image.webp)
  components/       # componente UI (Navbar, Badge, ServicesCard etc.)
  sections/         # secțiuni de pagină (Hero, Services etc.)
  styles/           # CSS global + layere Tailwind (index.css)
  main.jsx          # bootstrap React
  App.jsx           # root component
public/             # fișiere servite ca static (dacă e cazul)
```

### Stiluri (Tailwind v4)

- Configurarea Tailwind este făcută în `src/styles/index.css` folosind `@theme`, `@layer base/components/utilities` și `@apply`.
- Pentru imagini folosește importuri în componente (ex: `import icon from "../assets/star.svg";`).

Exemplu: folosirea unui SVG în componentă

```jsx
import starIcon from "../assets/star.svg";

export function Badge({ content }) {
  return (
    <div className="badge">
      <img src={starIcon} alt="" />
      <p>{content}</p>
    </div>
  );
}
```

---

### Contribuție / Convenții

- Commit-uri: scurte și descriptive, de ex. `feat: navbar ~50% responsive + Servicii aproape gata`.
- Cod: respectă ESLint și formatează cu Prettier înainte de commit.

### Deploy

Rezultatul de producție se află în `dist/`. Poate fi servit pe orice hosting static (Netlify, Vercel, GitHub Pages, nginx etc.).

---

### Licență

Proiect intern VennCoat. Toate drepturile rezervate.
