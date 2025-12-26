import { ArrowRight, ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Card, HighlightCard } from '../ui/Card';
import { StatusBadge } from '../ui/Badge';
import { COPY, PARTNER_PLATFORMS } from '../../lib/constants';
import type { PlatformCard } from '../../types';

function PlatformCardComponent({ platform }: { platform: PlatformCard }) {
  const isIntegrate = platform.status === 'integrate';
  const isFlagship = platform.status === 'flagship';

  const CardWrapper = isFlagship ? HighlightCard : Card;

  return (
    <CardWrapper hover={!isIntegrate} padding="lg" className="relative flex flex-col h-full">
      {/* Status Badge */}
      {isFlagship && (
        <div className="absolute -top-3 left-6">
          <StatusBadge status="flagship" />
        </div>
      )}

      {/* Logo Placeholder */}
      <div className="w-12 h-12 bg-[var(--color-badge-bg)] rounded-lg flex items-center justify-center mb-4">
        <span className="text-xs text-[var(--color-text-muted)]">Logo</span>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">
        {platform.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">
        {platform.description}
      </p>

      {/* Tags */}
      {platform.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {platform.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-[var(--color-badge-bg)] text-[var(--color-text-secondary)] rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Status Label */}
      {platform.statusLabel && (
        <div className={`mb-4 ${isFlagship ? 'text-[var(--color-success)]' : 'text-[var(--color-text-muted)]'}`}>
          <span className="text-sm font-medium">
            {isFlagship && '🟢 '}{platform.statusLabel}
          </span>
        </div>
      )}

      {/* Spacer */}
      <div className="flex-grow" />

      {/* CTA */}
      {isIntegrate ? (
        <Button
          as="a"
          href={platform.ctaUrl}
          variant="primary"
          fullWidth
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          {platform.ctaText}
        </Button>
      ) : (
        <Button
          as="a"
          href={platform.ctaUrl}
          isExternal={platform.isExternal}
          variant={isFlagship ? 'primary' : 'outline'}
          fullWidth
          rightIcon={platform.isExternal ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        >
          {platform.ctaText}
        </Button>
      )}
    </CardWrapper>
  );
}

export function Ecosystem() {
  return (
    <Section>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
          {COPY.ecosystemTitle}
        </h2>
        <p className="text-lg text-[var(--color-text-secondary)]">
          {COPY.ecosystemSubtitle}
        </p>
      </div>

      {/* Already Have VAI Card */}
      <div className="max-w-2xl mx-auto mb-12">
        <Card padding="lg" className="text-center">
          <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
            {COPY.alreadyHaveTitle}
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-6">
            {COPY.alreadyHaveText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="a" href="#" variant="primary">
              I Have a V.A.I.
            </Button>
            <Button
              as="a"
              href="/#how-it-works"
              variant="outline"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Learn How It Works
            </Button>
          </div>
        </Card>
      </div>

      {/* Platform Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PARTNER_PLATFORMS.map((platform) => (
          <PlatformCardComponent key={platform.id} platform={platform} />
        ))}
      </div>
    </Section>
  );
}
