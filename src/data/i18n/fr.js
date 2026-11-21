// Textes en français. Chaque section ajoute ses textes ici.
const fr = {
  meta: {
    title: 'Edem Israël Gbegnedji — Développeur Full Stack Web & Mobile',
  },
  nav: {
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expérience',
    projects: 'Projets',
    contact: 'Contact',
  },
  ui: {
    switchToLight: 'Passer au thème clair',
    switchToDark: 'Passer au thème sombre',
    switchLang: 'Switch to English',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    skipToContent: 'Aller au contenu',
    home: 'Accueil',
    scroll: 'Défiler',
  },
  hero: {
    status: 'Ouvert aux opportunités — CDI, freelance, sur place ou à distance',
    statusShort: 'Ouvert aux opportunités',
    firstName: 'Edem Israël',
    lastName: 'GBEGNEDJI',
    role: 'Développeur Full Stack',
    roleHighlight: 'Web & Mobile',
    pitch:
      'Je conçois des applications web et mobiles fiables, pensées pour fonctionner même quand la connexion ne suit pas.',
    ctaProjects: 'Voir mes projets',
    ctaContact: 'Me contacter',
    ctaCv: 'CV (PDF)',
    portraitAlt: 'Portrait d’Edem Israël Gbegnedji, souriant',
  },
  about: {
    eyebrow: 'À propos',
    title: 'De la biologie au code',
    paragraphs: [
      'Je suis **Edem Israël Gbegnedji**, développeur full stack basé à Lomé. Après un premier parcours en biologie, j’ai choisi le développement logiciel et obtenu une **Licence Professionnelle en Génie Logiciel** à l’ESIG Global Success.',
      'Lors de mon stage chez **Umbaji**, j’ai contribué au développement d’une **application mobile de collecte de données** en Flutter, conçue pour fonctionner hors connexion grâce à une base SQLite locale. Cette expérience m’a appris à concevoir pour des utilisateurs réels, dans des conditions réelles.',
      'Côté web, je développe des **API REST avec Laravel** et des **interfaces avec React**. J’aime partir d’un schéma de données propre et livrer un produit simple à utiliser.',
    ],
    facts: [
      { title: 'Lomé, Togo', text: 'Sur place ou à distance' },
      { title: 'Web & Mobile', text: 'Laravel · React · Flutter' },
      { title: 'FR · EN · Ewé', text: 'Langues' },
    ],
    photoAlt: 'Edem Israël Gbegnedji en costume, concentré et attentif',
  },
  personality: {
    eyebrow: 'Personnalité',
    title: 'Au-delà du code',
    lead: 'Passionné de **développement personnel**, je considère qu’un bon développeur ne cesse jamais d’apprendre. Je cultive la curiosité, la discipline et l’envie de progresser, dans le code comme ailleurs.',
    values: [
      {
        title: 'Éternel apprenant',
        text: 'Chaque projet est l’occasion d’apprendre une technologie ou une meilleure façon de faire.',
      },
      {
        title: 'Rigueur',
        text: 'Données bien modélisées, code structuré, versions suivies : je soigne ce qui rend un produit fiable.',
      },
      {
        title: 'Développement personnel',
        text: 'Je me fixe des objectifs clairs et travaille sur moi autant que sur mes compétences techniques.',
      },
      {
        title: 'Autonome et en équipe',
        text: 'Capable d’avancer seul sur une tâche comme de collaborer efficacement au sein d’une équipe.',
      },
    ],
    quote: 'Apprendre **chaque jour**, livrer avec **rigueur**.',
    photoCaption: 'Soutenance · ESIG Global Success',
    photoAlt: 'Edem Israël Gbegnedji en costume lors de sa soutenance de mémoire',
  },
  skills: {
    eyebrow: 'Compétences',
    title: 'Ma boîte à outils',
    categories: [
      { key: 'mobile', title: 'Mobile', items: ['Flutter', 'iOS / Android', 'SQLite', 'Offline-first', 'Persistance locale'] },
      { key: 'frontend', title: 'Frontend', items: ['React', 'JavaScript', 'HTML5 / CSS3', 'Responsive design'] },
      { key: 'backend', title: 'Backend', items: ['PHP', 'Laravel', 'API REST', 'Architecture MVC', 'CRUD'] },
      { key: 'data', title: 'Données & conception', items: ['MySQL', 'SQL', 'SQLite', 'Merise', 'UML'] },
      { key: 'tools', title: 'Outils & méthodes', items: ['Git', 'GitHub', 'VS Code', 'XAMPP', 'Gestion de versions'] },
    ],
    notions: {
      title: 'Notions',
      text: 'Domaines que j’explore et continue d’approfondir.',
      items: ['Sécurité informatique', 'Intégration d’outils d’IA', 'ERP', 'Architecture logicielle'],
    },
  },
  experience: {
    eyebrow: 'Expérience',
    title: 'Expérience professionnelle',
    jobs: [
      {
        role: 'Stagiaire Développeur Mobile',
        company: 'Umbaji SARL',
        location: 'Lomé, Togo',
        period: '2026',
        summary: 'Développement d’une application mobile de collecte de données, multiplateforme et utilisable hors connexion.',
        tasks: [
          'Développement et optimisation de fonctionnalités Flutter pour iOS et Android',
          'Base de données SQLite locale assurant la persistance des données et l’usage hors connexion',
          'Intégration des API REST existantes pour échanger les données entre l’application et le back-end',
          'Maintenance corrective et résolution d’incidents pour des fonctionnalités plus stables',
          'Versionnement du code avec Git pour des livraisons traçables',
        ],
        stack: ['Flutter', 'SQLite', 'API REST', 'Git'],
      },
    ],
    photoAlt: 'Edem Israël Gbegnedji en costume, présentant son travail devant un ordinateur portable',
  },
  projects: {
    eyebrow: 'Projets',
    title: 'Projets sélectionnés',
    linkLabels: { api: 'API', frontend: 'Interface', code: 'Code source', live: 'Voir le site' },
    items: {
      employees: {
        tag: 'Full stack',
        title: 'Gestion des employés',
        description:
          'Application full stack : une API REST développée avec Laravel et une interface React pour afficher, ajouter, modifier et supprimer les employés d’une entreprise.',
      },
      qr: {
        tag: 'Outil',
        title: 'Générateur de QR codes de fidélité',
        description:
          'Application PHP qui génère des QR codes destinés aux clients fidèles d’une entreprise.',
      },
      students: {
        tag: 'Laravel',
        title: 'Gestion des étudiants',
        description:
          'Application Laravel de gestion des étudiants (nom, prénom, filière) avec les opérations CRUD complètes, réalisée pour consolider les bases du framework.',
      },
      portfolio: {
        tag: 'Front-end',
        title: 'Ce portfolio',
        description:
          'Site personnel conçu et développé de A à Z : thème clair et sombre, version bilingue, portrait 3D animé et attention portée à l’accessibilité.',
      },
    },
  },
  education: {
    eyebrow: 'Formation',
    title: 'Parcours académique',
    items: [
      {
        key: 'licence',
        degree: 'Licence Professionnelle en Génie Logiciel',
        school: 'ESIG Global Success',
        location: 'Lomé, Togo',
        period: '2023 – 2026',
        text: 'Formation orientée développement d’applications, conclue par un stage chez Umbaji et la soutenance de mon mémoire.',
      },
      {
        key: 'biology',
        degree: 'Parcours universitaire en Biologie & Physiologie Animale',
        school: 'Université de Lomé',
        location: 'Lomé, Togo',
        period: '2020',
        text: 'Une première formation scientifique qui m’a apporté rigueur et esprit d’analyse.',
      },
      {
        key: 'bac',
        degree: 'Baccalauréat série D',
        school: 'Lycée DINO-GOLO',
        location: 'Togo',
        period: '2019',
        text: null,
      },
    ],
  },
}

export default fr
