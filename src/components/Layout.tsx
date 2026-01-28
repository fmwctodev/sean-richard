import { ReactNode, useEffect, useState } from 'react';
import Navigation from './Navigation';
import SchemaMarkup from './SchemaMarkup';
import Footer from './Footer';
import RainingLetters from './ui/modern-animated-hero-section';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <SchemaMarkup />

      {/* Raining Letters Background */}
      <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
        <RainingLetters />
      </div>

      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent to-accent-dark z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="relative z-10">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
