'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/content/nav';
import { trackResumeDownload } from '@/lib/analytics';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-sm border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:text-gray-300 transition-colors shrink-0"
          >
            SR
          </Link>

          <div className="hidden lg:flex items-center space-x-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                href={link.to!}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  pathname === link.to ? 'text-white' : 'text-gray-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Sean_Richard_Resume.pdf"
              onClick={() => trackResumeDownload('footer')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/15 text-xs font-semibold text-gray-200 hover:border-accent hover:text-accent transition-colors rounded-full"
            >
              <Download size={13} />
              Resume
            </a>
            <button
              className="lg:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                href={link.to!}
                className={`block text-sm font-medium transition-colors hover:text-white ${
                  pathname === link.to ? 'text-white' : 'text-gray-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download="Sean_Richard_Resume.pdf"
              onClick={() => trackResumeDownload('footer')}
              className="block text-sm font-medium text-accent hover:text-accent-light"
            >
              Resume ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
