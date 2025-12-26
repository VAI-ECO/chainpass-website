import { NAV_LINKS } from '../data/content';

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 max-w-content mx-auto border-b border-cp-border-light">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/assets/chainpass-full-logo.svg"
          alt="ChainPass"
          className="h-24"
        />
      </div>

      {/* Nav Links */}
      <div className="flex gap-8 text-14 text-gray-800">
        {NAV_LINKS.map((link) => (
          <span key={link} className="cursor-pointer hover:text-[#00d4aa] transition-colors">
            {link}
          </span>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <span className="text-14 text-gray-800 cursor-pointer hover:text-[#00d4aa] transition-colors">
          VAI Forum ↗
        </span>
        <button className="bg-[#00d4aa] text-black px-5 py-2.5 rounded-8 font-semibold text-14 hover:opacity-90 transition-opacity">
          Get V.A.I.
        </button>
      </div>
    </nav>
  );
}
