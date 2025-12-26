# Component Reference

Complete API reference for all ChainPass components.

## Table of Contents

- [UI Components](#ui-components)
- [Layout Components](#layout-components)
- [Section Components](#section-components)
- [Page Components](#page-components)

## UI Components

Located in `src/components/ui/`

### Button

Reusable button component with multiple variants and sizes.

**File:** `src/components/ui/Button.tsx`

**Props:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
  isExternal?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
```

**Examples:**
```tsx
// Primary button
<Button variant="primary">Click Me</Button>

// Button with icon
<Button rightIcon={<ArrowRight />}>Next</Button>

// Link button
<Button as="a" href="/api" isExternal>Learn More</Button>

// Loading state
<Button isLoading>Submitting...</Button>
```

---

### Badge

Small labels and status indicators.

**File:** `src/components/ui/Badge.tsx`

**Props:**
```typescript
interface BadgeProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
}
```

**Special Variants:**
```tsx
// Patent pending badge
<PatentPendingBadge />

// Platform status badge
<StatusBadge status="flagship" />
<StatusBadge status="coming" />
```

**Examples:**
```tsx
<Badge variant="primary">NEW</Badge>
<Badge variant="success">LIVE</Badge>
<Badge variant="outline">COMING SOON</Badge>
```

---

### Card

Container components with elevation and hover effects.

**File:** `src/components/ui/Card.tsx`

**Props:**
```typescript
interface CardProps {
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
}
```

**Variants:**
- `Card` - Basic card with surface background
- `ElevatedCard` - Card with shadow
- `HighlightCard` - Card with primary border
- `FootnoteCard` - Specialized card for footnotes

**Examples:**
```tsx
<Card padding="lg">Content</Card>

<ElevatedCard hover>
  Clickable content
</ElevatedCard>

<HighlightCard>
  Important message
</HighlightCard>
```

---

### Section

Page section wrapper with consistent spacing.

**File:** `src/components/ui/Section.tsx`

**Props:**
```typescript
interface SectionProps {
  id?: string;
  background?: 'default' | 'surface' | 'elevated';
  containerWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  children: ReactNode;
}
```

**SectionHeader Props:**
```typescript
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}
```

**Examples:**
```tsx
<Section id="how-it-works">
  <SectionHeader
    title="How It Works"
    subtitle="Simple 5-step process"
  />
  {/* Section content */}
</Section>
```

---

### Accordion

Expandable/collapsible FAQ-style component.

**File:** `src/components/ui/Accordion.tsx`

**Props:**
```typescript
interface AccordionProps {
  items: FAQItem[];
  className?: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
```

**Example:**
```tsx
const faqs = [
  {
    id: '1',
    question: 'What is V.A.I.?',
    answer: 'Verified Anonymous Identity...'
  }
];

<Accordion items={faqs} />
```

---

### VideoPlaceholder

Placeholder component for video content.

**File:** `src/components/ui/VideoPlaceholder.tsx`

**Props:**
```typescript
interface VideoPlaceholderProps {
  title?: string;
  subtitle?: string;
  duration?: string;
  className?: string;
  onClick?: () => void;
}
```

**Example:**
```tsx
<VideoPlaceholder
  title="See how V.A.I. works"
  duration="1:30"
  onClick={() => openVideo()}
/>
```

---

### FlowDiagram

5-step verification flow visualization.

**File:** `src/components/ui/FlowDiagram.tsx`

**Props:**
```typescript
interface FlowDiagramProps {
  steps: FlowStep[];
  className?: string;
}

interface FlowStep {
  number: number;
  title: string;
  subtitle?: string;
  description: string;
  isHighlighted?: boolean;
  checks?: string[];
}
```

**Example:**
```tsx
import { FLOW_STEPS } from '../lib/constants';

<FlowDiagram steps={FLOW_STEPS} />
```

---

### ComparisonTable

Side-by-side comparison component.

**File:** `src/components/ui/ComparisonTable.tsx`

**Props:**
```typescript
interface ComparisonTableProps {
  leftTitle: string;
  leftItems: string[];
  leftResults: string[];
  rightTitle: string;
  rightItems: string[];
  rightResults: string[];
  className?: string;
}
```

**Example:**
```tsx
<ComparisonTable
  leftTitle="WHAT THEY STORED"
  leftItems={['Names', 'Addresses', 'Credit Cards']}
  leftResults={['$11.2M settlement', 'CEO resigned']}
  rightTitle="WHAT V.A.I. STORES"
  rightItems={['Photo', '7-char code']}
  rightResults={['$0', 'Nothing to leak']}
/>
```

---

### TrustBadgeRow

Row of trust badge logos.

**File:** `src/components/ui/TrustBadgeRow.tsx`

**Props:**
```typescript
interface TrustBadgeRowProps {
  badges: TrustBadge[];
  className?: string;
}

interface TrustBadge {
  id: string;
  name: string;
  src: string;
  alt: string;
  url?: string;
}
```

**Placeholder Variant:**
```tsx
// While badges are loading or missing
<TrustBadgePlaceholders count={9} />
```

**Example:**
```tsx
import { TRUST_BADGES } from '../lib/constants';

<TrustBadgeRow badges={TRUST_BADGES} />
```

---

## Layout Components

Located in `src/components/layout/`

### Nav

Fixed navigation header.

**File:** `src/components/layout/Nav.tsx`

**Features:**
- Fixed position at top
- Desktop: Nav links, forum link, theme toggle, CTA button
- Mobile: Hamburger menu
- Backdrop blur effect

**Example:**
```tsx
<Nav />
```

---

### Footer

Site footer with links and legal info.

**File:** `src/components/layout/Footer.tsx`

**Features:**
- 5-column link layout (desktop)
- Responsive collapse (mobile)
- Trust badge placeholders
- Legal text and copyright

**Example:**
```tsx
<Footer />
```

---

### ThemeToggle

Light/Dark mode toggle button.

**File:** `src/components/layout/ThemeToggle.tsx`

**Props:**
```typescript
interface ThemeToggleProps {
  className?: string;
}
```

**Example:**
```tsx
<ThemeToggle />
```

---

## Section Components

Located in `src/components/sections/`

### Hero

Home page hero section.

**File:** `src/components/sections/Hero.tsx`

**Features:**
- Patent pending badge
- Headline
- Two CTAs
- Trust badges
- Hero image placeholder (right column on desktop)

**Example:**
```tsx
<Hero />
```

---

### IntroducingVAI

V.A.I. introduction section.

**File:** `src/components/sections/IntroducingVAI.tsx`

**Features:**
- Centered intro badge
- Title and tagline
- Guarantee text
- Dual-audience split (Users vs Platforms)

**Example:**
```tsx
<IntroducingVAI />
```

---

### HowItWorks

Explanation section with flow diagram.

**File:** `src/components/sections/HowItWorks.tsx`

**Features:**
- Video placeholder
- 5-step flow diagram
- Punchline card

**Example:**
```tsx
<HowItWorks />
```

---

### CostOfStoringIdentity

Data breach comparison section.

**File:** `src/components/sections/CostOfStoringIdentity.tsx`

**Features:**
- Settlement list
- Comparison table (Ashley Madison vs V.A.I.)
- Killer line + CTA
- User footnote

**Example:**
```tsx
<CostOfStoringIdentity />
```

---

### Ecosystem

Partner platform grid.

**File:** `src/components/sections/Ecosystem.tsx`

**Features:**
- "Already have V.A.I.?" card
- 6 platform cards in grid
- Status badges (Flagship, Coming Soon, etc.)

**Example:**
```tsx
<Ecosystem />
```

---

### ForPlatforms

Integration application form.

**File:** `src/components/sections/ForPlatforms.tsx`

**Features:**
- Form with validation
- Business name, email, URL, platform type, message
- Submit → Success state
- Integration with application system

**Example:**
```tsx
<ForPlatforms />
```

---

### FAQPreview

FAQ preview with 4 questions.

**File:** `src/components/sections/FAQPreview.tsx`

**Features:**
- Accordion with 4 FAQ items
- "View All FAQ" link

**Example:**
```tsx
<FAQPreview />
```

---

## Page Components

Located in `src/pages/`

All pages follow the same structure:
```tsx
export function PageName() {
  useEffect(() => {
    initializeTheme();  // Initialize theme on mount
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Nav />
      <main className="pt-24">
        {/* Page content */}
      </main>
      <Footer />
    </div>
  );
}
```

### FAQPage

Full FAQ page with all questions.

**File:** `src/pages/FAQPage.tsx`

**Route:** `/faq`

---

### APIPage

API integration documentation page.

**File:** `src/pages/APIPage.tsx`

**Route:** `/api`

**Features:**
- Integration features grid
- Quick start steps
- Application form (via `ForPlatforms` component)

---

### VAIPage

V.A.I. product details page.

**File:** `src/pages/VAIPage.tsx`

**Route:** `/vai`

**Features:**
- Flow diagram
- What's included list
- Pricing card ($99 + $25/year)

---

### RVIPage

R.V.I. coming soon page.

**File:** `src/pages/RVIPage.tsx`

**Route:** `/rvi`

**Features:**
- "COMING 2026" badge
- Description card
- Waitlist CTA

---

### BVIPage

B.V.I. coming soon page.

**File:** `src/pages/BVIPage.tsx`

**Route:** `/bvi`

**Features:**
- "COMING 2026" badge
- Description card
- Waitlist CTA

---

### BlogPage

Blog placeholder page.

**File:** `src/pages/BlogPage.tsx`

**Route:** `/blog`

**Features:**
- Grid of 3 placeholder posts
- Coming soon dates

---

## Custom Hooks

### useTheme

Theme management hook.

**File:** `src/hooks/useTheme.ts`

**Returns:**
```typescript
interface UseThemeReturn {
  theme: Theme;              // Current theme ('light' | 'dark')
  toggleTheme: () => void;   // Toggle between themes
  setTheme: (theme: Theme) => void;  // Set specific theme
  isDark: boolean;           // Is dark mode active
}
```

**Example:**
```tsx
function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current: {theme}
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}
```

---

## Utilities

### Theme Utilities

**File:** `src/lib/theme.ts`

**Functions:**
- `getInitialTheme()` - Get theme from localStorage or system preference
- `setTheme(theme)` - Apply theme and save to localStorage
- `toggleTheme()` - Toggle between light/dark
- `initializeTheme()` - Initialize theme on page load

**Example:**
```tsx
import { initializeTheme } from '../lib/theme';

useEffect(() => {
  initializeTheme();
}, []);
```

---

### Constants

**File:** `src/lib/constants.ts`

**Exports:**
- `NAV_LINKS` - Navigation menu items
- `EXTERNAL_LINKS` - External URLs (forum, app, vairify)
- `TRUST_BADGES` - Trust badge data
- `FLOW_STEPS` - 5-step verification flow
- `BREACH_DATA` - Data breach settlements
- `ASHLEY_MADISON_STORED/RESULTS` - Comparison data
- `VAI_STORED/RESULTS` - V.A.I. comparison data
- `PARTNER_PLATFORMS` - Partner platform cards
- `FAQ_PREVIEW` - Preview FAQ items (4)
- `FAQ_FULL` - Full FAQ items (12)
- `COPY` - All static copy/text

**Example:**
```tsx
import { COPY, FLOW_STEPS } from '../lib/constants';

<h1>{COPY.heroHeadline}</h1>
<FlowDiagram steps={FLOW_STEPS} />
```

---

For customization guide, see [CUSTOMIZATION.md](./CUSTOMIZATION.md).
For development guide, see [DEVELOPMENT.md](./DEVELOPMENT.md).
