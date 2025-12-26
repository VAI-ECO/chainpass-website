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
      {/* Video Section */}
      <section className="cp-section-secondary py-24 px-6" style={{ borderTop: '1px solid var(--cp-border)', borderBottom: '1px solid var(--cp-border)' }}>
        <div className="max-w-4xl mx-auto text-center">

          {/* Big number headline */}
          <h2 className="
            text-5xl md:text-6xl lg:text-7xl
            font-black
            mb-2
          " style={{ color: 'var(--cp-text-primary)' }}>
            $1 billion in verification technology.
          </h2>

          {/* Zero-knowledge subtitle */}
          <p className="
            text-3xl md:text-4xl
            font-bold
            mb-8
            mt-4
          " style={{ color: 'var(--cp-accent-teal)' }}>
            With ChainPass V.A.I. zero-knowledge architecture, all we keep is one photo.
          </p>

          {/* Link */}
          <a
            href="#how-it-works"
            className="
              inline-flex items-center gap-2
              font-medium text-lg
              group
            " style={{ color: 'var(--cp-accent-blue)' }}
          >
            See how V.A.I. works
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Video Container */}
          <div className="
            mt-12
            cp-card
            p-2
            overflow-hidden
          ">
            <div className="
              relative
              rounded-lg
              aspect-video
              flex items-center justify-center
            " style={{ backgroundColor: 'var(--cp-bg-tertiary)' }}>
              {/* Play button overlay */}
              <button className="
                w-20 h-20
                rounded-full
                flex items-center justify-center
                shadow-xl
                hover:scale-110
                transition-transform duration-200
                group
              " style={{ backgroundColor: 'var(--cp-accent-teal)' }}>
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Video title */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="font-bold" style={{ color: 'var(--cp-text-primary)' }}>
                  100% Verified. 100% Anonymous.
                </p>
                <p className="text-sm" style={{ color: 'var(--cp-text-muted)' }}>(1:30)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
