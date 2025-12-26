import { TOP10_PLATFORMS, TOP10_USERS } from '../data/content';

export default function VaiDifference() {
  return (
    <section className="cp-section-secondary py-24 px-6" style={{ borderTop: '1px solid var(--cp-border)', borderBottom: '1px solid var(--cp-border)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="
            text-4xl md:text-5xl font-black
          " style={{ color: 'var(--cp-text-primary)' }}>
            The V.A.I. Difference
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Built on zero-knowledge architecture
          </p>
        </div>

        {/* FOR PLATFORMS */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="
              px-4 py-2
              text-black font-bold text-sm uppercase tracking-wider
              rounded-lg
            " style={{ backgroundColor: 'var(--cp-accent-teal)' }}>
              For Platforms
            </span>
            <span style={{ color: 'var(--cp-text-secondary)' }}>
              Zero cost. Zero liability. Zero headaches.
            </span>
          </div>

          {/* Horizontal divider */}
          <div className="h-px mb-8" style={{
            background: 'linear-gradient(to right, var(--cp-accent-teal), transparent)'
          }} />

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {TOP10_PLATFORMS.map((benefit, i) => (
              <div
                key={benefit.num}
                className={`
                  flex items-start gap-4 p-4 rounded-lg
                `}
                style={{
                  backgroundColor: i % 2 === 0 ? 'var(--cp-bg-card)' : 'var(--cp-bg-primary)',
                  border: '1px solid var(--cp-border)'
                }}
              >
                {/* Number */}
                <span className="
                  w-8 h-8
                  font-bold text-sm
                  rounded-full
                  flex items-center justify-center
                  flex-shrink-0
                " style={{
                  backgroundColor: 'rgba(0, 212, 170, 0.1)',
                  color: 'var(--cp-accent-teal)'
                }}>
                  {benefit.num}
                </span>

                {/* Content */}
                <div className="flex-grow">
                  <h4 className="font-bold" style={{ color: 'var(--cp-text-primary)' }}>
                    {benefit.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--cp-text-secondary)' }}>
                    {benefit.desc}
                  </p>
                </div>

                {/* Cost Badge */}
                <span className="
                  px-3 py-1
                  text-black font-bold text-sm
                  rounded-full
                  flex-shrink-0
                " style={{ backgroundColor: 'var(--cp-accent-teal)' }}>
                  {benefit.cost}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FOR USERS */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="
              px-4 py-2
              text-white font-bold text-sm uppercase tracking-wider
              rounded-lg
            " style={{ backgroundColor: 'var(--cp-accent-blue)' }}>
              For Users
            </span>
            <span style={{ color: 'var(--cp-text-secondary)' }}>
              Your identity. Your control. Your safety.
            </span>
          </div>

          {/* Horizontal divider */}
          <div className="h-px mb-8" style={{
            background: 'linear-gradient(to right, var(--cp-accent-blue), transparent)'
          }} />

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {TOP10_USERS.map((benefit, i) => (
              <div
                key={benefit.num}
                className={`
                  flex items-start gap-4 p-4 rounded-lg
                `}
                style={{
                  backgroundColor: i % 2 === 0 ? 'var(--cp-bg-card)' : 'var(--cp-bg-primary)',
                  border: '1px solid var(--cp-border)'
                }}
              >
                {/* Number */}
                <span className="
                  w-8 h-8
                  font-bold text-sm
                  rounded-full
                  flex items-center justify-center
                  flex-shrink-0
                " style={{
                  backgroundColor: 'rgba(79, 125, 243, 0.1)',
                  color: 'var(--cp-accent-blue)'
                }}>
                  {benefit.num}
                </span>

                {/* Content */}
                <div className="flex-grow">
                  <h4 className="font-bold" style={{ color: 'var(--cp-text-primary)' }}>
                    {benefit.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--cp-text-secondary)' }}>
                    {benefit.desc}
                  </p>
                </div>

                {/* Cost Badge (if applicable) */}
                {benefit.cost && (
                  <span className="
                    px-3 py-1
                    text-black font-bold text-sm
                    rounded-full
                    flex-shrink-0
                  " style={{ backgroundColor: 'var(--cp-accent-teal)' }}>
                    {benefit.cost}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
