import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ComparisonTable } from '../ui/ComparisonTable';
import { FootnoteCard } from '../ui/Card';
import {
  COPY,
  BREACH_DATA,
  ASHLEY_MADISON_STORED,
  ASHLEY_MADISON_RESULTS,
  VAI_STORED,
  VAI_RESULTS,
} from '../../lib/constants';

export function CostOfStoringIdentity() {
  return (
    <Section background="surface">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
          {COPY.costTitle}
        </h2>
      </div>

      {/* Settlement List */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="space-y-3">
          {BREACH_DATA.map((breach) => (
            <div
              key={breach.company}
              className="flex justify-between items-center py-2 border-b border-[var(--color-border)] border-dotted"
            >
              <span className="text-[var(--color-text)]">{breach.company}</span>
              <span className="text-[var(--color-text)] font-mono font-semibold">
                {breach.settlement}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtext */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-[var(--color-text-secondary)]">
          {COPY.costSubtext}
        </p>
      </div>

      {/* Comparison Table */}
      <div className="max-w-4xl mx-auto mb-12">
        <ComparisonTable
          leftTitle="WHAT THEY STORED"
          leftItems={ASHLEY_MADISON_STORED}
          leftResults={ASHLEY_MADISON_RESULTS}
          rightTitle="WHAT V.A.I. STORES"
          rightItems={VAI_STORED}
          rightResults={VAI_RESULTS}
        />
      </div>

      {/* Killer Line + CTA */}
      <div className="text-center mb-12">
        <p className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8">
          "{COPY.costKillerLine}"
        </p>
        <Button as="a" href="/api" variant="primary" size="lg">
          INTEGRATE V.A.I. — FREE
        </Button>
      </div>

      {/* User Footnote */}
      <div className="max-w-2xl mx-auto">
        <FootnoteCard>
          <p className="text-sm font-bold text-[var(--color-text)] uppercase tracking-wider mb-3">
            {COPY.userFootnoteTitle}
          </p>
          <p className="text-[var(--color-text)] font-semibold mb-2">
            {COPY.userFootnoteLine1}
          </p>
          <p className="text-[var(--color-text-secondary)] mb-1">
            {COPY.userFootnoteLine2}
          </p>
          <p className="text-[var(--color-text-secondary)] mb-1">
            {COPY.userFootnoteLine3}
          </p>
          <p className="text-[var(--color-text-secondary)] mt-3 italic">
            {COPY.userFootnoteLine4}
          </p>
        </FootnoteCard>
      </div>
    </Section>
  );
}
