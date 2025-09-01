import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Filter } from 'lucide-react';

const PortfolioSection = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState('todos');

  // Get unique categories
  const categories = ['todos', ...new Set(data.map(item => item.category))];
  
  // Filter portfolio items
  const filteredPortfolio = selectedFilter === 'todos' 
    ? data 
    : data.filter(item => item.category === selectedFilter);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase text-white mb-6">
            Nuestro
            <span className="block text-orange-500 neon-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Descubre algunos de nuestros proyectos más destacados y la calidad que ofrecemos
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-6 py-2 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
                  selectedFilter === category
                    ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-orange-500/20 hover:border-orange-500/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50 rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-6 w-6 text-white bg-orange-500 rounded-full p-1" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 hover:bg-orange-500/30">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-black/50 text-orange-400 rounded-full border border-orange-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">¿Te gusta lo que ves?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cta-button bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105"
          >
            Crear proyecto juntos
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;