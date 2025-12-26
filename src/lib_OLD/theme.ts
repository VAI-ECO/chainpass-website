import type { Theme } from '../types';

/**
 * Get the initial theme from localStorage or system preference
 */
export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  // Check localStorage first
  const stored = localStorage.getItem('chainpass-theme');
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }

  // Fall back to system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

/**
 * Apply theme to document and save to localStorage
 */
export function setTheme(theme: Theme): void {
  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  localStorage.setItem('chainpass-theme', theme);
}

/**
 * Toggle between light and dark theme
 */
export function toggleTheme(): Theme {
  const isDark = document.documentElement.classList.contains('dark');
  const newTheme: Theme = isDark ? 'light' : 'dark';
  setTheme(newTheme);
  return newTheme;
}

/**
 * Initialize theme on page load
 */
export function initializeTheme(): Theme {
  const theme = getInitialTheme();
  setTheme(theme);
  return theme;
}
