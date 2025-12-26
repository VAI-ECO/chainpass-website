import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'gradient';
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Section({
  children,
  id,
  background = 'white',
  paddingY = 'lg',
  className = ''
}: SectionProps) {

  const backgrounds = {
    white: 'bg-white',
    light: 'bg-chainpass-card',
    dark: 'bg-chainpass-dark text-white',
    gradient: 'bg-gradient-to-br from-chainpass-dark to-chainpass-dark-card text-white',
  };

  const paddings = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-28',
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${paddings[paddingY]} ${className}`}
    >
      {children}
    </section>
  );
}

// Section header component
export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = '',
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
