import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'industries', label: 'Industries' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onSectionChange('home')}>
            <img 
              src="/assets/Tensemi-Logo-1-1536x522.webp" 
              alt="Tensemi" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-emerald-600 ${
                  activeSection === item.id 
                    ? 'text-emerald-600 border-b-2 border-emerald-600' 
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => onSectionChange('contact')}
              className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-circuit-pattern opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <span className="relative z-10">
              Get Started
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 ${
                  activeSection === item.id ? 'text-emerald-600 bg-emerald-50' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-3">
              <button
                onClick={() => {
                  onSectionChange('contact');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}