import { ChevronRight } from 'lucide-react';

const trustBadges = [
  { name: 'ComplyCube', src: '/assets/COMPLYCUBE.svg', size: 'max-h-12' },
  { name: 'iDenfy', src: '/assets/Indenfy.svg', size: 'max-h-12' },
  { name: 'Offenders.io', src: '/assets/Offenders.io.svg', size: 'max-h-12' },
  { name: 'Proton Mail', src: '/assets/proton-mail.svg', size: 'max-h-[62px]' }, // 30% increase
  { name: 'AWS', src: '/assets/AWS.svg', size: 'max-h-[62px]' }, // 30% increase (Azure/ChainPass)
  { name: 'MongoDB', src: '/assets/Mongo DB.svg', size: 'max-h-12' },
  { name: 'SOC 2', src: '/assets/Soc Compliant .svg', size: 'max-h-[55px]' }, // 15% increase
  { name: 'ISO 27001', src: '/assets/iso-27001.svg', size: 'max-h-[62px]' }, // 30% increase
  { name: 'Stripe', src: '/assets/Stripe.svg', size: 'max-h-12' },
];

export default function Hero() {
  return (
    <section className="cp-section-primary min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Column */}
        <div>
          {/* Headline */}
          <h1 className="leading-tight mb-6">
            <span className="block text-5xl lg:text-6xl font-black text-[var(--cp-text-primary)]">Secure</span>
            <span className="block text-5xl lg:text-6xl font-black text-[var(--cp-text-primary)]">Innovative</span>
            <span className="block text-5xl lg:text-6xl font-black text-[#00d4aa]">Digital Verification</span>
            <span className="block text-3xl lg:text-4xl font-bold text-[var(--cp-text-primary)] mt-2">solutions for the real world</span>
          </h1>

          {/* Body */}
          <p className="text-lg text-[var(--cp-text-secondary)] max-w-lg mb-8">
            <span className="font-bold text-[var(--cp-text-primary)]">ChainPass</span> provides zero-knowledge identity infrastructure that guarantees 100% anonymity with 100% accountability.
          </p>

          {/* CTA */}
          <button
            onClick={() => {
              const videoSection = document.querySelector('section.cp-section-secondary');
              videoSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="
              inline-flex items-center gap-2
              px-8 py-4
              bg-[#00d4aa] hover:bg-[#00b892]
              text-black font-bold text-lg
              rounded-lg
              shadow-lg hover:shadow-xl
              transform hover:scale-105 active:scale-100
              transition-all duration-200
            "
          >
            See How It Works
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-2 mt-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.name}
                className="
                  bg-white
                  border border-gray-200
                  rounded-lg
                  h-16
                  flex items-center justify-center
                  p-2
                "
              >
                <img
                  src={badge.src}
                  alt={badge.name}
                  className={`${badge.size} max-w-full object-contain`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[var(--cp-border)]">
            <img
              src="/images/Herov2-Chainpass.jpeg"
              alt="V.A.I. Verification"
              className="w-full h-auto"
            />

            {/* V.A.I. Overlay */}
            <div className="
              absolute top-[35%] right-6
              bg-black/70 backdrop-blur-sm
              px-4 py-3 rounded-lg
              border border-[#00d4aa]/30
            ">
              <p className="text-white/70 text-xs uppercase tracking-wider">V.A.I.#</p>
              <p className="text-white font-mono text-2xl font-bold">765UT7X</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
