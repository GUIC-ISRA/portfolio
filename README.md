# Portfolio — Edem Israël Gbegnedji

Portfolio personnel de développeur full stack (web & mobile).

## Stack

- [React](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) pour les animations
- [Lucide](https://lucide.dev) pour les icônes
- Thème clair / sombre et version FR / EN

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

## Scripts

| Commande          | Rôle                                   |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Serveur de développement               |
| `npm run build`   | Build de production dans `dist/`       |
| `npm run preview` | Prévisualise le build de production    |
| `npm run lint`    | Analyse du code (oxlint)               |

## Structure

```
src/
├── assets/images/     photos optimisées (WebP)
├── components/
│   ├── layout/        Navbar, Footer
│   ├── sections/      une section du site par fichier
│   └── ui/            composants réutilisables
├── context/           thème et langue
├── data/
│   ├── i18n/          textes FR et EN
│   └── links.js       coordonnées et liens
├── hooks/
└── styles/index.css   palette et styles de base
```

## Configuration

Copier `.env.example` en `.env` et renseigner la clé [Web3Forms](https://web3forms.com) pour le formulaire de contact.
