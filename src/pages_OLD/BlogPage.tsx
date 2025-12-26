import { useEffect } from 'react';
import { initializeTheme } from '../lib/theme';
import { Nav } from '../components/layout/Nav';
import { Footer } from '../components/layout/Footer';
import { Section, SectionHeader } from '../components/ui/Section';
import { Card } from '../components/ui/Card';

const placeholderPosts = [
  {
    id: '1',
    title: 'Why Zero-Knowledge Architecture Matters',
    excerpt: 'Understanding how ChainPass protects your identity while proving you exist.',
    date: 'Coming Soon',
  },
  {
    id: '2',
    title: 'V.A.I. vs Traditional KYC',
    excerpt: 'A comparison of identity verification approaches and why zero-knowledge wins.',
    date: 'Coming Soon',
  },
  {
    id: '3',
    title: 'The Paradox of Privacy',
    excerpt: 'How to become anonymous by verifying your identity once.',
    date: 'Coming Soon',
  },
];

export function BlogPage() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Nav />

      <main className="pt-24">
        <Section>
          <SectionHeader
            title="Blog"
            subtitle="Insights on identity, privacy, and building trust online."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {placeholderPosts.map((post) => (
              <Card key={post.id} hover padding="lg">
                <div className="aspect-video bg-[var(--color-badge-bg)] rounded-lg mb-4" />
                <p className="text-sm text-[var(--color-text-muted)] mb-2">
                  {post.date}
                </p>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {post.excerpt}
                </p>
              </Card>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
