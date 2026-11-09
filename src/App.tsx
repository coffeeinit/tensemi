import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Industries from './components/Industries';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    // Scroll to section if it exists
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'capabilities', 'industries', 'careers', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section === 'home' ? 'hero' : section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main>
        <div id="hero">
          <Hero onSectionChange={handleSectionChange} />
        </div>
        <About />
        <Capabilities onSectionChange={handleSectionChange} />
        <Industries />
        <Careers onSectionChange={handleSectionChange} />
        <Contact />
      </main>
      <Footer onSectionChange={handleSectionChange} />
    </div>
  );
}

export default App;