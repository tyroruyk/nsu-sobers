import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-black shadow-2xl border-b-2 border-red-600 fixed w-full top-0 z-50 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* NASA-style Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="relative">
                <img src='/nsu-sobers/logo.png' alt="NSU Sobers Logo" className="h-10 w-10 object-contain" />
                <div className="absolute inset-0 rounded-full border-2 border-red-600 opacity-0 group-hover:opacity-100 animate-pulse"></div>
              </div>
              <div className="flex flex-col sm:block">
                <span className="text-white font-bold text-lg tracking-wider">NSU SOBERS</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:border-b-2 hover:border-red-600 px-3 py-2 text-xs font-semibold tracking-wide transition-all duration-200 uppercase"
                  onClick={link.href.startsWith('#') ? handleSmoothScroll : undefined}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="/rover"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-bold tracking-widest text-xs uppercase border-2 border-red-600 hover:border-white transition-all duration-200 transform hover:shadow-lg hover:cursor-pointer hover:shadow-red-600/50 inline-block"
            >
              EXPLORE ROVER
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-white hover:bg-red-600 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t-2 border-red-600">
          <div className="px-2 pt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white hover:bg-red-600 block px-3 py-2 rounded text-xs font-semibold tracking-wide uppercase transition-colors"
                onClick={(e) => {
                  setIsOpen(false);
                  if (link.href.startsWith('#')) {
                    handleSmoothScroll(e);
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            {/* Rover link for mobile */}
            <a
              href="/rover"
              className="text-gray-300 hover:text-white hover:bg-red-600 block px-3 py-2 rounded text-xs font-semibold tracking-wide uppercase transition-colors"
              onClick={() => setIsOpen(false)}
            >
              EXPLORE ROVER
            </a>
            <div className="px-4 py-3 pt-4 border-t border-red-600">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 font-bold tracking-widest text-xs uppercase border-2 border-red-600 hover:border-white hover:cursor-pointer transition-all">
                JOIN MISSION
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
