# 🎮 ELI.EXE

**An interactive developer portfolio disguised as a little RPG adventure.**

Built with Astro, Tailwind CSS v4, and TypeScript. Visitors explore six chapters, unlock an enchanted treasure chest of projects, and meet the Tree of Wisdom.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open the local address shown in the terminal (usually `http://localhost:4321`).

```bash
npm run build    # Check production build
npm run preview  # Preview production build
```

## 🗺️ The Six Chapters

| Chapter | Name | Feature |
|---|---|---|
| 00 | The Beginning | Hero and pixel portal |
| 01 | The Toolkit | Skills |
| 02 | The Work Archive | Enchanted chest and project inventory |
| 03 | The Achievements | Certifications |
| 04 | The Journey | Education and experience |
| 05 | The Next Adventure | Tree of Wisdom and contact |

## 📁 Project Structure

```text
src/
├── components/
│   ├── CertificationCard.astro
│   ├── Footer.astro
│   ├── JourneyNode.astro
│   ├── Navbar.astro
│   ├── PixelDoor.astro
│   ├── ProjectInventory.astro
│   ├── ThemeToggle.astro
│   ├── TreasureChest.astro
│   └── WisdomTree.astro
├── data/
│   ├── certifications.ts
│   ├── journey.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── treeOfWisdom.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── certifications/
│   │   └── index.astro
│   └── projects/
│       └── [slug].astro
├── sections/
│   ├── Certifications.astro
│   ├── Contact.astro
│   ├── Experience.astro
│   ├── Hero.astro
│   ├── Projects.astro
│   └── Skills.astro
└── styles/
    └── global.css

public/
├── favicon.ico
└── favicon.svg
```

## ✏️ Where to Edit Things

**Most content changes belong in `src/data/`.**

| What to edit | File |
|---|---|
| Skills | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| Certifications | `src/data/certifications.ts` |
| Education and experience | `src/data/journey.ts` |
| Tree dialogue and social links | `src/data/treeOfWisdom.ts` |
| Chest artwork and animation | `src/components/TreasureChest.astro` |
| Inventory slots and tooltips | `src/components/ProjectInventory.astro` |
| Project detail page layout | `src/pages/projects/[slug].astro` |
| Navigation | `src/components/Navbar.astro` |
| Footer | `src/components/Footer.astro` |
| Themes and global styles | `src/styles/global.css` |

For skills, certifications, and journey entries, copy an existing object and follow its field structure.

## 🗝️ Adding or Editing Projects

Open **`src/data/projects.ts`** and add an object to the `projects` array:

```ts
{
  slug: 'my-new-project',
  title: 'My New Project',
  category: 'WEB APPLICATION',
  summary: 'A short description of the project.',
  description: 'The full story of what I built and why.',
  icon: '💻',
  rarity: 'epic',
  technologies: ['Astro', 'TypeScript'],
  featured: true,
  order: 4,

  role: 'Developer',
  year: '2026',
  challenge: 'What problem did I face?',
  solution: 'How did I solve it?',
  lessons: 'What did I learn?',
  highlights: ['Feature one', 'Feature two'],

  github: 'https://github.com/USERNAME/REPO',
  demo: 'https://example.com',
  image: '/projects/my-new-project/cover.png',
  screenshots: [
    '/projects/my-new-project/screenshot-1.png',
  ],
},
```

The fields from `role` onward are optional.

**Important fields:**

| Field | Purpose |
|---|---|
| `slug` | Unique URL: `/projects/my-new-project` |
| `summary` | Short inventory tooltip |
| `description` | Detail page overview |
| `icon` | Emoji or image path |
| `rarity` | `common`, `rare`, `epic`, or `legendary` |
| `technologies` | Tech stack |
| `featured` | `true` = show in the homepage chest |
| `order` | Display order, lowest first |
| `image` | Main project preview |
| `screenshots` | Detail page gallery |

Every project automatically receives a detail page through `src/pages/projects/[slug].astro`.

**Do not reuse slugs.** Changing a slug also changes the project's URL.

### Adding Screenshots

Create the folder yourself:

```text
public/
└── projects/
    └── my-new-project/
        ├── cover.png
        └── screenshot-1.png
```

Reference files using `/projects/...`, **not** `/public/projects/...`.

Screenshots and cover images are optional. Keep images reasonably compressed.

### Using Pixel-Art Icons

Store downloaded icons in `public/icons/projects/` and reference them with an absolute path:

```ts
icon: '/icons/projects/my-icon.png'
```

The project detail page supports image paths. If using them in the chest inventory, ensure `ProjectInventory.astro` renders image paths as `<img>` elements rather than plain text.

## 🌳 Editing the Tree of Wisdom

Open `src/data/treeOfWisdom.ts`.

- Edit `wisdomDialogues` to change or add quotes.
- Edit `wisdomFruits` to change the LinkedIn, GitHub, Instagram, or email links.
- Fruit coordinates control apple positions on the tree.

The typewriter effect respects reduced-motion preferences.

## 🎨 Themes and Styling

ELI.EXE supports **Midnight** and **Daybreak** themes.

Midnight palette:

| Color | Value |
|---|---|
| Background | `#191F2B` |
| Surface | `#262E3D` |
| Accent | `#B5A2D0` |
| Foreground | `#ECEAE4` |

Common utilities:

```text
bg-background  bg-surface  text-foreground
text-accent   border-outline
section-container  pixel-panel  pixel-button
```

Fonts: Silkscreen, IBM Plex Mono, and IBM Plex Sans.

Prefer theme-aware utilities over hardcoded colors.

## 🔗 Pages and Navigation

| URL | Status |
|---|---|
| `/` | Homepage |
| `/certifications` | Certification archive |
| `/projects/[slug]` | Project detail pages |
| `/projects` | **Planned — not built yet** |

Navbar links live in `src/components/Navbar.astro`.

For homepage navigation, the link must match the section ID:

```ts
{ label: 'Projects', href: '/#projects' }
```

`BaseLayout.astro` already provides the shared page structure and `<main>` landmark. Avoid nesting another `<main>` inside its slot.

## 🧪 Before Committing

- [ ] Check the affected pages with `npm run dev`.
- [ ] Test desktop and mobile.
- [ ] Check Midnight and Daybreak.
- [ ] Verify links and image paths.
- [ ] Run `npm run build`.

Then:

```bash
git status
git add .
git commit -m "describe what changed"
git push origin main
```

## 🩹 Quick Troubleshooting

| Problem | Check |
|---|---|
| Project missing from chest | `featured: true` in `projects.ts` |
| Project detail page is 404 | Correct slug and `[slug].astro` |
| Image is broken | File exists in `public/`; URL excludes `/public` |
| Navbar doesn't scroll | Link `href` matches section `id` |
| Animation doesn't play | Reduced-motion settings and browser console |
| View All Artifacts is 404 | `/projects` archive hasn't been built yet |

## 🧭 Next Quest

**The Artifact Codex:** Build `src/pages/projects/index.astro` so visitors can browse every project, including those not featured in the chest.

---

*Every creation holds a story. Every experiment counts.*

**QUESTS ARE NEVER TRULY OVER ✦**