import React from 'react';
import { ArrowRight, MapPin, Zap, Globe } from 'lucide-react';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

export default function Hero({ onSectionChange }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 min-h-screen flex items-center overflow-hidden">
      {/* Animated PCB Background */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-emerald-400/30 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-amber-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-emerald-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-amber-500/30 rounded-full animate-pulse"></div>
        
        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <path d="M0,100 Q200,50 400,100 T800,100" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M100,0 Q150,200 200,400 T300,800" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center bg-emerald-900/50 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30 backdrop-blur-sm">
              <MapPin size={16} className="mr-2" />
              Innovating from Tenkasi, Tamil Nadu
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Powering Innovation from
              <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent block animate-pulse">
                Rural India
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              End-to-end semiconductor, PCB, and electronics system development—built in Tenkasi. 
              We're proving that world-class technology can emerge from anywhere.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-sm text-gray-400">In-House</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">5+</div>
                <div className="text-sm text-gray-400">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">Rural</div>
                <div className="text-sm text-gray-400">Innovation Hub</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onSectionChange('capabilities')}
                className="group bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-circuit-pattern opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                Explore Our Capabilities
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              <button
                onClick={() => onSectionChange('careers')}
                className="group border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-xl font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                Join the Movement
              </button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative z-10">
            <div className="grid grid-cols-2 gap-6">
              {/* Feature Cards */}
              <div className="space-y-6">
                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
                  <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/30">
                    <Zap className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Semiconductor Design</h3>
                  <p className="text-sm text-gray-300">Custom chip solutions from concept to production</p>
                </div>
                
                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20">
                  <div className="w-12 h-12 bg-amber-900/50 rounded-xl flex items-center justify-center mb-4 border border-amber-500/30">
                    <Globe className="text-amber-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Global Standards</h3>
                  <p className="text-sm text-gray-300">World-class quality from rural innovation</p>
                </div>
              </div>
              
              <div className="space-y-6 pt-12">
                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
                  <div className="w-12 h-12 bg-emerald-900/50 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/30">
                    <MapPin className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Local Impact</h3>
                  <p className="text-sm text-gray-300">Creating opportunities in rural communities</p>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-600 to-amber-600 p-6 rounded-2xl text-white border border-emerald-400/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
                  <div className="relative z-10">
                  <h3 className="font-semibold mb-2">Ready to Innovate?</h3>
                  <p className="text-sm opacity-90 mb-4">Join us in building the future of electronics</p>
                  <button
                    onClick={() => onSectionChange('contact')}
                    className="bg-white/90 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition-colors duration-200"
                  >
                    Get Started
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}