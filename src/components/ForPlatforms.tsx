export default function ForPlatforms() {
  return (
    <section className="cp-section-primary py-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="
            text-4xl md:text-5xl font-black
            mb-4
          " style={{ color: 'var(--cp-text-primary)' }}>
            ChainPass V.A.I. — the technology of the future.
          </h2>
          <p className="
            text-xl font-bold
            mb-2
          " style={{ color: 'var(--cp-text-secondary)' }}>
            Integrate your platform now!
          </p>
          <p className="
            text-lg font-bold
          " style={{ color: 'var(--cp-accent-teal)' }}>
            Zero-knowledge architecture. Zero data. Zero liability. Zero cost.
          </p>
        </div>

        {/* Form Card */}
        <div className="cp-card p-8">
          <form className="space-y-6">

            {/* Platform Name */}
            <div>
              <label className="
                block text-sm font-bold
                mb-2
              " style={{ color: 'var(--cp-text-primary)' }}>
                Platform Name
              </label>
              <input
                type="text"
                placeholder="Your platform name"
                className="
                  w-full px-4 py-3
                  rounded-lg
                  outline-none
                  transition-all duration-200
                "
                style={{
                  backgroundColor: 'var(--cp-bg-secondary)',
                  border: '2px solid var(--cp-border-strong)',
                  color: 'var(--cp-text-primary)'
                }}
              />
            </div>

            {/* Contact Email */}
            <div>
              <label className="
                block text-sm font-bold
                mb-2
              " style={{ color: 'var(--cp-text-primary)' }}>
                Contact Email
              </label>
              <input
                type="email"
                placeholder="you@platform.com"
                className="
                  w-full px-4 py-3
                  rounded-lg
                  outline-none
                  transition-all duration-200
                "
                style={{
                  backgroundColor: 'var(--cp-bg-secondary)',
                  border: '2px solid var(--cp-border-strong)',
                  color: 'var(--cp-text-primary)'
                }}
              />
            </div>

            {/* Platform URL */}
            <div>
              <label className="
                block text-sm font-bold
                mb-2
              " style={{ color: 'var(--cp-text-primary)' }}>
                Platform URL
              </label>
              <input
                type="url"
                placeholder="https://yourplatform.com"
                className="
                  w-full px-4 py-3
                  rounded-lg
                  outline-none
                  transition-all duration-200
                "
                style={{
                  backgroundColor: 'var(--cp-bg-secondary)',
                  border: '2px solid var(--cp-border-strong)',
                  color: 'var(--cp-text-primary)'
                }}
              />
            </div>

            {/* Description */}
            <div>
              <label className="
                block text-sm font-bold
                mb-2
              " style={{ color: 'var(--cp-text-primary)' }}>
                Tell us about your platform
              </label>
              <textarea
                rows={4}
                placeholder="What does your platform do?"
                className="
                  w-full px-4 py-3
                  rounded-lg
                  outline-none
                  transition-all duration-200
                  resize-none
                "
                style={{
                  backgroundColor: 'var(--cp-bg-secondary)',
                  border: '2px solid var(--cp-border-strong)',
                  color: 'var(--cp-text-primary)'
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full py-4
                text-black font-bold text-lg
                rounded-lg
                shadow-lg hover:shadow-xl
                transform hover:scale-[1.02] active:scale-100
                transition-all duration-200
                flex items-center justify-center gap-2
                group
              "
              style={{ backgroundColor: 'var(--cp-accent-teal)' }}
            >
              Request Integration
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>

          {/* Alternative CTA */}
          <p className="
            text-center
            mt-6
          " style={{ color: 'var(--cp-text-muted)' }}>
            or{' '}
            <a href="#" className="hover:underline" style={{ color: 'var(--cp-accent-teal)' }}>
              check out our API documentation
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
