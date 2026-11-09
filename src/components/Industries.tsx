import React from 'react';
import { Smartphone, Car, Settings, Heart, Plane, GraduationCap } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: <Smartphone className="text-emerald-600" size={32} />,
      title: "Consumer Electronics",
      description: "Smart home devices, wearables, and modern consumer tech with compact, power-efficient components.",
      solutions: [
        "IoT sensor integration and PCB design",
        "Low-power microcontroller solutions", 
        "Compact multilayer PCB fabrication",
        "Battery management systems"
      ],
      color: "emerald"
    },
    {
      icon: <Car className="text-amber-600" size={32} />,
      title: "Automotive & Electric Vehicles",
      description: "Supporting intelligent and electric mobility with robust ECUs and battery management systems.",
      solutions: [
        "EV battery management and motor controllers",
        "Vehicle communication interfaces (CAN, LIN)",
        "Power electronics and control boards",
        "Automotive-grade PCB manufacturing"
      ],
      color: "amber"
    },
    {
      icon: <Settings className="text-emerald-600" size={32} />,
      title: "Industrial Automation",
      description: "Embedded intelligence for machinery, robotics, and factory automation systems.",
      solutions: [
        "Industrial-grade PCB design and fabrication",
        "Embedded controllers and PLC systems",
        "Sensor integration & IoT modules",
        "Robotics control systems"
      ],
      color: "emerald"
    },
    {
      icon: <Heart className="text-amber-600" size={32} />,
      title: "Healthcare Technology",
      description: "Safe, compact, and high-precision electronics for diagnostics and medical monitoring devices.",
      solutions: [
        "Medical device PCB design and fabrication",
        "Bio-signal processing and amplification",
        "Portable diagnostic device controllers",
        "Low-power monitoring systems"
      ],
      color: "amber"
    },
    {
      icon: <Plane className="text-emerald-600" size={32} />,
      title: "Aerospace & Defense",
      description: "Custom electronics built for extreme environments with uncompromising precision and reliability.",
      solutions: [
        "High-reliability PCB manufacturing",
        "Radar and communication modules",
        "Defense-grade embedded controllers",
        "Avionics system integration"
      ],
      color: "emerald"
    },
    {
      icon: <GraduationCap className="text-amber-600" size={32} />,
      title: "Startups & Research",
      description: "Collaborating with hardware startups and research institutions on innovative proof-of-concepts.",
      solutions: [
        "Rapid prototyping and pilot runs",
        "Custom chip and PCB development",
        "Engineering support for grant projects",
        "Technology transfer assistance"
      ],
      color: "amber"
    }
  ];

  const colorClasses = {
    emerald: { bg: "from-emerald-50 to-emerald-100", border: "border-emerald-200", icon: "bg-emerald-100" },
    amber: { bg: "from-amber-50 to-amber-100", border: "border-amber-200", icon: "bg-amber-100" }
  };

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hardware solutions tailored for every sector. We design and build high-performance solutions 
            that power the future across multiple industries, from automotive to aerospace.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const colors = colorClasses[industry.color as keyof typeof colorClasses];
            return (
              <div key={index} className={`bg-gradient-to-br ${colors.bg} p-8 rounded-2xl border ${colors.border} hover:shadow-lg transition-shadow duration-300`}>
                <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{industry.description}</p>
                
                <div className="bg-white/70 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Solutions:</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Transforming Hardware, Transforming Industries</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              No matter your sector, Tensemi is your trusted partner for electronics innovation—from concept to production.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Explore How We Can Help Your Industry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}