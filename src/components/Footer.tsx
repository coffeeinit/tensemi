import React from 'react';
import { Mail, MapPin, Linkedin, Twitter, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSectionChange: (section: string) => void;
}

export default function Footer({ onSectionChange }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onSectionChange('home');
  };

  const footerLinks = {
    Company: [
      { label: 'About Us', section: 'about' },
      { label: 'Our Capabilities', section: 'capabilities' },
      { label: 'Industries', section: 'industries' },
      { label: 'Careers', section: 'careers' }
    ],
    Services: [
      { label: 'Semiconductor Design', section: 'capabilities' },
      { label: 'PCB Fabrication', section: 'capabilities' },
      { label: 'Embedded Systems', section: 'capabilities' },
      { label: 'R&D Solutions', section: 'capabilities' }
    ],
    Contact: [
      { label: 'Get in Touch', section: 'contact' },
      { label: 'Partnerships', section: 'contact' },
      { label: 'Support', section: 'contact' },
      { label: 'Visit Us', section: 'contact' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/assets/Tensemi-Logo-1-1536x522.webp" 
                alt="Tensemi" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Powering innovation from rural India. End-to-end semiconductor, PCB, and electronics 
              system development—built in Tenkasi.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/tensemi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/tensemi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@tensemi.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => onSectionChange(link.section)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest updates on our innovations and job opportunities.</p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 rounded-l-xl border-0 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <button className="bg-emerald-600 px-6 py-3 rounded-r-xl hover:bg-emerald-700 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm">
              <MapPin size={16} className="mr-2" />
              <span>Tenkasi, Tamil Nadu, India</span>
            </div>
            
            <div className="flex items-center mt-4 md:mt-0">
              <p className="text-gray-400 text-sm mr-6">
                © 2024 Tensemi Technologies. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}