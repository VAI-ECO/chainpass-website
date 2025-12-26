import { X, Check } from 'lucide-react';

interface ComparisonTableProps {
  leftTitle: string;
  leftItems: string[];
  leftResults: string[];
  rightTitle: string;
  rightItems: string[];
  rightResults: string[];
  className?: string;
}

export function ComparisonTable({
  leftTitle,
  leftItems,
  leftResults,
  rightTitle,
  rightItems,
  rightResults,
  className = '',
}: ComparisonTableProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-6 ${className}`}>
      {/* Left Column - Negative (What they stored) */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
        <h4 className="text-lg font-bold text-[var(--color-text)] mb-4 pb-3 border-b border-[var(--color-border)]">
          {leftTitle}
        </h4>

        {/* Items */}
        <div className="space-y-2 mb-6">
          {leftItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-[var(--color-danger)]">
              <X className="w-5 h-5 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="pt-4 border-t border-[var(--color-border)] space-y-2">
          {leftResults.map((result, index) => (
            <p key={index} className="text-[var(--color-text-secondary)]">
              {result}
            </p>
          ))}
        </div>
      </div>

      {/* Right Column - Positive (What V.A.I. stores) */}
      <div className="bg-[var(--color-surface)] border-2 border-[var(--color-success)] rounded-xl p-6">
        <h4 className="text-lg font-bold text-[var(--color-text)] mb-4 pb-3 border-b border-[var(--color-border)]">
          {rightTitle}
        </h4>

        {/* Items */}
        <div className="space-y-2 mb-6">
          {rightItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-[var(--color-success)]">
              <Check className="w-5 h-5 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
          <p className="text-[var(--color-text-secondary)] font-medium mt-4">
            That's it.
          </p>
        </div>

        {/* Results */}
        <div className="pt-4 border-t border-[var(--color-border)] space-y-2">
          {rightResults.map((result, index) => (
            <p key={index} className="text-[var(--color-success)] font-medium">
              {result}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
