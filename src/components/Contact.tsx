import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Project',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 2 business days.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-emerald-600" size={24} />,
      title: "Email Us",
      details: [
        "General: hello@tensemi.com",
        "Careers: careers@tensemi.com", 
        "Partnerships: partnerships@tensemi.com",
        "Technical: tech@tensemi.com"
      ]
    },
    {
      icon: <MapPin className="text-amber-600" size={24} />,
      title: "Visit Us",
      details: [
        "Tensemi Technologies Pvt. Ltd.",
        "Plot No. 45, Industrial Estate",
        "Tenkasi, Tamil Nadu 627811, India",
        "Experience rural innovation firsthand"
      ]
    },
    {
      icon: <Phone className="text-emerald-600" size={24} />,
      title: "Call Us",
      details: [
        "+91 94423 45678",
        "Mon-Fri: 9:00 AM - 6:00 PM IST",
        "Sat: 9:00 AM - 1:00 PM IST",
        "Quick response guaranteed"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Build the Future
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent block">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to collaborate, explore career opportunities, or need expert help with your next electronic product, 
            we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                </div>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Connected</h3>
              <p className="text-gray-600 text-sm mb-4">Follow us for updates on innovations, job openings, and industry insights:</p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/tensemi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white hover:bg-emerald-700 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/tensemi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-200">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Have a Project in Mind? Let's Talk.</h3>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 2 business days.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Inquiry *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="Project">Project</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Careers">Careers</option>
                      <option value="Technical Consultation">Technical Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project, requirements, or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-emerald-600 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Why Visit Us in Tenkasi?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Come experience how rural India is powering world-class tech. Tour our facility, meet the team, 
            and witness the future of hardware innovation in action.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
}