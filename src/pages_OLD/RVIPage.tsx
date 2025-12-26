import { useEffect } from 'react';
import { initializeTheme } from '../lib/theme';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export function RVIPage() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Nav />

      <main className="pt-24">
        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              COMING 2026
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
              Real Verified Identity
            </h1>

            <p className="text-xl text-[var(--color-text-secondary)] mb-8">
              Built for service platforms where customers hire reputation.
            </p>

            <Card padding="lg" className="text-left mb-8">
              <p className="text-[var(--color-text)] mb-4">
                R.V.I. guarantees the person walking through your door is the person
                that earned that reputation.
              </p>
              <p className="text-lg font-semibold text-[var(--color-primary)]">
                100% Verified. 100% Accurate. 0% Fraud.
              </p>
            </Card>

            <Button variant="primary" size="lg">
              JOIN WAITLIST
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
