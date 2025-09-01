import React from 'react';
import { Card } from './ui/card';
import { Zap, Target, Award } from 'lucide-react';

const AboutSection = ({ data }) => {
  const icons = {
    'Creatividad': Zap,
    'Calidad': Target,
    'Compromiso': Award
  };

  return (
    <section id="sobre-nosotros" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-white mb-6">
              {data.title}
              <span className="block text-orange-500 neon-text">{data.subtitle}</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {data.description}
            </p>
            
            <div className="bg-gradient-to-r from-orange-500/10 to-transparent p-6 rounded-lg border-l-4 border-orange-500 mb-8">
              <p className="text-orange-100 font-medium">
                {data.mission}
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {data.values.map((value, index) => {
                const IconComponent = icons[value.title] || Zap;
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-orange-500/20 bg-black rounded-lg p-3 group-hover:bg-orange-500/30 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl p-8 border border-orange-500/20">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-black/50 border-orange-500/30 p-6 text-center hover:border-orange-500/50 transition-colors duration-300">
                  <div className="text-3xl font-bold text-orange-500 mb-2">8+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">Años experiencia</div>
                </Card>
                
                <Card className="bg-black/50 border-orange-500/30 p-6 text-center hover:border-orange-500/50 transition-colors duration-300">
                  <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">Proyectos</div>
                </Card>
                
                <Card className="bg-black/50 border-orange-500/30 p-6 text-center hover:border-orange-500/50 transition-colors duration-300">
                  <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">Clientes felices</div>
                </Card>
                
                <Card className="bg-black/50 border-orange-500/30 p-6 text-center hover:border-orange-500/50 transition-colors duration-300">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">Dedicación</div>
                </Card>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full blur-sm opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500/30 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;