import React from 'react';
import { Cpu, CircuitBoard, Cog, Rocket, FlaskConical, ArrowRight } from 'lucide-react';

interface CapabilitiesProps {
  onSectionChange: (section: string) => void;
}

export default function Capabilities({ onSectionChange }: CapabilitiesProps) {
  const services = [
    {
      icon: <Cpu className="text-emerald-600" size={32} />,
      title: "Semiconductor Design & Development",
      description: "Custom, high-efficiency semiconductor chips optimized for performance, power, and reliability.",
      capabilities: [
        "ASIC/FPGA Design",
        "RTL Coding & Simulation", 
        "SoC Architecture Design",
        "Verification & Validation",
        "Silicon Prototyping"
      ],
      gradient: "from-emerald-50 to-emerald-100",
      border: "border-emerald-200"
    },
    {
      icon: <CircuitBoard className="text-amber-600" size={32} />,
      title: "PCB Fabrication & Assembly",
      description: "Precision PCB fabrication from single-layer to multilayer, with rapid prototyping support.",
      capabilities: [
        "Custom PCB Layout Design",
        "Multilayer PCB Fabrication",
        "Surface Mount Technology (SMT)",
        "Quality Inspection & Testing",
        "Rapid Prototyping Services"
      ],
      gradient: "from-amber-50 to-amber-100",
      border: "border-amber-200"
    },
    {
      icon: <Cog className="text-emerald-600" size={32} />,
      title: "Embedded Systems Development",
      description: "Complete system solutions from microcontroller-based designs to fully integrated platforms.",
      capabilities: [
        "Embedded Hardware Design",
        "Firmware & Software Integration",
        "System Testing & Validation",
        "IoT Device Development",
        "Power Optimization"
      ],
      gradient: "from-emerald-50 to-emerald-100",
      border: "border-emerald-200"
    },
    {
      icon: <Rocket className="text-amber-600" size={32} />,
      title: "Prototype to Production Support",
      description: "Scale your tested concepts for reliable, cost-effective production with full manufacturability.",
      capabilities: [
        "DFM (Design for Manufacturability)",
        "Small-batch Pilot Runs",
        "Scalability Assessment",
        "Component Sourcing & BOM Optimization"
      ],
      gradient: "from-amber-50 to-amber-100",
      border: "border-amber-200"
    },
    {
      icon: <FlaskConical className="text-emerald-600" size={32} />,
      title: "Research & Development Lab",
      description: "In-house R&D team constantly pushing the limits of hardware performance and innovation.",
      capabilities: [
        "Semiconductor Material Research",
        "High-speed Circuit Design",
        "Low-power Architecture Optimization",
        "Thermal Management Techniques"
      ],
      gradient: "from-emerald-50 to-emerald-100",
      border: "border-emerald-200"
    }
  ];

  const advantages = [
    "Complete in-house control—no third-party dependencies",
    "Scalable from prototype to mass production", 
    "Local talent with global expertise",
    "Shorter lead times with uncompromised quality"
  ];

  return (
    <section id="capabilities" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
      <div className="absolute top-20 left-20 w-64 h-64 border border-emerald-400/20 rounded-lg animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-amber-500/10 rounded-full animate-bounce"></div>
      
      {/* Floating PCB Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            End-to-End Electronics Development
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to chip—complete electronics innovation. We specialize in comprehensive hardware solutions, 
            delivering everything from semiconductor design to complete embedded systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className={`bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border ${service.border} hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-circuit-pattern opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gray-700/50 rounded-xl flex items-center justify-center mr-6 border border-emerald-500/30 relative z-10">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed relative z-10">{service.description}</p>
                </div>
              </div>
              
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 relative z-10">
                <h4 className="font-semibold text-white mb-4">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {service.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Tensemi */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-emerald-500/30 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
          <h3 className="text-3xl font-bold text-white text-center mb-12 relative z-10">Why Choose Tensemi?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-amber-600 rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
          <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Product Vision?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's build it—faster, better, and smarter. From concept to reality with Tensemi.
          </p>
          <button
            onClick={() => onSectionChange('contact')}
            className="group bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Start Your Project Today
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}