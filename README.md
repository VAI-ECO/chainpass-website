# ChainPass - Verified Anonymous Identity

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)

> Zero-knowledge identity verification. 100% Anonymous. 100% Accountable. GUARANTEED.

This is the official splash page and marketing site for ChainPass V.A.I. (Verified Anonymous Identity), featuring a modern React + TypeScript + Tailwind CSS stack with full PWA support.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to see the site.

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Tech Stack](#-tech-stack)
- [Development](#-development)
- [Deployment](#-deployment)
- [Documentation](#-documentation)
- [License](#-license)

## ✨ Features

### **Core Features**
- ✅ **7 Major Sections** on home page (Hero, Introducing V.A.I., How It Works, Cost of Storing Identity, Ecosystem, For Platforms, FAQ Preview)
- ✅ **6 Additional Pages** (FAQ, API, V.A.I., R.V.I., B.V.I., Blog)
- ✅ **Light/Dark Mode** with system preference detection and localStorage persistence
- ✅ **Mobile Responsive** design with mobile-first approach
- ✅ **PWA Ready** - Installable on mobile and desktop
- ✅ **Service Worker** for offline caching
- ✅ **Full Routing** with React Router v6
- ✅ **TypeScript** throughout for type safety
- ✅ **Zero Build Errors**

### **Interactive Components**
- Theme toggle (Sun/Moon icons)
- Mobile hamburger menu
- FAQ accordion (expand/collapse)
- Integration application form with validation
- Platform ecosystem cards
- 5-step verification flow diagram
- Data breach comparison table

### **Design System**
- **Fonts**: Inter (body), JetBrains Mono (code)
- **Colors**: CSS variables for seamless theming
- **Components**: 9 reusable UI components
- **Animations**: Smooth transitions and hover effects

## 📂 Project Structure

```
chainpass-splash/
├── public/
│   ├── icons/              # PWA icons (placeholder - add actual icons)
│   ├── manifest.json       # PWA manifest
│   └── sw.js              # Service worker
├── src/
│   ├── assets/
│   │   ├── badges/        # Trust badge SVGs (placeholder)
│   │   ├── icons/         # Custom icons
│   │   └── logos/         # Partner logos (placeholder)
│   ├── components/
│   │   ├── layout/        # Nav, Footer, ThemeToggle
│   │   ├── sections/      # Home page sections
│   │   └── ui/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   │   └── useTheme.ts   # Theme management hook
│   ├── lib/               # Utilities and constants
│   │   ├── constants.ts  # All static data and copy
│   │   └── theme.ts      # Theme utility functions
│   ├── pages/             # Additional pages (FAQ, API, etc.)
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts      # All interfaces and types
│   ├── App.tsx            # Router and route configuration
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styles + CSS variables
├── index.html             # HTML template with PWA meta tags
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 📄 Pages

### **Home Page** (`/`)
Main landing page with 7 sections:
1. **Hero** - Headline, CTAs, trust badges
2. **Introducing V.A.I.** - Dual-audience split (Users vs Platforms)
3. **How It Works** - Video + 5-step flow diagram
4. **Cost of Storing Identity** - Data breach comparison (Ashley Madison case study)
5. **Ecosystem** - Partner platform grid (6 cards)
6. **For Platforms** - Integration application form
7. **FAQ Preview** - Accordion with 4 questions

### **Additional Pages**
- **`/faq`** - Full FAQ page (12 questions)
- **`/api`** - API integration documentation + application form
- **`/vai`** - V.A.I. product details, pricing, flow diagram
- **`/rvi`** - R.V.I. coming soon (2026)
- **`/bvi`** - B.V.I. coming soon (2026)
- **`/blog`** - Blog placeholder (3 posts)

## 🛠 Tech Stack

### **Core**
- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Vite 7** - Build tool and dev server
- **React Router 6** - Client-side routing

### **Styling**
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **CSS Variables** - Dynamic theming

### **Tools**
- **Lucide React** - Icon library
- **ESLint** - Code linting
- **PWA** - Progressive Web App capabilities

## 🔧 Development

### **Prerequisites**
- Node.js 18+
- npm 9+

### **Installation**
```bash
npm install
```

### **Development Server**
```bash
npm run dev
```
Opens at `http://localhost:5173` with hot module replacement.

### **Build**
```bash
npm run build
```
Outputs to `dist/` directory.

### **Type Checking**
```bash
npx tsc --noEmit
```

### **Preview Production Build**
```bash
npm run preview
```

## 🎨 Customization

### **Update Content**
All static content lives in `src/lib/constants.ts`:
- Hero copy
- Section titles and taglines
- FAQ questions and answers
- Partner platform data
- Data breach statistics
- Footer links

### **Update Styles**
Tailwind configuration in `tailwind.config.js`:
- Color palette (ChainPass design tokens)
- Typography (fonts, sizes)
- Spacing, breakpoints, animations

CSS variables in `src/index.css`:
- Light mode colors
- Dark mode colors (`.dark` class)
- Custom utility classes

### **Add Components**
Place new components in:
- `src/components/ui/` - Reusable UI components
- `src/components/sections/` - Page sections
- `src/components/layout/` - Layout components

### **Add Pages**
1. Create page in `src/pages/YourPage.tsx`
2. Export from `src/pages/index.ts`
3. Add route in `src/App.tsx`

## 🚀 Deployment

### **Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

### **Netlify**
```bash
npm run build
# Upload dist/ folder to Netlify
```

### **Manual**
```bash
npm run build
# Upload dist/ folder to any static host
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📚 Documentation

- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development guide and best practices
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment instructions for various platforms
- **[COMPONENTS.md](./COMPONENTS.md)** - Component API reference
- **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** - How to customize content and styling

## 📦 Build Information

- **Bundle Size**: ~282 KB (86 KB gzipped)
- **TypeScript**: Strict mode enabled
- **Browser Support**: Modern browsers (ES2020+)
- **PWA Score**: 100/100 (when icons added)

## 🎯 Next Steps

### **Required Before Launch**
1. Replace trust badge placeholders in `src/assets/badges/` with actual SVG logos
2. Add ChainPass logo (replace "CP" placeholder)
3. Replace hero image placeholder
4. Add real video to VideoPlaceholder component
5. Generate PWA icons (72px, 96px, 128px, 144px, 152px, 192px, 384px, 512px)
6. Connect integration form to backend/email service
7. Set up analytics (Google Analytics, Plausible, etc.)
8. Configure custom domain
9. Test PWA installation on mobile devices

### **Optional Enhancements**
- Add more FAQ questions
- Create actual blog posts
- Add partner logos to ecosystem cards
- Implement search functionality
- Add testimonials section
- Create video tutorial for V.A.I. creation
- Add live chat support

## 🐛 Known Issues

None at this time. Build is clean with zero errors.

## 🤝 Contributing

This is a private commercial project. For internal development guidelines, see [DEVELOPMENT.md](./DEVELOPMENT.md).

## 📝 License

© 2024 ChainPass Inc. All rights reserved.

ChainPass V.A.I.™ is Patent Pending.
ChainPass Inc. is a Delaware C-Corporation.

---

**Built with ❤️ by the ChainPass team**

For questions or support, visit [https://chainpass.id](https://chainpass.id) or contact [support@chainpass.id](mailto:support@chainpass.id).
