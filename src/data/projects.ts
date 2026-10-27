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

export const projects: Project[] = [
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
  },
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
  },
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
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.order - b.order);

export const allProjects = [...projects].sort(
  (a, b) => a.order - b.order
);