import { useEffect } from 'react';
import { Check } from 'lucide-react';
import { initializeTheme } from '../lib/theme';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { PatentPendingBadge } from '../components/ui/Badge';
import { FlowDiagram } from '../components/ui/FlowDiagram';
import { FLOW_STEPS, EXTERNAL_LINKS } from '../lib/constants';

const included = [
  'KYC Verification (203 countries)',
  'Violent Offender Screening',
  'Law Enforcement Disclosure',
  'Verified Photo + Biometric Hash',
  'Unique 7-character V.A.I. Code',
  'Unlimited Platform Usage',
];

export function VAIPage() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Nav />

      <main className="pt-24">
        {/* Hero */}
        <Section>
          <div className="text-center mb-12">
            <PatentPendingBadge className="mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
              Verified Anonymous Identity
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              The first identity solution that guarantees 100% anonymity with 100% accountability.
            </p>
          </div>
        </Section>

        {/* How It Works */}
        <Section background="surface">
          <h2 className="text-2xl font-bold text-[var(--color-text)] text-center mb-8">
            How V.A.I. Works
          </h2>
          <FlowDiagram steps={FLOW_STEPS} />
        </Section>

        {/* What's Included */}
        <Section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--color-text)] text-center mb-8">
              What's Included
            </h2>

            <Card padding="lg">
              <div className="grid md:grid-cols-2 gap-4">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[var(--color-success)] flex-shrink-0" />
                    <span className="text-[var(--color-text)]">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {/* Pricing */}
        <Section background="surface">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8">
              Simple Pricing
            </h2>

            <Card padding="lg">
              <div className="mb-6">
                <div className="text-4xl font-bold text-[var(--color-text)] mb-2">
                  $99
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  Initial V.A.I. Creation
                </p>
              </div>

              <div className="mb-8 pb-6 border-b border-[var(--color-border)]">
                <div className="text-2xl font-bold text-[var(--color-text)] mb-2">
                  $25/year
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  Annual Renewal
                </p>
              </div>

              <p className="text-sm text-[var(--color-text-muted)] mb-6">
                3-5 minutes to complete. Use on unlimited platforms.
              </p>

              <Button
                as="a"
                href={EXTERNAL_LINKS.app}
                isExternal
                variant="primary"
                size="lg"
                fullWidth
              >
                CREATE YOUR V.A.I.
              </Button>
            </Card>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
