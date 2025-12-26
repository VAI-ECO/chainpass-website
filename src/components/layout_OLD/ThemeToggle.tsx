import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-lg
        bg-[var(--color-surface)]
        border border-[var(--color-border)]
        text-[var(--color-text-secondary)]
        hover:text-[var(--color-text)]
        hover:bg-[var(--color-elevated)]
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
