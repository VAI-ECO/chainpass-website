function HowItWorks() {
  return (
    <main className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4 text-center">How Zero-Knowledge Works</h1>
        <p className="text-xl text-gray-400 text-center mb-16">
          We verify you're real without knowing who you are.
        </p>

        {/* Flow Diagram */}
        <div className="flow-diagram mb-16">

          <div className="flow-step relative">
            <div className="step-number">1</div>
            <div className="step-icon">👤</div>
            <h3 className="font-bold mb-2">YOU</h3>
            <p className="text-gray-400 text-sm">Show your government ID</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-step relative">
            <div className="step-number">2</div>
            <div className="step-icon">🔐</div>
            <h3 className="font-bold mb-2">COMPLYCUBE</h3>
            <p className="text-gray-400 text-sm">Verifies ID is real</p>
            <p className="text-red-400 text-sm font-bold mt-1">Then DELETES it</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-step relative">
            <div className="step-number">3</div>
            <div className="step-icon">⛓️</div>
            <h3 className="font-bold mb-2">CHAINPASS</h3>
            <p className="text-gray-400 text-sm">Receives photo only</p>
            <p className="text-teal-400 text-sm font-bold mt-1">Generates V.A.I.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-step relative">
            <div className="step-number">4</div>
            <div className="step-icon">🌐</div>
            <h3 className="font-bold mb-2">PLATFORM</h3>
            <p className="text-gray-400 text-sm">Receives V.A.I. only</p>
            <p className="text-green-400 text-sm font-bold mt-1">Zero identity data</p>
          </div>

        </div>

        {/* What Each Entity Stores */}
        <h2 className="text-2xl font-bold mb-6">What Each Entity Stores</h2>

        <div className="overflow-x-auto mb-16">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-2">Entity</th>
                <th className="text-left py-4 px-2">Stores</th>
                <th className="text-left py-4 px-2">Never Has</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-2 font-bold">ComplyCube</td>
                <td className="py-4 px-2 text-gray-400">Nothing (deleted after verification)</td>
                <td className="py-4 px-2">—</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-2 font-bold">ChainPass</td>
                <td className="py-4 px-2 text-teal-400">Verified photo + V.A.I. number</td>
                <td className="py-4 px-2 text-red-400">Name, address, DOB, ID number</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-2 font-bold">Platform</td>
                <td className="py-4 px-2 text-green-400">V.A.I. number only</td>
                <td className="py-4 px-2 text-red-400">Photo, name, address, DOB, ID</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Three Jurisdictions */}
        <div className="card mb-16">
          <h2 className="text-2xl font-bold mb-4">Three Entities. Three Jurisdictions.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-blue-400 mb-2">ComplyCube</h4>
              <p className="text-gray-400">United Kingdom</p>
            </div>
            <div>
              <h4 className="font-bold text-teal-400 mb-2">ChainPass</h4>
              <p className="text-gray-400">Delaware, USA</p>
            </div>
            <div>
              <h4 className="font-bold text-green-400 mb-2">Platform</h4>
              <p className="text-gray-400">Varies</p>
            </div>
          </div>
          <p className="mt-6 text-gray-400">
            No single breach exposes identity.<br/>
            No single subpoena retrieves identity.<br/>
            No single point of failure.
          </p>
        </div>

        {/* Transaction Number System */}
        <h2 className="text-2xl font-bold mb-6">The Transaction Number System</h2>

        <div className="card">
          <p className="text-gray-400 mb-6">
            Every V.A.I. verification creates a unique transaction number.
            This number links your V.A.I. (ChainPass) to your original verification (ComplyCube).
          </p>

          <h4 className="font-bold mb-4">The ONLY way to retrieve identity:</h4>

          <ol className="list-decimal list-inside space-y-2 text-gray-400 mb-6">
            <li>Platform makes formal request to ChainPass</li>
            <li>ChainPass validates the request (legal requirement)</li>
            <li>ChainPass uses transaction number to request from ComplyCube</li>
            <li>ComplyCube retrieves from secure archive</li>
            <li>Identity provided to law enforcement (not platform)</li>
          </ol>

          <div className="bg-teal-900/30 border border-teal-700 rounded-lg p-4">
            <p className="text-teal-300">
              <strong>Your identity is retrievable ONLY when you're in danger.</strong><br/>
              Not for curiosity. Not for revenge. Not for lawsuits. For safety.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default HowItWorks;
