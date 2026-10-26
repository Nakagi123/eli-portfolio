export interface WisdomFruit {
  id: string;
  label: string;
  symbol: string;
  href: string;
  external: boolean;
  x: number;
  y: number;
}

export const wisdomFruits: WisdomFruit[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    symbol: 'in',
    href: 'https://www.linkedin.com/in/elian-malik-achmad-uluelang/',
    external: true,
    x: 100,
    y: 145,
  },
  {
    id: 'github',
    label: 'GitHub',
    symbol: 'GH',
    href: 'https://github.com/Nakagi123',
    external: true,
    x: 245,
    y: 125,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    symbol: 'IG',
    href: 'https://www.instagram.com/nakagi_123/',
    external: true,
    x: 85,
    y: 220,
  },
  {
    id: 'email',
    label: 'Email',
    symbol: '@',
    href: 'mailto:elianmalik2610@gmail.com',
    external: false,
    x: 260,
    y: 215,
  },
];

export const wisdomDialogues: string[] = [
  'Ah, another traveler! Pick a fruit. Every connection leads to a new adventure.',
  'Some quests begin with a sword. The best ones begin with a message.',
  'Do not fear the unknown. Fear the bug that only appears in production.',
  'A wise developer knows when to code… and when to read the documentation.',
  'The GitHub fruit contains many commits. Some are even meaningful.',
  'Seeking a fellow adventurer? The LinkedIn fruit may guide you.',
  'The Instagram fruit offers glimpses beyond the terminal.',
  'An email is merely a quest invitation in disguise.',
  'Great things grow from small ideas. So do very complicated side projects.',
  'You have reached the end of this page, but perhaps the beginning of something else.',
];