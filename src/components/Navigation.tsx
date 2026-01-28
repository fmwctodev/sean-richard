import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { label: 'What I Build', scrollTarget: 'services' },
    { label: 'Companies & Projects', scrollTarget: 'projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-xl font-bold tracking-tight hover:text-gray-300 transition-colors">
            SR
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.scrollTarget ? (
                <button
                  key={link.to}
                  onClick={() => scrollToSection(link.scrollTarget)}
                  className="text-sm font-medium transition-colors hover:text-white text-gray-400"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    location.pathname === link.to ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              link.scrollTarget ? (
                <button
                  key={link.to}
                  onClick={() => scrollToSection(link.scrollTarget)}
                  className="block text-sm font-medium transition-colors hover:text-white text-gray-400 text-left"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-sm font-medium transition-colors hover:text-white ${
                    location.pathname === link.to ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
