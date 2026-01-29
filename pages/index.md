# Health Samurai Original Site - Design System Report

Analysis of https://health-samurai.io homepage design patterns, spacing, colors, and components.

---

## 1. Color Palette

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Primary Red** | `#EA4A35` | `rgb(234, 74, 53)` | Buttons, links, CTAs |
| **Primary Red Alt** | `#FC3724` | `rgb(252, 55, 36)` | Hero buttons |
| **Dark Text** | `#333333` | `rgb(51, 51, 51)` | Body text, headings |
| **Dark Blue** | `#001638` | `rgb(0, 22, 56)` | Secondary button text |
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | Backgrounds, button text |
| **Light Gray BG** | `#FAFAFA` | `rgb(250, 250, 250)` | Card backgrounds |
| **Section BG** | `#F4F8FB` | `rgb(244, 248, 251)` | Footer, alternate sections |
| **Hero BG** | `rgba(53,59,80,0.05)` | — | Hero section tint |
| **Border Gray** | `#F2F2F2` | `rgb(242, 242, 242)` | Card borders |
| **Warning Yellow** | `#FFAF2A` | `rgb(255, 175, 42)` | Accents |

---

## 2. Typography

### Font Family
- **Primary Font**: `"Gotham Pro"` (custom web font)

### Headings

| Element | Size | Weight | Line Height | Color |
|---------|------|--------|-------------|-------|
| **H1** (Hero) | `64px` | `900` (Black) | `80px` | `#333` |
| **H2** (Section titles) | `48px` | `900` | `52-54px` | `#333` |
| **H2** (Sub-sections) | `24px` | `900` | `32px` | `#333` |
| **H3** (Card titles) | `27px` | `900` | `37px` | `#333` |
| **H3** (Blog/Contact) | `24-32px` | `300-900` | `36-48px` | `#333` |
| **H4** (Small headings) | `16px` | `400` | `21px` | `#333` |

### Body Text

| Type | Size | Line Height | Color | Margin |
|------|------|-------------|-------|--------|
| **Body** | `16px` | `28-31px` | `#333` | `16-30px` bottom |
| **Small** | `14px` | `21px` | `#333` | — |

### Links
- **Color**: `#EA4A35` (Primary Red)
- **Text Decoration**: `underline`

---

## 3. Spacing System

### Container Widths

| Container | Max Width | Padding |
|-----------|-----------|---------|
| **Main container** | `1200px` | `0px` |
| **Header container** | `1100px` | `0px` |
| **Mobile container** | `940px` | `0px` |
| **Cookie banner** | `1280px` | `24px 0px` |

### Section Spacing

| Section | Margin | Padding |
|---------|--------|---------|
| **Header section** | `0px` | `40px 0px 60px` |
| **Hero** | `0px` | `60px 56px 42px` |
| **Stories section** | `0px 0px 48px` | `0px` |
| **H2 heading wrapper** | `20px 0px 24px` | `0px` |
| **Trusted/logos section** | `60px 0px` | `0px` |
| **Contributions section** | `0px 0px 60px` | `0px` |
| **Contact section** | — | `100px 0px 90px` |
| **Footer** | `0px` | `0px 32px 20px` |

### Common Spacing Values

- `8px` - Small gap
- `16px` - Medium gap, card margins
- `20px` - Section margin tops
- `24px` - Section margin bottoms, heading margins
- `32px` - Section horizontal padding
- `40px` - Card padding
- `48px` - Large card padding, section margins
- `56px` - Hero padding
- `60px` - Large section margins

---

## 4. Buttons

### Primary Button (Red)

```css
padding: 14px 24px;
background: #EA4A35;
color: #FFFFFF;
border-radius: 4px;
font-size: 14px;
font-weight: 600;
border: none;
```

### Hero Primary Button

```css
padding: 15px 24px;
background: #FC3724;
color: #FFFFFF;
border-radius: 8px;
font-size: 16px;
font-weight: 500;
border: none;
```

### Secondary/Ghost Button

```css
padding: 15px 24px;
background: transparent;
color: #001638;
border-radius: 8px;
font-size: 16px;
font-weight: 500;
border: none;
```

### Text Link Button (Red)

```css
padding: 15px 24px 15px 0px;
background: transparent;
color: #EA4A35;
font-size: 16px;
font-weight: 500;
/* No border-radius, acts as text link */
```

### Subscribe Button

```css
padding: 9px 15px;
background: #EA4935;
color: #FFFFFF;
border-radius: 4px;
font-size: 16px;
font-weight: 500;
```

---

## 5. Cards

### Story Card (Case Studies)

```css
padding: 40px;
/* or: 48px 56px for larger variant */
margin: 0px 16px 20px 0px;
background: #FAFAFA;
border-radius: 8px;
border: 1px solid #F2F2F2;
width: 542px;
```

### HealthDevHub Card (Large Featured)

```css
padding: 48px;
margin: 0px 8px 16px 0px;
background: #FAFAFA;
border-radius: 8px;
border: none;
width: 1092px; /* Full width */
```

### Small Contribution Card

```css
padding: 48px;
margin: 0px 8px 8px 0px;
background: #FAFAFA;
border-radius: 8px;
border: none;
```

---

## 6. Form Elements

### Text Input

```css
padding: 8px 12px;
border: 1px solid rgba(53, 59, 80, 0.1);
border-radius: 4px;
background: #FFFFFF;
font-size: 14px;
```

---

## 7. Shadows

The site uses **minimal shadows**:

- **Header**: `box-shadow: rgba(53, 59, 80, 0.1) 0px 0px 2px 0px;`
- **Cards**: No box-shadow (uses border instead)

---

## 8. Border Radius

| Element | Radius |
|---------|--------|
| **Cards** | `8px` |
| **Buttons (standard)** | `4px` |
| **Buttons (hero)** | `8px` |
| **Inputs** | `4px` |
| **Hero section** | `8px` |

---

## 9. Page Sections Structure

```
┌─────────────────────────────────────────────────────────┐
│ HEADER (sticky, white, shadow)                          │
│ padding: 0 | shadow: rgba(53,59,80,0.1) 0 0 2px        │
├─────────────────────────────────────────────────────────┤
│ HERO SECTION                                            │
│ bg: rgba(53,59,80,0.05) | padding: 60px 56px 42px      │
│ border-radius: 8px                                      │
│ ┌──────────────────┬──────────────────┐                │
│ │ FHIR Platform    │ Services         │                │
│ │ (white card)     │ (gray card)      │                │
│ │ 48px 56px 32px   │ 48px 56px 32px   │                │
│ │                  ├──────────────────┤                │
│ │                  │ ONC API Module   │                │
│ │                  │ (gray card)      │                │
│ └──────────────────┴──────────────────┘                │
├─────────────────────────────────────────────────────────┤
│ MISSION TEXT (white bg)                                 │
│ margin: 20px 0 24px                                     │
├─────────────────────────────────────────────────────────┤
│ OUR STORIES (h2: 48px/900)                              │
│ margin-bottom: 48px                                     │
│ ┌─────────┬─────────┐                                  │
│ │ Card 1  │ Card 2  │  (2x2 grid, 542px each)          │
│ ├─────────┼─────────┤  padding: 40px                   │
│ │ Card 3  │ Card 4  │  border: 1px solid #F2F2F2       │
│ └─────────┴─────────┘                                  │
├─────────────────────────────────────────────────────────┤
│ CLIENT LOGOS (horizontal scroll/flex)                   │
│ margin: 60px 0                                          │
├─────────────────────────────────────────────────────────┤
│ OUR FHIR CONTRIBUTIONS                                  │
│ margin-bottom: 60px                                     │
│ ┌───────────────────────────────────────┐              │
│ │ HealthDevHub (large card, full width) │              │
│ │ padding: 48px, width: 1092px          │              │
│ └───────────────────────────────────────┘              │
│ ┌──────────┬──────────┬──────────┐                     │
│ │ Fhirbase │ FHIR.js  │ Schema   │ (smaller cards)     │
│ └──────────┴──────────┴──────────┘                     │
│ ┌──────────┬──────────┬──────────┐                     │
│ │ Camp     │ SF Meet  │ EU Meet  │                     │
│ └──────────┴──────────┴──────────┘                     │
├─────────────────────────────────────────────────────────┤
│ PRESENTATIONS                                           │
│ (List of links with event/speaker info)                │
├─────────────────────────────────────────────────────────┤
│ BLOG SUBSCRIBE (centered, red band)                     │
│ bg: #EA4A35 area | h3: 24px/300                        │
├─────────────────────────────────────────────────────────┤
│ CONTACT US                                              │
│ padding: 100px 0 90px | centered form                   │
│ max-width: 1100px                                       │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
│ bg: #F4F8FB | padding: 0 32px 20px                     │
└─────────────────────────────────────────────────────────┘
```

---

## 10. Key Visual Patterns

1. **No heavy shadows** - Uses subtle borders (`1px solid #F2F2F2`) instead
2. **Consistent 8px border-radius** on all cards and rounded elements
3. **Two-column hero layout** (not 3 equal cards)
4. **Featured + grid pattern** for contributions (1 large + 6 small)
5. **Gray card backgrounds** (`#FAFAFA`) with white page background
6. **Section backgrounds alternate**: white → gray (`#F4F8FB`) → white
7. **Generous whitespace**: 40-60px section margins, 48px card padding
8. **Font weight 900** for all headings (Gotham Pro Black)

---

## 11. Differences from Current Clone

### Layout Issues

| Area | Original | Current Clone |
|------|----------|---------------|
| **Hero** | 2-column: large FHIR Platform card + stacked Services/ONC | 3 equal cards in a row |
| **FHIR Contributions** | HealthDevHub is large featured card; others smaller in 3-col grid | All 6 cards same size |

### Content Issues

| Area | Original | Current Clone |
|------|----------|---------------|
| **Case Studies** | Detailed "Key results" with metrics | Shorter descriptions, no metrics |
| **Mission Text** | 4 paragraphs, longer | 1 paragraph, condensed |
| **Presentations** | Real 2016-2018 events | Placeholder 2024 events with fake URLs |
| **Client Logos** | Includes Coda/Solutio, Lucet | Different set |
| **FHIR Contributions** | 7 items (includes Eastern Europe Meetups) | 6 items |

### Missing Features

- reCAPTCHA on contact form
- Cookie consent banner
- Different page title

---

## 12. CSS Variables (Recommended)

```css
:root {
  /* Colors */
  --color-primary: #EA4A35;
  --color-primary-hover: #FC3724;
  --color-text: #333333;
  --color-text-dark: #001638;
  --color-white: #FFFFFF;
  --color-bg-card: #FAFAFA;
  --color-bg-section: #F4F8FB;
  --color-bg-hero: rgba(53, 59, 80, 0.05);
  --color-border: #F2F2F2;
  --color-border-input: rgba(53, 59, 80, 0.1);

  /* Typography */
  --font-family: "Gotham Pro", sans-serif;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-black: 900;

  /* Font Sizes */
  --text-xs: 14px;
  --text-sm: 16px;
  --text-md: 24px;
  --text-lg: 27px;
  --text-xl: 32px;
  --text-2xl: 48px;
  --text-3xl: 64px;

  /* Line Heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 40px;
  --space-2xl: 48px;
  --space-3xl: 56px;
  --space-4xl: 60px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;

  /* Shadows */
  --shadow-header: rgba(53, 59, 80, 0.1) 0px 0px 2px 0px;

  /* Container */
  --container-max: 1200px;
  --container-sm: 1100px;
  --container-mobile: 940px;
}
```

---

## 13. Top-Level Structure Comparison

### Quick Overview

| Section | Original | Local | Issue |
|---------|----------|-------|-------|
| **Header** | Has shadow `rgba(53,59,80,0.1) 0 0 2px` | No shadow | Missing shadow |
| **Hero** | Single block, `rgba(53,59,80,0.05)` bg, `8px` radius | Two sections, white bg, no radius | Wrong structure |
| **Hero Layout** | 2-column (large + stacked) | 3 equal columns | Wrong layout |
| **Hero Padding** | `60px 56px 42px 56px` | `80px 0 40px 0` + `40px 0 80px 0` | Different |
| **Section Margins** | `24-60px` between sections | `0` everywhere | No spacing |
| **Stories** | `margin-bottom: 48px` | `0` | Missing |
| **Logos** | `margin: 60px 0` | `0` | Missing |
| **Contributions** | `margin-bottom: 60px` | `0` | Missing |
| **Newsletter** | 176px height, `#F4F8FB` bg, `48px 64px` padding | 58px height, `#C9362B` bg, no padding | Completely different |
| **Contact** | `padding: 100px 0 90px`, width `1100px` | `padding: 0`, width `600px` | Too small |
| **Footer** | ✅ Similar | ✅ Similar | OK |

### Visual Structure Comparison

**Original Site:**
```
┌─ Header (shadow) ─────────────────────────────┐
├─ Hero (tinted bg, 8px radius) ────────────────┤
│   [Large Card]  [Stacked Cards]               │
├─ gap: 24px ───────────────────────────────────┤
├─ Mission Text ────────────────────────────────┤
├─ gap: 20px ───────────────────────────────────┤
├─ Our Stories ─────────────────────────────────┤
├─ gap: 48px ───────────────────────────────────┤
├─ Logos ───────────────────────────────────────┤
├─ gap: 60px ───────────────────────────────────┤
├─ Contributions ───────────────────────────────┤
├─ gap: 60px ───────────────────────────────────┤
├─ Blog Header (#FAFAFA) ───────────────────────┤
├─ Subscribe (#F4F8FB, 176px) ──────────────────┤
├─ Contact (padding: 100px 0 90px) ─────────────┤
└─ Footer (#F4F8FB) ────────────────────────────┘
```

**Local Site:**
```
┌─ Header (no shadow) ──────────────────────────┐
├─ Hero Title (white) ──────────────────────────┤
├─ Hero Cards (white) ──────────────────────────┤
│   [Card] [Card] [Card]  ← 3 equal             │
├─ Mission (no gap) ────────────────────────────┤
├─ Stories (no gap) ────────────────────────────┤
├─ Logos (no gap) ──────────────────────────────┤
├─ Contributions (no gap) ──────────────────────┤
├─ Newsletter (#C9362B, 58px) ← too small ──────┤
├─ Contact (no padding) ← too narrow ───────────┤
└─ Footer (#F4F8FB) ────────────────────────────┘
```

### Top 5 Fixes Needed

1. **Merge hero** into single section with `rgba(53,59,80,0.05)` background and `8px` border-radius
2. **Add section margins** (`48-60px` gaps between major sections)
3. **Expand newsletter** to 176px height with `#F4F8FB` background and `48px 64px` padding
4. **Add contact padding** (`100px 0 90px`) and widen container to `1100px`
5. **Add header shadow** `rgba(53,59,80,0.1) 0 0 2px`

---

## 14. Detailed Block Measurements

Detailed measurements of all major page blocks with exact spacing values.

### Original Site (health-samurai.io)

| Block | Height | Padding (T R B L) | Margin (T R B L) | Background | Radius |
|-------|--------|-------------------|------------------|------------|--------|
| **Header Section** | 771px | `40px 0 60px 0` | `0` | transparent | 0 |
| **Hero (main-aidbox-header)** | 403px | `60px 56px 42px 56px` | `0` | `rgba(53,59,80,0.05)` | `8px` |
| **Hero Title** | 54px | `0` | `32px 0 10px 0` | transparent | 0 |
| **Hero Paragraph** | 56px | `0` | `25px 0 30px 0` | transparent | 0 |
| **Hero Primary Button** | 51px | `15px 24px` | `32px 0 0 0` | `#FC3724` | `8px` |
| **Hero Secondary Button** | 51px | `15px 24px` | `32px 0 0 15px` | transparent | `8px` |
| **Payers Section** | 533px | `0` | `24px 0 60px 0` | transparent | 0 |
| **H2 Section Title** | 52px | `0` | `20px 0 24px 0` | transparent | 0 |
| **Stories Section** | 1172px | `0` | `0 0 48px 0` | transparent | 0 |
| **Stories Container** | 1172px | `0` | `0 730px 30px 730px` | transparent | 0 |
| **Story Card** | 647px | `40px` | `0 16px 20px 0` | `#FAFAFA` | `8px` |
| **Story Card (variant)** | — | `48px 56px` | `0` | transparent | `8px` |
| **Trusted/Logos Section** | 66px | `0` | `60px 0 60px 0` | transparent | 0 |
| **Clients Container** | 66px | `0` | `0 730px 0 730px` | transparent | 0 |
| **FHIR Contributions Section** | 1306px | `0` | `0 0 60px 0` | transparent | 0 |
| **HealthDevHub Card (large)** | 314px | `48px` | `0 8px 16px 0` | `#FAFAFA` | `8px` |
| **Small Contrib Card** | — | `48px` | `0 8px 8px 0` | `#FAFAFA` | `8px` |
| **Presentations Column** | 206px | `0 16px 0 0` | `0` | transparent | 0 |
| **Blog Header Section** | 158px | `48px 0 32px 0` | `0 680px` | `#FAFAFA` | 0 |
| **Subscribe Section** | 176px | `0` | `0` | transparent | 0 |
| **Subscribe Container** | 176px | `48px 64px` | `0 680px` | `#F4F8FB` | `4px` |
| **Subscribe Input** | 42px | `8px 12px` | `0` | `#FFFFFF` | `4px` |
| **Subscribe Button** | 42px | `9px 15px` | `0 0 6px 0` | `#EA4935` | `4px` |
| **Contact Section** | 945px | `100px 0 90px 0` | `0 730px` | transparent | 0 |
| **Contact Policy Text** | 92px | `0` | `24px 0 24px 0` | transparent | 0 |
| **Footer (prefooter)** | 408px | `0 32px 20px 32px` | `0` | `#F4F8FB` | 0 |
| **Footer Awards** | 61px | `20px 0` | `0` | transparent | 0 |
| **Footer Grid** | 327px | `20px 0` | `0` | transparent | 0 |
| **Footer Link Block** | 287px | `0` | `0` | transparent | 0 |
| **Footer Logo** | 122px | `30px 0 60px 0` | `0 553px` | transparent | 0 |
| **Cookie Banner** | 90px | `0` | `0` | transparent | 0 |
| **Cookie Container** | 90px | `24px 0` | `0 620px` | `#F4F8FB` | `8px` |
| **Cookie Deny Button** | 37px | `6px 32px` | `0 16px 0 0` | transparent | `50px` |
| **Cookie Accept Button** | 37px | `8px 32px` | `0` | `#EA4A35` | `50px` |

---

### Local Site (localhost:4444) - Block Measurements

| Block | Height | Padding (T R B L) | Margin (T R B L) | Background | Radius |
|-------|--------|-------------------|------------------|------------|--------|
| **Header** | 65px | `0` | `0` | `#FFFFFF` | 0 |
| **Header Inner** | 64px | `0` | `0 680px` | transparent | 0 |
| **Hero Section** | 232px | `80px 0 40px 0` | `0` | `#FFFFFF` | 0 |
| **Hero Inner** | 112px | `0` | `0 680px` | transparent | 0 |
| **Hero Title (H1)** | 64px | `0` | `0` | transparent | 0 |
| **Hero Cards Section** | 526px | `40px 0 80px 0` | `0` | `#FFFFFF` | 0 |
| **Hero Cards Inner** | 406px | `0` | `0 680px` | transparent | 0 |
| **Hero Card (primary)** | 406px | `32px` | `0` | `#FFFFFF` | `12px` |
| **Hero Card (secondary)** | 406px | `32px` | `0` | `#F7F7F7` | `12px` |
| **Hero Card Logo** | 32px | `0` | `0 0 16px 0` | transparent | 0 |
| **Hero Card Actions** | 44-104px | `0` | `0` | transparent | 0 |
| **Mission Section** | 376px | `80px 0` | `0` | `#FFFFFF` | 0 |
| **Mission Text** | 216px | `0` | `0 286px` | transparent | 0 |
| **Container** | 216px | `0 32px` | `0 512px` | transparent | 0 |
| **Case Studies Section** | 437px | `0` | `0` | `#F7F7F7` | 0 |
| **Case Studies Inner** | 437px | `0` | `0 680px` | transparent | 0 |
| **Case Study Card** | 142px | `0` | `0` | `#FFFFFF` | `12px` |
| **Case Study Logo** | 41px | `0` | `0` | transparent | 0 |
| **Case Study Content** | 101px | `0` | `0` | transparent | 0 |
| **Case Study Title** | 32px | `0` | `0` | transparent | 0 |
| **Case Study Desc** | 45px | `0` | `0` | transparent | 0 |
| **Clients Section** | 120px | `0` | `0` | `#FFFFFF` | 0 |
| **Clients Inner** | 120px | `0` | `0 680px` | transparent | 0 |
| **Contributions Section** | 638px | `0` | `0` | transparent | 0 |
| **Contributions Inner** | 638px | `0` | `0 680px` | transparent | 0 |
| **Contribution Card** | 78-100px | `0` | `0` | `#F7F7F7` | `8px` |
| **Contribution Icon** | 48px | `0` | `0` | transparent | 0 |
| **Contribution Content** | 78px | `0` | `0` | transparent | 0 |
| **Presentations** | 214px | `48px 0 0 0` | `64px 0 0 0` | transparent | 0 |
| **Presentations Title** | 32px | `0` | `0 0 24px 0` | transparent | 0 |
| **Presentations Grid** | 109px | `0` | `0` | transparent | 0 |
| **Presentation Card** | 109px | `16px` | `0` | `#F7F7F7` | `8px` |
| **Presentation Icon** | 32px | `0` | `0` | `#C9362B` | `50%` |
| **Newsletter Section** | 58px | `0` | `0` | `#C9362B` | 0 |
| **Newsletter Inner** | 58px | `0` | `0 680px` | transparent | 0 |
| **Contact Section** | 580px | `0` | `0` | `#F7F7F7` | 0 |
| **Contact Inner** | 580px | `0` | `0 980px` | transparent | 0 |
| **Contact Form** | 427px | `0` | `0 100px` | `#FFFFFF` | `12px` |
| **Trust Badges Section** | 161px | `48px 0` | `0` | `#FFFFFF` | 0 |
| **Trust Badges Inner** | 64px | `0` | `0 680px` | transparent | 0 |
| **Trust Badge** | 64px | `0` | `0` | transparent | 0 |
| **Footer** | 552px | `0 32px 20px 32px` | `0` | `#F4F8FB` | 0 |
| **Footer Inner** | 532px | `0` | `0 648px` | transparent | 0 |
| **Footer Column** | 240px | `0` | `0` | transparent | 0 |
| **Footer Contact Item** | 42px | `0` | `0 0 16px 0` | transparent | 0 |

---

## 15. Block-by-Block Comparison

### Hero Section

| Property | Original | Local | Status |
|----------|----------|-------|--------|
| **Structure** | Single block with tinted bg | Two separate sections | ❌ Different |
| **Background** | `rgba(53,59,80,0.05)` | `#FFFFFF` | ❌ Missing tint |
| **Border-radius** | `8px` | `0px` | ❌ Missing |
| **Padding** | `60px 56px 42px 56px` | `80px 0 40px 0` | ❌ Different |
| **Layout** | 2-column (460px + stacked) | 3 equal columns (384px) | ❌ Wrong |
| **Container width** | `1100px` | `1200px` | ⚠️ Slightly wider |

### Hero Cards

| Property | Original | Local | Status |
|----------|----------|-------|--------|
| **Card padding** | `48px 56px 32px` | `32px` | ❌ Less padding |
| **Card border-radius** | `8px` | `12px` | ❌ Too rounded |
| **Card border** | `1px solid #F2F2F2` | `1px solid #EBEBEB` | ⚠️ Similar |
| **Primary card bg** | `#FFFFFF` | `#FFFFFF` | ✅ Match |
| **Secondary card bg** | `#FAFAFA` | `#F7F7F7` | ⚠️ Close |

### Section Margins

| Section | Original | Local | Status |
|---------|----------|-------|--------|
| **After hero** | `24px 0 60px 0` | `0` | ❌ Missing |
| **Stories bottom** | `0 0 48px 0` | `0` | ❌ Missing |
| **Logos section** | `60px 0 60px 0` | `0` | ❌ Missing |
| **Contributions bottom** | `0 0 60px 0` | `0` | ❌ Missing |
| **Presentations top** | — | `64px 0 0 0` | ✅ Has margin |

### Story/Case Study Cards

| Property | Original | Local | Status |
|----------|----------|-------|--------|
| **Card height** | ~647px | 142px | ❌ Much shorter |
| **Card padding** | `40px` / `48px 56px` | `0` | ❌ No padding |
| **Card margin** | `0 16px 20px 0` | `0` | ❌ No margin |
| **Card width** | `542px` | `600px` | ⚠️ Wider |
| **Border** | `1px solid #F2F2F2` | none | ❌ Missing |

### Client Logos Section

| Property | Original | Local | Status |
|----------|----------|-------|--------|
| **Section margin** | `60px 0 60px 0` | `0` | ❌ Missing |
| **Container width** | `1100px` | `1200px` | ⚠️ Wider |
| **Height** | 66px | 120px | ⚠️ Taller |

### Contributions Section

| Property | Original | Local | Status |
|----------|----------|-------|--------|
| **Section margin** | `0 0 60px 0` | `0` | ❌ Missing |
| **Large card (HDH)** | `1092px` wide, `48px` padding | Not present | ❌ Missing |
| **Small card padding** | `48px` | `0` | ❌ No padding |
| **Card height** | ~314px (large) | 78-100px | ❌ Much shorter |

### Subscribe/Newsletter Section

| Property | Original | Local | Status |
|----------|----------|-------|--------|
| **Section height** | 176px | 58px | ❌ Too short |
| **Container padding** | `48px 64px` | `0` | ❌ No padding |
| **Background** | `#F4F8FB` | `#C9362B` | ❌ Different |
| **Has blog header** | Yes (separate 158px) | No | ❌ Missing |
| **Border-radius** | `4px` | `0` | ❌ Missing |

### Contact Section

| Property | Original | Local | Status |
|----------|----------|-------|--------|
| **Section padding** | `100px 0 90px 0` | `0` | ❌ No padding |
| **Container width** | `1100px` | `600px` | ❌ Too narrow |
| **Form shadow** | None | Has shadow | ⚠️ Extra |
| **Form border-radius** | — | `12px` | ⚠️ Extra |

### Footer

| Property | Original | Local | Status |
|----------|----------|-------|--------|
| **Padding** | `0 32px 20px 32px` | `0 32px 20px 32px` | ✅ Match |
| **Background** | `#F4F8FB` | `#F4F8FB` | ✅ Match |
| **Has awards row** | Yes (61px) | Yes | ✅ Match |
| **Grid padding** | `20px 0` | `0` | ⚠️ Missing |

---

## 16. Required Fixes - Task List

### Task 1: Hero Section (Critical)

**Current state:** Two separate sections, white background, 3 equal columns
**Target state:** Single merged section with tinted background, 2-column layout

| Subtask | Details |
|---------|---------|
| 1.1 | Merge `homepage-hero` and `hero-cards` into single section |
| 1.2 | Add background: `rgba(53,59,80,0.05)` |
| 1.3 | Add border-radius: `8px` |
| 1.4 | Change to 2-column layout: large left card (460px) + stacked right cards |
| 1.5 | Fix padding: `60px 56px 42px 56px` |

---

### Task 2: Section Spacing (Critical)

**Current state:** All sections have `margin: 0`, page feels cramped
**Target state:** Proper vertical rhythm with gaps between sections

| Section | Current | Target |
|---------|---------|--------|
| Stories section | `margin: 0` | `margin-bottom: 48px` |
| Logos section | `margin: 0` | `margin: 60px 0` |
| Contributions section | `margin: 0` | `margin-bottom: 60px` |
| Mission text | `margin: 0` | `margin: 20px 0 24px` |

---

### Task 3: Newsletter Section (Critical)

**Current state:** Thin red bar (58px), wrong background
**Target state:** Full section with blog header above

| Property | Current | Target |
|----------|---------|--------|
| Height | `58px` | `176px` |
| Background | `#C9362B` (red) | `#F4F8FB` (light gray) |
| Padding | `0` | `48px 64px` |
| Border-radius | `0` | `4px` |

**Additional:** Add blog header section above newsletter:
- Height: `158px`
- Background: `#FAFAFA`
- Padding: `48px 0 32px 0`

---

### Task 4: Contact Section (High)

**Current state:** No padding, narrow container (600px), form has shadow
**Target state:** Generous padding, wider container, no shadow

| Property | Current | Target |
|----------|---------|--------|
| Padding | `0` | `100px 0 90px 0` |
| Container width | `600px` | `1100px` |
| Form shadow | Has shadow | Remove |
| Form border-radius | `12px` | Remove or reduce |

---

### Task 5: Header Shadow (Medium)

**Current state:** No shadow
**Target state:** Subtle shadow for depth

```css
header {
  box-shadow: rgba(53, 59, 80, 0.1) 0px 0px 2px 0px;
}
```

---

### Task 6: Card Styling (Medium)

**Current state:** Inconsistent padding, too rounded
**Target state:** Match original site styling

| Card Type | Current | Target |
|-----------|---------|--------|
| **Border-radius (all)** | `12px` | `8px` |
| **Hero card padding** | `32px` | `48px 56px 32px` |
| **Story card padding** | `0` | `40px` |
| **Story card border** | none | `1px solid #F2F2F2` |
| **Contribution card padding** | `0` | `48px` |
| **HealthDevHub card** | Same as others | Full width `1092px`, featured |

---

### Task 7: Typography (Low)

**Current state:** Using Inter font, lighter weights, wrong colors
**Target state:** Match original typography

| Property | Current | Target |
|----------|---------|--------|
| H1 size | `56px` | `64px` |
| H1 line-height | `64px` | `80px` |
| H1 weight | `700` | `900` |
| H2 weight | `700` | `900` |
| H3 weight | `600-700` | `900` |
| Body text color | `#666666` | `#333333` |
| Body line-height | `24px` | `28-31px` |

---

### Task 8: Additional Features (Low)

| Feature | Status | Details |
|---------|--------|---------|
| Cookie consent banner | Missing | Fixed position, `#F4F8FB` bg, pill buttons |
| reCAPTCHA on contact form | Missing | Add Google reCAPTCHA |
| HealthDevHub featured card | Missing | Large card with bullet points |
| Eastern Europe Meetups | Missing | 7th contribution item |

---

## Priority Order

| Priority | Task | Impact |
|----------|------|--------|
| 🔴 1 | Hero layout | Most visible difference |
| 🔴 2 | Section margins | Page feels cramped |
| 🔴 3 | Newsletter section | Completely wrong |
| 🟠 4 | Contact padding | Too small |
| 🟡 5 | Header shadow | Subtle but noticeable |
| 🟡 6 | Card styling | Refinement |
| 🟢 7 | Typography | Polish |
| 🟢 8 | Additional features | Nice to have |
