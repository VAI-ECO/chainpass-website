import type { TrustBadge } from '../../types';

interface TrustBadgeRowProps {
  badges: TrustBadge[];
  className?: string;
}

export function TrustBadgeRow({ badges, className = '' }: TrustBadgeRowProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-6 md:gap-8 ${className}`}>
      {badges.map((badge) => (
        <div
          key={badge.id}
          className="trust-badge"
          title={badge.name}
        >
          <img
            src={badge.src}
            alt={badge.alt}
            className="h-8 md:h-10 w-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

// Placeholder version when badges aren't loaded yet
export function TrustBadgePlaceholders({ count = 9 }: { count?: number }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="h-8 md:h-10 w-20 md:w-24 bg-[var(--color-badge-bg)] rounded animate-pulse"
        />
      ))}
    </div>
  );
}
