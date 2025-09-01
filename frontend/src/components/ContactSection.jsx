import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    if (formData.name && formData.email && formData.message) {
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } else {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <section id="contacto" className="py-24 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase text-white mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-orange-500/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Cuéntanos tu proyecto</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-black/50 border-orange-500/30 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-black/50 border-orange-500/30 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-black/50 border-orange-500/30 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                    placeholder="Tu empresa"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Servicio
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-orange-500/30 text-white rounded-md px-3 py-2 focus:border-orange-500 focus:ring-orange-500/20"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="video">Producción de Videos</option>
                    <option value="fotografia">Fotografía Profesional</option>
                    <option value="diseno">Diseño Gráfico</option>
                    <option value="branding">Branding & Identidad</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-black/50 border-orange-500/30 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                  placeholder="Cuéntanos sobre tu proyecto, objetivos y presupuesto aproximado..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 group"
              >
                Enviar mensaje
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-orange-500/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500/20 rounded-lg p-3">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">{data.info.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500/20 rounded-lg p-3">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Teléfono</p>
                    <p className="text-white font-medium">{data.info.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500/20 rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Ubicación</p>
                    <p className="text-white font-medium">{data.info.address}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-to-br from-gray-900 to-black border-orange-500/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Síguenos</h3>
              
              <div className="space-y-4">
                <a 
                  href={`https://instagram.com/${data.social.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-black/50 rounded-lg hover:bg-orange-500/10 hover:border-orange-500/30 border border-transparent transition-all duration-300 group"
                >
                  <Instagram className="h-6 w-6 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-white font-medium">Instagram</p>
                    <p className="text-gray-400 text-sm">{data.social.instagram}</p>
                  </div>
                </a>
                
                <a 
                  href={`https://linkedin.com/company/${data.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-black/50 rounded-lg hover:bg-orange-500/10 hover:border-orange-500/30 border border-transparent transition-all duration-300 group"
                >
                  <Linkedin className="h-6 w-6 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-gray-400 text-sm">{data.social.linkedin}</p>
                  </div>
                </a>
                
                <a 
                  href={`https://youtube.com/@${data.social.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-black/50 rounded-lg hover:bg-orange-500/10 hover:border-orange-500/30 border border-transparent transition-all duration-300 group"
                >
                  <Youtube className="h-6 w-6 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-white font-medium">YouTube</p>
                    <p className="text-gray-400 text-sm">{data.social.youtube}</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;