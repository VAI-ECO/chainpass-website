
const platformData = [
  { ashley: '$11.2M settlement', vai: '$0' },
  { ashley: 'CEO resigned', vai: 'Business continues' },
  { ashley: 'Brand destroyed', vai: 'Brand intact' },
  { ashley: 'Years of lawsuits', vai: 'Nothing to sue for' },
  { ashley: 'Data breach', vai: 'Nothing to leak' },
];

const userData = [
  { ashley: 'Names exposed', vai: 'Anonymous' },
  { ashley: 'Blackmailed', vai: 'Nothing to leverage' },
  { ashley: 'Divorced', vai: 'Private' },
  { ashley: 'Fired from jobs', vai: 'Untraceable' },
  { ashley: 'Suicides reported', vai: 'Safe' },
];

export default function AshleyMadison() {
  return (
    <section className="cp-section-primary py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="
            text-4xl md:text-5xl font-black
          " style={{ color: 'var(--cp-text-primary)' }}>
            The Real Risk: A Tale of Two Breaches
          </h2>
        </div>

        {/* Tables Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* FOR PLATFORMS */}
          <div>
            <p className="
              text-sm font-bold uppercase tracking-wider
              mb-4
            " style={{ color: 'var(--cp-text-muted)' }}>
              For Platforms
            </p>

            <div className="cp-card overflow-hidden">
              {/* Header Row */}
              <div className="grid grid-cols-2">
                <div className="
                  bg-[#1e293b]
                  px-4 py-3
                  text-white font-bold text-center
                ">
                  Ashley Madison
                </div>
                <div className="
                  px-4 py-3
                  text-black font-bold text-center
                " style={{ backgroundColor: 'var(--cp-accent-teal)' }}>
                  V.A.I. Platform
                </div>
              </div>

              {/* Data Rows */}
              {platformData.map((row, i) => (
                <div
                  key={i}
                  className={`
                    grid grid-cols-2
                  `}
                  style={{
                    backgroundColor: i % 2 === 0 ? 'var(--cp-bg-card)' : 'var(--cp-bg-secondary)'
                  }}
                >
                  <div className="px-4 py-3 text-[#ef4444] text-sm" style={{ borderRight: '1px solid var(--cp-border)' }}>
                    {row.ashley}
                  </div>
                  <div className="px-4 py-3 text-sm font-medium" style={{ color: 'var(--cp-accent-teal)' }}>
                    {row.vai}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FOR USERS */}
          <div>
            <p className="
              text-sm font-bold uppercase tracking-wider
              mb-4
            " style={{ color: 'var(--cp-text-muted)' }}>
              For Users
            </p>

            <div className="cp-card overflow-hidden">
              {/* Header Row */}
              <div className="grid grid-cols-2">
                <div className="
                  bg-[#1e293b]
                  px-4 py-3
                  text-white font-bold text-center
                ">
                  Ashley Madison Users
                </div>
                <div className="
                  px-4 py-3
                  text-black font-bold text-center
                " style={{ backgroundColor: 'var(--cp-accent-teal)' }}>
                  V.A.I. Users
                </div>
              </div>

              {/* Data Rows */}
              {userData.map((row, i) => (
                <div
                  key={i}
                  className={`
                    grid grid-cols-2
                  `}
                  style={{
                    backgroundColor: i % 2 === 0 ? 'var(--cp-bg-card)' : 'var(--cp-bg-secondary)'
                  }}
                >
                  <div className="px-4 py-3 text-[#ef4444] text-sm" style={{ borderRight: '1px solid var(--cp-border)' }}>
                    {row.ashley}
                  </div>
                  <div className="px-4 py-3 text-sm font-medium" style={{ color: 'var(--cp-accent-teal)' }}>
                    {row.vai}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing question */}
        <p className="
          text-center text-3xl md:text-4xl font-bold
          mt-12
        " style={{ color: 'var(--cp-text-primary)' }}>
          We don't think it's worth the risk. Do you?
        </p>
      </div>
    </section>
  );
}
