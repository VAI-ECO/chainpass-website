import { useEffect } from 'react';
import { initializeTheme } from '../lib/theme';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
import { Section, SectionHeader } from '../components/ui/Section';
import { Accordion } from '../components/ui/Accordion';
import { FAQ_FULL } from '../lib/constants';

export function FAQPage() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Nav />

      <main className="pt-24">
        <Section>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about ChainPass V.A.I."
          />

          <div className="max-w-3xl mx-auto">
            <Accordion items={FAQ_FULL} />
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
