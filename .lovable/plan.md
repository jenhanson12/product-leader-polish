## Plan

Update all homepage copy to reflect that Jen is no longer taking new clients and is happy to make warm introductions instead. All changes are text-only replacements in `src/routes/index.tsx` and metadata in `src/routes/__root.tsx`.

### Changes

1. **Page Title & Meta Tags** (`src/routes/index.tsx` + `__root.tsx`)
   - Title: "Hanson Strategies — Jen Hanson, Product & Operator Leader"
   - Description, og:description, twitter:description: "Jen Hanson is a senior product leader and operator with deep experience across AI, FinTech, EdTech, and early-stage startups. Not currently taking on new clients, but happy to connect you with someone in her network."
   - og:title, twitter:title: match new title

2. **Nav Bar**
   - Remove the "Get in touch" link. Keep only LinkedIn.

3. **Hero Section**
   - Keep headline: "Turning early-stage chaos into forward momentum."
   - Subhead: update to referral language.
   - CTAs: replace both buttons with single "Reach out for a referral →" mailto link. Remove Zcal link.

4. **"Why Founders Hire Me" Section**
   - Rename header eyebrow from "Why founders hire me" to "What I bring to the table"
   - Keep all four capability cards unchanged.

5. **"Let's Talk" CTA Section**
   - Headline: "Looking for someone like me?"
   - Body: update to explain she's moved to a full-time role and can make introductions.
   - CTAs: single "Request a referral →" mailto link. Remove Zcal link.

6. **Footer**
   - No changes needed.

### Technical Details
- All edits are inline text replacements in `src/routes/index.tsx`.
- `__root.tsx` meta title/description also updated for consistency.
- No new dependencies, no visual design changes, no routing changes.