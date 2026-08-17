# Portfolio Design System

This document records the design system that exists in the current portfolio implementation and in the supplied screenshots. It is descriptive, not a redesign brief.

## 1. Design Philosophy

The site uses a minimal, monochrome, editorial portfolio style. The visual language is clean, modern, professional, premium, and spacious.

Core traits:

- Monochrome palette built from off-white, white, gray, charcoal, and near-black.
- Large bold headings with tight tracking for editorial hierarchy.
- Spacious sections with generous vertical rhythm.
- Rounded cards and panels with restrained borders and moderate shadows.
- Clear light/dark mode hierarchy through background, surface, card, border, and text contrast.
- Simple grayscale placeholder imagery and panels instead of colorful illustration.
- UI accents are structural: typography scale, spacing, border, radius, monochrome contrast, and subtle motion.

Avoid introducing cyan, blue accents, purple, neon colors, cyberpunk treatment, colorful gradients, glassmorphism, excessive glow, or excessive shadows.

## 2. Color System

Colors below are taken from `src/app/globals.css`, Tailwind utility classes in components, and `src/lib/design-tokens.ts` where still present.

### Light Mode

| Role | Value / Class | Usage |
| --- | --- | --- |
| Page background | `#f7f7f5`, `bg-background` | Body/page background; warm editorial off-white. |
| Subtle background | `#eeeeec`, `bg-gray-50` | Alternating sections and low-emphasis panels. |
| Surface | `#ffffff`, `bg-white` | Navbar, cards, panels, form surface. |
| Secondary surface | `#f5f5f5`, `bg-gray-50`, `bg-gray-100` | Chips, placeholder blocks, nested cards. |
| Primary / charcoal | `#171717`, `gray-900`, `gray-950` | Main text, primary buttons, section underline, dark panel headers. |
| Primary light | `#262626` | Darker hover/border variants and token value. |
| Primary dark | `#0a0a0a` | Near-black token value. |
| Primary text | `#171717`, `text-gray-900` | Headings, logo, important copy. |
| Secondary text | `#525252`, `text-gray-600` | Body text and nav links. |
| Muted text | `#737373`, `text-gray-500`, `text-gray-400` | Metadata, labels, helper copy. |
| Border | `#e5e5e5`, `border-gray-200` | Default card/form/nav border. |
| Light border | `#f5f5f5`, `border-gray-100` | Subtle dividers. |
| Dark border / hover border | `#d4d4d4`, `border-gray-300` | Light-mode hover border. |
| Primary button | `bg-gray-900 text-white`; hover often `bg-gray-800` or `#1a1a1a` | Main CTA and submit actions. |
| Secondary button | `bg-white text-gray-900 border-gray-200`; hover `bg-gray-50 border-gray-300` | Secondary CTA and outline links. |
| Focus | `focus:border-gray-900 focus:ring-gray-900/20` | Form fields. |
| Selection | `background: var(--color-primary); color: var(--color-secondary)` | Text selection. |

### Dark Mode

| Role | Value / Class | Usage |
| --- | --- | --- |
| Page background | `#0a0a0a`, `dark:bg-[#0a0a0a]` via CSS variables/body | Body/page background. |
| Subtle background | `#111111`, `dark:bg-[#111111]` | Alternating section background and form fields. |
| Surface | `#141414`, `dark:bg-[#141414]` | Navbar, cards, panels, secondary buttons. |
| Secondary surface | `#1a1a1a`, `dark:bg-[#1a1a1a]` | Chips, hover states, nested surfaces. |
| Border | `#262626`, `dark:border-[#262626]` | Card, nav, chip, form border. |
| Slightly stronger hover border | `#2a2a2a` | Secondary button hover border. |
| Primary text | `#f5f5f5`, `text-gray-100` | Headings, important text, icons. |
| Secondary text | `#a3a3a3`, `text-gray-300`, `text-gray-400` | Body text, labels, nav. |
| Muted text | `#737373`, `text-gray-500` | Metadata and low-emphasis copy. |
| Primary button | `dark:bg-white dark:text-gray-950` | Inverted CTA. |
| Secondary button | `dark:bg-[#141414] dark:text-gray-100 dark:border-[#262626]`; hover `dark:bg-[#1a1a1a]` | Outline/secondary actions. |
| Focus | `dark:focus:border-gray-100 dark:focus:ring-white/20` | Form fields. |

### Gradients and Image Placeholders

Existing gradients are grayscale only:

- `from-gray-100 to-gray-200`
- `from-gray-200 to-gray-300`
- `from-gray-700 to-gray-950`
- Dark equivalents: `from-[#141414] to-[#1a1a1a]`, `from-[#1a1a1a] to-[#262626]`, `from-gray-200 to-gray-500`

## 3. Typography

### Font Family

- Primary sans: Geist Sans / Geist / Inter / system UI sans-serif.
- Mono token exists: Geist Mono / monospace, but the visible portfolio UI is predominantly sans-serif.
- `layout.tsx` loads `Geist` and `Geist_Mono` from `next/font/google`.
- `globals.css` defines `--font-sans: 'Geist Sans', 'Inter', system-ui, sans-serif` and applies it to `body`.

### Type Scale and Usage

| Element | Classes / Size | Weight | Line height / spacing |
| --- | --- | --- | --- |
| Hero heading | `text-5xl md:text-6xl lg:text-7xl` | `font-bold` | `tracking-tight`; Tailwind defaults: approx 48/60/72px with tight line-height. |
| Section heading | `text-4xl md:text-5xl lg:text-6xl` | `font-bold` | `tracking-tight`, `mb-6`; approx 36/48/60px. |
| Featured project title in image | `text-6xl lg:text-8xl` | `font-bold` | Large display text, low-contrast gray. |
| Card title | `text-2xl`, `text-3xl`, `lg:text-4xl` | `font-bold` or `font-semibold` | Often `tracking-tight`; `mb-3` to `mb-6`. |
| Body copy | `text-base`, `text-lg`, `md:text-xl`, `lg:text-xl` | normal | `leading-relaxed`; max-width used for readability. |
| Navigation | `text-sm` desktop, `text-base` mobile menu | `font-medium`; logo `font-bold text-xl` | Tight logo tracking. |
| Metadata | `text-sm`, `text-xs` | `font-medium` or normal | Muted gray; uppercase labels use `uppercase tracking-wider`. |
| Buttons | `text-base` default, submit `text-lg` | `font-medium` or `font-semibold` | Compact but comfortable padding. |
| Labels | `text-sm` | `font-medium` or `font-semibold` | Form labels and section metadata. |

Responsive typography is implemented through Tailwind breakpoints:

- Mobile: smaller display headings (`text-4xl`/`text-5xl`).
- Tablet (`md` >= 768px): headings increase one step.
- Desktop (`lg` >= 1024px): largest headings and some card titles increase.

## 4. Spacing

The site follows an 8px-based spacing rhythm through Tailwind utilities and the token file.

Common patterns:

- Section vertical padding: `py-24 lg:py-32` (96px mobile/tablet, 128px desktop).
- Section horizontal padding: `px-6` (24px page gutter).
- Hero padding: `pt-24 pb-12 px-6` with `min-h-screen` and centered alignment.
- Container width: `max-w-7xl mx-auto` for main sections; `max-w-4xl mx-auto` for Contact.
- Section header bottom margin: `mb-16`; About uses `mb-20`.
- Hero content spacing: `space-y-6`; CTA group `gap-4 pt-4`; trusted row `gap-4 pt-8`.
- Grid gaps: `gap-8`, `gap-12`, `lg:gap-12`; technology nested grids use `gap-6`.
- Card padding: `p-6 lg:p-8`, `p-8 lg:p-10`, `p-8 lg:p-12`, `p-8 lg:p-12 xl:p-16`, Contact `p-10`.
- Chips: `px-2.5 py-1`, `px-3 py-1`, `px-3 py-1.5`.
- Buttons: `px-6 py-3`, project CTA `px-6 py-4`, submit `py-4 px-6`.
- Navbar: wrapper `py-6` at top, `py-3` when scrolled; inner container `px-6`; nav links `px-4 py-2`.

## 5. Layout

- Global page uses a fixed navbar, then full-width stacked sections in `main`.
- Main content is centered in containers with `max-w-7xl` (1280px) and `mx-auto`.
- Contact intentionally narrows to `max-w-4xl` for focus.
- Hero: `grid grid-cols-1 lg:grid-cols-2`, content and portrait stack on mobile and split into two columns on desktop. Content order becomes text-left column on desktop via `order-2 lg:order-1` and `order-1 lg:order-2`.
- Featured project: one large full-width panel, with content grid `grid-cols-1 lg:grid-cols-3`; project details span two columns on desktop, links occupy one column.
- Selected Work: one-column mobile grid, two-column grid from `md` upward.
- Experience: single large company panel with nested tech grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- Technologies: cards in `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- About: `grid-cols-1 lg:grid-cols-12`; portrait uses 5 columns and content uses 7 columns on desktop.
- Contact: centered panel with `grid-cols-1 md:grid-cols-2`.
- Alignment is mostly left-aligned for editorial sections; Contact header is centered.
- Whitespace is a primary design feature: large section gaps, wide cards, clear separation, and readable line lengths.

## 6. Components

### Navbar

- Fixed at top, full-width with centered inner container `max-w-7xl`.
- Rounded pill/bar style with `rounded-2xl`.
- Light mode: translucent white (`bg-white/60` or `bg-white/80`) with border `gray-200/60` or `gray-200/70` and subtle shadow.
- Dark mode: translucent surface (`#141414` at 70-85%) with `#262626` border.
- Uses backdrop blur (`backdrop-blur-sm` / `backdrop-blur-md`).
- Logo: bold `text-xl`, tight, primary text.
- Desktop links: hidden below `md`, small medium text, rounded hover targets.
- Mobile: hamburger button visible below `md`; menu expands vertically with rounded link rows.

### Hero

- Full viewport section (`min-h-screen`) centered vertically and horizontally.
- Two-column desktop composition: text on left, portrait/placeholder panel on right.
- Availability pill is monochrome: white/surface pill, gray text, gray/near-white status dot depending on theme.
- Heading is oversized, bold, tight, and split across lines; one word span uses secondary gray to create hierarchy without color accent.
- Body copy is gray, relaxed, max-width constrained.
- CTA pair: primary filled monochrome button and secondary bordered surface button.
- Portrait panel is a rounded grayscale placeholder with offset background layer, border, and large shadow.

### Buttons

- Primary buttons use high-contrast inversion:
  - Light: dark fill with white text.
  - Dark: white fill with near-black text.
- Secondary buttons use white/surface fill, border, and subtle gray hover state.
- Radius is usually `rounded-lg` for hero buttons and `rounded-xl` for project/contact buttons.
- Motion includes hover lift or scale and tap compression.

### Cards

- Cards use `bg-white` / `dark:bg-[#141414]`, `border border-gray-200` / `dark:border-[#262626]`.
- Radius is primarily `rounded-3xl` for major panels and cards.
- Shadows are present but restrained: `shadow-lg`, `shadow-xl`, `shadow-2xl`; hover can increase shadow and lift cards slightly.
- Content padding is generous.
- Nested cards/chips use secondary surfaces (`gray-50`, `gray-100`, `#111111`, `#1a1a1a`).

### Featured Work

- Large editorial showcase panel with rounded corners and strong visual area.
- Top visual area uses wide aspect ratio (`16/10` mobile, `21/9` desktop) and grayscale gradient placeholder.
- Project name appears oversized and low-contrast in image area.
- Content area uses a desktop 3-column grid: descriptive content and technology chips on the left, action links on the right.
- CTAs are monochrome and full-width in the side column.

### Experience

- Section has subtle alternate background in light mode (`gray-50`) and dark mode (`#111111`).
- Company panel is a large card with dark header band and white/surface content body.
- Header uses `gray-950` / `#161616`, white text, and gray metadata.
- Achievements use simple black bullet dots and Lucide line icons.
- Technology groups are nested rounded panels with chips.

### Tech Stack

- Three-column desktop card grid.
- Each card has icon block, title, and chip group.
- Icons are monochrome Lucide icons in primary text color.
- Chips are small rounded rectangles with border and subtle hover background.

### About

- Two-column desktop layout with portrait panel and content panel.
- Portrait is a grayscale/profile placeholder with a single-letter avatar.
- Content panel uses prose-like body copy, strong heading, and stats separated by a top border.
- Hover overlay exists on portrait card but remains subtle (`black/10`).

### Footer / Contact

There is no separate semantic footer component in the inspected source. The Contact section functions as the closing conversion section.

- Contact header is centered.
- Main panel is a two-column card.
- Left side is a dark information panel with contact links and social circles.
- Right side is a form with light/dark input surfaces and monochrome focus rings.
- Submit button follows primary button inversion.

## 7. Border & Radius

- Default border thickness: `1px` via `border` utilities.
- Important rounded values:
  - `rounded-md`: chips and small tags.
  - `rounded-lg`: nav links and hero buttons.
  - `rounded-xl`: form fields and project CTA buttons.
  - `rounded-2xl`: navbar shell and nested icon panels.
  - `rounded-3xl`: major cards, panels, image placeholders.
  - `rounded-full`: status pill, avatars, section underline, social buttons.
- Light borders: `gray-100`, `gray-200`, `gray-300` on hover.
- Dark borders: mostly `#262626`, with occasional `#2a2a2a` hover.
- Section underline: `h-1 w-24 bg-gray-900 rounded-full`.

## 8. Shadows

The design is not flat, but shadows are used as quiet elevation rather than decorative glow.

- Navbar: `shadow-md` initially, `shadow-sm` when scrolled.
- Hero primary button: `shadow-lg shadow-gray-900/20`; hover `shadow-xl shadow-gray-900/30`.
- Secondary hero button: `shadow-md`.
- Major cards/panels: `shadow-xl` or `shadow-2xl`.
- Technology cards: `shadow-lg`, hover `shadow-xl`.
- Selected Work cards: `shadow-xl`, hover `shadow-2xl` plus `hover:-translate-y-2`.
- No neon glow or colorful shadow treatment is used.

## 9. Dark Mode

Dark mode hierarchy should remain:

`#0a0a0a page background` -> `#111111 subtle section/form background` -> `#141414 card/nav surface` -> `#1a1a1a nested/chip/hover surface` -> `#262626 border` -> `#f5f5f5 primary text` / `#a3a3a3 secondary text` / `#737373 muted text`.

Rules observed in the implementation:

- Page background is near-black, not pure decorative black with color glow.
- Cards are slightly lighter than the page so panels remain visible.
- Borders are essential in dark mode because shadows are less readable.
- Text uses off-white for headings and gray for supporting copy.
- Primary buttons invert to white-on-dark context.
- Secondary buttons remain dark surfaces with visible borders.

Screenshot note: the dark hero screenshot shows the intended monochrome mood, but the visible heading/body contrast appears lower than the final palette described in source. This should be documented as a reference discrepancy, not corrected here.

## 10. Responsive Design

### Mobile

- Sections remain single-column with `px-6` gutters.
- Hero stacks portrait above text due to order utilities.
- Navbar desktop links are hidden; hamburger menu is shown.
- Selected work, technology, experience tech groups, About, and Contact grids collapse to one column.
- Heading sizes use mobile defaults (`text-4xl` for sections, `text-5xl` for hero).
- Cards retain large radius and generous padding, though some padding scales down from desktop.

### Tablet (`md` >= 768px)

- Section and hero headings scale up (`md:text-5xl`, `md:text-6xl`).
- Navbar switches to desktop link row at `md`.
- Selected Work becomes two columns.
- Contact becomes two columns.
- Some nested grids become two columns.

### Desktop (`lg` >= 1024px)

- Hero becomes two columns.
- Section headings reach `lg:text-6xl`; hero reaches `lg:text-7xl`.
- Main sections use `py-32`.
- Featured project content becomes 3 columns.
- Experience tech and Technologies grids become 3 columns.
- About becomes 12-column layout with 5/7 split.
- Image panels use desktop aspect ratios (`lg:aspect-[3/5]`, `lg:aspect-[4/6]`, `lg:aspect-[21/9]`).

## 11. Animation

Animations use Framer Motion and are already implemented. They are subtle and functional.

Existing patterns:

- Navbar slides in from above: initial `y: -100` to `y: 0`, duration `0.3`, `easeOut`.
- Section/container reveal: opacity from 0 and vertical offset (`y: 40`) to visible, duration around `0.6`.
- Staggered children: `staggerChildren: 0.1` or `0.05`.
- Hero items reveal from `opacity: 0, y: 30` to visible, duration `0.6`.
- Cards/items reveal from `opacity: 0, y: 20/30/40` or `x: +/-50` in About.
- Image reveal in Featured Project animates width from `0%` to `100%`, duration `0.8`, delayed `0.2`.
- Buttons use hover lift (`y: -4`) or scale and tap compression (`scale: 0.95/0.98`).
- Links/icons use subtle translate on hover.
- Cards use CSS transitions for shadow, opacity, color, and transform.
- Smooth scrolling is supported by Lenis classes and global scroll behavior.

Do not add new animation styles unless explicitly requested.

## 12. Design Rules

- Preserve the monochrome visual identity.
- Do not introduce arbitrary accent colors.
- Do not add cyan, blue accent, purple, neon, cyberpunk, colorful gradients, glassmorphism, excessive glow, or excessive shadows.
- Preserve the existing typography hierarchy: large bold editorial headings, gray supporting copy, compact metadata.
- Preserve whitespace and spacious section rhythm.
- Preserve the `max-w-7xl` centered container system unless a component already uses a different width.
- Preserve rounded card/panel language, especially `rounded-3xl` for major surfaces.
- In dark mode, maintain separation between background, surface, nested surface, border, and text.
- Prefer existing CSS variables and grayscale Tailwind utilities before adding new values.
- Do not redesign existing components unless specifically requested.
- Prefer consistency over novelty.
- Make the smallest targeted UI diff possible when future changes are requested.

## Screenshot vs Implementation Notes

- The screenshots confirm the intended direction: minimal, monochrome, editorial, clean, professional, modern, premium, and spacious.
- Light Experience screenshot matches the implemented large section heading, dark company header band, white card body, rounded panel, spacious padding, and monochrome palette.
- Dark Hero screenshot matches the implemented fixed rounded navbar, full-screen hero, two-column layout, monochrome CTAs, and large portrait placeholder.
- Dark Hero screenshot appears to show very low text contrast for the hero heading/body compared with the current source classes (`dark:text-gray-100`, `dark:text-gray-400`). Treat the screenshot as visual reference and source as actual implementation; do not adjust contrast in this documentation task.
- Screenshots show browser/dev overlay elements such as a red issue badge and OS/browser chrome; those are not part of the portfolio design system.
