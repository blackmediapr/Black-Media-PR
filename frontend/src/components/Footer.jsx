import React from 'react';
import { Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-orange-500/20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-display font-black uppercase text-white mb-4">
              BLACK <span className="text-orange-500 neon-text">MEDIA</span> AGENCY
            </h2>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Creamos contenido visual excepcional que conecta marcas con sus audiencias. 
              Especialistas en video, fotografía, diseño gráfico y branding.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/blackmediaagency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-black p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/black-media-agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-black p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@BlackMediaAgency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-black p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre-nosotros')}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Sobre nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Producción de Videos</li>
              <li className="text-gray-400">Fotografía Profesional</li>
              <li className="text-gray-400">Diseño Gráfico</li>
              <li className="text-gray-400">Branding & Identidad</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Black Media Agency. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:hola@blackmediaagency.com"
                className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">hola@blackmediaagency.com</span>
              </a>
              <a 
                href="tel:+15551234567"
                className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;