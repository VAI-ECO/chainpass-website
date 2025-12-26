import { Play } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  subtitle?: string;
  duration?: string;
  className?: string;
  onClick?: () => void;
}

export function VideoPlaceholder({
  title = "See the moment your identity becomes anonymous.",
  subtitle,
  duration = "1:30",
  className = '',
  onClick,
}: VideoPlaceholderProps) {
  return (
    <div
      className={`
        relative
        bg-[var(--color-surface)]
        border-2 border-[var(--color-border)]
        rounded-2xl
        aspect-video
        flex flex-col items-center justify-center
        cursor-pointer
        group
        overflow-hidden
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      {/* Play button */}
      <div className="w-20 h-20 rounded-full bg-[var(--color-cta)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
        <Play className="w-8 h-8 text-white ml-1" fill="white" />
      </div>

      {/* Title */}
      <p className="text-lg md:text-xl font-medium text-[var(--color-text)] text-center px-4 mb-2">
        {title}
      </p>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm text-[var(--color-text-secondary)] text-center px-4 mb-2">
          {subtitle}
        </p>
      )}

      {/* Duration */}
      <span className="text-sm text-[var(--color-text-muted)]">
        ({duration})
      </span>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
    </div>
  );
}
