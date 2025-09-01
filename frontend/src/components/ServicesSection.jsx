import React from 'react';
import { Card } from './ui/card';
import { Video, Camera, Palette, Zap, ArrowRight } from 'lucide-react';

const ServicesSection = ({ data }) => {
  const icons = {
    'Video': Video,
    'Camera': Camera,
    'Palette': Palette,
    'Zap': Zap
  };

  return (
    <section id="servicios" className="py-24 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase text-white mb-6">
            Nuestros
            <span className="block text-orange-500 neon-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformamos ideas en contenido visual extraordinario que conecta con tu audiencia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((service, index) => {
            const IconComponent = icons[service.icon] || Video;
            
            return (
              <Card 
                key={service.id}
                className="group bg-gradient-to-br from-gray-900 to-black border-orange-500/20 hover:border-orange-500/50 p-8 rounded-2xl transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="bg-orange-500/10 group-hover:bg-orange-500/20 rounded-xl p-4 w-fit transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-100 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 group-hover:text-gray-400 flex items-center transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center text-orange-500 group-hover:text-orange-400 transition-colors duration-300">
                  <span className="text-sm font-mono uppercase tracking-wider">Conocer más</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">¿No encuentras lo que buscas?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cta-button bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 group"
          >
            Hablemos de tu proyecto
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;