import React from 'react';
import { Target, Eye, MapPin, Users, Lightbulb, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="text-emerald-600" size={24} />,
      title: "All Under One Roof",
      description: "Design, prototyping, fabrication, testing, and production—no third-party delays, no quality compromises."
    },
    {
      icon: <Lightbulb className="text-amber-600" size={24} />,
      title: "Research-Driven Culture",
      description: "Innovation isn't a department. It's our foundation. Our team continuously explores new architectures and materials."
    },
    {
      icon: <Award className="text-emerald-600" size={24} />,
      title: "End-to-End Solutions",
      description: "From your idea to market-ready product, we walk the journey with you—supporting every stage of development."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* PCB Pattern Background */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-64 h-64 border border-emerald-200 rounded-lg rotate-45 opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-amber-100 rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Redefining Deep-Tech from
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent block">
              Rural India
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Tensemi, we're democratizing innovation by building high-performance electronic systems right from the heart of Tenkasi, Tamil Nadu.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border border-emerald-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-circuit-pattern opacity-10"></div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To democratize innovation by building high-performance electronic systems—from semiconductor chips to PCB fabrication—right from Tenkasi. We bridge the gap between rural potential and global technology standards by developing a full-fledged hardware ecosystem that rivals global benchmarks.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl border border-amber-200 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-circuit-pattern opacity-10"></div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mr-4">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To emerge as India's most trusted end-to-end electronics manufacturing partner, while proving that cutting-edge innovation doesn't need a metro pin code. We envision rural deep-tech startups and industry leaders confidently collaborating with us.
            </p>
          </div>
        </div>

        {/* Why Tenkasi Section */}
        <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-8 lg:p-12 mb-20 border border-amber-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mr-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Why Tenkasi?</h3>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We chose Tenkasi not by chance, but by conviction. Our presence here is an answer to a long-standing question: 
            <strong className="text-amber-600"> "Can world-class technology be built in a village?"</strong>
          </p>
          
          <p className="text-2xl font-bold text-emerald-600 mb-8">At Tensemi, the answer is a bold Yes.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Nurture local talent and prevent brain drain",
              "Decentralize tech innovation from major cities", 
              "Create jobs and uplift rural communities",
              "Reduce operational overheads while maintaining quality"
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-sm text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Makes Us Different?</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-emerald-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-circuit-pattern opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 relative z-10">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed relative z-10">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-amber-600 rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
          <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-4">Let's Build the Future Together</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We're not just creating electronic systems—we're creating a movement for rural innovation. Join us on this bold journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
              Partner With Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200">
              Explore Opportunities
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}