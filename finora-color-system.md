# Finora Color System

Use this as the single color reference for the Finora dashboard.

## 1. Core Backgrounds

| Color | Hex | Use |
|---|---|---|
| Main Background | `#070A12` | Entire app/page background |
| Dark Background | `#0B0F1A` | Deep sections, hero backgrounds |
| Surface | `#0D121F` | Dark cards, inner surfaces |
| Elevated Surface | `#111728` | Main hero, larger elevated areas |

### Rule
Use `#070A12` most of the time as the page background. Do not create a different background color for every section.

---

## 2. Text

| Color | Hex | Use |
|---|---|---|
| Primary Text | `#F5F7FB` | Main headings, important numbers |
| Secondary Text | `#CBD5E1` | Buttons, secondary headings |
| Muted Text | `#8B94A8` | Descriptions, labels |
| Subtle Text | `#697389` | Eyebrows, metadata |
| Very Subtle Text | `#555F73` | Chart labels, low-priority information |

### Rule
Use:
- `#F5F7FB` for important information
- `#CBD5E1` for supporting information
- `#8B94A8` / `#697389` for secondary information

Do not use pure white (`#FFFFFF`) for everything.

---

## 3. Primary Brand — Purple

| Color | Hex | Use |
|---|---|---|
| Primary Purple | `#8B5CF6` | Main brand color, charts, active states |
| Dark Purple | `#7C3AED` | Primary buttons, strong accents |
| Light Purple | `#A78BFA` | Hover states, links, highlights |
| Very Light Purple | `#C4B5FD` | Small highlights, glow details |
| Highlight | `#DDD6FE` | Orb lighting/highlights |
| Deep Purple | `#24123F` | Orb shadows/deep gradients |

### Rule
Purple is the main Finora accent.

Use it for:
- Primary buttons
- Active navigation
- Main chart line
- Important links
- Focus states
- 3D orb
- Brand elements

Do NOT use purple on every element.

---

## 4. Cyan — Secondary Accent

| Color | Hex | Use |
|---|---|---|
| Cyan | `#22D3EE` | Secondary chart/category color |
| Dark Cyan | `#0891B2` | Background glow |

### Rule
Use cyan sparingly.

Good uses:
- Secondary chart data
- Orb orbit/ring
- Small decorative glow
- Secondary category

Avoid using cyan for primary buttons.

---

## 5. Financial Status Colors

### Success / Income

```text
#34D399
```

Use for:
- Income
- Positive percentage changes
- Successful states
- Budget remaining
- Positive financial insights

Example:

```text
+₹8,500
+8.4%
₹5,500 remaining
```

---

### Expense / Danger

```text
#FB7185
```

Use for:
- Expenses
- Negative changes
- Budget exceeded
- Destructive actions
- Financial warnings

Example:

```text
-₹2,899
+4.2% spending
Budget exceeded
```

---

### Warning

```text
#F59E0B
```

Use for:
- Approaching budget limits
- Important financial warnings
- Selected category/chart accents

Do not use warning yellow for ordinary UI decoration.

---

### Pink

```text
#EC4899
```

Use mainly as an occasional:
- Chart/category color
- Secondary visual accent

Do not make pink part of the main UI theme.

---

# 6. Borders

Finora uses subtle borders instead of heavy card outlines.

### Main Border

```css
rgba(255, 255, 255, 0.08)
```

Use for:
- Cards
- Sidebar
- Inputs
- Buttons
- Dividers

### Very Subtle Border

```css
rgba(255, 255, 255, 0.04)
```

Use for:
- Transaction separators
- Very subtle section divisions

### Hover Border

```css
rgba(255, 255, 255, 0.12)
```

Use when an element is hovered.

---

# 7. Glass / Surface Colors

### Glass Panel

```css
rgba(18, 22, 35, 0.62)
```

Use for:
- Large glass surfaces
- Sidebar
- Hero elements

Combine with:

```css
backdrop-filter: blur(20px);
```

Do not use glassmorphism on every component.

---

### Subtle Surface

```css
rgba(255, 255, 255, 0.018)
```

Use for:
- Small stat areas
- Secondary sections
- Subtle hoverable surfaces

### Hover Surface

```css
rgba(255, 255, 255, 0.07)
```

Use for:
- Button hover
- Navigation hover
- Interactive elements

---

# 8. Glow Colors

### Purple Glow

```css
rgba(139, 92, 246, 0.33)
```

Use for:
- Primary button shadow
- Orb glow
- Important interactive elements

### Soft Purple Glow

```css
rgba(139, 92, 246, 0.13)
```

Use for:
- Background decoration
- Insight cards
- Very subtle ambient lighting

### Cyan Glow

```css
rgba(34, 211, 238, 0.27)
```

Use for:
- Secondary orb lighting
- Cyan chart elements
- Small decorative effects

---

# 9. Dashboard Usage Guide

## Page

```text
Background → #070A12
```

Keep the entire dashboard dark and consistent.

## Sidebar

```text
Background → rgba(7, 10, 18, 0.72)
Border → rgba(255, 255, 255, 0.08)
Active → Purple
```

## Main Heading

```text
#F5F7FB
```

## Secondary Description

```text
#8B94A8
```

## Balance

```text
Balance amount → #F5F7FB
Positive change → #34D399
```

## Primary Button

```text
Background → #7C3AED
Text → #FFFFFF
Hover → #8B5CF6
```

## Secondary Button

```text
Background → rgba(255,255,255,0.035)
Border → rgba(255,255,255,0.08)
Text → #CBD5E1
```

## Spending Chart

```text
Main line → #9B7BFF / #8B5CF6
Area → Purple with low opacity
Grid → rgba(255,255,255,0.05)
Labels → #555F73
```

## Categories

Use different colors only because categories need to be visually distinguishable:

```text
Food → #8B5CF6
Transport → #22D3EE
Shopping → #F59E0B
Bills → #EC4899
Other → #475569
```

## Transactions

```text
Expense amount → #FB7185
Income amount → #34D399
Transaction name → #F5F7FB
Metadata → #697389
Divider → rgba(255,255,255,0.04)
```

---

# 10. 3D Orb

Use these colors:

```text
Highlight → #DDD6FE
Main → #8B5CF6
Shadow → #24123F
Inner shadow → #160B2E
Symbol → #F59E0B
Secondary ring → #22D3EE
```

Example:

```css
background:
  radial-gradient(
    circle at 32% 25%,
    #DDD6FE,
    #8B5CF6 35%,
    #24123F 78%
  );
```

---

# 11. Color Rules

### DO

- Keep `#070A12` as the dominant background.
- Use purple as the main brand accent.
- Use green only for positive financial information.
- Use red/pink only for expenses or danger.
- Use cyan as a secondary accent.
- Keep borders subtle.
- Use opacity for depth.
- Maintain strong text contrast.

### DON'T

- Don't make every card purple.
- Don't use neon everywhere.
- Don't use 5+ accent colors in one component.
- Don't use pure white everywhere.
- Don't make every element glassmorphic.
- Don't use red simply because it looks attractive.
- Don't use gradients on every button/card.
- Don't turn the dashboard into a rainbow.

---

# 12. Recommended Priority

When choosing a color, follow this order:

```text
1. Neutral colors
       ↓
2. Purple (brand)
       ↓
3. Green / Red (financial meaning)
       ↓
4. Cyan (secondary accent)
       ↓
5. Yellow / Pink (occasional data visualization)
```

The goal is:

> Premium fintech, not colorful gaming dashboard.
