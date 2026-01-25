export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',

    // Hero
    'hero.greeting': 'Hi, my name is',
    'hero.name': 'Riad Maaji.',
    'hero.headline': 'I build full-stack applications that solve real-world problems.',
    'hero.bio': 'Final-year Computer Science student at Dawson College passionate about building full-stack applications. I enjoy working across the entire stack—from databases and backend logic to frontend interfaces.',
    'hero.cta.work': 'View My Work',
    'hero.cta.contact': 'Get In Touch',

    // Featured Projects
    'featured.title': 'Featured Projects',
    'featured.viewAll': 'View all →',

    // Projects Page
    'projects.title': 'Projects',
    'projects.description': 'A selection of projects I\'ve worked on. Each one taught me something new.',
    'projects.empty': 'No projects yet. Check back soon!',
    'projects.backToProjects': 'Back to Projects',
    'projects.viewSource': 'View Source',
    'projects.liveDemo': 'Live Demo',

    // About Page
    'about.title': 'About Me',
    'about.bio1': 'Final-year Computer Science student at Dawson College passionate about building full-stack applications that solve real-world problems.',
    'about.bio2': 'I enjoy working across the entire stack—from databases and backend logic to frontend interfaces. My experience in sales has sharpened my communication skills and taught me how to understand client needs, explain technical concepts clearly, and build strong relationships—skills I bring to every team I work with.',
    'about.bio3': 'I\'m currently looking for opportunities where I can contribute to meaningful projects while continuing to grow as a developer.',
    'about.skills.languages': 'Languages',
    'about.skills.frameworks': 'Frameworks & Libraries',
    'about.skills.tools': 'Tools & Platforms',
    'about.education': 'Education',
    'about.education.degree': 'Computer Science Technology',
    'about.education.school': 'Dawson College',
    'about.education.date': 'Expected 2026',

    // 404
    '404.title': '404',
    '404.message': 'Page not found',
    '404.cta': 'Go Home',

    // Footer
    'footer.rights': 'All rights reserved.',

    // Meta
    'meta.description': 'Full-Stack Developer passionate about building applications that make a difference',
    'meta.about.description': 'Learn more about me and my background.',
    'meta.projects.description': 'A collection of projects I\'ve built.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',

    // Hero
    'hero.greeting': 'Bonjour, je m\'appelle',
    'hero.name': 'Riad Maaji.',
    'hero.headline': 'Je crée des applications full-stack qui résolvent des problèmes concrets.',
    'hero.bio': 'Étudiant en dernière année en informatique au Collège Dawson, passionné par le développement d\'applications full-stack. J\'aime travailler sur l\'ensemble de la pile technologique—des bases de données à la logique backend jusqu\'aux interfaces frontend.',
    'hero.cta.work': 'Voir mes projets',
    'hero.cta.contact': 'Me contacter',

    // Featured Projects
    'featured.title': 'Projets en vedette',
    'featured.viewAll': 'Voir tout →',

    // Projects Page
    'projects.title': 'Projets',
    'projects.description': 'Une sélection de projets sur lesquels j\'ai travaillé. Chacun m\'a appris quelque chose de nouveau.',
    'projects.empty': 'Aucun projet pour le moment. Revenez bientôt!',
    'projects.backToProjects': 'Retour aux projets',
    'projects.viewSource': 'Voir le code',
    'projects.liveDemo': 'Démo en ligne',

    // About Page
    'about.title': 'À propos de moi',
    'about.bio1': 'Étudiant en dernière année en informatique au Collège Dawson, passionné par le développement d\'applications full-stack qui résolvent des problèmes concrets.',
    'about.bio2': 'J\'aime travailler sur l\'ensemble de la pile technologique—des bases de données à la logique backend jusqu\'aux interfaces frontend. Mon expérience en vente a affiné mes compétences en communication et m\'a appris à comprendre les besoins des clients, à expliquer clairement les concepts techniques et à bâtir des relations solides—des compétences que j\'apporte à chaque équipe.',
    'about.bio3': 'Je suis actuellement à la recherche d\'opportunités où je peux contribuer à des projets significatifs tout en continuant à évoluer en tant que développeur.',
    'about.skills.languages': 'Langages',
    'about.skills.frameworks': 'Frameworks et bibliothèques',
    'about.skills.tools': 'Outils et plateformes',
    'about.education': 'Formation',
    'about.education.degree': 'Techniques de l\'informatique',
    'about.education.school': 'Collège Dawson',
    'about.education.date': 'Prévu 2026',

    // 404
    '404.title': '404',
    '404.message': 'Page non trouvée',
    '404.cta': 'Retour à l\'accueil',

    // Footer
    'footer.rights': 'Tous droits réservés.',

    // Meta
    'meta.description': 'Développeur Full-Stack passionné par la création d\'applications qui font la différence',
    'meta.about.description': 'En savoir plus sur moi et mon parcours.',
    'meta.projects.description': 'Une collection de projets que j\'ai réalisés.',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
