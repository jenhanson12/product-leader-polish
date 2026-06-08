## What's different
The serif font family (Cormorant Garamond) is the same. What changed is the **weight**: your old site rendered headlines at roughly weight 500, but the current code sets `fontWeight: 300` on all serif headlines, which makes them look thin/spindly.

## Fix
In `src/routes/index.tsx`, change `fontWeight: 300` → `fontWeight: 500` on every serif headline:
- Hero `<h1>` ("Turning early-stage chaos…")
- "Senior product thinking. Operator instincts." h2
- "A little about me." h2
- "Active in the local AI & startup community." h2
- "Need a product leader who can build momentum?" h2

Leave the body copy, eyebrow labels, and nav (all sans-serif Inter) unchanged.

No other changes.
