# 🎮 ELI.EXE

**An interactive developer portfolio disguised as a little RPG adventure.**

Built with Astro, Tailwind CSS v4, and TypeScript. Visitors explore six chapters, unlock an enchanted treasure chest of projects, browse the Artifact Codex, and meet the Tree of Wisdom.

Featuring pixel-inspired visuals, two color themes, interactive project galleries, and retro UI sound effects.

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

## ✨ Features

- **Interactive treasure chest** — Open the chest to discover featured projects.
- **Artifact Codex** — Browse the full project archive, including projects not featured on the homepage.
- **Project detail pages** — Each project has its own page with descriptions, technologies, and optional screenshots.
- **Screenshot lightbox** — Explore project screenshots in an enlarged gallery.
- **Retro sound effects** — Hear pixel-inspired UI sounds while exploring.
- **Sound toggle** — Enable or disable sound, with the preference saved locally.
- **Midnight and Daybreak themes** — Switch between dark and light appearances.
- **Tree of Wisdom** — Discover dialogue and social links through an interactive tree.
- **Responsive design** — Explore the portfolio on desktop and mobile.

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
│   ├── ScreenshotLightbox.astro
│   ├── SoundController.astro
│   ├── SoundToggle.astro
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
│       ├── index.astro
│       └── [slug].astro
├── scripts/
│   └── soundEffects.ts
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
├── audio/
│   ├── click_001.ogg
│   ├── open_001.ogg
│   ├── close_001.ogg
│   ├── select_001.ogg
│   └── back_001.ogg
├── favicon.ico
└── favicon.svg
```

The `public/` folder can also contain project screenshots, icons, and other static assets.

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
| Project archive | `src/pages/projects/index.astro` |
| Project detail page layout | `src/pages/projects/[slug].astro` |
| Screenshot lightbox | `src/components/ScreenshotLightbox.astro` |
| Sound file mappings | `src/scripts/soundEffects.ts` |
| Sound interaction rules | `src/components/SoundController.astro` |
| Sound toggle | `src/components/SoundToggle.astro` |
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

All projects can be discovered in the Artifact Codex at `/projects`, while featured projects appear in the homepage treasure chest.

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

The screenshot lightbox lets visitors view gallery images at a larger size.

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

## 🔊 Sound Effects

ELI.EXE includes retro interface sound effects to make interactions feel like a small RPG.

Sound is **disabled by default**. Visitors can enable it using the speaker toggle in the navbar. Their preference is saved in local storage.

| Interaction | Sound file |
|---|---|
| Buttons and navigation | `click_001.ogg` |
| Opening the treasure chest | `open_001.ogg` |
| Closing the treasure chest | `close_001.ogg` |
| Selecting a project artifact | `select_001.ogg` |
| Back and close actions | `back_001.ogg` |

### Changing Sound Effects

Place `.ogg` files inside:

```text
public/audio/
```

Then update the file mapping in `src/scripts/soundEffects.ts`:

```ts
const SOUND_FILES: Record<SoundName, string> = {
  click: '/audio/click_001.ogg',
  'chest-open': '/audio/open_001.ogg',
  'chest-close': '/audio/close_001.ogg',
  'item-select': '/audio/select_001.ogg',
  back: '/audio/back_001.ogg',
};
```

The global interaction logic lives in `src/components/SoundController.astro`, which is included in `BaseLayout.astro`.

Audio volume can also be adjusted in `src/scripts/soundEffects.ts`.

### Sound Effect Credits

**Sound effects by [Kenney](https://kenney.nl/)**

- **Asset pack:** Interface Sounds (1.0)
- **Creator:** Kenney
- **License:** [Creative Commons Zero (CC0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/)
- **Website:** https://kenney.nl/

These sound effects are released under CC0 and may be used in personal, educational, and commercial projects.

Attribution is not required under the license, but credit is included to acknowledge and support the creator.

**Thank you, Kenney, for making these wonderful game assets available to everyone! 💜**

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

| URL | Purpose |
|---|---|
| `/` | Homepage |
| `/certifications` | Certification archive |
| `/projects` | Artifact Codex / full project archive |
| `/projects/[slug]` | Individual project detail pages |

Navbar links live in `src/components/Navbar.astro`.

For homepage navigation, the link must match the section ID:

```ts
{ label: 'Projects', href: '/#projects' }
```

`BaseLayout.astro` provides the shared page structure, theme initialization, navbar, footer, global sound controller, and `<main>` landmark.

Avoid nesting another `<main>` inside its slot.

## 🧪 Before Committing

- [ ] Check the affected pages with `npm run dev`.
- [ ] Test desktop and mobile.
- [ ] Check Midnight and Daybreak.
- [ ] Verify links and image paths.
- [ ] Test project archive filters and detail pages.
- [ ] Test the screenshot lightbox.
- [ ] Test sound effects with sound enabled and disabled.
- [ ] Confirm the chest uses different opening and closing sounds.
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
| Project missing from archive | Project entry exists in `projects.ts` |
| Project detail page is 404 | Correct slug and `[slug].astro` |
| Image is broken | File exists in `public/`; URL excludes `/public` |
| Screenshot doesn't open | Check screenshot path and lightbox component |
| Navbar doesn't scroll | Link `href` matches section `id` |
| Sound doesn't play | Enable sound in navbar and verify audio paths |
| Chest open and close sound the same | Check chest state logic in `SoundController.astro` |
| Animation doesn't play | Reduced-motion settings and browser console |

## 🧭 Next Quest

**The Real Artifacts:** Replace placeholder projects with real work, screenshots, development stories, and live demos.

Continue polishing the experience with new discoveries, interactions, and hidden details.

---

*Every creation holds a story. Every experiment counts.*

**QUESTS ARE NEVER TRULY OVER ✦**