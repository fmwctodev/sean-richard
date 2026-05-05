import Link from 'next/link';
import { Home, User, Mail, Briefcase } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-8xl font-extrabold text-accent mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-300 text-lg mb-12">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            <Mail size={20} />
            Contact
          </Link>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500 mb-4">Quick Links</p>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
            >
              <Home size={16} />
              Home
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
            >
              <User size={16} />
              About
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
            >
              <Briefcase size={16} />
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
            >
              <Mail size={16} />
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
