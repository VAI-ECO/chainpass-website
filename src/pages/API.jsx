import { Link } from 'react-router-dom';
import { useState } from 'react';

function API() {
  return (
    <main className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
        <p className="text-xl text-gray-400 mb-12">
          Integrate ChainPass verification into your platform.
        </p>

        {/* Quick Start */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Base URL</h4>
            <code className="code-block">https://api.chainpass.ai/v1</code>
          </div>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Authentication</h4>
            <p className="text-gray-400 mb-2">API key in header:</p>
            <code className="code-block">X-ChainPass-Key: your_api_key</code>
          </div>
        </div>

        {/* Endpoints */}
        <h2 className="text-2xl font-bold mb-6">Endpoints</h2>

        <div className="space-y-6 mb-12">

          {/* POST /verify/initiate */}
          <div className="card">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge bg-green-600">POST</span>
              <code className="text-teal-400">/verify/initiate</code>
            </div>
            <p className="text-gray-400 mb-4">Start a new verification session</p>
            <details className="mt-4">
              <summary className="cursor-pointer text-teal-400 hover:text-teal-300">View details</summary>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                <h5 className="font-bold mb-2">Request Body</h5>
                <pre className="code-block text-sm overflow-x-auto mb-4">{`{
  "redirect_url": "https://yourplatform.com/callback",
  "user_reference": "your-internal-user-id",
  "verification_type": "vai" // vai, rvi, or bvi
}`}</pre>
                <h5 className="font-bold mb-2">Response</h5>
                <pre className="code-block text-sm overflow-x-auto">{`{
  "session_id": "sess_abc123",
  "verification_url": "https://verify.chainpass.ai/sess_abc123",
  "expires_at": "2024-12-08T12:00:00Z"
}`}</pre>
              </div>
            </details>
          </div>

          {/* GET /vai/{vai_number}/status */}
          <div className="card">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge bg-blue-600">GET</span>
              <code className="text-teal-400">/vai/{'{vai_number}'}/status</code>
            </div>
            <p className="text-gray-400 mb-4">Check V.A.I. verification status</p>
            <details className="mt-4">
              <summary className="cursor-pointer text-teal-400 hover:text-teal-300">View details</summary>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                <h5 className="font-bold mb-2">Response</h5>
                <pre className="code-block text-sm overflow-x-auto">{`{
  "vai_number": "A3X-9K2-M7P",
  "status": "active", // active, expired, suspended
  "verified_at": "2024-01-15T10:30:00Z",
  "expires_at": "2025-01-15T10:30:00Z",
  "verification_type": "vai"
}`}</pre>
              </div>
            </details>
          </div>

          {/* POST /vai/{vai_number}/check */}
          <div className="card">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge bg-green-600">POST</span>
              <code className="text-teal-400">/vai/{'{vai_number}'}/check</code>
            </div>
            <p className="text-gray-400 mb-4">Perform facial verification check</p>
            <details className="mt-4">
              <summary className="cursor-pointer text-teal-400 hover:text-teal-300">View details</summary>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                <h5 className="font-bold mb-2">Request Body</h5>
                <pre className="code-block text-sm overflow-x-auto mb-4">{`{
  "selfie_image": "base64_encoded_image",
  "liveness_token": "token_from_sdk"
}`}</pre>
                <h5 className="font-bold mb-2">Response</h5>
                <pre className="code-block text-sm overflow-x-auto">{`{
  "match": true,
  "confidence": 0.97,
  "liveness_passed": true,
  "check_id": "chk_xyz789"
}`}</pre>
              </div>
            </details>
          </div>

          {/* GET /vai/{vai_number}/compliance */}
          <div className="card">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge bg-blue-600">GET</span>
              <code className="text-teal-400">/vai/{'{vai_number}'}/compliance</code>
            </div>
            <p className="text-gray-400 mb-4">Check platform compliance status</p>
            <details className="mt-4">
              <summary className="cursor-pointer text-teal-400 hover:text-teal-300">View details</summary>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                <h5 className="font-bold mb-2">Response</h5>
                <pre className="code-block text-sm overflow-x-auto">{`{
  "vai_number": "A3X-9K2-M7P",
  "compliant": true,
  "platform_id": "plt_vairify",
  "requirements_met": [
    "identity_verified",
    "age_verified",
    "not_suspended"
  ]
}`}</pre>
              </div>
            </details>
          </div>

          {/* POST /identity/retrieve */}
          <div className="card">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge bg-yellow-600">POST</span>
              <code className="text-teal-400">/identity/retrieve</code>
            </div>
            <p className="text-gray-400 mb-4">Request identity retrieval (requires legal justification)</p>
            <details className="mt-4">
              <summary className="cursor-pointer text-teal-400 hover:text-teal-300">View details</summary>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                <p className="text-yellow-400 mb-4">
                  ⚠️ This endpoint is for emergency use only. Requires legal documentation.
                </p>
                <h5 className="font-bold mb-2">Request Body</h5>
                <pre className="code-block text-sm overflow-x-auto">{`{
  "vai_number": "A3X-9K2-M7P",
  "reason": "user_safety_emergency",
  "legal_document_url": "https://...",
  "law_enforcement_contact": {
    "agency": "...",
    "badge_number": "...",
    "contact_email": "..."
  }
}`}</pre>
              </div>
            </details>
          </div>

        </div>

        {/* SDKs */}
        <h2 className="text-2xl font-bold mb-6">SDKs</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <a href="#" className="card text-center hover:border-teal-500">
            <span className="text-2xl mb-2 block">📦</span>
            <span>JavaScript</span>
          </a>
          <a href="#" className="card text-center hover:border-teal-500">
            <span className="text-2xl mb-2 block">🐍</span>
            <span>Python</span>
          </a>
          <a href="#" className="card text-center hover:border-teal-500">
            <span className="text-2xl mb-2 block">💎</span>
            <span>Ruby</span>
          </a>
          <a href="#" className="card text-center hover:border-teal-500">
            <span className="text-2xl mb-2 block">🐘</span>
            <span>PHP</span>
          </a>
          <a href="#" className="card text-center hover:border-teal-500">
            <span className="text-2xl mb-2 block">🔷</span>
            <span>Go</span>
          </a>
        </div>

        {/* Webhooks */}
        <h2 className="text-2xl font-bold mb-6">Webhooks</h2>
        <div className="card mb-12">
          <ul className="space-y-2 font-mono text-sm">
            <li><code className="text-teal-400">verification.completed</code> — User completed verification</li>
            <li><code className="text-teal-400">verification.failed</code> — Verification attempt failed</li>
            <li><code className="text-teal-400">vai.expired</code> — V.A.I. has expired</li>
            <li><code className="text-teal-400">vai.renewed</code> — V.A.I. was renewed</li>
            <li><code className="text-teal-400">compliance.changed</code> — Compliance status changed</li>
          </ul>
        </div>

        {/* Rate Limits */}
        <h2 className="text-2xl font-bold mb-6">Rate Limits</h2>
        <div className="card mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Standard</h4>
              <p className="text-gray-400">1,000 requests/hour</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Enterprise</h4>
              <p className="text-gray-400">Custom limits available</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card bg-gradient-to-r from-teal-900/30 to-blue-900/30 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Integrate?</h2>
          <p className="text-gray-400 mb-6">
            Get your API key and start building in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">Get API Key</Link>
            <a href="#" className="btn-secondary">Full API Reference</a>
          </div>
        </div>

      </div>
    </main>
  );
}

export default API;
