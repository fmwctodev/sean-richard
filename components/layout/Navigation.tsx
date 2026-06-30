'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
          ? 'bg-bg-primary/85 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[clamp(24px,5vw,80px)]">
        <div className="flex items-center justify-between h-[76px] gap-4">
          <Link
            href="/"
            className="font-serif italic text-[22px] text-ink-primary hover:text-ink-secondary transition-colors shrink-0"
            style={{ letterSpacing: '-0.01em' }}
          >
            Sean<span className="text-accent">·</span>Richard
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                href={link.to!}
                className={`text-[14px] transition-colors ${
                  pathname === link.to ? 'text-ink-primary' : 'text-ink-secondary hover:text-ink-primary'
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
              className="hidden sm:inline-flex items-center gap-2 px-[18px] py-[10px] border border-line-strong text-ink-primary font-mono uppercase rounded-full hover:border-accent hover:text-accent transition-colors"
              style={{ fontSize: '12px', letterSpacing: '0.04em' }}
            >
              Resume <span aria-hidden>↓</span>
            </a>
            <button
              className="lg:hidden text-ink-primary p-3 -mr-3 flex items-center justify-center min-w-[44px] min-h-[44px]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-bg-primary border-t border-line">
          <div className="px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                href={link.to!}
                className={`block text-[15px] transition-colors ${
                  pathname === link.to ? 'text-ink-primary' : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download="Sean_Richard_Resume.pdf"
              onClick={() => trackResumeDownload('footer')}
              className="block text-[15px] text-accent hover:text-accent-light"
            >
              Resume ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
