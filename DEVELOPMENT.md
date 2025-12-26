# Development Guide

This guide covers development workflows, best practices, and conventions for the ChainPass project.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Code Conventions](#code-conventions)
- [Component Guidelines](#component-guidelines)
- [Styling Guidelines](#styling-guidelines)
- [TypeScript Guidelines](#typescript-guidelines)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org/))
- npm 9+ (comes with Node.js)
- VS Code (recommended) with these extensions:
  - ESLint
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd chainpass-splash

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup
No environment variables required for basic development. The app runs entirely on the frontend.

## Project Structure

### Directory Organization
```
src/
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   ├── sections/    # Page-specific sections
│   └── layout/      # Layout components (Nav, Footer)
├── pages/           # Route pages
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
├── types/           # TypeScript type definitions
└── assets/          # Static assets
```

### File Naming Conventions
- **Components**: PascalCase (e.g., `Button.tsx`, `Nav.tsx`)
- **Utilities**: camelCase (e.g., `theme.ts`, `constants.ts`)
- **Types**: camelCase files, PascalCase interfaces (e.g., `index.ts` with `PlatformCard` interface)
- **Pages**: PascalCase with `Page` suffix (e.g., `FAQPage.tsx`)

## Development Workflow

### Running the Dev Server
```bash
npm run dev
```
- Opens at http://localhost:5173
- Hot module replacement (HMR) enabled
- Auto-reloads on file changes

### Building for Production
```bash
npm run build
```
- Outputs to `dist/` directory
- Minified and optimized
- TypeScript type checking included

### Previewing Production Build
```bash
npm run preview
```
- Serves the production build locally
- Tests production configuration

### Type Checking
```bash
npx tsc --noEmit
```
- Checks TypeScript types without emitting files
- Run this before committing

## Code Conventions

### Import Order
1. React imports
2. Third-party libraries
3. Internal components
4. Internal utilities
5. Types
6. Styles

Example:
```tsx
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { COPY } from '../../lib/constants';
import type { PlatformCard } from '../../types';
```

### Component Structure
```tsx
// 1. Imports
import { ... } from 'react';

// 2. Types (if component-specific)
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

// 3. Component
export function MyComponent({ title, onClick }: MyComponentProps) {
  // 3a. Hooks
  const [isOpen, setIsOpen] = useState(false);

  // 3b. Event handlers
  const handleClick = () => {
    onClick?.();
  };

  // 3c. Render
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
```

### Function Components
- Use function declarations, not arrow functions
- Export directly: `export function ComponentName() {}`
- Use TypeScript for props

```tsx
// ✅ Good
export function Button({ text, onClick }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}

// ❌ Avoid
export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
```

## Component Guidelines

### Creating New Components

#### UI Components (Reusable)
Place in `src/components/ui/`:
```tsx
// src/components/ui/MyComponent.tsx
interface MyComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function MyComponent({ variant = 'primary', size = 'md', children }: MyComponentProps) {
  return <div className={...}>{children}</div>;
}
```

#### Section Components (Page-specific)
Place in `src/components/sections/`:
```tsx
// src/components/sections/MySection.tsx
export function MySection() {
  return (
    <Section>
      <SectionHeader title="..." subtitle="..." />
      {/* Section content */}
    </Section>
  );
}
```

#### Pages
Place in `src/pages/`:
```tsx
// src/pages/MyPage.tsx
import { useEffect } from 'react';
import { initializeTheme } from '../lib/theme';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';

export function MyPage() {
  useEffect(() => {
    initializeTheme();
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

### Component Patterns

#### Props Destructuring
Always destructure props in function signature:
```tsx
// ✅ Good
export function Button({ text, onClick }: ButtonProps) { ... }

// ❌ Avoid
export function Button(props: ButtonProps) { ... }
```

#### Optional Props
Use `?` for optional props and provide defaults:
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';  // Optional
  onClick?: () => void;                // Optional
  text: string;                        // Required
}

export function Button({
  variant = 'primary',  // Default value
  onClick,
  text
}: ButtonProps) { ... }
```

#### Children Prop
Use `ReactNode` type for children:
```tsx
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}
```

## Styling Guidelines

### Tailwind CSS

#### Class Organization
Order classes logically:
1. Layout (flex, grid, position)
2. Sizing (w-, h-, p-, m-)
3. Typography (text-, font-)
4. Colors (bg-, text-, border-)
5. Effects (shadow-, opacity-, transition-)

```tsx
<div className="flex items-center gap-4 px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
```

#### CSS Variables
Use CSS variables for theme colors:
```tsx
// ✅ Good - Uses theme
<div className="bg-[var(--color-primary)]">

// ❌ Avoid - Hardcoded color
<div className="bg-blue-500">
```

#### Responsive Design
Mobile-first approach:
```tsx
<div className="text-sm md:text-base lg:text-lg">
```

#### Component-Specific Styles
For complex styling, use the pattern in `src/index.css`:
```css
.my-component {
  /* Custom styles */
}

html.dark .my-component {
  /* Dark mode overrides */
}
```

### Dark Mode

Theme colors automatically switch via CSS variables. To add dark mode support to custom components:

```tsx
// Use CSS variables
className="bg-[var(--color-surface)] text-[var(--color-text)]"

// Or use the .dark selector in CSS
```

## TypeScript Guidelines

### Type Definitions
All types live in `src/types/index.ts`:

```typescript
// Define interface
export interface PlatformCard {
  id: string;
  name: string;
  status: PlatformStatus;
}

// Define type alias
export type Theme = 'light' | 'dark';
```

### Component Props
Always define prop interfaces:
```tsx
interface MyComponentProps {
  title: string;
  count?: number;
  onSubmit: (data: FormData) => void;
}
```

### Event Handlers
Use proper React event types:
```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // ...
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // ...
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // ...
};
```

### Avoid `any`
Never use `any`. Use proper types or `unknown`:
```tsx
// ❌ Avoid
const data: any = fetchData();

// ✅ Good
const data: ApiResponse = fetchData();
```

## Testing

Currently, no automated tests are set up. For manual testing:

### Checklist Before Committing
- [ ] `npm run build` succeeds
- [ ] `npx tsc --noEmit` passes
- [ ] All pages load without errors
- [ ] Theme toggle works
- [ ] Mobile menu works
- [ ] Forms submit correctly
- [ ] Links navigate properly
- [ ] Dark mode displays correctly
- [ ] Mobile responsive (test at 375px, 768px, 1440px)

### Browser Testing
Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Troubleshooting

### Build Errors

#### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit

# Common fixes:
# - Add missing imports
# - Fix prop types
# - Check null/undefined handling
```

#### Tailwind Not Working
1. Check `tailwind.config.js` content paths
2. Ensure `@tailwind` directives in `src/index.css`
3. Restart dev server

#### Route Not Found
1. Check route added in `src/App.tsx`
2. Verify page component exported from `src/pages/index.ts`
3. Check import path

### Dev Server Issues

#### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

#### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### HMR Not Working
1. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
2. Restart dev server
3. Check browser console for errors

### Common Mistakes

#### Forgot to Initialize Theme
Every page needs:
```tsx
useEffect(() => {
  initializeTheme();
}, []);
```

#### Missing Export
Remember to export from index files:
```tsx
// src/pages/index.ts
export { MyPage } from './MyPage';
```

#### CSS Variable Not Working
Check if using correct format:
```tsx
// ✅ Correct
className="bg-[var(--color-primary)]"

// ❌ Wrong
className="bg-var(--color-primary)"
```

## Performance Tips

### Optimize Re-renders
- Use `React.memo()` for expensive components
- Memoize callbacks with `useCallback`
- Memoize values with `useMemo`

### Code Splitting
Routes are already code-split via React Router. For further optimization:
```tsx
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

### Image Optimization
- Use WebP format
- Provide multiple sizes
- Lazy load images below the fold

## Git Workflow

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code refactoring
- `docs/description` - Documentation updates

### Commit Messages
Follow conventional commits:
```
feat: add new platform card component
fix: resolve mobile menu z-index issue
refactor: extract form validation logic
docs: update deployment guide
```

### Before Pushing
```bash
# 1. Type check
npx tsc --noEmit

# 2. Build test
npm run build

# 3. Commit
git add .
git commit -m "feat: add feature description"

# 4. Push
git push origin branch-name
```

---

For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).
For component reference, see [COMPONENTS.md](./COMPONENTS.md).
