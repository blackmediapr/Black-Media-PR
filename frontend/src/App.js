import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Mock Data
import mockData from './data/mock';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection data={mockData.hero} />
      <AboutSection data={mockData.aboutUs} />
      <ServicesSection data={mockData.services} />
      <PortfolioSection data={mockData.portfolio} />
      <ContactSection data={mockData.contact} />
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;