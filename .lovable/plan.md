## Changes to `src/routes/index.tsx`

### 1. About section — portrait crop
Replace the fixed 240x240 circular container with a natural-aspect rounded rectangle:
- Container: `w-[200px]` (no fixed height), `rounded-2xl` (~16px) `overflow-hidden bg-[var(--surface)]`.
- `<img>`: `w-full h-auto block` so the image keeps its natural aspect ratio; drop `object-cover` and the forced height.
- Keep the left column wrapper, but change `items-center` on the grid so the photo column is vertically centered against the bio text (already `items-center` — verify it stays).

### 2. Hero — reduce vertical padding
- Current: `pt-12 sm:pt-20 pb-20 sm:pb-28`.
- New: `pt-10 sm:pt-16 pb-10 sm:pb-14` to tighten the gap between CTAs and the next section.

No other changes.
