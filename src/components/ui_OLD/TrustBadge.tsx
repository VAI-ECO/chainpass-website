interface TrustBadgeProps {
  name: string;
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  grayscale?: boolean;
}

export function TrustBadge({
  name,
  src,
  alt,
  size = 'md',
  grayscale = true
}: TrustBadgeProps) {

  const sizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };

  const grayscaleClass = grayscale
    ? 'grayscale hover:grayscale-0 transition-all duration-300'
    : '';

  return (
    <div className="flex items-center justify-center" title={name}>
      <img
        src={src}
        alt={alt || name}
        className={`${sizes[size]} w-auto object-contain ${grayscaleClass}`}
      />
    </div>
  );
}

interface TrustBadgeRowProps {
  badges: Array<{ name: string; src: string; alt?: string }>;
  size?: 'sm' | 'md' | 'lg';
  grayscale?: boolean;
}

export function TrustBadgeRow({ badges, size = 'md', grayscale = true }: TrustBadgeRowProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
      {badges.map((badge) => (
        <TrustBadge
          key={badge.name}
          name={badge.name}
          src={badge.src}
          alt={badge.alt}
          size={size}
          grayscale={grayscale}
        />
      ))}
    </div>
  );
}
