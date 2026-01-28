import { Linkedin, Github, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Sean Richard</h3>
            <p className="text-gray-400 max-w-md">
              Systems architect and entrepreneur focused on AI automation and business infrastructure
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Connect</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/a8l-sean-richard/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
                <span>Sean Richard on LinkedIn</span>
              </a>
              <a
                href="https://github.com/Autom8ion-Lab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Github size={18} />
                <span>Sean Richard on GitHub</span>
              </a>
              <a
                href="https://www.facebook.com/sean.richard.shm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <Facebook size={18} />
                <span>Sean Richard on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sean Richard. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
