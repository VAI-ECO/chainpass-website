import { Link } from 'react-router-dom';

function Partners() {
  return (
    <main className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4 text-center">Partners & Launch Calendar</h1>
        <p className="text-xl text-gray-400 text-center mb-4">
          Coming fast. Coming hot.
        </p>
        <p className="text-2xl text-center mb-16">
          <span className="text-teal-400">10+ platforms.</span> 20 days. Every other day.
        </p>

        {/* Live Now */}
        <h2 className="text-2xl font-bold mb-6">Live Now</h2>
        <div className="card mb-12 border-green-900/50">
          <div className="flex items-center gap-4">
            <span className="badge badge-live">LIVE</span>
            <div>
              <h3 className="font-bold text-xl">Vairify</h3>
              <p className="text-gray-400">Safety platform for adult services</p>
            </div>
          </div>
        </div>

        {/* Launch Timeline */}
        <h2 className="text-2xl font-bold mb-6">Launch Timeline</h2>

        <div className="space-y-4 mb-12">

          <div className="timeline-item">
            <div className="timeline-marker bg-green-500"></div>
            <div className="timeline-content">
              <span className="text-gray-500">Day 0</span>
              <h4 className="font-bold">Vairify</h4>
              <span className="badge badge-live ml-2">LIVE</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker bg-gray-600"></div>
            <div className="timeline-content">
              <span className="text-gray-500">Day 2</span>
              <h4 className="font-bold text-gray-400">[Announcement Incoming]</h4>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker bg-gray-600"></div>
            <div className="timeline-content">
              <span className="text-gray-500">Day 4</span>
              <h4 className="font-bold text-gray-400">[Announcement Incoming]</h4>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker bg-gray-600"></div>
            <div className="timeline-content">
              <span className="text-gray-500">Day 6</span>
              <h4 className="font-bold text-gray-400">[Announcement Incoming]</h4>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker bg-gray-600"></div>
            <div className="timeline-content">
              <span className="text-gray-500">Day 8</span>
              <h4 className="font-bold text-gray-400">[Announcement Incoming]</h4>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker bg-blue-500"></div>
            <div className="timeline-content">
              <span className="text-gray-500">Day 10</span>
              <h4 className="font-bold">Proton Mail Partnership</h4>
              <span className="badge badge-soon ml-2">ANNOUNCING</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker bg-gray-600"></div>
            <div className="timeline-content">
              <span className="text-gray-500">Day 12</span>
              <h4 className="font-bold text-gray-400">[Announcement Incoming]</h4>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker bg-gray-600"></div>
            <div className="timeline-content">
              <span className="text-gray-500">Day 14</span>
              <h4 className="font-bold text-gray-400">[Announcement Incoming]</h4>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker bg-gray-600"></div>
            <div className="timeline-content">
              <span className="text-gray-500">Day 16</span>
              <h4 className="font-bold text-gray-400">[Announcement Incoming]</h4>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker bg-gray-600"></div>
            <div className="timeline-content">
              <span className="text-gray-500">Day 18</span>
              <h4 className="font-bold text-gray-400">[Announcement Incoming]</h4>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker bg-gray-600"></div>
            <div className="timeline-content">
              <span className="text-gray-500">Day 20</span>
              <h4 className="font-bold text-gray-400">[Announcement Incoming]</h4>
            </div>
          </div>

        </div>

        {/* Committed Partners */}
        <h2 className="text-2xl font-bold mb-6">Committed Partners</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="card">
            <h4 className="font-bold">Avictria</h4>
            <p className="text-gray-400">December 2024</p>
          </div>
          <div className="card">
            <h4 className="font-bold">AVChexx</h4>
            <p className="text-gray-400">July 2026</p>
          </div>
          <div className="card">
            <h4 className="font-bold">Erotic Kneads</h4>
            <p className="text-gray-400">Q1 2026</p>
          </div>
          <div className="card">
            <h4 className="font-bold">Girlfriend Exchange</h4>
            <p className="text-gray-400">Q1 2026</p>
          </div>
        </div>

        {/* CTA */}
        <div className="card text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Integrate?</h2>
          <p className="text-gray-400 mb-6">
            Join the ecosystem. Free API. Zero liability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/api" className="btn-secondary">View API Docs</Link>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Partners;
