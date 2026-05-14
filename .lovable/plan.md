# Designer's critique

Looking at the live page (full-page screenshot), here's what I'd change. None of this touches your content or adds new sections.

## 1. The headshot isn't rendering (must-fix)
The portrait container is showing as an empty cream rectangle. The image file exists but `object-contain` on a transparent/white-background portrait inside a cream box can render as "nothing visible." I'll verify the asset and switch to `object-cover` with `object-position: top` so your face anchors high in the frame and the soft fade still hides the bottom edge — no cropping of your face, just the shoulders/background fading out.

## 2. Hero headline wraps awkwardly
"Turning *early-stage chaos*" currently breaks mid-word ("early-" / "stage chaos") because the italic accent forces a line break on a hyphenated word. Two small fixes:
- Add `whitespace-nowrap` to the italic span so "early-stage chaos" stays together
- Slightly reduce the headline's max-width so the natural break lands after "chaos" — gives the line a calmer rhythm

## 3. Hero is left-heavy, portrait feels stranded
Right now the headline + body + CTA stack on the left and the portrait floats alone on the right with a lot of air around it. I'd:
- Add a thin horizontal accent rule + small caption under the portrait ("Boulder, CO" or "Fractional Product Leader") so the right column has typographic weight matching the left
- Pull the portrait slightly down so its visual center aligns with the headline's center, not the top

## 4. "Community & Speaking" left column is empty
The label sits alone with a huge empty column beside it. I'll add a small italic serif pull-quote or a thin vertical accent rule under the label to give that column presence — no new content, just visual weight.

## 5. Email link in CTA is too heavy
The wavy underline + italic serif on `jen@hansonstrategiesllc.com` competes with the headline above it. I'll switch to a thinner underline-offset treatment (or a subtle hover-only underline) so the headline stays the hero of that section.

## 6. Section transitions are too abrupt
The cream → surface → cream → surface bands snap hard. I'll add a hairline border or 1px rule between bands (in the warm border color you already have) so the transitions feel intentional rather than stripey.

## 7. Footer is sparse
Add the small "HS" logo mark next to "Jen Hanson" in the footer for brand bookending — mirrors the nav and feels finished.

## What I'm NOT changing
- Your copy (every word stays)
- Section structure or order
- Color palette or fonts
- The headshot fade effect (you said you like it)

## Technical notes
- Files touched: `src/routes/index.tsx` only
- Headshot fix: change `object-contain` → `object-cover` + `object-position: top center`, verify `src/assets/jen-portrait.png` loads
- All changes use existing design tokens (`--accent`, `--border`, `--muted-foreground`, `--font-serif`)
- No new dependencies, no new sections, no content changes
