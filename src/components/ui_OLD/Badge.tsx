import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'patent' | 'flagship' | 'coming';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {

  const baseStyles = 'inline-flex items-center font-medium rounded-full';

  const variants = {
    default: 'bg-chainpass-card text-chainpass-text-muted border border-chainpass-border',
    primary: 'bg-chainpass-primary/10 text-chainpass-primary',
    secondary: 'bg-chainpass-secondary/10 text-chainpass-secondary',
    patent: 'bg-chainpass-primary text-white',
    flagship: 'bg-chainpass-secondary text-white',
    coming: 'bg-amber-100 text-amber-800 border border-amber-300',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}

// Special badge for "PATENT PENDING"
export function PatentPendingBadge({ className = '' }: { className?: string }) {
  return (
    <Badge variant="primary" size="md" className={`uppercase tracking-wider ${className}`}>
      V.A.I. — Patent Pending
    </Badge>
  );
}

// Special badge for platform status
export function StatusBadge({
  status,
  className = ''
}: {
  status: 'flagship' | 'founding' | 'coming' | 'integrate' | 'live';
  className?: string;
}) {
  const statusConfig = {
    flagship: { label: 'FLAGSHIP PARTNER', variant: 'primary' as const },
    live: { label: 'LIVE', variant: 'success' as const },
    founding: { label: 'FOUNDING PARTNER', variant: 'default' as const },
    coming: { label: 'COMING SOON', variant: 'outline' as const },
    integrate: { label: '', variant: 'default' as const },
  };

  const config = statusConfig[status];

  if (!config.label) return null;

  return (
    <Badge variant={config.variant} size="sm" className={className}>
      {config.label}
    </Badge>
  );
}
