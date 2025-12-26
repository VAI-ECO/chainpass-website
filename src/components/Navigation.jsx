import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-gray-900 dark:text-white">

        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img src="/assets/chainpass-full-logo.svg" alt="ChainPass" className="h-8" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/how-it-works" className="hover:text-teal-400 transition-colors">
            How It Works
          </Link>
          <Link to="/platforms" className="hover:text-teal-400 transition-colors">
            For Platforms
          </Link>
          <Link to="/individuals" className="hover:text-teal-400 transition-colors">
            For Individuals
          </Link>
          <Link to="/api" className="hover:text-teal-400 transition-colors">
            API Docs
          </Link>
          <Link to="/partners" className="hover:text-teal-400 transition-colors">
            Partners
          </Link>
          <Link to="/faq" className="hover:text-teal-400 transition-colors">
            FAQ
          </Link>
        </div>

        <Link to="/contact" className="hidden md:block btn-primary text-sm py-2 px-4">
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col gap-4 p-6">
            <Link
              to="/how-it-works"
              className="hover:text-teal-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/platforms"
              className="hover:text-teal-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Platforms
            </Link>
            <Link
              to="/individuals"
              className="hover:text-teal-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Individuals
            </Link>
            <Link
              to="/api"
              className="hover:text-teal-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              API Docs
            </Link>
            <Link
              to="/partners"
              className="hover:text-teal-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </Link>
            <Link
              to="/faq"
              className="hover:text-teal-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="btn-primary text-sm py-2 px-4 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
