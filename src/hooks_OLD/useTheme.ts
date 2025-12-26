import { useState, useEffect, useCallback } from 'react';
import type { Theme } from '../types';
import { initializeTheme, toggleTheme as toggleThemeFn, setTheme } from '../lib/theme';

interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>('light');

  // Initialize theme on mount
  useEffect(() => {
    const initialTheme = initializeTheme();
    setThemeState(initialTheme);
  }, []);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't set a preference
      const stored = localStorage.getItem('chainpass-theme');
      if (!stored) {
        const newTheme: Theme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        setThemeState(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = toggleThemeFn();
    setThemeState(newTheme);
  }, []);

  const handleSetTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    setThemeState(newTheme);
  }, []);

  return {
    theme,
    toggleTheme,
    setTheme: handleSetTheme,
    isDark: theme === 'dark',
  };
}
