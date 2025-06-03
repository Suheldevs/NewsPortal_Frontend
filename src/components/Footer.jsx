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

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* Top Categories Section */}
      <div className="border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg font-bold mb-4 text-gray-900">
            TOP CATEGORIES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-2">
            {topCategories.map((category, index) => (
              <div key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0"></span>
                <a href="#" className="text-gray-600 hover:text-red-500 transition-colors text-sm font-medium">
                  {category}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-red-500 mb-3">NewsPort</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Your trusted source for breaking news, in-depth analysis, and comprehensive coverage 
                  of events that matter most to you and your community.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                  123 News Street, Mumbai - 400001
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Phone className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                  +91 98765 43210
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Mail className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                  contact@newsport.com
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                  24/7 News Updates
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-red-500 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Cities */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Top Cities</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {cities.map((city, index) => (
                  <div key={index}>
                    <a href="#" className="text-gray-600 hover:text-red-500 transition-colors text-sm">
                      {city} News
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="w-9 h-9 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-9 h-9 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-9 h-9 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-9 h-9 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors">
                  <Youtube className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-9 h-9 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-200 py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Stay Updated</h3>
              <p className="text-gray-600 text-sm">Get the latest news delivered straight to your inbox</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:border-red-500 text-gray-800 placeholder-gray-400 w-64"
              />
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-r-lg transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-600 text-sm mb-3 md:mb-0">
              © 2025 NewsPort. All rights reserved. | Designed with ❤️ in India
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-red-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-red-500 text-sm transition-colors">Terms of Service</a>
              <button 
                onClick={scrollToTop}
                className="w-9 h-9 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <ArrowUp className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;