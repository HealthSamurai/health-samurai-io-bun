# Task: Analyze and document page design

Analyze the "{{PAGE_NAME}}" page at https://health-samurai.io{{PAGE_PATH}} and create a detailed design specification.

**Goal:** Extract every visual detail so the Creator can implement without visiting the original site.

## Output Files

- `specs/{{PAGE_SLUG}}.md` - Design specification (main output)
- `specs/{{PAGE_SLUG}}/full.png` - Full page screenshot
- `specs/{{PAGE_SLUG}}/mobile.png` - Mobile screenshot (375px)
- `specs/{{PAGE_SLUG}}/sections/*.png` - Section screenshots
- `src/assets/images/{{PAGE_SLUG}}/` - Downloaded images

## Step 1: Setup

```sh
mkdir -p specs/{{PAGE_SLUG}}/sections
mkdir -p src/assets/images/{{PAGE_SLUG}}
```

## Step 2: Take Screenshots

Use Playwright to capture the original page:

1. **Full page screenshot** (desktop ~1440px):
   - Save as `specs/{{PAGE_SLUG}}/full.png`

2. **Mobile screenshot** (375px width):
   - Resize browser to 375px width
   - Save as `specs/{{PAGE_SLUG}}/mobile.png`

3. **Section screenshots**:
   - Screenshot each major section (hero, features, pricing, etc.)
   - Save as `specs/{{PAGE_SLUG}}/sections/{section-name}.png`

## Step 3: Extract Design Details

Using Playwright, inspect the page and extract:

### Colors
- Background color of each section
- Text colors (headings, paragraphs, muted, links)
- Button colors (normal, hover)
- Border colors
- Use browser's computed styles to get exact hex values

### Typography
- Font family
- Font sizes for h1, h2, h3, h4, p, small
- Font weights
- Line heights
- Letter spacing

### Spacing
- Section padding (top/bottom)
- Container max-width
- Gaps between elements
- Card padding
- Button padding

### Layout
- Number of columns in grids
- Flexbox directions
- Alignment

## Step 4: Download All Images

Download every image to `src/assets/images/{{PAGE_SLUG}}/`:

```sh
curl -o src/assets/images/{{PAGE_SLUG}}/hero-image.webp "https://..."
curl -o src/assets/images/{{PAGE_SLUG}}/feature-icon-1.svg "https://..."
```

**Naming convention:**
- `hero-{description}.{ext}` - Hero images
- `feature-{name}.{ext}` - Feature icons/images
- `icon-{name}.svg` - Icons
- `logo-{company}.{ext}` - Logos
- `photo-{description}.{ext}` - Photos
- `bg-{section}.{ext}` - Background images

## Step 5: Document Interactive Elements

For each interactive element found:

1. **Identify the type:** tabs, accordion, dropdown, carousel, modal, tooltip
2. **Document the behavior:** what triggers it, what changes
3. **Count items:** number of tabs, accordion items, etc.
4. **Note the states:** active/inactive styles, open/closed styles

## Step 6: Write specs/{{PAGE_SLUG}}.md

Write the complete specification as markdown to `specs/{{PAGE_SLUG}}.md`:

```markdown
# {{PAGE_NAME}}

- **Path:** {{PAGE_PATH}}
- **Title:** Page title from <title> tag
- **Description:** Meta description from page

## Screenshots

- Full page: `specs/{{PAGE_SLUG}}/full.png`
- Mobile: `specs/{{PAGE_SLUG}}/mobile.png`
- Sections: `specs/{{PAGE_SLUG}}/sections/`

## Colors

| Name | Hex | Usage |
|------|-----|-------|
| Primary | #c9362b | Buttons, links, accents |
| Primary Dark | #a82d24 | Hover states |
| Text | #1a1a1a | Headings, body text |
| Text Light | #666666 | Secondary text |
| Text Muted | #999999 | Captions, hints |
| Background | #ffffff | Main background |
| Background Alt | #f7f7f7 | Alternating sections |
| Border | #ebebeb | Card borders, dividers |

## Typography

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| h1 | 64px | 900 | 1.2 |
| h2 | 48px | 900 | 1.2 |
| h3 | 24px | 700 | 1.3 |
| h4 | 20px | 700 | 1.3 |
| body | 16px | 400 | 1.6 |
| small | 14px | 400 | 1.5 |

Font family: Inter, Helvetica Neue, Arial, sans-serif

## Spacing

- Section padding: 80px (top/bottom)
- Container max-width: 1200px
- Container padding: 32px (left/right)
- Card padding: 40px
- Grid gap: 24px

## Sections

### 1. Hero

**Screenshot:** `specs/{{PAGE_SLUG}}/sections/hero.png`
**Background:** #ffffff
**Padding:** 80px 0

Content:
- Tag: ">_ Hello, Aidbox"
- H1: "Let's implement your ideas on FHIR"
- Description paragraph: "Full-blown FHIR server..."
- Primary button: "BOOK A DEMO" → /contacts
- Text link: "read more >" → /fhir-server
- Image: hero-dashboard.webp (right side)

### 2. Features

**Screenshot:** `specs/{{PAGE_SLUG}}/sections/features.png`
**Background:** #f7f7f7
**Padding:** 80px 0

Content:
- H2: "Features"
- 3-column grid of feature cards
- Each card: icon + title + description

(Continue for each section...)

## Images

| Local Path | Alt Text | Location |
|------------|----------|----------|
| `src/assets/images/{{PAGE_SLUG}}/hero-dashboard.webp` | Aidbox Dashboard | Hero section |
| `src/assets/images/{{PAGE_SLUG}}/feature-api.svg` | API Icon | Features section |

## Interactive Elements

### Tabs (Features Section)

- **Type:** Tabs
- **Location:** Features section
- **Default active:** Tab 1

| Tab | Label | Content |
|-----|-------|---------|
| 1 | FHIR API | Description of FHIR API features... |
| 2 | PostgreSQL | Description of PostgreSQL features... |
| 3 | SDK | Description of SDK features... |

### Accordion (FAQ Section)

- **Type:** Accordion
- **Location:** FAQ section
- **Default state:** All collapsed

| # | Question | Answer |
|---|----------|--------|
| 1 | What is FHIR? | FHIR is... |
| 2 | How does pricing work? | Pricing is... |

## Buttons

| Text | Style | Colors | Size | Link |
|------|-------|--------|------|------|
| BOOK A DEMO | Primary | bg:#c9362b text:white | 16px 32px padding | /contacts |
| Learn More | Secondary | border:#c9362b text:#c9362b | 12px 24px padding | /fhir-server |

## Notes

- (Any special behaviors or edge cases observed)
- (Animations, transitions, special effects)
```

## Quality Checklist

Before finishing, verify:

- [ ] Full page screenshot captured
- [ ] Mobile screenshot captured
- [ ] All section screenshots captured
- [ ] ALL images downloaded locally with descriptive names
- [ ] All colors extracted as hex values
- [ ] All interactive elements documented
- [ ] specs/{{PAGE_SLUG}}.md written
- [ ] Spec contains all sections from the page

## Response Format

After completing the design spec, respond with:

```
DONE

Spec: specs/{{PAGE_SLUG}}.md
Screenshots: {count} captured
Images: {count} downloaded
Sections: {count} documented
Interactive: {list of types found, or "None"}
```
