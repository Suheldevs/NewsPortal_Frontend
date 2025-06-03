import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const topCategories = [
    "Breaking News", "Politics", "Business", "Sports", "Entertainment", "Technology",
    "Health", "Education", "World News", "India News", "Crime", "Weather"
  ];

  const quickLinks = [
    "About Us", "Contact Us", "Privacy Policy", "Terms & Conditions",
    "Editorial Policy", "Advertise With Us", "Careers", "RSS Feeds"
  ];

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad",
    "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Kanpur", "Nagpur"
  ];

  const services = [
    "Live TV", "E-Paper", "Mobile App", "Newsletters", "Podcasts", "Videos"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Categories Section */}
      <div className="border-b border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-700">
            TOP CATEGORIES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-3">
            {topCategories.map((category, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></span>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                  {category}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-red-500 mb-2">NewsPort</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Your trusted source for breaking news, in-depth analysis, and comprehensive coverage 
                  of events that matter most to you and your community.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-red-500 flex-shrink-0" />
                  123 News Street, Media City, Mumbai - 400001
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Phone className="w-4 h-4 mr-3 text-red-500 flex-shrink-0" />
                  +91 98765 43210
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-red-500 flex-shrink-0" />
                  contact@newsport.com
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-3 text-red-500 flex-shrink-0" />
                  24/7 News Updates
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm flex items-center">
                      <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Cities */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Top Cities</h3>
              <ul className="space-y-3">
                {cities.map((city, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm flex items-center">
                      <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                      {city} News
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm flex items-center">
                      <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div>
                <h4 className="text-md font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Get the latest news delivered straight to your inbox</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400 w-64"
              />
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-r-lg transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 NewsPort. All rights reserved. | Designed with ❤️ in India
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Terms of Service</a>
              <button 
                onClick={scrollToTop}
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;