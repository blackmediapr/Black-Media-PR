import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-500/5"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white mb-6 leading-none">
            BLACK
            <br />
            <span className="text-orange-500 neon-text">MEDIA</span>
            <br />
            AGENCY
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-orange-100 mb-4 font-light">
            {data.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="cta-button bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 group"
            >
              {data.cta}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>

            <Button 
              onClick={() => scrollToSection('sobre-nosotros')}
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 group"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              Conocer más
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;