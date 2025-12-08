function FAQ() {
  return (
    <main className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h1>

        {/* For Everyone */}
        <h2 className="text-2xl font-bold mb-6">For Everyone</h2>

        <div className="space-y-4 mb-12">

          <details className="card">
            <summary className="cursor-pointer font-bold">What is a V.A.I.?</summary>
            <p className="mt-4 text-gray-400">
              Verified Anonymous Identity. A 7-character code that proves you verified
              your government ID without revealing who you are.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">How can I be verified if you don't have my identity?</summary>
            <p className="mt-4 text-gray-400">
              ComplyCube (a licensed KYC provider) verifies your ID, then deletes it.
              They send us only your verified photo. We generate your V.A.I. from that.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">Can ChainPass see my name?</summary>
            <p className="mt-4 text-gray-400">
              No. We receive a verified photo and generate a V.A.I. number.
              We never receive your name, address, date of birth, or ID number.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">Can the platform I'm using see my identity?</summary>
            <p className="mt-4 text-gray-400">
              No. Platforms receive only your V.A.I. number. Nothing else.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">What if a platform gets hacked?</summary>
            <p className="mt-4 text-gray-400">
              If a platform is breached, hackers get V.A.I. numbers — meaningless
              without ChainPass. Your identity can't be exposed because the platform doesn't have it.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">Can my identity ever be retrieved?</summary>
            <p className="mt-4 text-gray-400">
              Only in genuine emergencies. The platform must formally request retrieval,
              ChainPass must validate the legal justification, and ComplyCube must
              retrieve from their secure archive. This is for YOUR safety — so law
              enforcement can find you if you're in danger.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">What's the transaction number?</summary>
            <p className="mt-4 text-gray-400">
              Every verification creates a unique transaction number linking your V.A.I.
              to ComplyCube's secure archive. This is the ONLY key that can retrieve
              your identity, and it requires platform request + ChainPass approval +
              legal justification.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">Does my V.A.I. expire?</summary>
            <p className="mt-4 text-gray-400">
              Yes, annually. Renewal is $99/year and uses in-house verification
              (no re-uploading ID). Every 3 years, we do a fresh ComplyCube check.
            </p>
          </details>

        </div>

        {/* For Platforms */}
        <h2 className="text-2xl font-bold mb-6">For Platforms</h2>

        <div className="space-y-4 mb-12">

          <details className="card">
            <summary className="cursor-pointer font-bold">How much does the API cost?</summary>
            <p className="mt-4 text-gray-400">
              The API is free. Users pay $99/year for their V.A.I. You pay nothing.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">What data do we receive?</summary>
            <p className="mt-4 text-gray-400">
              V.A.I. number and verification status only. No photos. No identity data.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">What if we're subpoenaed for user data?</summary>
            <p className="mt-4 text-gray-400">
              You have no user identity data to provide. Direct them to ChainPass.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">How long does integration take?</summary>
            <p className="mt-4 text-gray-400">
              Most platforms integrate in hours. Full documentation and SDKs available.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">Can we white-label the verification flow?</summary>
            <p className="mt-4 text-gray-400">
              Yes. Contact us for enterprise options.
            </p>
          </details>

        </div>

        {/* Technical */}
        <h2 className="text-2xl font-bold mb-6">Technical</h2>

        <div className="space-y-4 mb-12">

          <details className="card">
            <summary className="cursor-pointer font-bold">What verification methods does ComplyCube use?</summary>
            <p className="mt-4 text-gray-400">
              Document verification (203+ countries), liveness detection, biometric
              matching, fraud detection. SOC 2 Type II, ISO 27001, GDPR compliant.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">How do you prevent duplicate V.A.I.s?</summary>
            <p className="mt-4 text-gray-400">
              ComplyCube's biometric matching compares every new verification against
              all previous verifications. 95%+ confidence match = blocked.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">Where is data stored?</summary>
            <p className="mt-4 text-gray-400">
              ChainPass operates from Delaware, USA. ComplyCube operates from UK.
              Platforms operate from their own jurisdictions. Three-entity separation.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">What's your uptime SLA?</summary>
            <p className="mt-4 text-gray-400">
              99.9% for API availability.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">Do you support GDPR?</summary>
            <p className="mt-4 text-gray-400">
              Yes. Our architecture is GDPR-ready by design — we store minimal data
              and support right-to-deletion requests.
            </p>
          </details>

        </div>

        {/* Trust & Security */}
        <h2 className="text-2xl font-bold mb-6">Trust & Security</h2>

        <div className="space-y-4 mb-12">

          <details className="card">
            <summary className="cursor-pointer font-bold">Why should I trust ChainPass?</summary>
            <p className="mt-4 text-gray-400">
              We can't leak what we don't have. Our architecture makes it impossible
              to expose your identity because we never receive it.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">What if ChainPass goes out of business?</summary>
            <p className="mt-4 text-gray-400">
              Your V.A.I. continues working on integrated platforms. Identity retrieval
              would require ComplyCube directly (with legal process).
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">Is this legal?</summary>
            <p className="mt-4 text-gray-400">
              Yes. Identity verification is a regulated industry. We partner with
              licensed KYC providers (ComplyCube) and comply with all applicable laws.
            </p>
          </details>

          <details className="card">
            <summary className="cursor-pointer font-bold">Who owns my data?</summary>
            <p className="mt-4 text-gray-400">
              You own your data. We hold verification records on your behalf.
              You can request deletion at any time.
            </p>
          </details>

        </div>

      </div>
    </main>
  );
}

export default FAQ;
