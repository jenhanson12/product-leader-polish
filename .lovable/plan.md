## Changes to `src/routes/index.tsx`

### 1. Hero — remove photo, center layout
- Drop the `grid grid-cols-1 lg:grid-cols-12` wrapper and the right column containing `jenPortrait`.
- Replace with a centered single-column layout: `max-w-3xl mx-auto text-center`.
- Center the eyebrow row (accent line + label), headline, subheadline, and the CTA button row (`justify-center`).
- Keep headline copy, accent styling, and both CTAs (orange filled buttons) unchanged.
- Remove the `jenPortrait` import only if no longer referenced elsewhere — it WILL still be used in the bio block, so keep it.

### 2. "Why founders hire me" — add bio block
Insert a new block between the existing intro `<p>` ("I'm brought in when a startup needs...") and the `<ol>` of value props.

Layout: flex row, photo left + text right, modest size, left-aligned within the existing `max-w-2xl` container.

- Circular photo: ~80px (`w-20 h-20`), `rounded-full overflow-hidden shrink-0`, using `jenPortrait` with `object-cover object-top`.
- Text column: two paragraphs with the exact copy provided, styled like the surrounding intro paragraph (`text-muted-foreground leading-relaxed`), slightly smaller than the intro (e.g. `text-base`) to read as a personal aside.
- Vertical spacing: `mt-10` above, `mb-4` or rely on the section's existing rhythm before the `<ol>`.
- On mobile: stack (photo above text) via `flex-col sm:flex-row`, photo centered when stacked.

### 3. No other changes
- Nav, value props grid, Community section, Contact section, footer, and all metadata remain untouched.
- No new dependencies, no asset changes — reuses `@/assets/jen-portrait.png`.

### Technical notes
- Both edits are scoped to `src/routes/index.tsx`.
- No routing, data, or token changes; purely presentational.
