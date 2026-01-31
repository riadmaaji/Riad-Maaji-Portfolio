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
    'nav.skills': 'Skills',

    // Hero
    'hero.greeting': 'Hey, I\'m',
    'hero.name': 'Riad.',
    'hero.headline': 'I turn ideas into apps, from database to UI.',
    'hero.bio': 'Final-year CS student at Dawson College. I like building things that work well and look good. Currently looking for my first dev role.',
    'hero.cta.work': 'See My Work',
    'hero.cta.contact': 'Say Hi',

    // Projects Section
    'projects.title': 'Projects',
    'projects.featured': 'Featured Projects',
    'projects.all': 'All Projects',
    'projects.description': 'Things I\'ve built. Click any project for details.',
    'projects.featuredDescription': 'Some highlights from my work.',
    'projects.viewAll': 'View all projects',
    'projects.empty': 'No projects yet. Check back soon!',
    'projects.backToProjects': 'Back to Projects',
    'projects.backToHome': 'Back to Home',
    'projects.viewSource': 'View Source',
    'projects.liveDemo': 'Live Demo',

    // About Section
    'about.title': 'About Me',
    'about.bio1': 'I\'m finishing up my CS degree at Dawson College in Montreal. I got into programming because I wanted to build stuff, not just use it.',
    'about.bio2': 'Before coding, I worked in sales. That taught me how to talk to people, figure out what they actually need, and explain things without the jargon. Turns out those skills are pretty useful in tech too.',
    'about.bio3': 'Right now I\'m looking for a dev role where I can keep learning and actually ship things that matter.',

    // Skills Section
    'skills.title': 'Skills',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks & Libraries',
    'skills.tools': 'Tools & Platforms',
    'skills.soft': 'Soft Skills',
    'skills.soft.communication': 'Communication',
    'skills.soft.problemSolving': 'Problem-Solving',
    'skills.soft.teamwork': 'Team Collaboration',
    'skills.soft.adaptability': 'Adaptability',
    'skills.soft.timeManagement': 'Time Management',
    'skills.soft.clientRelations': 'Client Relations',
    'skills.soft.agile': 'Agile Methodologies',

    // Education Section
    'education.title': 'Education',
    'education.degree': 'Computer Science Technology',
    'education.school': 'Dawson College',
    'education.date': 'Graduating 2026',

    // 404
    '404.title': '404',
    '404.message': 'Page not found',
    '404.cta': 'Go Home',

    // Footer
    'footer.rights': 'All rights reserved.',

    // Meta
    'meta.description': 'Full-stack developer and CS student. I build web apps.',
    'meta.about.description': 'Learn more about me and my background.',
    'meta.projects.description': 'Projects I\'ve built.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',

    // Hero
    'hero.greeting': 'Salut, je suis',
    'hero.name': 'Riad.',
    'hero.headline': 'Je transforme des idées en apps, du backend au frontend.',
    'hero.bio': 'Étudiant en dernière année en informatique au Collège Dawson. J\'aime construire des trucs qui fonctionnent bien et qui ont du style. Je cherche mon premier poste en dev.',
    'hero.cta.work': 'Voir mes projets',
    'hero.cta.contact': 'Me contacter',

    // Projects Section
    'projects.title': 'Projets',
    'projects.featured': 'Projets en vedette',
    'projects.all': 'Tous les projets',
    'projects.description': 'Ce que j\'ai construit. Cliquez sur un projet pour les détails.',
    'projects.featuredDescription': 'Quelques faits saillants de mon travail.',
    'projects.viewAll': 'Voir tous les projets',
    'projects.empty': 'Aucun projet pour le moment. Revenez bientôt!',
    'projects.backToProjects': 'Retour aux projets',
    'projects.backToHome': 'Retour à l\'accueil',
    'projects.viewSource': 'Voir le code',
    'projects.liveDemo': 'Démo en ligne',

    // About Section
    'about.title': 'À propos',
    'about.bio1': 'Je termine mon DEC en informatique au Collège Dawson à Montréal. J\'ai commencé à coder parce que je voulais créer des trucs, pas juste les utiliser.',
    'about.bio2': 'Avant le code, j\'ai travaillé en vente. Ça m\'a appris à parler aux gens, comprendre leurs vrais besoins et expliquer les choses simplement. Ces compétences sont super utiles en tech aussi.',
    'about.bio3': 'Je cherche un poste de dev où je peux continuer à apprendre et livrer des projets qui comptent.',

    // Skills Section
    'skills.title': 'Compétences',
    'skills.languages': 'Langages',
    'skills.frameworks': 'Frameworks et bibliothèques',
    'skills.tools': 'Outils et plateformes',
    'skills.soft': 'Compétences générales',
    'skills.soft.communication': 'Communication',
    'skills.soft.problemSolving': 'Résolution de problèmes',
    'skills.soft.teamwork': 'Travail d\'équipe',
    'skills.soft.adaptability': 'Adaptabilité',
    'skills.soft.timeManagement': 'Gestion du temps',
    'skills.soft.clientRelations': 'Relations clients',
    'skills.soft.agile': 'Méthodologies Agile',

    // Education Section
    'education.title': 'Formation',
    'education.degree': 'Techniques de l\'informatique',
    'education.school': 'Collège Dawson',
    'education.date': 'Diplôme prévu 2026',

    // 404
    '404.title': '404',
    '404.message': 'Page non trouvée',
    '404.cta': 'Retour à l\'accueil',

    // Footer
    'footer.rights': 'Tous droits réservés.',

    // Meta
    'meta.description': 'Développeur full-stack et étudiant en informatique. Je crée des applications web.',
    'meta.about.description': 'En savoir plus sur moi et mon parcours.',
    'meta.projects.description': 'Les projets que j\'ai réalisés.',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
