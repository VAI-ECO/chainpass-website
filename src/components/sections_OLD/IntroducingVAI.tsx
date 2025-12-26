import { Section, Container, Button, Badge } from '../ui';

export function IntroducingVAI() {
  return (
    <Section id="introducing" background="light" paddingY="xl">
      <Container size="md">
        <div className="text-center space-y-8">

          {/* Label */}
          <p className="text-sm uppercase tracking-widest text-chainpass-text-muted">
            Introducing
          </p>

          {/* Main Title */}
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-chainpass-text">
              ChainPass V.A.I.™
            </h2>
            <Badge variant="patent">PATENT PENDING</Badge>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-chainpass-text-muted">
            Verified Anonymous Identity<br />
            Featuring Zero-Knowledge Architecture
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-chainpass-border mx-auto" />

          {/* Mission Statements */}
          <div className="space-y-4 text-lg text-chainpass-text">
            <p>
              We built the technology that makes<br />
              <strong>the oldest profession in the world safer.</strong>
            </p>
            <p>
              We built the ecosystem that removes<br />
              <strong>underage participation from adult films.</strong>
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-chainpass-border mx-auto" />

          {/* Guarantee */}
          <div className="space-y-2">
            <p className="text-2xl font-bold text-chainpass-text">
              100% Anonymous. 100% Accountable.
            </p>
            <p className="text-xl text-chainpass-secondary font-semibold">
              GUARANTEED.
            </p>
            <p className="text-chainpass-text-muted">
              We can't share what we never collect.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-chainpass-border mx-auto" />

          {/* Dual CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">

            {/* For Users */}
            <div className="text-center space-y-4 p-6 rounded-xl bg-white border border-chainpass-border shadow-lg">
              <p className="text-sm uppercase tracking-widest text-chainpass-text-muted">
                For Users
              </p>
              <p className="text-lg text-chainpass-text">
                One V.A.I.<br />
                Unlimited platforms.<br />
                <strong>$99/year.</strong>
              </p>
              <Button variant="primary" fullWidth>
                CREATE YOUR V.A.I.
              </Button>
            </div>

            {/* For Platforms */}
            <div className="text-center space-y-4 p-6 rounded-xl bg-white border border-chainpass-border shadow-lg">
              <p className="text-sm uppercase tracking-widest text-chainpass-text-muted">
                For Platforms
              </p>
              <p className="text-lg text-chainpass-text">
                Free to integrate.<br />
                Zero data. Zero liability.
              </p>
              <p className="text-sm italic text-chainpass-text-muted">
                "The data you hold is your biggest liability."
              </p>
              <Button variant="ghost" fullWidth>
                INTEGRATE FREE →
              </Button>
            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}
