## Changes

All edits in `src/routes/index.tsx` (one small token tweak possible in `src/styles.css` if needed).

### 1. Reduce headshot fade
In the hero portrait, change the mask gradient from `black 70% → transparent 100%` to something gentler like `black 88% → transparent 100%` so only the very bottom edge softens instead of a long white wash.

### 2. Soften the "Start a conversation" button
Currently `bg-foreground text-background` (near-black on cream). Switch to the warm terracotta accent for cohesion with the rest of the palette:
- `bg-accent text-accent-foreground hover:bg-accent/90`
- Keeps the rounded pill, same size, same arrow.

### 3. Nav links use the serif logo font
"LinkedIn" and "Get in touch" (nav) currently inherit Inter sans. Apply `font-family: var(--font-serif)` to both, matching the "Hanson Strategies" wordmark. Slight size bump (text-base) and lighter weight so they read as editorial, not utilitarian.

### 4. Sticky nav
Wrap the `<nav>` in a sticky container:
- `sticky top-0 z-40 bg-background/85 backdrop-blur-md`
- Keep existing inner `max-w-6xl` layout untouched.

### 5. Subtle nav separator
Add `border-b border-border/60` to the sticky nav wrapper so there's a hairline between nav and page content. The translucent background + blur also creates a subtle shade shift on scroll.

## What's NOT changing
- Copy, sections, structure, fonts beyond the nav links, color tokens, headshot image, fade direction (just shorter), or any other section.
