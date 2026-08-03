export default function PlatformsGain() {
  return (
    <section className="cp-section-primary py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Main headline */}
        <h2 className="
          text-3xl md:text-4xl lg:text-5xl
          font-bold
          mb-12
        " style={{ color: 'var(--cp-text-primary)' }}>
          Verification usually costs you users. This doesn't.
        </h2>

        {/* Sub-block 1 */}
        <div className="mb-16">
          <p className="
            text-xl
            mb-4
          " style={{ color: 'var(--cp-text-secondary)' }}>
            Every verification step you add is a step someone abandons. Upload a document, wait for review, try again because the photo was blurry — that is where signups die.
          </p>

          <p className="
            text-xl
            mb-4
          " style={{ color: 'var(--cp-text-secondary)' }}>
            A user with a V.A.I. arrives already verified. Onboarding gets shorter, not longer.
          </p>
        </div>

        {/* Sub-block 2 */}
        <div>
          <p className="
            text-2xl md:text-3xl
            font-bold
            mb-6
          " style={{ color: 'var(--cp-text-primary)' }}>
            And you can do something you couldn't before.
          </p>

          <p className="
            text-xl
            mb-4
          " style={{ color: 'var(--cp-text-secondary)' }}>
            You cannot execute a binding agreement with an anonymous account. With verified parties, you can — signed consent, disclosure, terms, each one attached to a real verified human without your platform ever holding their identity.
          </p>

          <p className="
            text-xl
          " style={{ color: 'var(--cp-text-secondary)' }}>
            That is not a risk you avoided. It is a capability you did not have.
          </p>
        </div>
      </div>
    </section>
  );
}
