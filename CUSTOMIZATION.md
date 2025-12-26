# Customization Guide

Learn how to customize content, styling, and functionality of the ChainPass site.

## Table of Contents

- [Content Customization](#content-customization)
- [Styling Customization](#styling-customization)
- [Adding New Sections](#adding-new-sections)
- [Adding New Pages](#adding-new-pages)
- [Branding](#branding)
- [FAQ Management](#faq-management)
- [Platform Management](#platform-management)

## Content Customization

All static content lives in **`src/lib/constants.ts`**. This is your single source of truth for copy.

### Update Headlines and Copy

```typescript
// src/lib/constants.ts

export const COPY = {
  // Hero section
  heroHeadline: 'Your new headline here',
  heroBadge: 'V.A.I. — PATENT PENDING',

  // Intro section
  introTitle: 'ChainPass V.A.I.™',
  introTagline: 'Verified Anonymous Identity',

  // ... all other copy
}
```

**After editing**, the changes appear immediately in:
- Hero section
- Introducing V.A.I. section
- Pricing cards
- Footer
- All sections using these constants

### Update External Links

```typescript
// src/lib/constants.ts

export const EXTERNAL_LINKS = {
  forum: 'https://your-forum-url.com',
  app: 'https://your-app-url.com',
  vairify: 'https://your-partner-url.com',
} as const;
```

### Update Navigation Links

```typescript
// src/lib/constants.ts

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'API', href: '/api' },
  // Add new link:
  { label: 'Pricing', href: '/pricing' },
];
```

## Styling Customization

### Color Scheme

**Primary location:** `tailwind.config.js`

```javascript
// tailwind.config.js

export default {
  theme: {
    extend: {
      colors: {
        cp: {
          // Light mode
          bg: '#ffffff',          // Page background
          surface: '#f8f9fa',     // Card background
          border: '#e5e7eb',      // Borders
          text: '#1a1a2e',        // Primary text
          'text-secondary': '#6b7280',  // Secondary text

          // Accent colors
          primary: '#3B82F6',     // Blue
          cta: '#00d4aa',         // Teal (CTA buttons)
          'cta-hover': '#00b894', // Darker teal
          success: '#10b981',     // Green
          danger: '#ef4444',      // Red
        },
      },
    },
  },
}
```

**After changing**, colors update across the entire site automatically.

### Dark Mode Colors

**Location:** `src/index.css`

```css
/* Light mode (default) */
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a2e;
  --color-primary: #3B82F6;
  /* ... */
}

/* Dark mode */
html.dark {
  --color-bg: #0f0f1a;
  --color-text: #ffffff;
  --color-primary: #3B82F6;  /* Same as light */
  /* ... */
}
```

**To change dark mode background:**
```css
html.dark {
  --color-bg: #0a0a12;  /* Darker background */
}
```

### Typography

**Change fonts:**

1. Update Google Fonts import in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700;800&display=swap');
```

2. Update Tailwind config:
```javascript
// tailwind.config.js
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
  mono: ['YourMonoFont', 'monospace'],
}
```

**Change font sizes:**
```javascript
// tailwind.config.js
fontSize: {
  'hero': '4rem',
  'section': '2.5rem',
}
```

Then use: `className="text-hero"`

### Spacing and Layout

**Update section padding:**
```css
/* src/index.css */
.section-padding {
  padding-top: 5rem;    /* Change this */
  padding-bottom: 5rem;
}
```

**Update max container width:**
```javascript
// tailwind.config.js
maxWidth: {
  '8xl': '88rem',  // Change to '100rem' for wider
}
```

### Custom Animations

**Add new animation:**

1. Define keyframes in Tailwind config:
```javascript
// tailwind.config.js
keyframes: {
  fadeSlide: {
    '0%': { opacity: '0', transform: 'translateX(-20px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
},
animation: {
  'fade-slide': 'fadeSlide 0.5s ease-out',
}
```

2. Use it:
```tsx
<div className="animate-fade-slide">Content</div>
```

## Adding New Sections

### 1. Create Section Component

```tsx
// src/components/sections/MyNewSection.tsx

import { Section, SectionHeader } from '../ui/Section';
import { Button } from '../ui/Button';

export function MyNewSection() {
  return (
    <Section id="my-section" background="surface">
      <SectionHeader
        title="My New Section"
        subtitle="Section description"
      />

      <div className="max-w-4xl mx-auto">
        {/* Section content */}
        <Button>Call to Action</Button>
      </div>
    </Section>
  );
}
```

### 2. Export from Index

```typescript
// src/components/sections/index.ts

export { MyNewSection } from './MyNewSection';
```

### 3. Add to Home Page

```tsx
// src/App.tsx

import { MyNewSection } from './components/sections';

function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Nav />
      <main>
        <Hero />
        <IntroducingVAI />
        <MyNewSection />  {/* Add here */}
        {/* ... other sections */}
      </main>
      <Footer />
    </div>
  );
}
```

## Adding New Pages

### 1. Create Page Component

```tsx
// src/pages/PricingPage.tsx

import { useEffect } from 'react';
import { initializeTheme } from '../lib/theme';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
import { Section, SectionHeader } from '../components/ui/Section';

export function PricingPage() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Nav />
      <main className="pt-24">
        <Section>
          <SectionHeader
            title="Pricing"
            subtitle="Simple, transparent pricing"
          />
          {/* Page content */}
        </Section>
      </main>
      <Footer />
    </div>
  );
}
```

### 2. Export from Index

```typescript
// src/pages/index.ts

export { PricingPage } from './PricingPage';
```

### 3. Add Route

```tsx
// src/App.tsx

import { PricingPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}
```

### 4. Add to Navigation (Optional)

```typescript
// src/lib/constants.ts

export const NAV_LINKS: NavLink[] = [
  // ...
  { label: 'Pricing', href: '/pricing' },
];
```

## Branding

### Replace Logo

**Current:** "CP" placeholder in navigation

**To replace:**

1. Add logo to `src/assets/logos/chainpass-logo.svg`

2. Update Nav component:
```tsx
// src/components/layout/Nav.tsx

// Replace this:
<div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-sm">CP</span>
</div>

// With this:
<img src="/logos/chainpass-logo.svg" alt="ChainPass" className="h-8 w-auto" />
```

3. Also update Footer component (same pattern)

### Replace Favicon

Replace `public/vite.svg` with your favicon, or add multiple sizes:

```html
<!-- index.html -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

### Update Meta Tags

```html
<!-- index.html -->
<meta name="description" content="Your custom description" />
<meta property="og:title" content="ChainPass" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="https://chainpass.id/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
```

## FAQ Management

### Add FAQ Questions

```typescript
// src/lib/constants.ts

export const FAQ_FULL: FAQItem[] = [
  // ... existing FAQs

  // Add new FAQ:
  {
    id: 'my-new-faq',
    question: 'Your question here?',
    answer: 'Your detailed answer here. Can be multiple sentences and include technical details.',
  },
];
```

**To add to preview** (home page):
```typescript
export const FAQ_PREVIEW: FAQItem[] = [
  // Pick 4 most important FAQs
];
```

### Organize FAQ Categories

Create categories by grouping in the array:
```typescript
// Category: Getting Started
{
  id: 'what-is-vai',
  question: 'What is V.A.I.?',
  answer: '...',
},
// Category: Security
{
  id: 'is-it-safe',
  question: 'Is my data safe?',
  answer: '...',
},
```

Or create separate FAQ page sections.

## Platform Management

### Add New Partner Platform

```typescript
// src/lib/constants.ts

export const PARTNER_PLATFORMS: PlatformCard[] = [
  // ... existing platforms

  // Add new platform:
  {
    id: 'new-platform',
    name: 'Platform Name',
    status: 'coming',  // 'flagship' | 'founding' | 'coming' | 'integrate'
    statusLabel: 'Coming Soon',  // Or 'LIVE', 'FOUNDING PARTNER', etc.
    description: 'Brief description of the platform',
    tags: ['+ Law Enforcement Disclosure'],
    ctaText: 'Visit Site',
    ctaUrl: 'https://platform-url.com',
    isExternal: true,
  },
];
```

### Update Platform Status

Change a platform from "Coming Soon" to "LIVE":
```typescript
{
  id: 'avictria',
  status: 'flagship',        // Changed from 'coming'
  statusLabel: 'LIVE',       // Changed from 'Coming Soon'
  ctaUrl: 'https://avictria.com',  // Add actual URL
  isExternal: true,
}
```

### Add Platform Logo

1. Add logo file to `src/assets/logos/platform-name.svg`

2. Update platform object:
```typescript
{
  id: 'platform',
  logo: '/logos/platform-name.svg',
  // ...
}
```

3. Update Ecosystem component to display logo:
```tsx
// src/components/sections/Ecosystem.tsx

// In PlatformCardComponent, replace logo placeholder with:
{platform.logo ? (
  <img src={platform.logo} alt={platform.name} className="h-12 w-12 object-contain" />
) : (
  <div className="w-12 h-12 bg-[var(--color-badge-bg)] rounded-lg flex items-center justify-center">
    <span className="text-xs text-[var(--color-text-muted)]">Logo</span>
  </div>
)}
```

## Trust Badges

### Replace Placeholders with Actual Badges

1. Add SVG files to `src/assets/badges/`
   - `zero-knowledge.svg`
   - `complycube.svg`
   - `idenfy.svg`
   - etc.

2. Verify filenames match constants:
```typescript
// src/lib/constants.ts
export const TRUST_BADGES: TrustBadge[] = [
  { id: 'zero-knowledge', name: 'Zero-Knowledge', src: '/badges/zero-knowledge.svg', alt: 'Zero-Knowledge Architecture' },
  // ... others
];
```

3. They'll appear automatically in:
   - Hero section
   - Footer
   - Any other `<TrustBadgeRow>` usage

## Form Integration

### Connect Integration Form to Backend

**Current:** Form submits to console.log

**To connect to real endpoint:**

```tsx
// src/components/sections/ForPlatforms.tsx

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Replace this with your actual endpoint
    const response = await fetch('https://api.chainpass.id/integrations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Submission failed');

    setSubmitted(true);
  } catch (error) {
    console.error('Error:', error);
    alert('Submission failed. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Alternative: Email via FormSpree

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    }
  } catch (error) {
    alert('Error submitting form');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Advanced Customization

### Add Custom Component

Create any custom component following the pattern:

```tsx
// src/components/ui/MyCustomComponent.tsx

interface MyCustomComponentProps {
  title: string;
  variant?: 'default' | 'special';
}

export function MyCustomComponent({ title, variant = 'default' }: MyCustomComponentProps) {
  return (
    <div className={`
      p-6 rounded-lg
      ${variant === 'special' ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-surface)]'}
    `}>
      <h3>{title}</h3>
    </div>
  );
}
```

Export and use it anywhere.

### Custom Utility Classes

Add to `src/index.css`:
```css
.my-special-gradient {
  background: linear-gradient(135deg, var(--color-primary), var(--color-cta));
}

.my-glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}
```

Use in components:
```tsx
<div className="my-glass-effect">
  Glassmorphism effect
</div>
```

---

**Need help?** See [DEVELOPMENT.md](./DEVELOPMENT.md) for development workflow.
For component APIs, see [COMPONENTS.md](./COMPONENTS.md).
