
export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  technologies: string[];
  featured: boolean;
  order: number;

  // Optional project details
  role?: string;
  year?: string;
  challenge?: string;
  solution?: string;
  lessons?: string;
  highlights?: string[];

  // Links and media
  github?: string;
  demo?: string;
  image?: string;
  screenshots?: string[];
};

/*
============================================================
📁 PROJECT IMAGE DIRECTORY GUIDE
============================================================

All project images belong inside the PUBLIC folder.

Example folder structure:

public/
└── projects/
    ├── project-alpha/
    │   ├── cover.png
    │   ├── screenshot-1.png
    │   ├── screenshot-2.png
    │   └── screenshot-3.png
    │
    ├── project-beta/
    │   ├── cover.png
    │   ├── screenshot-1.png
    │   ├── screenshot-2.png
    │   └── screenshot-3.png
    │
    └── project-gamma/
        ├── cover.png
        ├── screenshot-1.png
        ├── screenshot-2.png
        └── screenshot-3.png

IMPORTANT:
- Create these folders yourself inside public/projects/.
- Use paths starting with /projects/, NOT /public/projects/.
- "image" is the main cover image.
- "screenshots" is the additional image gallery.
- You can add as many screenshots as you want.
- Uncomment image paths only after the files exist.
- Every project must have a unique slug.

============================================================
*/

export const projects: Project[] = [
  // ========================================================
  // PROJECT 01 — ALPHA
  // Image folder: public/projects/project-alpha/
  // Detail URL:   /projects/project-alpha
  // ========================================================
  {
    slug: 'project-alpha',
    title: 'Project Alpha',
    category: 'WEB APPLICATION',

    summary: 'A web application built with curiosity and care.',

    description:
      'Replace this with the full story of your project. Explain what it does, why you built it, and who it is for.',

    icon: '🌐',
    rarity: 'rare',

    technologies: ['Astro', 'TypeScript'],

    featured: true,
    order: 1,

    role: 'Developer',
    year: '2026',

    challenge: 'What problem were you trying to solve?',
    solution: 'How did you approach solving that problem?',
    lessons: 'What did this project teach you?',

    highlights: [
      'Highlight an important feature',
      'Describe an interesting technical decision',
      'Mention something you are proud of',
    ],

    // LINKS
    // Uncomment and replace when your links are ready.
    // github: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
    // demo: 'https://your-live-project.com',

    // COVER IMAGE
    // File: public/projects/project-alpha/cover.png
    // image: '/projects/project-alpha/cover.png',

    // SCREENSHOT GALLERY
    // Files go inside public/projects/project-alpha/
    // screenshots: [
    //   '/projects/project-alpha/screenshot-1.png',
    //   '/projects/project-alpha/screenshot-2.png',
    //   '/projects/project-alpha/screenshot-3.png',
    // ],
  },

  // ========================================================
  // PROJECT 02 — BETA
  // Image folder: public/projects/project-beta/
  // Detail URL:   /projects/project-beta
  // ========================================================
  {
    slug: 'project-beta',
    title: 'Project Beta',
    category: 'GAME DEVELOPMENT',

    summary: 'An interactive adventure full of experiments.',

    description:
      'Replace this with a detailed description of your game.',

    icon: '🎮',
    rarity: 'epic',

    technologies: ['Godot', 'GDScript'],

    featured: true,
    order: 2,

    role: 'Game Developer',
    year: '2026',

    // OPTIONAL STORY DETAILS
    // challenge: 'What was the biggest challenge?',
    // solution: 'How did you solve it?',
    // lessons: 'What did you learn?',

    // highlights: [
    //   'Gameplay feature one',
    //   'Gameplay feature two',
    //   'Something unique about the game',
    // ],

    // LINKS
    // github: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
    // demo: 'https://your-game-link.com',

    // COVER IMAGE
    // File: public/projects/project-beta/cover.png
    // image: '/projects/project-beta/cover.png',

    // SCREENSHOT GALLERY
    // Files go inside public/projects/project-beta/
    // screenshots: [
    //   '/projects/project-beta/screenshot-1.png',
    //   '/projects/project-beta/screenshot-2.png',
    //   '/projects/project-beta/screenshot-3.png',
    // ],
  },

  // ========================================================
  // PROJECT 03 — GAMMA
  // Image folder: public/projects/project-gamma/
  // Detail URL:   /projects/project-gamma
  // ========================================================
  {
    slug: 'project-gamma',
    title: 'Project Gamma',
    category: 'CREATIVE CODING',

    summary: 'A creative experiment exploring new ideas.',

    description:
      'Replace this with a detailed description of your experiment.',

    icon: '✨',
    rarity: 'legendary',

    technologies: ['JavaScript', 'CSS'],

    featured: true,
    order: 3,

    role: 'Developer',
    year: '2026',

    // OPTIONAL STORY DETAILS
    // challenge: 'What problem did you explore?',
    // solution: 'What approach did you take?',
    // lessons: 'What did you discover?',

    // highlights: [
    //   'Interesting experiment one',
    //   'Interesting experiment two',
    //   'Favorite result',
    // ],

    // LINKS
    // github: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
    // demo: 'https://your-experiment-link.com',

    // COVER IMAGE
    // File: public/projects/project-gamma/cover.png
    // image: '/projects/project-gamma/cover.png',

    // SCREENSHOT GALLERY
    // Files go inside public/projects/project-gamma/
    // screenshots: [
    //   '/projects/project-gamma/screenshot-1.png',
    //   '/projects/project-gamma/screenshot-2.png',
    //   '/projects/project-gamma/screenshot-3.png',
    // ],
  },
];

// ==========================================================
// AUTOMATIC PROJECT LISTS
// ==========================================================

// Projects shown inside the homepage treasure chest.
// Set featured: true to include a project.
export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.order - b.order);

// Every project, including non-featured ones.
// Used by the full archive and detail pages.
export const allProjects = [...projects].sort(
  (a, b) => a.order - b.order
);
