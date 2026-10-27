# 🎮 ELI.EXE — An Interactive Developer Portfolio

> A little digital adventure through my skills, creations, achievements, and journey as a developer.

Welcome to **ELI.EXE**, a developer portfolio inspired by pixel-art games, RPG interfaces, and the joy of discovering something new.

Instead of a traditional portfolio, visitors explore different chapters, unlock a treasure chest of projects, and meet a Tree of Wisdom.

## 🛠️ Tech Stack

- **Astro** — Pages, components, and static site generation
- **Tailwind CSS v4** — Styling and responsive layouts
- **TypeScript** — Typed project data and interactive features
- **HTML, CSS, and SVG** — Pixel-inspired visuals and animations

No React or backend is required.

## 🚀 Getting Started

### Requirements

Install a recent version of Node.js and npm compatible with the project's Astro version.

### Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

`http://localhost:4321`

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

Run `npm run build` before committing major changes to catch errors.

---

## 🗺️ The Portfolio Chapters

| Chapter | Section | Purpose |
|---|---|---|
| 00 | The Beginning | Hero and introduction |
| 01 | The Toolkit | Skills and technologies |
| 02 | The Work Archive | Treasure chest and projects |
| 03 | The Achievements | Certifications |
| 04 | The Journey | Education and experience |
| 05 | The Next Adventure | Tree of Wisdom and contact |

The homepage is assembled in `src/pages/index.astro`.

## 📁 Important Files

```text
src/
├── components/
│   ├── Navbar.astro
│   ├── Footer.astro
│   ├── ThemeToggle.astro
│   ├── TreasureChest.astro
│   └── ProjectInventory.astro
│
├── data/
│   ├── projects.ts
│   ├── certifications.ts
│   ├── journey.ts
│   └── treeOfWisdom.ts
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── index.astro
│   └── projects/
│       └── [slug].astro
│
├── sections/
│   ├── Hero.astro
│   ├── Skills.astro
│   ├── Projects.astro
│   ├── Certifications.astro
│   ├── Experience.astro
│   └── Contact.astro
│
└── styles/
    └── global.css

public/
└── projects/
```

This is a guide to the main files, not necessarily every file in the repository.

---

# 📖 The Adventurer's Maintenance Manual

**Golden rule:** Most content changes belong in `src/data/`, not inside the visual components.

## 🗝️ 1. Adding a New Project

**File:** `src/data/projects.ts`

Find the `projects` array and add a new object:

```ts
{
  slug: 'my-new-project',
  title: 'My New Project',
  category: 'WEB APPLICATION',
  summary: 'A short summary of what this project does.',
  description:
    'A longer explanation of the project, its purpose, and how it works.',
  icon: '💻',
  rarity: 'epic',
  technologies: ['Astro', 'TypeScript'],
  featured: true,
  order: 4,

  role: 'Developer',
  year: '2026',

  challenge: 'What problem did I encounter?',
  solution: 'How did I solve it?',
  lessons: 'What did I learn?',

  highlights: [
    'An important feature',
    'An interesting technical decision',
    'Something I am proud of',
  ],

  github: 'https://github.com/your-username/your-repository',
  demo: 'https://your-project.example.com',

  image: '/projects/my-new-project/cover.png',
  screenshots: [
    '/projects/my-new-project/screenshot-1.png',
    '/projects/my-new-project/screenshot-2.png',
  ],
},
```

Replace all example values with real project information.

### Important project fields

| Field | What it controls |
|---|---|
| `slug` | URL of the project detail page |
| `title` | Project name |
| `category` | Project type |
| `summary` | Short inventory tooltip and page summary |
| `description` | Main project explanation |
| `icon` | Emoji or image path |
| `rarity` | RPG rarity styling |
| `technologies` | Tech stack badges |
| `featured` | Whether the project appears in the chest inventory |
| `order` | Display order, lowest first |
| `github` | Source-code link |
| `demo` | Live-project link |
| `image` | Main preview image |
| `screenshots` | Screenshot gallery |

The optional fields can be omitted when they do not apply.

### Project rarity options

```ts
rarity: 'common'
rarity: 'rare'
rarity: 'epic'
rarity: 'legendary'
```

Rarity is a playful visual label, **not a measure of project quality**.

### How featured projects work

```ts
featured: true
```

The project appears in the homepage inventory.

```ts
featured: false
```

The project is excluded from the homepage inventory but remains in the complete project dataset.

For a comfortable inventory layout, aim for approximately **3–6 featured projects**.

### Project URLs

A project with:

```ts
slug: 'my-new-project'
```

gets this URL:

```text
/projects/my-new-project
```

The page is generated automatically by:

`src/pages/projects/[slug].astro`

**Important:** Every project must have a unique slug. Use lowercase words separated by hyphens.

Changing a slug changes the project's URL, so remember to update any links pointing to the old address.

---

## 🖼️ 2. Adding Project Screenshots

Create a folder inside `public/projects/`:

```text
public/
└── projects/
    └── my-new-project/
        ├── cover.png
        ├── screenshot-1.png
        └── screenshot-2.png
```

Then add the paths to the project's data:

```ts
image: '/projects/my-new-project/cover.png',

screenshots: [
  '/projects/my-new-project/screenshot-1.png',
  '/projects/my-new-project/screenshot-2.png',
],
```

**Remember:**

- Paths begin with `/projects/`, not `/public/projects/`.
- Use descriptive filenames.
- Optimize large images to keep the site fast.
- Screenshots are optional.
- If `screenshots` is empty or omitted, the gallery is hidden.
- If `image` is omitted, the detail page displays the project's icon.

### Using a pixel-art icon

Put the image in:

```text
public/icons/projects/my-icon.png
```

Then reference it:

```ts
icon: '/icons/projects/my-icon.png'
```

The detail-page template supports both emojis and image paths. If using image paths, make sure the inventory component also renders them as images rather than text.

---

## 🎒 3. Editing the Treasure Chest and Inventory

These files have different responsibilities:

| File | Responsibility |
|---|---|
| `src/components/TreasureChest.astro` | Chest illustration, glowing lock, opening animation |
| `src/components/ProjectInventory.astro` | Inventory slots, summaries, rarity, View All button |
| `src/sections/Projects.astro` | Chapter layout and connecting chest to inventory |
| `src/data/projects.ts` | Actual project information |

**To add a project:** Edit `projects.ts`.

**To change how slots look:** Edit `ProjectInventory.astro`.

**To change the chest animation:** Edit `TreasureChest.astro`.

**To change the chapter heading or spacing:** Edit `Projects.astro`.

The inventory uses `featuredProjects`, which is generated from the projects data.

### View All Artifacts

The inventory's **VIEW ALL ARTIFACTS** button links to:

`/projects`

This route requires `src/pages/projects/index.astro`.

If that page has not been created yet, the button will lead to a 404 until the complete archive is implemented.

---

## 🏆 4. Adding or Editing Certifications

**File:** `src/data/certifications.ts`

Open the file and find the existing certifications array.

To add a certification:

1. Copy an existing certification object.
2. Paste it into the array.
3. Replace its title, issuer, date, credential link, and other values.
4. Adjust its featured setting if applicable.
5. Save and check the homepage and `/certifications`.

**Tip:** Follow the existing object's field names and TypeScript type. Do not invent new field names without updating the type and components.

---

## 🧭 5. Updating Education and Experience

**File:** `src/data/journey.ts`

This file controls the content of **Chapter 04 — The Journey**.

To add an entry:

1. Find the existing journey data.
2. Copy the closest matching entry.
3. Update the organization, role or qualification, dates, and description.
4. Follow the existing structure and ordering conventions.
5. Check the Experience section on desktop and mobile.

The visual timeline is handled by the Experience section and its journey components.

**Tip:** Keep dates and descriptions consistent across entries.

---

## 🌳 6. Editing the Tree of Wisdom

**File:** `src/data/treeOfWisdom.ts`

The Tree of Wisdom appears in **Chapter 05 — The Next Adventure**.

### Change the dialogue

Find the `wisdomDialogues` array.

Edit an existing quote or add another entry using the same structure.

The Tree of Wisdom currently has a collection of 20 dialogue lines, but more can be added.

### Change social links

Find the `wisdomFruits` array.

Each fruit represents a contact destination:

- LinkedIn
- GitHub
- Instagram
- Email

Update the relevant `href` value to change where an apple leads.

The fruit coordinates control where each apple appears on the tree, so adjust them carefully if changing the artwork.

### Animation

The dialogue uses a typewriter effect and supports reduced-motion preferences.

If the text appears instantly instead of typing, check the operating system's reduced-motion settings before assuming the animation is broken.

---

## 🎨 7. Themes, Colors, and Typography

**Main stylesheet:** `src/styles/global.css`

ELI.EXE has two themes:

- **Midnight** — Dark, atmospheric, lavender-accented
- **Daybreak** — Light alternative

The theme toggle is handled by:

`src/components/ThemeToggle.astro`

Theme persistence is handled through the site's layout and browser storage.

### Midnight palette

| Purpose | Color |
|---|---|
| Background | `#191F2B` |
| Surface | `#262E3D` |
| Accent | `#B5A2D0` |
| Foreground | `#ECEAE4` |

Common Tailwind utilities:

```text
bg-background
bg-surface
text-foreground
text-accent
border-outline
```

Common project utilities:

```text
section-container
pixel-panel
pixel-button
```

### Fonts

- **Silkscreen** — Pixel-style headings
- **IBM Plex Mono** — UI labels
- **IBM Plex Sans** — Body text

Prefer existing theme utilities over hardcoded colors when building new components.

---

## 🧭 8. Editing Navigation Links

**File:** `src/components/Navbar.astro`

The navigation links are defined in the `links` array.

Example:

```ts
const links = [
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];
```

The `href` must match the corresponding section's `id`.

For example:

```astro
<section id="projects">
```

matches:

```ts
href: '/#projects'
```

**Common mistake:** Using `/#work` when the actual section ID is `projects`.

The same links array powers desktop and mobile navigation.

---

## 🧩 9. Editing the Footer

**File:** `src/components/Footer.astro`

The footer contains:

- Developer information
- Explore links
- Social/contact links
- A little closing note

Update the link arrays and text directly in that component.

The footer is included through `BaseLayout.astro`, so it appears across pages that use the layout.

---

## 🧱 10. Creating a New Page

Create an `.astro` file inside `src/pages/`.

For example:

```text
src/pages/about.astro
```

becomes:

```text
/about
```

Use the existing `BaseLayout.astro` for consistent navigation, theme handling, and footer.

**Important:** `BaseLayout.astro` already provides the main page landmark. Avoid placing another `<main>` inside the layout's slot.

---

## 🧪 11. Checklist Before Publishing

After making changes:

- [ ] Run `npm run dev` and check the affected section.
- [ ] Test both Midnight and Daybreak themes.
- [ ] Check desktop and mobile layouts.
- [ ] Test navbar anchor links.
- [ ] Open new project detail pages.
- [ ] Check images and external links.
- [ ] Verify keyboard interaction where applicable.
- [ ] Run `npm run build`.
- [ ] Commit and push the changes.

### Git commands

```bash
git status
git add .
git commit -m "docs: update portfolio content"
git push origin main
```

Use a meaningful commit message describing what changed.

---

## 🩹 Common Problems

### A navbar link doesn't scroll correctly

Check that the `href` matches the target section's `id`.

### A project page returns 404

Check that:

- The project exists in `src/data/projects.ts`.
- Its slug is correct.
- `src/pages/projects/[slug].astro` exists.
- The development server has picked up the changes.

### A screenshot doesn't load

Check the file's location, spelling, capitalization, and path. Files in `public/` are referenced from the site root.

### A project doesn't appear in the chest

Check:

```ts
featured: true
```

Also check the project object's syntax and whether it was added inside the `projects` array.

### The View All button returns 404

Check whether `src/pages/projects/index.astro` has been created.

### An animation doesn't play

Check reduced-motion preferences, browser console errors, and whether the component's JavaScript initialized.

---

## 💜 A Note to Future Me

This portfolio is meant to grow.

Not every project needs to be groundbreaking. Not every experiment needs to be perfect. Every artifact represents something attempted, discovered, built, or learned.

Keep adding things. Keep refining things. And remember to have fun with it.

**QUESTS ARE NEVER TRULY OVER ✦**

---

Made with curiosity, experiments, and probably too much debugging.

**ELI.EXE — End of README. Beginning of another adventure.**