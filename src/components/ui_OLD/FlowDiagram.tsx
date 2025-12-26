import { Check, ArrowRight } from 'lucide-react';
import type { FlowStep } from '../../types';

interface FlowStepCardProps {
  step: FlowStep;
  isLast: boolean;
}

function FlowStepCard({ step, isLast }: FlowStepCardProps) {
  return (
    <div className="flex items-center">
      {/* Step Card */}
      <div
        className={`
          flex flex-col items-center justify-center
          w-28 h-28 md:w-32 md:h-32
          rounded-xl
          border-2
          ${step.isHighlighted
            ? 'step-highlight'
            : 'bg-[var(--color-surface)] border-[var(--color-border)]'
          }
        `}
      >
        {/* Step Number */}
        <div className={`
          text-2xl font-bold mb-1
          ${step.isHighlighted ? 'text-[var(--color-success)]' : 'text-[var(--color-text)]'}
        `}>
          {step.number}
        </div>

        {/* Title */}
        <div className={`
          text-xs md:text-sm font-semibold text-center leading-tight
          ${step.isHighlighted ? 'text-[var(--color-success)]' : 'text-[var(--color-text)]'}
        `}>
          {step.title}
          {step.subtitle && (
            <>
              <br />
              <span className="font-normal">{step.subtitle}</span>
            </>
          )}
        </div>
      </div>

      {/* Arrow */}
      {!isLast && (
        <ArrowRight className="w-6 h-6 mx-2 text-[var(--color-text-muted)] flex-shrink-0" />
      )}
    </div>
  );
}

interface FlowDiagramProps {
  steps: FlowStep[];
  className?: string;
}

export function FlowDiagram({ steps, className = '' }: FlowDiagramProps) {
  return (
    <div className={className}>
      {/* Flow Steps - Horizontal on desktop, wrap on mobile */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
        {steps.map((step, index) => (
          <FlowStepCard
            key={step.number}
            step={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>

      {/* Step Descriptions */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm">
        {steps.map((step) => (
          <div key={step.number} className="space-y-1">
            {step.checks ? (
              <div className="space-y-1">
                {step.checks.map((check) => (
                  <div key={check} className="flex items-center justify-center gap-1 text-[var(--color-success)]">
                    <Check className="w-4 h-4" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[var(--color-text-secondary)]">
                {step.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
