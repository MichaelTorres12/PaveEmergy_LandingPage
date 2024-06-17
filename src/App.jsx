import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Apoyados from './components/Apoyados'
import Soluciones from './components/Soluciones';
import VideoSection from './components/VideoSection';
import AppSection from './components/AppSection';
import TechnologySection from './components/TechnologySection';
import AboutUs from './components/AboutUs';
import MarketSection from './components/MarketSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Hero />
      <Apoyados />
      <Soluciones />
      <VideoSection />
      <AppSection />
      <TechnologySection />
      <AboutUs />
      <MarketSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
