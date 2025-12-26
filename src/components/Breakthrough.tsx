export default function Breakthrough() {
  return (
    <>
      {/* Breakthrough Achievement Section */}
      <section className="cp-section-secondary py-24 px-6" style={{ borderTop: '1px solid var(--cp-border)', borderBottom: '1px solid var(--cp-border)' }}>
        <div className="max-w-4xl mx-auto text-center">

          {/* Main headline - NO INLINE LOGOS */}
          <h2 className="
            text-3xl md:text-4xl lg:text-5xl
            font-bold
            text-[var(--cp-text-primary)]
            leading-tight
            mb-12
          ">
            We built the technology that powers the companies that make the oldest profession <span className="font-black">safer</span> and prevent underage participation in adult films.
          </h2>

          {/* Logos centered below text */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <img src="/assets/vairify-icon-circular.svg" alt="Vairify" className="h-16 w-auto" />
            <img src="/assets/AVChexxx-Round.svg" alt="AVChexxx" className="h-16 w-auto" />
          </div>

          {/* Guarantee banner */}
          <div className="
            inline-flex items-center gap-3
            px-8 py-4
            bg-white dark:bg-[var(--cp-bg-card)]
            border-2 border-[var(--cp-accent-teal)]
            rounded-full
            shadow-lg
          ">
            <div className="w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-lg font-bold text-[var(--cp-text-primary)]">
              While providing 100% anonymity—<span className="text-[#00d4aa]">GUARANTEED.</span>
            </span>
          </div>
        </div>
      </section>

      {/* V.A.I. Introduction Section */}
      <section className="cp-section-primary py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="mb-6">
            <span className="cp-badge-outline">
              Introducing
            </span>
          </div>

          {/* Main headline - gradient text */}
          <h2 className="
            text-5xl md:text-6xl lg:text-7xl
            font-black
            gradient-text
            mb-4
          ">
            Verified Anonymous Identity
          </h2>

          {/* Product name */}
          <p className="
            text-2xl font-bold
            mb-6
          " style={{ color: 'var(--cp-text-primary)' }}>
            ChainPass V.A.I.™
          </p>

          {/* Patent badge */}
          <div className="mb-8">
            <span className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              text-sm font-medium
            " style={{
              backgroundColor: 'rgba(0, 212, 170, 0.1)',
              border: '1px solid rgba(0, 212, 170, 0.3)',
              color: 'var(--cp-accent-teal)'
            }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--cp-accent-teal)' }} />
              V.A.I. — PATENT PENDING
            </span>
          </div>

          {/* Value proposition */}
          <p className="
            text-xl
            max-w-2xl mx-auto
          " style={{ color: 'var(--cp-text-secondary)' }}>
            The first identity solution that guarantees
          </p>
          <p className="text-xl mt-2">
            <span className="font-bold" style={{ color: 'var(--cp-accent-teal)' }}>100% anonymity</span>
            <span style={{ color: 'var(--cp-text-secondary)' }}> with </span>
            <span className="font-bold" style={{ color: 'var(--cp-text-primary)' }}>100% accountability</span>
          </p>
        </div>
      </section>
    </>
  );
}
