import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-orange-500/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white font-display">
              BLACK <span className="text-orange-500 neon-text">MEDIA</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="nav-link text-white hover:text-orange-500 transition-colors duration-200"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-nosotros')}
              className="nav-link text-white hover:text-orange-500 transition-colors duration-200"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="nav-link text-white hover:text-orange-500 transition-colors duration-200"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="nav-link text-white hover:text-orange-500 transition-colors duration-200"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="cta-button bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-orange-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-orange-500/20">
            <nav className="flex flex-col py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left px-4 py-2 text-white hover:text-orange-500 hover:bg-orange-500/10 transition-colors duration-200"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('sobre-nosotros')}
                className="text-left px-4 py-2 text-white hover:text-orange-500 hover:bg-orange-500/10 transition-colors duration-200"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left px-4 py-2 text-white hover:text-orange-500 hover:bg-orange-500/10 transition-colors duration-200"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left px-4 py-2 text-white hover:text-orange-500 hover:bg-orange-500/10 transition-colors duration-200"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="mx-4 mt-2 cta-button bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;