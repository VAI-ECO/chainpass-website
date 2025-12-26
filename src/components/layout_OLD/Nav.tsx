import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { NAV_LINKS, EXTERNAL_LINKS } from '../../lib/constants';

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CP</span>
            </div>
            <span className="font-bold text-lg text-[var(--color-text)]">
              ChainPass
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <a
              href={EXTERNAL_LINKS.forum}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              Forum
              <ExternalLink className="w-3 h-3" />
            </a>

            <Button
              as="a"
              href={EXTERNAL_LINKS.app}
              isExternal
              variant="primary"
              size="sm"
            >
              Get V.A.I.
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[var(--color-text-secondary)]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--color-border)]">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-[var(--color-border)]" />
              <a
                href={EXTERNAL_LINKS.forum}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[var(--color-text-secondary)]"
              >
                Forum
                <ExternalLink className="w-3 h-3" />
              </a>
              <Button
                as="a"
                href={EXTERNAL_LINKS.app}
                isExternal
                variant="primary"
                fullWidth
              >
                Get V.A.I.
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
