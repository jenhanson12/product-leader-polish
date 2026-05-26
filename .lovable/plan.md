## Goal
Replace the outdated LinkedIn preview image with a new, branded Open Graph share image for hansonstrategiesllc.com.

## Steps

1. **Generate a branded OG image** (1200×630, the standard OG size)
   - Warm cream background (`#fcfaf6`) matching the site
   - Headline in serif: "Turning early-stage chaos into forward momentum." with "early-stage chaos" in italic terracotta (`#b06246`)
   - Subtext: "Jen Hanson — Fractional Product & Operator Leadership"
   - Small Hanson Strategies logo mark
   - Save to `src/assets/og-image.jpg`

2. **Wire it into the site metadata**
   - In `src/routes/index.tsx`, import the new image and add:
     - `<meta property="og:image" content="...absolute URL..." />`
     - `<meta property="og:image:width" content="1200" />`
     - `<meta property="og:image:height" content="630" />`
     - `<meta property="og:image:alt" content="Hanson Strategies — Fractional Product & Operator Leadership" />`
     - Change `twitter:card` from `summary` to `summary_large_image` (in __root.tsx) and add `twitter:image`
   - Use an absolute URL (required by LinkedIn/Facebook/Twitter crawlers) — build it from the production domain `https://hansonstrategiesllc.com` + the hashed asset path Vite emits

3. **After you publish**, re-scrape the cache so LinkedIn/etc. pick up the new image:
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator (or just paste in a tweet)
   - These are required — social platforms aggressively cache the old image for days/weeks, and the only way to force a refresh is to click "Inspect/Scrape Again" on their tools.

## Important caveat
The image won't go live until you click **Publish → Update** in Lovable. After that, LinkedIn will still show the cached old image until you re-run the Post Inspector on your URL. That's the step that was likely missing before — code changes alone don't bust LinkedIn's cache.

## Open question
Do you want me to design the OG image around the headline (option above), or would you prefer it to feature Jen's portrait + name (more personal, looks more like a business card)?
