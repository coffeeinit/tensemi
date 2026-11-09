import React from 'react';
import { Users, MapPin, Target, Lightbulb, GraduationCap, ArrowRight, Heart } from 'lucide-react';

interface CareersProps {
  onSectionChange: (section: string) => void;
}

export default function Careers({ onSectionChange }: CareersProps) {
  const benefits = [
    {
      icon: <Lightbulb className="text-emerald-600" size={24} />,
      title: "Real Innovation",
      description: "Work on challenging projects in semiconductor design, embedded systems, and electronics R&D—not just routine tasks."
    },
    {
      icon: <MapPin className="text-amber-600" size={24} />,
      title: "Local Roots, Global Vision",
      description: "Be part of a company that's reshaping how and where technology is built, while creating opportunities in rural India."
    },
    {
      icon: <Target className="text-emerald-600" size={24} />,
      title: "End-to-End Ownership",
      description: "Work across the full product lifecycle—from ideation to prototyping to production."
    },
    {
      icon: <Heart className="text-amber-600" size={24} />,
      title: "Inclusive Culture",
      description: "We hire for attitude and ambition, not just degrees. If you're curious and hands-on, there's a place for you."
    }
  ];

  const roles = [
    "Senior VLSI Design Engineers",
    "PCB Design & Layout Engineers", 
    "Embedded Systems Developers",
    "Firmware & Hardware Engineers",
    "Semiconductor Process Engineers",
    "Quality Assurance & Test Engineers",
    "Research Interns (Electronics/Physics/CS/AI)",
    "Production & Manufacturing Experts"
  ];

  const lifeAtTensemi = [
    "Work from the serene foothills of Tenkasi",
    "Be surrounded by builders, not bureaucrats",
    "Take part in weekly tech talks and mentoring sessions",
    "Experience purpose-driven growth—professionally and personally"
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Build the Future of Hardware
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent block">
              with Tensemi
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a movement, not just a company. We're building India's deep-tech revolution from the ground up, 
            and we're inviting bold thinkers and makers to join us.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work with Tensemi?</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Hire */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-emerald-50 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Who We Hire</h3>
            </div>
            <p className="text-gray-700 mb-6">We're looking for talent across disciplines:</p>
            <ul className="space-y-3">
              {roles.map((role, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Fresh Talent Programs</h3>
            </div>
            <p className="text-gray-700 mb-6">
              We offer paid internships and graduate training programs for students and recent graduates 
              who want to explore real-world electronics engineering.
            </p>
            <div className="bg-white p-4 rounded-xl">
              <p className="text-sm text-amber-700 font-medium">
                Local college students are especially encouraged to apply. 
                Your hometown could be the launchpad for your global tech career.
              </p>
            </div>
          </div>
        </div>

        {/* Life at Tensemi */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Life at Tensemi</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeAtTensemi.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-2xl">
            <blockquote className="text-lg italic text-gray-800 mb-4">
              "I never imagined doing cutting-edge chip design outside a metro. Tensemi changed that. The rural setting actually helps us focus better."
            </blockquote>
            <div className="text-sm text-emerald-700 font-medium">— Priya Kumar, Senior VLSI Engineer</div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl">
            <blockquote className="text-lg italic text-gray-800 mb-4">
              "Joined as an intern, stayed as an innovator. The hands-on experience here is unmatched."
            </blockquote>
            <div className="text-sm text-amber-700 font-medium">— Rajesh M., Embedded Systems Developer</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-amber-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Build What Matters?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join us on our mission to make India a global hub for hardware innovation—starting from Tenkasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onSectionChange('contact')}
              className="group bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Apply Now
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200">
              View Job Openings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}