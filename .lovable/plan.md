Plan to fix the typography mismatch:

1. Match the original font stack and loading
   - Keep the serif display face as Cormorant Garamond and the body/nav face as Inter.
   - Make the font import/load order safe so the browser is actually applying those fonts, not falling back.
   - Add global smoothing and base body font settings so the rendered weight matches the live-site screenshot more closely.

2. Restore the original headline rhythm
   - Adjust the homepage headline sizing, max-width, line-height, and wrapping so the hero reads like the reference screenshot instead of the current oversized/two-line preview.
   - Keep the serif headline weight at the heavier live-site feel, but tune italic spans separately if needed so “early-stage chaos”, “Operator instincts”, and similar italic phrases match the reference.

3. Restore supporting text proportions
   - Reduce the body/intro copy from the current larger Tailwind sizing where it no longer matches the screenshot.
   - Align h2/h3 weights, section eyebrow labels, nav tracking, and button text sizing with the original visual proportions.

4. Verify against the screenshot
   - Re-open the preview at the same viewport and compare the hero, first section, and supporting text hierarchy against the provided reference.
   - Only change typography/layout proportions needed for the match; leave the already-requested content/CTA/meta changes alone unless they are still pending in the file.