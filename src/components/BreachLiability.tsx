export default function BreachLiability() {
  return (
    <section className="cp-section-primary py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Main headline */}
        <h2 className="
          text-3xl md:text-4xl lg:text-5xl
          font-bold
          text-center
          mb-12
        " style={{ color: 'var(--cp-text-primary)' }}>
          Breach is the number one liability a platform carries.
        </h2>

        {/* Settlement figures - right-aligned column */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="space-y-4 text-right">
            <div className="flex justify-end items-baseline gap-4">
              <span className="text-5xl md:text-6xl font-black" style={{ color: 'var(--cp-text-primary)' }}>$700,000,000</span>
              <span className="text-xl font-medium" style={{ color: 'var(--cp-text-secondary)' }}>— Equifax</span>
            </div>
            <div className="flex justify-end items-baseline gap-4">
              <span className="text-5xl md:text-6xl font-black" style={{ color: 'var(--cp-text-primary)' }}>$500,000,000</span>
              <span className="text-xl font-medium" style={{ color: 'var(--cp-text-secondary)' }}>— T-Mobile</span>
            </div>
            <div className="flex justify-end items-baseline gap-4">
              <span className="text-5xl md:text-6xl font-black" style={{ color: 'var(--cp-text-primary)' }}>$190,000,000</span>
              <span className="text-xl font-medium" style={{ color: 'var(--cp-text-secondary)' }}>— Capital One</span>
            </div>
            <div className="flex justify-end items-baseline gap-4">
              <span className="text-5xl md:text-6xl font-black" style={{ color: 'var(--cp-text-primary)' }}>$117,500,000</span>
              <span className="text-xl font-medium" style={{ color: 'var(--cp-text-secondary)' }}>— Yahoo</span>
            </div>
            <div className="flex justify-end items-baseline gap-4">
              <span className="text-5xl md:text-6xl font-black" style={{ color: 'var(--cp-text-primary)' }}>$115,000,000</span>
              <span className="text-xl font-medium" style={{ color: 'var(--cp-text-secondary)' }}>— Anthem</span>
            </div>
          </div>
        </div>

        {/* Body copy */}
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-xl font-medium" style={{ color: 'var(--cp-text-secondary)' }}>
            More than $1.6 billion paid out by five companies for holding data they had every reason to hold.
          </p>

          <p className="text-lg" style={{ color: 'var(--cp-text-secondary)' }}>
            And those are the ones you heard about.
          </p>

          <p className="text-lg" style={{ color: 'var(--cp-text-secondary)' }}>
            The average breach now costs $4.99 million. In the United States, $10.22 million. Both the highest on record, and the attacks are getting cheaper to run, not harder — AI-driven attacks rose 56% in a single year. What took a skilled operator weeks now takes an afternoon and no particular skill.
          </p>

          <p className="text-lg" style={{ color: 'var(--cp-text-secondary)' }}>
            Here is the part nobody says out loud. The more carefully a platform verifies its users, the more it has to lose. Documents. Selfies. Real names sitting next to real activity. Verification is supposed to reduce risk. Held on your own servers, it becomes the risk.
          </p>

          {/* Bold display line */}
          <p className="
            text-3xl md:text-4xl
            font-bold
            py-8
          " style={{ color: 'var(--cp-text-primary)' }}>
            You cannot lose what you never had.
          </p>

          <p className="text-lg" style={{ color: 'var(--cp-text-secondary)' }}>
            ChainPass verifies the person and hands your platform a credential. No documents. No images. No names. Nothing on your servers worth breaching you to reach.
          </p>

          <p className="text-lg" style={{ color: 'var(--cp-text-secondary)' }}>
            Run it alongside whatever you use now. Nothing gets ripped out.
          </p>

          <p className="text-lg" style={{ color: 'var(--cp-text-secondary)' }}>
            And because the credential is the person, not a password, account recovery stops being a problem you own. No reset emails. No support tickets. No security questions a stranger can answer. The most common way accounts get taken over simply is not available on your platform any more.
          </p>
        </div>

        {/* Citation */}
        <p className="
          text-sm text-center
          mt-12
        " style={{ color: 'var(--cp-text-muted)' }}>
          Breach cost figures: IBM Cost of a Data Breach Report 2026 and 2025. Settlement figures are publicly reported, court-approved amounts.
        </p>
      </div>
    </section>
  );
}
