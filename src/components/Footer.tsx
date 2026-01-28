import { Link } from 'react-router-dom';
import { Linkedin, Github, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Sean Richard</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              American entrepreneur, systems architect, and software operator focused on AI automation and business infrastructure for service-based companies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                About Sean Richard
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Connect</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/a8l-sean-richard/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Autom8ion-Lab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.facebook.com/sean.richard.shm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sean Richard. All rights reserved.</p>
          <p>Founder of Sitehues Media Inc, Autom8ion Lab, BuilderLync Inc, and Tarrytown Roofing LLC</p>
        </div>
      </div>
    </footer>
  );
}
