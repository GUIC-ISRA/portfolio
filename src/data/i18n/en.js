// English texts — must mirror the structure of fr.js.
const en = {
  meta: {
    title: 'Edem Israël Gbegnedji — Full Stack Developer, Web & Mobile',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  ui: {
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    switchLang: 'Passer en français',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
    home: 'Home',
    scroll: 'Scroll',
  },
  hero: {
    status: 'Open to opportunities — full-time, freelance, on-site or remote',
    statusShort: 'Open to opportunities',
    firstName: 'Edem Israël',
    lastName: 'GBEGNEDJI',
    role: 'Full Stack Developer',
    roleHighlight: 'Web & Mobile',
    pitch:
      'I build reliable web and mobile apps, designed to keep working even when the connection doesn’t.',
    ctaProjects: 'View my projects',
    ctaContact: 'Contact me',
    ctaCv: 'Résumé (PDF)',
    portraitAlt: 'Portrait of Edem Israël Gbegnedji, smiling',
  },
  about: {
    eyebrow: 'About',
    title: 'From biology to code',
    paragraphs: [
      'I’m **Edem Israël Gbegnedji**, a full stack developer based in Lomé, Togo. After starting out in biology, I chose software development and completed a **Professional Bachelor’s degree in Software Engineering** at ESIG Global Success.',
      'During my internship at **Umbaji**, I helped build a **mobile data collection app** with Flutter, designed to work offline thanks to a local SQLite database. It taught me to design for real users, in real-world conditions.',
      'On the web side, I build **REST APIs with Laravel** and **interfaces with React**. I like to start from a clean data model and ship a product that is simple to use.',
    ],
    facts: [
      { title: 'Lomé, Togo', text: 'On-site or remote' },
      { title: 'Web & Mobile', text: 'Laravel · React · Flutter' },
      { title: 'FR · EN · Ewe', text: 'Languages' },
    ],
    photoAlt: 'Edem Israël Gbegnedji in a suit, focused and attentive',
  },
  personality: {
    eyebrow: 'Personality',
    title: 'Beyond the code',
    lead: 'Passionate about **personal development**, I believe a good developer never stops learning. I nurture curiosity, discipline and the drive to improve, in code and beyond.',
    values: [
      {
        title: 'Lifelong learner',
        text: 'Every project is a chance to learn a new technology or a better way of doing things.',
      },
      {
        title: 'Rigor',
        text: 'Well-modeled data, structured code, tracked versions: I care about what makes a product reliable.',
      },
      {
        title: 'Personal growth',
        text: 'I set clear goals and work on myself as much as on my technical skills.',
      },
      {
        title: 'Independent & team player',
        text: 'Able to move a task forward on my own as well as collaborate effectively within a team.',
      },
    ],
    quote: 'Learn **every day**, deliver with **rigor**.',
    photoCaption: 'Thesis defense · ESIG Global Success',
    photoAlt: 'Edem Israël Gbegnedji in a suit during the thesis defense',
  },
  skills: {
    eyebrow: 'Skills',
    title: 'My toolbox',
    categories: [
      { key: 'mobile', title: 'Mobile', items: ['Flutter', 'iOS / Android', 'SQLite', 'Offline-first', 'Local persistence'] },
      { key: 'frontend', title: 'Frontend', items: ['React', 'JavaScript', 'HTML5 / CSS3', 'Responsive design'] },
      { key: 'backend', title: 'Backend', items: ['PHP', 'Laravel', 'REST API', 'MVC architecture', 'CRUD'] },
      { key: 'data', title: 'Data & design', items: ['MySQL', 'SQL', 'SQLite', 'Merise', 'UML'] },
      { key: 'tools', title: 'Tools & methods', items: ['Git', 'GitHub', 'VS Code', 'XAMPP', 'Version control'] },
    ],
    notions: {
      title: 'Familiar with',
      text: 'Areas I am exploring and keep deepening.',
      items: ['Cybersecurity', 'AI tools integration', 'ERP', 'Software architecture'],
    },
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Work experience',
    jobs: [
      {
        role: 'Mobile Developer Intern',
        company: 'Umbaji SARL',
        location: 'Lomé, Togo',
        period: '2026',
        summary: 'Built a cross-platform mobile data collection app that works offline.',
        tasks: [
          'Developed and optimized Flutter features for iOS and Android',
          'Local SQLite database for data persistence and offline use',
          'Integrated existing REST APIs to exchange data between the app and the back-end',
          'Corrective maintenance and incident resolution for more stable features',
          'Code versioning with Git for traceable releases',
        ],
        stack: ['Flutter', 'SQLite', 'REST API', 'Git'],
      },
    ],
    photoAlt: 'Edem Israël Gbegnedji in a suit, presenting work in front of a laptop',
  },
}

export default en
