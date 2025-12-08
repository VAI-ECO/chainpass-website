import { Link } from 'react-router-dom';
import VAIBadge from '../components/VAIBadge';

function Individuals() {
  return (
    <main className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <VAIBadge size="large" />
          </div>
          <h1 className="text-4xl font-bold mb-4">See This Badge?</h1>
          <p className="text-3xl">
            Your identity <span className="text-teal-400">can't be hacked.</span>
          </p>
          <p className="text-2xl text-gray-400 mt-2">It's not there.</p>
        </div>

        {/* How You're Protected */}
        <h2 className="text-2xl font-bold mb-6">How You're Protected</h2>

        <div className="space-y-6 mb-16">
          <div className="card">
            <h4 className="font-bold text-lg mb-2">The platform you're using?</h4>
            <p className="text-gray-400">
              They don't have your identity. They have a V.A.I. number. That's it.
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold text-lg mb-2">ChainPass?</h4>
            <p className="text-gray-400">
              We have your verified photo and V.A.I. number.<br/>
              We don't have your name, address, or ID number.
            </p>
          </div>
          <div className="card">
            <h4 className="font-bold text-lg mb-2">ComplyCube?</h4>
            <p className="text-gray-400">
              They verified your ID. Then deleted it.
            </p>
          </div>
        </div>

        {/* Identity Retrieval */}
        <div className="card mb-16 border-teal-900/50">
          <h2 className="text-2xl font-bold mb-4">The Only Way To Retrieve Your Identity</h2>
          <p className="text-3xl text-teal-400 mb-4">You're in danger.</p>
          <p className="text-gray-400 mb-4">
            Real danger. Real emergency.<br/>
            The platform requests retrieval.<br/>
            ChainPass validates. ComplyCube retrieves.<br/>
            Law enforcement finds you.
          </p>
          <p className="text-gray-300">
            Not because someone's curious.<br/>
            Not because someone's angry.<br/>
            <strong>Only because you need help.</strong>
          </p>
        </div>

        {/* Verify Once */}
        <div className="card mb-16">
          <h2 className="text-2xl font-bold mb-4">Verify Once. Use Everywhere.</h2>
          <p className="text-gray-400 mb-6">
            One V.A.I. works across every integrated platform.<br/>
            No re-verifying. No re-uploading ID.<br/>
            Portable. Permanent. Protected.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-3xl font-bold text-teal-400">$99</span>
            <span className="text-gray-400">to create</span>
            <span className="text-3xl font-bold text-teal-400">$99</span>
            <span className="text-gray-400">/year to renew</span>
          </div>
        </div>

        {/* Get Your V.A.I. */}
        <h2 className="text-2xl font-bold mb-6">Get Your V.A.I. Through</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="https://vairify.com" target="_blank" rel="noopener noreferrer" className="card hover:border-teal-500 transition-colors">
            <span className="badge badge-live mb-2">LIVE NOW</span>
            <h4 className="font-bold text-lg">Vairify</h4>
            <p className="text-gray-400">Safety platform for adult services</p>
          </a>
          <div className="card opacity-60">
            <span className="badge badge-soon mb-2">COMING SOON</span>
            <h4 className="font-bold text-lg">More platforms</h4>
            <p className="text-gray-400">Every 2 days</p>
          </div>
        </div>
        <Link to="/partners" className="text-teal-400 hover:text-teal-300 transition-colors mt-4 inline-block">
          See all platforms →
        </Link>

      </div>
    </main>
  );
}

export default Individuals;
