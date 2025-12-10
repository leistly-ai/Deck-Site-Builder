# Design Guidelines: Professional Business Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Stripe and Webflow's landing pages, characterized by:
- Extreme clarity in value communication
- Sophisticated simplicity over decorative complexity
- Strategic use of whitespace as a design element
- Professional credibility through restraint and polish

**Key Principles**:
1. Content clarity first - every element earns its place
2. Professional sophistication through minimalism
3. Subtle elegance over flashy elements
4. Trust-building through polished execution

## Typography System

**Font Stack**: Inter for all text (fallback to system sans-serif)

**Hierarchy**:
- Hero Headline: 3.5rem (desktop) / 2.5rem (mobile), font-weight 700, line-height 1.1
- Section Headings: 2.5rem (desktop) / 2rem (mobile), font-weight 700, line-height 1.2
- Subsection Headings: 1.5rem, font-weight 600, line-height 1.3
- Body Text: 1.125rem, font-weight 400, line-height 1.7
- Small Text/Captions: 0.875rem, font-weight 400, line-height 1.5

## Layout System

**Spacing Units**: Use Tailwind spacing of 4, 8, 12, 16, 24, 32 for consistent rhythm
- Component internal padding: p-8 to p-12
- Section vertical spacing: py-20 (desktop) / py-12 (mobile)
- Element gaps: gap-8 or gap-12 for grids

**Container Strategy**:
- Page width: max-w-7xl with horizontal padding px-6
- Content sections: max-w-6xl for breathing room
- Text-heavy content: max-w-4xl for readability

## Page Structure & Sections

### 1. Hero Section (80vh)
- Large, professional hero image showing business environment, team at work, or product in use
- Image treatment: Subtle gradient overlay (dark to transparent) for text legibility
- Centered content overlay with company name, compelling value proposition (1 sentence), and primary CTA
- CTA button: Large, prominent with blurred background backdrop
- Secondary text below CTA highlighting key differentiator

### 2. Value Proposition Grid
- Three-column layout (2 cols tablet, 1 col mobile) showcasing core business values
- Each card: icon (from Font Awesome), bold heading, 2-sentence description
- Clean white/subtle background cards with shadow on hover
- Even height cards with centered content alignment

### 3. Services/Products Showcase
- Two-column alternating layout for 3-4 key offerings
- Each service: Image on left/right (alternating), title, description, optional list of features
- Images: Professional photography or relevant business imagery
- Text content extracted from PowerPoint slides

### 4. Company/About Section
- Single column, centered content with max-w-4xl
- Company story, mission, team overview from PowerPoint
- Optional: Small team photo grid (3-4 images) if applicable
- Background: Subtle off-white or light treatment to separate from other sections

### 5. Trust Indicators (if content available)
- Stats/metrics in horizontal row: 3-4 key numbers with labels
- Large numbers (3rem), smaller descriptive text below
- Clean, minimal presentation with generous spacing

### 6. Contact Section
- Two-column layout: Left side with contact details, right side with simple text-based contact info display
- Display: Email, phone, address (extracted from PowerPoint)
- Professional, straightforward presentation
- Background treatment to visually separate from main content

### 7. Footer
- Three-column layout: Company info + Quick Links + Contact
- Social media icons (Font Awesome) if applicable
- Copyright notice
- Subtle background color to anchor page

## Component Library

**Navigation**: 
- Horizontal navbar, logo left, links right
- Transparent over hero, solid white background on scroll
- Mobile: Hamburger menu with slide-in drawer

**Cards**:
- White background, subtle shadow (shadow-md)
- Rounded corners (rounded-lg)
- Padding p-8, hover state with shadow-lg transition

**Buttons**:
- Primary: Large padding (px-8 py-4), rounded-lg, bold text
- When over images: Blurred background (backdrop-blur-md with semi-transparent bg)
- Secondary: Outlined style with transparent background
- No custom hover states needed

**Icons**: Font Awesome via CDN - use sparingly for service cards and contact info

## Images

**Hero Image**: 
- Full-width, high-quality professional photography
- Subject: Modern office environment, team collaboration, or industry-relevant scene
- Treatment: 30% dark gradient overlay from bottom for text contrast

**Service Images**:
- 4-5 supporting images for services/products section
- Professional, clean photography showing services in action or product details
- Aspect ratio: 16:9 or 4:3, optimized for web

**About Section** (if applicable):
- Optional team photo or company facility image
- Authentic, professional photography

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Optimizations**:
- Hero text size reduction, maintain readability
- Stack all multi-column layouts to single column
- Reduce vertical padding (py-12 instead of py-20)
- Touch-friendly button sizes (minimum 44px height)

## Animations

**Minimal, Purposeful Motion**:
- Smooth scroll behavior for anchor links
- Fade-in on scroll for section reveals (subtle, 300ms)
- Card shadow transitions on hover (200ms ease)
- Navigation background transition on scroll (150ms)

Avoid: Parallax effects, complex scroll animations, auto-playing carousels

## Brand Integration from PowerPoint

The design will adapt to extracted brand colors while maintaining this structure. Primary brand color will be used for CTAs and accents. The layout remains consistent regardless of color scheme to ensure professional presentation.