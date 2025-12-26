import { useEffect } from 'react';
import { Code, Zap, Shield } from 'lucide-react';
import { initializeTheme } from '../lib/theme';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { ForPlatforms } from '../components/sections/ForPlatforms';

const features = [
  {
    icon: Zap,
    title: 'Quick Integration',
    description: 'Get up and running in under an hour with our simple REST API.',
  },
  {
    icon: Shield,
    title: 'Zero Data Liability',
    description: 'You never store identity data. We handle verification, you get results.',
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Comprehensive documentation, SDKs, and sandbox environment.',
  },
];

export function APIPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
              Integrate V.A.I. in Minutes
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] mb-2">
              Free forever. Zero data liability.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {features.map((feature) => (
              <Card key={feature.title} padding="lg" className="text-center">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Quick Start */}
          <div className="max-w-2xl mx-auto">
            <Card padding="lg">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-6">
                Quick Start
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text)]">Apply for Access</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Fill out the form below. We'll review and onboard you within 48 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text)]">Get Your API Key</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Receive your API credentials and access to the sandbox environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text)]">Start Verifying</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Integrate the API, test in sandbox, then go live.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* Application Form */}
        <ForPlatforms />
      </main>

      <Footer />
    </div>
  );
}
