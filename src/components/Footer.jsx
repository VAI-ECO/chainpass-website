import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8 mb-12">

          <div>
            <h4 className="font-bold mb-4">⛓️ ChainPass</h4>
            <p className="text-gray-400 text-sm mb-2">
              Zero-knowledge identity verification infrastructure.
            </p>
            <p className="text-gray-500 text-sm">
              Delaware C-Corporation
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/how-it-works" className="hover:text-teal-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/platforms" className="hover:text-teal-400 transition-colors">
                  For Platforms
                </Link>
              </li>
              <li>
                <Link to="/individuals" className="hover:text-teal-400 transition-colors">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link to="/api" className="hover:text-teal-400 transition-colors">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/partners" className="hover:text-teal-400 transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-teal-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 py-6 border-t border-b border-gray-800">
          <span className="text-gray-500 text-sm">ComplyCube Partner</span>
          <span className="text-gray-500 text-sm">SOC 2 Type II</span>
          <span className="text-gray-500 text-sm">ISO 27001</span>
          <span className="text-gray-500 text-sm">203+ Countries</span>
          <span className="text-gray-500 text-sm">Zero-Knowledge Architecture</span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <span>© 2024 ChainPass. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
