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
    x: 112,
    y: 132,
  },
  {
    id: 'github',
    label: 'GitHub',
    symbol: 'GH',
    href: 'https://github.com/Nakagi123',
    external: true,
    x: 244,
    y: 119,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    symbol: 'IG',
    href: 'https://www.instagram.com/nakagi_123/',
    external: true,
    x: 94,
    y: 204,
  },
  {
    id: 'email',
    label: 'Email',
    symbol: '@',
    href: 'mailto:elianmalik2610@gmail.com',
    external: false,
    x: 259,
    y: 199,
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
  'The strongest roots grow quietly, far beneath where anyone can see.',
  'Not every path needs a destination. Sometimes wandering is how we discover one.',
  'Even the oldest trees were once tiny seeds with absolutely no idea what they were doing.',
  'A failed attempt is not a wasted journey. Unless you forgot to save your progress.',
  'Patience, traveler. Even the finest code needs time to compile.',
  'Comparison is a strange curse. Flowers do not compete with the trees beside them.',
  'Sometimes the bravest thing you can do is press Enter and see what happens.',
  'A thousand tutorials cannot replace the wisdom of building something yourself.',
  'Rest is not the opposite of progress. Even forests sleep beneath the stars.',
  'And remember, traveler: the next chapter is rarely written by someone who never begins.',
];
