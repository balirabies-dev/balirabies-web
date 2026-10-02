# Professional Website Typography & Visual Style Guide

## Objective

Design websites that feel **professional, clean, intentional, and human-designed**.

Avoid the stereotypical AI-generated/SaaS-template appearance: oversized headings, extremely thin typography, tiny body text, excessive gradients, rounded cards everywhere, and overly spacious layouts.

The website should feel like it was designed by an experienced product designer rather than generated from a generic template.

---

## 1. Typography Principles

### Avoid Thin Fonts

Do not use very thin font weights for normal content.

Avoid:

```css
font-weight: 100;
font-weight: 200;
font-weight: 300;
```

For most interfaces, prefer:

```css
font-weight: 400; /* normal text */
font-weight: 500; /* labels / emphasis */
font-weight: 600; /* headings */
font-weight: 700; /* strong headings */
```

Thin typography often makes a website look fragile, overly minimalist, and difficult to read.

---

## 2. Do Not Make Text Too Small

Body text should normally be:

```css
font-size: 16px;
```

For dense applications or dashboards:

```css
font-size: 14px;
```

Use `12–13px` only for genuinely secondary information such as timestamps, captions, badges, or metadata.

Do not build an entire interface around tiny text.

Recommended scale:

```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;
--text-5xl: 48px;
```

You do not need to use every size.

A smaller, consistent type scale usually looks more professional.

---

## 3. Use Practical Professional Fonts

Prefer neutral, highly readable sans-serif fonts.

Good choices include:

- Inter
- Geist
- IBM Plex Sans
- Source Sans 3
- Manrope
- DM Sans
- Plus Jakarta Sans
- Public Sans
- Work Sans

For highly professional/product-oriented interfaces, good defaults are:

```css
font-family: "Inter", sans-serif;
```

or:

```css
font-family: "Geist", sans-serif;
```

or simply a high-quality system stack:

```css
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

### Avoid "AI Template Typography"

Do not automatically use:

- extremely large hero typography
- ultra-light headings
- exaggerated letter spacing
- gradient-filled text
- excessive bold text
- monospace fonts for random labels
- tiny uppercase labels above every heading

Typography should communicate hierarchy, not decorate every section.

---

## 4. Keep Headings Controlled

A common AI-generated design pattern is:

```text
BUILD THE FUTURE
WITH OUR
REVOLUTIONARY PLATFORM
```

with a gigantic 70–100px font.

Avoid this unless the design specifically requires a marketing/editorial style.

For normal corporate/product websites:

```css
h1 {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
```

Typical section heading:

```css
h2 {
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
}
```

Card heading:

```css
h3 {
  font-size: 18px;
  font-weight: 600;
}
```

Avoid making every section heading enormous.

---

## 5. Use Comfortable Line Height

Recommended:

```css
body {
  line-height: 1.5;
}

p {
  line-height: 1.6;
}
```

Headings can be tighter:

```css
h1,
h2,
h3 {
  line-height: 1.15;
}
```

Avoid overly loose body text or extremely compressed headings.

---

# Visual Design

## 6. Avoid the Generic AI/SaaS Look

Do not automatically create every section using:

```text
rounded card
+ icon
+ heading
+ tiny paragraph
```

repeated six times.

Also avoid excessive:

- floating cards
- glassmorphism
- gradients
- glowing backgrounds
- giant border radiuses
- pill-shaped containers
- decorative blobs
- unnecessary badges
- icon circles
- drop shadows
- gradient buttons
- gradient text

Use these only when they support the actual visual identity.

---

## 7. Keep Border Radius Moderate

Instead of making everything extremely rounded:

```css
border-radius: 24px;
```

prefer:

```css
border-radius: 6px;
border-radius: 8px;
border-radius: 10px;
border-radius: 12px;
```

Buttons usually work well around:

```css
border-radius: 6px;
```

or:

```css
border-radius: 8px;
```

Do not automatically make every button a pill.

Avoid:

```css
border-radius: 9999px;
```

unless it is intentionally a pill, tag, filter, or status indicator.

---

## 8. Use Borders Carefully

Avoid extremely faint borders that are almost invisible.

Bad:

```css
border: 1px solid rgba(0, 0, 0, 0.04);
```

Prefer a clear but subtle separation:

```css
border: 1px solid #e5e7eb;
```

For dark interfaces:

```css
border: 1px solid #2a2a2a;
```

Not every container needs a border.

Whitespace and background differences can create hierarchy without putting every element inside a box.

---

## 9. Avoid Excessive Shadows

Avoid large generic shadows such as:

```css
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
```

Prefer subtle elevation when needed:

```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
```

Many professional interfaces work perfectly with **no shadows at all**.

Use borders, spacing, and background contrast first.

---

# Layout

## 10. Do Not Overuse Cards

Not everything needs to be:

```html
<div class="card">
```

Consider using:

- simple rows
- dividers
- tables
- two-column layouts
- lists
- sections
- grids without containers
- typography hierarchy

Instead of six floating cards, sometimes six columns separated by whitespace or thin dividers will look substantially cleaner.

---

## 11. Use Consistent Spacing

Use a deliberate spacing system.

For example:

```text
4px
8px
12px
16px
24px
32px
48px
64px
96px
```

Common component spacing:

```text
Label → input:       8px
Heading → paragraph: 12–16px
Paragraph → button:  24px
Card padding:        20–24px
Section spacing:     64–96px
```

Avoid arbitrary values everywhere.

---

## 12. Do Not Create Excessive Empty Space

AI-generated landing pages frequently have too much vertical spacing.

Avoid:

```css
padding: 160px 0;
```

for every section.

A good default desktop section:

```css
padding: 72px 0;
```

Important hero sections may use:

```css
padding: 96px 0;
```

Dense application interfaces should use considerably less.

---

## 13. Control Content Width

Do not stretch paragraphs across the entire monitor.

Typical site container:

```css
max-width: 1200px;
margin: 0 auto;
padding: 0 24px;
```

Text-heavy content should usually be narrower:

```css
max-width: 680px;
```

This improves readability and creates natural hierarchy.

---

# Colors

## 14. Use a Restrained Palette

Prefer:

```text
1 primary brand color
1 accent color if necessary
neutral background colors
neutral text colors
semantic colors for success/warning/error
```

Avoid making every component a different color.

Example neutral system:

```css
--background: #ffffff;
--surface: #f8f9fa;

--text-primary: #18181b;
--text-secondary: #52525b;
--text-muted: #71717a;

--border: #e4e4e7;
```

The exact colors can change according to the brand.

---

## 15. Avoid Pure Black Everywhere

Instead of:

```css
color: #000000;
```

consider:

```css
color: #18181b;
```

or:

```css
color: #111827;
```

Similarly, secondary text should still have sufficient contrast.

Do not make important text extremely light gray simply to achieve a minimalist appearance.

---

# Buttons and Controls

## 16. Buttons Should Look Functional

Recommended button:

```css
.button {
  min-height: 40px;
  padding: 0 16px;

  font-size: 14px;
  font-weight: 500;

  border-radius: 8px;
}
```

Avoid:

- huge pill buttons
- excessive gradients
- enormous shadows
- tiny text
- unnecessary icons
- excessive animation

A button should immediately look clickable without becoming the dominant visual element.

---

## 17. Inputs Should Be Comfortable

Example:

```css
.input {
  min-height: 40px;
  padding: 8px 12px;

  font-size: 14px;

  border: 1px solid #d4d4d8;
  border-radius: 8px;
}
```

Forms should prioritize readability and usability over decorative styling.

---

# Icons

## 18. Keep Icons Simple

Use a consistent icon library such as:

- Lucide
- Heroicons
- Phosphor

Typical icon sizes:

```text
16px — inline/action
18px — buttons
20px — navigation
24px — prominent UI
```

Avoid randomly mixing icon styles.

Do not put every icon inside a colored circular background.

---

# Professional Hierarchy

## 19. Build Hierarchy Through Weight, Size and Spacing

A clean interface should naturally communicate:

```text
Page title
↓
Short description

Section title
↓
Supporting information
↓
Primary content

Secondary information
```

Do not rely entirely on boxes and colors to establish hierarchy.

Typography and spacing should do most of the work.

---

# Avoid These Common AI Design Patterns

When generating a website, explicitly avoid:

- giant hero text
- thin/light fonts
- tiny body text
- gradient text
- purple/blue gradients by default
- glowing backgrounds
- excessive rounded cards
- every section contained in cards
- excessive pills
- huge border radius
- glassmorphism by default
- excessive shadows
- floating decorative elements
- tiny uppercase labels everywhere
- random icons above every heading
- enormous vertical spacing
- excessive centered text
- three-column feature-card grids repeated throughout the page
- excessive animations
- decorative charts that contain meaningless data

Do not make the website look like a generic AI startup landing-page template.

---

# Preferred Design Direction

Aim for:

**Clean, professional, restrained, structured, readable, deliberate.**

The visual hierarchy should come primarily from:

1. typography
2. spacing
3. alignment
4. layout
5. subtle contrast

Decoration should be secondary.

Think more:

```text
Linear
Stripe
Notion
GitHub
Vercel dashboard
Apple account/settings interfaces
modern banking applications
professional enterprise software
```

and less:

```text
generic AI startup template
crypto landing page
Dribbble concept UI
glassmorphism dashboard
gradient-heavy SaaS template
```

Use these references for principles rather than copying their exact appearance.

---

# Default Design Tokens

When no specific design system has been provided, start approximately here:

```css
:root {
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 30px;
  --text-4xl: 36px;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;

  --background: #ffffff;
  --surface: #f8f9fa;

  --text-primary: #18181b;
  --text-secondary: #52525b;
  --text-muted: #71717a;

  --border: #e4e4e7;
}
```

These are starting points, not rigid requirements.

---

# Final Rule

Before finishing any page, ask:

> **Does this look intentionally designed, or does it look like an AI generated a generic SaaS template?**

If it looks templated, simplify it.

Remove unnecessary:

- cards
- gradients
- pills
- icons
- shadows
- oversized text
- decorative elements

Then strengthen:

- typography
- alignment
- spacing
- content hierarchy
- contrast
- consistency

**Professional design is usually achieved by making fewer, better visual decisions—not by adding more styling.**