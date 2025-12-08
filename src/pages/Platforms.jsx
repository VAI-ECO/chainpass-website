import { Link } from 'react-router-dom';

function Platforms() {
  return (
    <main className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4 text-center">For Platforms</h1>
        <p className="text-3xl text-center mb-16">
          Your one liability? <span className="text-teal-400">Gone.</span>
        </p>

        {/* The Problem */}
        <div className="card mb-12 border-red-900/50">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Right Now</h2>
          <p className="text-gray-400 mb-4">You store user identity data. That means:</p>
          <ul className="space-y-2 text-gray-300">
            <li>• You can be hacked</li>
            <li>• You can be subpoenaed</li>
            <li>• You can be sued</li>
            <li>• You ARE the liability</li>
          </ul>
          <p className="mt-4 text-gray-400">
            Every user's name, address, ID on YOUR servers.<br/>
            One breach and you're done.
          </p>
        </div>

        {/* The Solution */}
        <div className="card mb-12 border-teal-900/50">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">With ChainPass</h2>
          <p className="text-gray-400 mb-4">You store nothing. You receive a V.A.I. number. That's it.</p>
          <ul className="space-y-2 text-gray-300">
            <li>✓ Verified users</li>
            <li>✓ Zero identity data</li>
            <li>✓ Zero liability</li>
          </ul>
          <div className="mt-6 space-y-2 text-gray-400">
            <p><strong>Get breached?</strong> They get V.A.I. numbers. Worthless without ChainPass.</p>
            <p><strong>Get subpoenaed?</strong> "We don't have identity data. Talk to ChainPass."</p>
          </div>
        </div>

        {/* Free API */}
        <div className="card mb-12 bg-gradient-to-r from-teal-900/30 to-blue-900/30">
          <h2 className="text-2xl font-bold mb-4">The API Is Free</h2>
          <p className="text-xl text-gray-300 mb-4">
            We don't charge you. We charge your users.
          </p>
          <p className="text-gray-400 mb-6">
            Every platform that integrates becomes a distribution channel.<br/>
            You get verified users. We handle the liability.<br/>
            Your users pay $99/year. You pay nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/api" className="btn-primary">View API Documentation</Link>
            <Link to="/contact" className="btn-secondary">Contact for Integration</Link>
          </div>
        </div>

        {/* Already Integrating */}
        <h2 className="text-2xl font-bold mb-6">Already Integrating</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="card">
            <span className="badge badge-live mb-2">LIVE</span>
            <h4 className="font-bold">Vairify</h4>
            <p className="text-gray-400">Safety platform for adult services</p>
          </div>
          <div className="card">
            <span className="badge badge-soon mb-2">December 2024</span>
            <h4 className="font-bold">Avictria</h4>
            <p className="text-gray-400">Coming soon</p>
          </div>
          <div className="card">
            <span className="badge badge-soon mb-2">July 2026</span>
            <h4 className="font-bold">AVChexx</h4>
            <p className="text-gray-400">Coming soon</p>
          </div>
          <div className="card">
            <span className="badge badge-soon mb-2">Q1 2026</span>
            <h4 className="font-bold">Erotic Kneads</h4>
            <p className="text-gray-400">Coming soon</p>
          </div>
        </div>
        <Link to="/partners" className="text-teal-400 hover:text-teal-300 transition-colors">
          See full partner list →
        </Link>

      </div>
    </main>
  );
}

export default Platforms;
