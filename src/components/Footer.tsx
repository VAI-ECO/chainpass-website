export default function Footer() {
  return (
    <footer className="cp-section-dark py-16 px-6" style={{ borderTop: '1px solid #2d3748' }}>
      <div className="max-w-6xl mx-auto">

        {/* Top Row */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold text-white">Chain</span>
              <span className="text-2xl font-bold" style={{ color: 'var(--cp-accent-teal)' }}>Pass</span>
            </div>
            <p className="text-sm text-gray-400">
              The future of identity verification. Zero-knowledge architecture that guarantees anonymity with accountability.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="
              text-sm font-bold uppercase tracking-wider
              text-gray-500
              mb-4
            ">
              Product
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 transition-colors" style={{ textDecoration: 'none' }}>How It Works</a></li>
              <li><a href="#" className="text-gray-300 transition-colors" style={{ textDecoration: 'none' }}>For Platforms</a></li>
              <li><a href="#" className="text-gray-300 transition-colors" style={{ textDecoration: 'none' }}>Pricing</a></li>
              <li><a href="#" className="text-gray-300 transition-colors" style={{ textDecoration: 'none' }}>API Docs</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="
              text-sm font-bold uppercase tracking-wider
              text-gray-500
              mb-4
            ">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 transition-colors" style={{ textDecoration: 'none' }}>About</a></li>
              <li><a href="#" className="text-gray-300 transition-colors" style={{ textDecoration: 'none' }}>Blog</a></li>
              <li><a href="#" className="text-gray-300 transition-colors" style={{ textDecoration: 'none' }}>Contact</a></li>
              <li><a href="#" className="text-gray-300 transition-colors flex items-center gap-1" style={{ textDecoration: 'none' }}>VAI Forum <span className="text-xs">↗</span></a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="
              text-sm font-bold uppercase tracking-wider
              text-gray-500
              mb-4
            ">
              Legal
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 transition-colors" style={{ textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 transition-colors" style={{ textDecoration: 'none' }}>Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 transition-colors" style={{ textDecoration: 'none' }}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 ChainPass.ID — Say Hello World Inc.
          </p>
          <p className="text-sm text-gray-500">
            Delaware, USA
          </p>
        </div>
      </div>
    </footer>
  );
}
