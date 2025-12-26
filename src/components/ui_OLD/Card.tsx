import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'dark';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Card({
  children,
  variant = 'default',
  hover = false,
  padding = 'md',
  className = ''
}: CardProps) {

  const variants = {
    default: 'bg-white border border-chainpass-border shadow-lg',
    elevated: 'bg-white shadow-lg',
    bordered: 'bg-white border-2 border-dashed border-chainpass-border',
    dark: 'bg-chainpass-dark-card text-white border border-gray-700',
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClass = hover
    ? 'hover:shadow-lg hover:border-chainpass-primary transition-all duration-300 cursor-pointer'
    : '';

  return (
    <div className={`rounded-xl ${variants[variant]} ${paddings[padding]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}

// Elevated card variant
export function ElevatedCard({
  children,
  className = '',
  hover = false,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={`
        bg-[var(--color-elevated)]
        border border-[var(--color-border)]
        rounded-xl
        shadow-lg
        ${paddingStyles[padding]}
        ${hover ? 'card-hover cursor-pointer' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
}

// Highlighted card (for important callouts)
export function HighlightCard({
  children,
  className = '',
  padding = 'md',
}: Omit<CardProps, 'hover'>) {
  return (
    <div
      className={`
        bg-[var(--color-surface)]
        border-2 border-[var(--color-primary)]
        rounded-xl
        ${paddingStyles[padding]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
}

// User footnote card (for the "FOR USERS" message)
export function FootnoteCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        bg-[var(--color-surface)]
        border border-[var(--color-border)]
        rounded-lg
        p-6
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
}
