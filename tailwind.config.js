/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand
        'cp-blue': '#3B82F6',
        'cp-teal': '#00d4aa',
        'cp-purple': '#8B5CF6',

        // Dark Theme
        'cp-dark': '#0f0f1a',
        'cp-dark-card': '#1a1a2e',
        'cp-dark-border': '#2a2a4e',

        // Danger/Warning
        'cp-red': '#ef4444',

        // Text
        'cp-text': '#1a1a2e',
        'cp-text-secondary': '#64748b',
        'cp-text-muted': '#94a3b8',
        'cp-text-gray': '#374151',

        // Backgrounds
        'cp-bg-alt': '#f8fafc',
        'cp-bg-card': '#f1f5f9',
        'cp-bg-good': '#f0fdf9',

        // Borders
        'cp-border': '#e2e8f0',
        'cp-border-light': '#e5e7eb',

        // Badges
        'cp-badge-yellow-bg': '#fef3c7',
        'cp-badge-yellow-text': '#92400e',
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // Exact sizes from mockup
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '16': '16px',
        '17': '17px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '42': '42px',
        '52': '52px',
        '64': '64px',
        '80': '80px',
      },
      boxShadow: {
        'trust': '0 2px 8px rgba(0,0,0,0.08)',
        'card': '0 4px 12px rgba(0,0,0,0.1)',
        'card-md': '0 4px 16px rgba(0,0,0,0.08)',
        'card-lg': '0 8px 24px rgba(0,0,0,0.3)',
        'video': '0 8px 30px rgba(0,0,0,0.1)',
        'hero': '0 25px 60px -12px rgba(0,0,0,0.25)',
        'teal-glow': '0 8px 30px rgba(0, 212, 170, 0.4)',
        'teal-glow-sm': '0 8px 24px rgba(0, 212, 170, 0.35)',
        'teal-glow-lg': '0 8px 32px rgba(0, 212, 170, 0.25)',
        'form': '0 4px 20px rgba(0,0,0,0.08)',
        'top10': '0 2px 8px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        '6': '6px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
      },
      spacing: {
        '18': '18px',
        '22': '22px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '80': '80px',
        '100': '100px',
      },
      maxWidth: {
        'content': '1200px',
        'form': '480px',
        'video': '900px',
        'top10': '1000px',
        'partners': '900px',
        'proof': '600px',
        'vai-desc': '500px',
        'headline': '850px',
        'trust': '360px',
      },
      lineHeight: {
        'tight': '1.05',
        'snug': '1.2',
        'normal': '1.4',
        'relaxed': '1.5',
        'loose': '1.6',
        'extra': '1.7',
      },
      letterSpacing: {
        'wide': '1px',
        'wider': '2px',
        'half': '0.5px',
      },
    },
  },
  plugins: [],
}
