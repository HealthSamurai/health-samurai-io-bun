# Task: PARANOID validation of clone vs original

Compare clone at http://localhost:4444{{PAGE_PATH}} against original at https://health-samurai.io{{PAGE_PATH}}.

**Goal:** Be EXTREMELY strict. FAIL on ANY visible difference. The clone must be pixel-perfect.

## Server Setup

```sh
./server.sh restart -h
./server.sh status
```

## Step 1: Side-by-Side Screenshots

Open BOTH pages with Playwright:
- Tab 1: https://health-samurai.io{{PAGE_PATH}}
- Tab 2: http://localhost:4444{{PAGE_PATH}}

Take screenshots and compare visually.

## Step 2: PARANOID Checklist

### Page Load
- [ ] Clone returns HTTP 200
- [ ] No console errors
- [ ] No 404s for resources

### Colors (MUST BE EXACT)
Compare with color picker - not "close enough", EXACT hex match:
- [ ] Body background EXACT match
- [ ] Every section background EXACT match
- [ ] All heading colors EXACT match
- [ ] All body text colors EXACT match
- [ ] All link colors EXACT match
- [ ] All button colors EXACT match
- [ ] All border colors EXACT match

### Typography (MUST BE EXACT)
- [ ] H1 size EXACT (within 1px)
- [ ] H1 weight EXACT
- [ ] H2 size EXACT
- [ ] H3 size EXACT
- [ ] Body text size EXACT
- [ ] Line heights match
- [ ] Letter spacing matches

### Spacing (MUST BE CLOSE)
- [ ] Section padding within 5px
- [ ] Container width matches
- [ ] Card padding within 5px
- [ ] Gaps between elements within 5px
- [ ] Margins within 5px

### Content (MUST BE COMPLETE)
- [ ] ALL sections present (count them!)
- [ ] ALL headings present with correct text
- [ ] ALL paragraphs present with correct text
- [ ] ALL bullet points present
- [ ] ALL links present with correct hrefs
- [ ] NO placeholder text (Lorem ipsum, TODO, etc.)

### Images (STRICT)
- [ ] ALL images display (no broken icons)
- [ ] ALL images from LOCAL paths (/assets/images/...)
- [ ] NO external URLs (check page source!)
- [ ] Image sizes match original
- [ ] Image positions match original

### Interactive (MUST WORK IDENTICALLY)
- [ ] ALL tabs work (click switches content)
- [ ] ALL accordions work (expand/collapse)
- [ ] ALL dropdowns work (open/close)
- [ ] ALL hover effects work
- [ ] Animation timing similar
- [ ] State styling matches (active tab, expanded accordion)

### Layout (MUST MATCH)
- [ ] Grid columns match
- [ ] Flex directions match
- [ ] Alignments match
- [ ] Responsive behavior matches (test mobile)

## Step 3: Automated Checks

### Check for external URLs:
```sh
curl -s http://localhost:4444{{PAGE_PATH}} | grep -Eo 'src="https?://[^"]*health-samurai[^"]*"' | head
curl -s http://localhost:4444{{PAGE_PATH}} | grep -Eo 'src="https?://[^"]*cdn[^"]*"' | head
```
If ANY results → **FAIL**

### Check for broken images:
Open page, check console for 404 errors on images.
If ANY → **FAIL**

## FAIL Criteria (ANY of these = FAIL)

### Instant FAIL:
- Page returns 404
- Any section from original missing
- Any external image URL
- Any broken image
- Any interactive element not working
- JavaScript console errors

### Visual FAIL:
- Color difference > 5% (use color picker)
- Font size difference > 2px
- Spacing difference > 10px
- Missing content
- Wrong content

## Response Format

### SUCCESS (only if EVERYTHING matches):

```
SUCCESS

Visual fidelity: EXACT MATCH
All {n} sections: Present and correct
All {n} images: Local and loading
All {n} interactive elements: Working
Colors: All exact match
Typography: All exact match
Spacing: All within tolerance

Minor notes (cosmetic only):
- (any tiny differences that don't affect appearance)
```

### FAIL (be specific about EVERY issue):

```
FAIL

🔴 CRITICAL (must fix):
- [Section] is completely missing
- [Image] loaded from external URL: https://...
- [Interactive] tabs not working - clicking does nothing
- [Content] heading text is different

🟡 VISUAL (should fix):
- [Hero] background is #ffffff, should be #f5f7fa
- [H1] font size is 48px, should be 64px
- [Card] padding is 32px, should be 40px
- [Body text] color is #333, should be #666

🟠 SPACING (minor):
- [Hero] padding is 70px, should be 80px
- [Grid] gap is 20px, should be 24px

📝 EXACT FIXES (copy-paste ready):

1. Hero background:
   Change: className="..."
   To: className="... bg-[#f5f7fa]"

2. H1 size:
   Change: className="text-4xl"
   To: className="text-[64px] font-black leading-[1.2]"

3. Missing Features section:
   Add after Hero section:
   <section className="py-[80px] bg-white">
     ...
   </section>

4. Fix tabs:
   Add to container: data-signals="{activeTab: 'tab1'}"
   Add to buttons: data-on-click="$activeTab = 'tab1'"
   Add to panels: data-show="$activeTab == 'tab1'"

5. External image:
   Change: src="https://health-samurai.io/image.png"
   To: src="/assets/images/{{PAGE_SLUG}}/image.png"
   (Make sure file exists!)
```

## Examples

### FAIL Example (be this detailed):

```
FAIL

🔴 CRITICAL (must fix):
- Features section (3rd section on original) is completely MISSING
- Tabs in Features section exist but do NOT work - clicking does nothing
- Image "hero-dashboard.webp" returns 404
- Image "client-logo-1.png" loads from https://health-samurai.io/...

🟡 VISUAL (should fix):
- Hero background: clone=#ffffff, original=#f5f7fa
- H1 "Let's implement your ideas on FHIR": clone=48px/700, original=64px/900
- Primary button: clone=12px padding, original=16px 32px padding
- Body text color: clone=#333333, original=#666666

🟠 SPACING (minor):
- Hero section: clone=60px padding, original=80px padding
- Service cards: clone=24px padding, original=40px padding
- Grid gap: clone=16px, original=24px

📝 EXACT FIXES:

1. Add Features section after Services (copy from spec)

2. Hero background:
   <section className="hero">
   →
   <section className="hero bg-[#f5f7fa]">

3. H1 typography:
   <h1 className="text-4xl font-bold">
   →
   <h1 className="text-[64px] font-black leading-[1.2]">

4. Fix tabs interactivity:
   <div className="tabs">
   →
   <div className="tabs" data-signals="{activeTab: 'tab1'}">

   <button className="tab">
   →
   <button className="tab" data-on-click="$activeTab = 'tab1'" data-class="{'active': $activeTab == 'tab1'}">

5. Fix broken image:
   Download: curl -o src/assets/images/{{PAGE_SLUG}}/hero-dashboard.webp "https://..."
   Then use: src="/assets/images/{{PAGE_SLUG}}/hero-dashboard.webp"

6. Fix external image URL:
   <img src="https://health-samurai.io/logos/client.png">
   →
   <img src="/assets/images/{{PAGE_SLUG}}/client-logo.png">
   (File already exists at that path)
```

Remember: The goal is PIXEL-PERFECT match. When in doubt, FAIL and provide the fix.
