import { Section, Container, Button, Badge, TrustBadgeRow } from '../ui';
import { chainpassTrustBadges } from '../../lib/trustBadges';

export function Hero() {
  return (
    <Section id="hero" background="white" paddingY="xl">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN - Copy */}
          <div className="lg:col-span-7 space-y-8">

            {/* Patent Badge + V.A.I. Badge */}
            <div className="flex items-center gap-4">
              <img
                src="/assets/badge-patent-pending.svg"
                alt="Patent Pending"
                className="h-12 w-auto"
              />
              <Badge variant="patent">V.A.I. — PATENT PENDING</Badge>
            </div>

            {/* Hook */}
            <div className="space-y-2">
              <p className="text-lg text-chainpass-text-muted">
                Ashley Madison stored IDs.
              </p>
              <p className="text-lg text-chainpass-text-muted">
                We saw how that ended.
              </p>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-chainpass-text leading-tight">
                THE ID THAT WORKS EVERYWHERE<br />
                <span className="text-chainpass-primary">AND LIVES NOWHERE.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-chainpass-text-muted leading-relaxed">
                Prove you're real. Stay anonymous.<br />
                For platforms where privacy isn't optional.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-chainpass-text">2,847</div>
                <div className="text-sm text-chainpass-text-muted">V.A.I.s issued</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chainpass-text">5</div>
                <div className="text-sm text-chainpass-text-muted">Platforms live</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chainpass-secondary">$0</div>
                <div className="text-sm text-chainpass-text-muted">to integrate</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                GET YOUR V.A.I. — $99
              </Button>
              <Button variant="ghost" size="lg">
                FOR PLATFORMS →
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-chainpass-border">
              <p className="text-sm text-chainpass-text-muted mb-4">
                Trusted by industry leaders
              </p>
              <TrustBadgeRow badges={chainpassTrustBadges} size="md" grayscale={true} />
            </div>

          </div>

          {/* RIGHT COLUMN - V.A.I. Verified Badge Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Main V.A.I. Badge */}
              <img
                src="/assets/vai-verified-light.svg"
                alt="V.A.I. Verified"
                className="w-full max-w-md"
              />
              {/* ZK Badge below */}
              <div className="mt-6 flex justify-center">
                <img
                  src="/assets/zk-architecture-light.svg"
                  alt="Zero-Knowledge Architecture"
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
