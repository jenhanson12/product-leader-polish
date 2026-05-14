## Mobile issues spotted

1. **Headline clipped under translucent sticky nav.** When you scroll, "Turning" slides under the blurred nav and looks half-cut. The blur partially shows it, which reads as broken.
2. **Headshot is way too large on mobile.** It's currently sized `w-[220px]` but the surrounding flex column has no constraint, and on a 505px viewport it dominates the page below the CTA.
3. **Body copy hyphenation/widow.** "into production-ready products." breaks awkwardly into 3 lines because `max-w-[18ch]` plus a long hyphenated word forces a tight wrap.
4. **Nav padding too generous on small screens.** The serif "Get in touch" + larger text makes the sticky bar feel tall on a phone.

## Proposed fixes (all in `src/routes/index.tsx`)

### 1. Sticky nav: solid on mobile, translucent on desktop
Change nav wrapper background from `bg-background/85 backdrop-blur-md` → `bg-background sm:bg-background/85 sm:backdrop-blur-md`. On phones it'll be fully opaque so scrolled content doesn't bleed through. Hairline border stays.

### 2. Tighter nav on mobile
Reduce nav padding: `py-4` → `py-3 sm:py-4`. Drop nav link size on mobile: `text-base` → `text-sm sm:text-base`. Tighten link gap: `gap-8` → `gap-5 sm:gap-8`.

### 3. Smaller, better-proportioned headshot on mobile
Change portrait wrapper from `w-[220px] sm:w-[260px] lg:w-[300px]` → `w-[170px] sm:w-[220px] lg:w-[300px]`. Add a bit more top spacing above it on mobile (`mt-4 lg:mt-0` on the column) so it breathes below the CTA.

### 4. Headline rhythm on mobile
Loosen the headline max-width on small screens so "production-ready products" doesn't break across 3 lines: `max-w-[18ch]` → `max-w-none sm:max-w-[18ch]`. Also bump down the smallest headline size slightly: `text-4xl` → `text-[2rem]` so it fits cleanly.

### 5. Hero section top padding
The sticky nav eats vertical space. Reduce hero top padding on mobile: `pt-8 sm:pt-12` → `pt-6 sm:pt-12`.

## What's NOT changing
Copy, sections, colors, fonts, fade direction, desktop layout, or the sticky-nav behavior on desktop.
