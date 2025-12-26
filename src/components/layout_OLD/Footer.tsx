import { ExternalLink } from 'lucide-react';
import { TrustBadgePlaceholders } from '../ui/TrustBadgeRow';
import { COPY, EXTERNAL_LINKS } from '../../lib/constants';

const footerLinks = {
  product: [
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'API', href: '/api' },
    { label: 'V.A.I.', href: '/vai' },
    { label: 'R.V.I.', href: '/rvi' },
    { label: 'B.V.I.', href: '/bvi' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  community: [
    { label: 'Forum', href: EXTERNAL_LINKS.forum, external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <span className="font-bold text-lg text-[var(--color-text)]">
                ChainPass
              </span>
            </a>
            <p className="text-sm text-[var(--color-text-muted)]">
              ChainPass Inc.
              <br />
              Delaware C-Corporation
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-text)] mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-text)] mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-text)] mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-text)] mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-8 border-t border-b border-[var(--color-border)]">
          <TrustBadgePlaceholders count={9} />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center">
          <p className="text-sm text-[var(--color-text-muted)] mb-2">
            {COPY.footerTagline}
          </p>
          <p className="text-sm text-[var(--color-text-muted)] mb-2">
            {COPY.footerCompany}
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {COPY.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
