// Données des projets indépendantes de la langue (technologies et liens).
// Les titres et descriptions sont dans data/i18n (projects.items[key]).
// Règle : un lien n'est affiché que s'il existe réellement (null = masqué).
export const projects = [
  {
    key: 'employees',
    stack: ['Laravel', 'React', 'API REST', 'CRUD'],
    links: [
      { type: 'github', label: 'api', href: 'https://github.com/GUIC-ISRA/laravel-api-employes' },
      { type: 'github', label: 'frontend', href: 'https://github.com/GUIC-ISRA/nextjs-frontend-employes' },
    ],
  },
  {
    key: 'qr',
    stack: ['PHP'],
    links: [{ type: 'github', label: 'code', href: 'https://github.com/GUIC-ISRA/Qr_app' }],
  },
  {
    key: 'students',
    stack: ['Laravel', 'PHP', 'MySQL', 'CRUD'],
    links: [
      { type: 'github', label: 'code', href: 'https://github.com/GUIC-ISRA/Gestion_Etudiant_Formation_Laravel' },
    ],
  },
  {
    key: 'portfolio',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Motion'],
    // Liens renseignés à l'étape 10 (dépôt GitHub + site en ligne)
    links: [
      { type: 'github', label: 'code', href: null },
      { type: 'live', label: 'live', href: null },
    ],
  },
]
