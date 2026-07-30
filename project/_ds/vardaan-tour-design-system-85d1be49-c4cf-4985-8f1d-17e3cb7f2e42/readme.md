# Vardaan Tour — Design System

A generous, photography-led marketplace design system for **Vardaan Tour**, the tours & travel arm of **Vardaan Rent a Car (VRC)**, offering guided trip packages to the Hindu pilgrimage sites of North India — especially the Char Dham and Himalayan dhams of **Uttarakhand** (Kedarnath, Badrinath, Gangotri, Yamunotri) plus Haridwar and Rishikesh.

The palette is taken directly from the parent VRC logo: **vivid wing-red `#db241d`** as the single brand voltage and **deep navy `#28166f`** as the trust/secondary colour, on a white canvas. Photography — not heavy typography — does the visual heavy lifting.

## Sources
This system was authored from a written brand/structure brief plus the real parent-company logo. If you have more originals, store the links here for future contributors:
- Parent logo: `assets/logo-vrc.png` — Vardaan Rent a Car (VRC), "Your Adjuvant on the road". Colours sampled from it: red `#db241d`, navy `#28166f`.
- Codebase: _none provided_
- Figma: _none provided_
- Brand brief: provided inline in the kickoff message (marketplace structure reference + Vardaan company description).

---

## CONTENT FUNDAMENTALS — how Vardaan writes

**Voice.** Warm, reassuring, and reverent without being preachy. Vardaan speaks to a pilgrim and their family — often with elders travelling — so copy emphasises care, safety, and ease. It is confident and plain, never salesy.

**Person.** Addresses the reader as **you** ("Plan your next yatra", "You won't be charged yet"). Vardaan refers to itself as **we / Vardaan**. Guides and pilgrims are named with respect.

**Casing.** Sentence case everywhere — headlines, buttons, nav. The only uppercase is the tiny micro-labels (search-segment labels like `WHERE`, the `NEW` badge, input field labels). Never ALL-CAPS headlines.

**Vocabulary.** Use the domain words pilgrims use: *yatra*, *dham*, *Char Dham*, *aarti*, *sattvic*, *darshan*, *Superguide*. Prefer "pilgrims" over "guests", "yatra" over "trip" where natural, "guide" over "host". Indian conventions: prices in **₹** with lakh-style grouping (₹24,500), dates as `12 May 2026`, "English (IN)".

**Tone examples.**
- Hero: *"Inspiration for your next yatra"* / *"Guided pilgrimages across the Himalayan dhams of Uttarakhand."*
- Reassurance: *"You won't be charged yet"*, *"Oxygen support at altitude"*, *"Certified local Garhwali guides"*.
- Reviews lead with feeling then logistics: *"Deeply moving yatra, handled with great care for the elders in our group."*

**Length.** Headlines are short and quiet (the homepage h1 is just 28px). Body copy is generous but concrete — name the temples, the meals, the transport. Avoid filler and hype adjectives.

**Emoji.** None. The brand never uses emoji. Iconography and photography carry warmth instead.

---

## VISUAL FOUNDATIONS

**Overall feeling.** Open hero, dense marketplace below. ~90% of every surface is white + navy-ink with one or two red moments. Depth comes from photography and rounded-corner clipping, not from shadow stacks.

**Colour.** A single brand voltage — **wing-red `#db241d`**, taken from the VRC logo. It carries primary CTAs, the search orb, the saved-heart state, and the brand accent, and appears scarcely. **Navy `#28166f`** is the secondary/trust colour: headline ink, the wordmark, taglines, and stat figures. Ink is a **deep navy-charcoal `#1d1a33`**, never pure black. Surfaces are cool near-whites (`#f6f5fa`, `#eeedf4`). Sub-brand accents (Char Dham maroon `#6e1e22`, Himalaya teal `#1f5e6b`, Temple gold `#b8862f`) are scoped to premium/sub-product contexts only. Ratings render in **ink, not gold** — a deliberate restraint.

**Type.** One humanist family across the whole scale (display, body, UI, micro). Display weights stay **modest** (500–700 at 20–28px); the system trusts photography for heft. The single loud typographic moment is the **64px/700 rating display** on package-detail pages. Substitute face: **Mukta** (see "Font substitution" below).

**Spacing.** 4px base with a 2px micro-step. Major page bands breathe at **64px**; card grids compress to **16px** gutters — the open-hero / dense-marketplace contrast is intentional. Containers cap at ~1280px (editorial) / ~1080px (detail) / 1440px (wide).

**Shape.** Soft everywhere. Buttons 8px, cards ~14px, large panels 20px, category cells 32px, and the search bar / orbs / hearts / pills fully rounded. Essentially nothing is hard-cornered except the body grid.

**Borders.** 1px hairlines (`#e3ddd3`) do most separation work — search-bar dividers, card outlines, footer splitters. A heavier `#c7bfb2` is reserved for disabled outlines and focused inputs.

**Elevation.** Essentially **one shadow tier** (`--shadow-float`) plus the flat baseline. It floats hover cards, the resting search bar, and dropdown menus. No progressive tiers.

**Backgrounds & imagery.** Photography-led: full-bleed and card photos of Himalayan temples, rivers, and trails. Images carry a subtle red/navy tonal overlay (`mix-blend: multiply`) so varied photography reads cohesively on-brand. No gradients-as-decoration, no patterns, no textures. (The kit uses seeded placeholder photos — swap in real pilgrimage photography for production.)

**Animation.** Restrained. Short (.12–.15s) ease transitions on colour/border for buttons and inputs. No bounces, no parallax, no looping decorative motion.

**Hover / press.** Hover on cards is a subtle elevation lift (the one shadow tier). Primary buttons darken to red-active `#b51913` on press — no transform, no shadow change. Links underline on hover.

**Transparency / blur.** Used sparingly: the save-heart over photos sits on a translucent white; the modal scrim is `#000` at 50%. No glassmorphism.

**Cards.** White surface, ~14px radius, 1px hairline (or the float shadow on hover); photo-first with the photo plate clipped to the radius, a floating badge top-left, a save heart top-right, and 4–5 quiet meta lines beneath. The reservation card adds 24px padding and the float shadow.

---

## ICONOGRAPHY

The brand's intended icon set is **hand-illustrated 32px line icons** (one per product tab, plus amenity glyphs). Those bespoke assets were not provided.

**Substitution (flag for the user):** the kit ships **Lucide**-derived line icons (MIT licensed, 24×24, 2px round stroke) on `window.VIcon` — the closest open match for the humanist, even-stroke style the brand wants. Used for nav tabs (mountain / tent / sparkles), search, map pins, amenity rows, and steppers. Swap for the bespoke illustrated set when available.

- **No emoji**, ever.
- **No unicode glyphs** used as icons.
- The brand logo is the **parent VRC mark** (`assets/logo-vrc.png`) — red wings flanking a navy star roundel above the "Your Adjuvant on the road" tagline. In nav and hero it pairs with a "**Vardaan** Tour" wordmark (navy "Vardaan", red "Tour").
- Star icons (ratings) render in **ink**, not gold.

---

## Font substitution (action needed)

The intended brand face is a licensed warm humanist sans with Devanagari + Latin coverage. Until those binaries are supplied, the system ships **Mukta** (Indian Type Foundry, SIL OFL) from Google Fonts via `tokens/fonts.css`. Mukta shares the open aperture, tall x-height, and bilingual coverage the brand needs. **Please confirm the licensed font or approve Mukta**, and supply binaries to host locally if you want offline rendering.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (`@import` list only).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `elevation.css`, `fonts.css`.
- `assets/` — `logo-vrc.png` (parent Vardaan Rent a Car logo).
- `SKILL.md` — Agent-Skill wrapper for download/Claude Code use.

**Components** (`window.VardaanTourDesignSystem_85d1be`)
- `components/core/` — `Button`, `IconButton`, `Badge`, `Tag`, `Avatar`.
- `components/forms/` — `Input`.
- `components/marketplace/` — `SearchBar`, `PackageCard`, `RatingDisplay`.
- Each has `<Name>.jsx` + `.d.ts` + `.prompt.md`; each directory has a `@dsCard` card.

**Guidelines / specimen cards** (`guidelines/`) — Colours (brand, surface, text/semantic), Type (display, body), Spacing (scale, radii, elevation), Brand (logo). All render in the Design System tab.

**UI kits**
- `ui_kits/website/` — interactive Home → Search results → Package detail recreation. See its `README.md`.

---

## Using the system
Consumers link one file:
```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script>const { Button, PackageCard } = window.VardaanTourDesignSystem_85d1be;</script>
```
Foundations are CSS custom properties (`--color-primary`, `--color-navy`, `--t-display-xl-size`, `--space-section`, `--radius-md`, `--shadow-float`).
