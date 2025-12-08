import { Link } from 'react-router-dom';
import VAIBadge from '../components/VAIBadge';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">

        <div className="mb-8">
          <VAIBadge size="large" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Zero-Knowledge Identity Verification
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          We verify users are real.<br/>
          We don't store who they are.
        </p>

        <div className="text-2xl font-semibold text-teal-400 mb-12 max-w-3xl">
          See this badge? Your identity can't be hacked.<br/>
          It's not there.
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link to="/platforms" className="btn-primary">For Platforms →</Link>
          <Link to="/individuals" className="btn-secondary">For Individuals →</Link>
        </div>

      </section>

      {/* Value Props Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          <div className="card">
            <h3 className="text-2xl font-bold mb-4">For Platforms</h3>
            <p className="text-gray-400 mb-6">
              Remove your biggest liability.<br/>
              Verified users. Zero identity storage.<br/>
              Free API.
            </p>
            <Link to="/platforms" className="text-teal-400 hover:text-teal-300 transition-colors">
              Learn more →
            </Link>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold mb-4">For Individuals</h3>
            <p className="text-gray-400 mb-6">
              Prove you're real without revealing who you are.<br/>
              One V.A.I. works everywhere.<br/>
              $99/year.
            </p>
            <Link to="/individuals" className="text-teal-400 hover:text-teal-300 transition-colors">
              Learn more →
            </Link>
          </div>

        </div>
      </section>

      {/* Launch Drumbeat Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">Coming Fast. Coming Hot.</h2>
          <p className="text-xl text-gray-400 mb-8">
            10+ platform launches in 20 days.<br/>
            Every other day, a new announcement.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <span className="badge badge-live">Vairify — LIVE</span>
            <span className="badge badge-soon">Avictria — December</span>
            <span className="badge badge-soon">+8 more coming</span>
          </div>

          <Link to="/partners" className="btn-secondary">
            See Launch Calendar →
          </Link>

        </div>
      </section>

      {/* Trust Badges Footer */}
      <section className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 items-center">

          <div className="trust-badge">
            <div className="font-bold">ComplyCube Partner</div>
            <div className="text-xs text-gray-500 mt-1">SOC 2 Type II • ISO 27001</div>
          </div>

          <div className="trust-badge">
            <div className="font-bold">203+ Countries</div>
          </div>

          <div className="trust-badge">
            <div className="font-bold">Bank-Level Verification</div>
          </div>

          <div className="trust-badge">
            <div className="font-bold">Zero-Knowledge Architecture</div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;
