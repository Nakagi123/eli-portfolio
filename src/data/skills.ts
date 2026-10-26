export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      'HTML & CSS',
      'JavaScript',
      'TypeScript',
      'C#',
      'Python',
      'C++',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'React',
      'Next.js',
      'Astro',
      'Flutter',
      'ASP.NET Core',
    ],
  },
  {
    category: 'Databases & Servers',
    skills: [
      'PostgreSQL',
      'MariaDB / MySQL',
      'PM2',
      'Nginx',
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Android Studio',
      'pgAdmin 4',
      'Apidog',
    ],
  },
];