const steps = [
  {
    num: 1,
    title: 'PLATFORM',
    desc: 'User begins at ChainPass or partner site',
    highlight: false,
  },
  {
    num: 2,
    title: 'KYC + VOS',
    desc: 'KYC verified + violent offender screened',
    highlight: false,
  },
  {
    num: 3,
    title: 'CHAINPASS ONLY RECEIVES',
    desc: '✓ Biometric photo\n✓ Clear/Flag',
    highlight: true,
  },
  {
    num: 4,
    title: 'PLATFORM REQS',
    desc: 'LEO Disclosure + platform-specific',
    highlight: false,
  },
  {
    num: 5,
    title: 'PLATFORM HANDOFF',
    desc: 'User returns with V.A.I. number',
    highlight: false,
  },
];

export default function HowItWorksNew() {
  return (
    <>
      {/* 5-Step Flow Section */}
      <section className="cp-section-primary py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Steps Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center">
                {/* Step Card */}
                <div className={`
                  w-44 p-6 rounded-xl text-center
                  transition-all duration-300
                  ${step.highlight
                    ? 'text-black shadow-xl'
                    : 'cp-card'
                  }
                `} style={step.highlight ? { backgroundColor: 'var(--cp-accent-teal)' } : {}}>
                  {/* Number */}
                  <div className={`
                    text-4xl font-black mb-2
                  `} style={{ color: step.highlight ? '#000000' : 'var(--cp-accent-teal)' }}>
                    {step.num}
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-xs font-bold uppercase tracking-wider mb-3
                  `} style={{ color: step.highlight ? '#000000' : 'var(--cp-text-muted)' }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className={`
                    text-sm whitespace-pre-line
                  `} style={{
                    color: step.highlight ? 'rgba(0, 0, 0, 0.8)' : 'var(--cp-text-secondary)',
                    fontWeight: step.highlight ? 500 : 400
                  }}>
                    {step.desc}
                  </p>
                </div>

                {/* Arrow (not after last step) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block mx-2">
                    <svg
                      className="w-6 h-6"
                      style={{ color: 'var(--cp-accent-teal)' }}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
