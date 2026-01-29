import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import swadLogo from '../assests/swad-logo.png';

// Footer links - single source of truth
const QUICK_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Shop All' },
  { path: '/join-us', label: 'Partner With Us' },
  { path: '/cart', label: 'Cart' },
] as const;

const CATEGORIES = [
  { path: '/products?category=ladoos', label: 'Traditional Ladoos' },
  { path: '/products?category=piths', label: 'Healthy Piths' },
  { path: '/products?category=seasonal', label: 'Seasonal Specials' },
  { path: '/products?category=masalas', label: 'Homemade Masalas' },
] as const;

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white hidden md:block">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={swadLogo}
                alt=""
                className="h-12 w-12 object-contain bg-white rounded-xl p-1"
              />
              <div>
                <span className="text-2xl font-bold font-serif text-white">Swad</span>
                <p className="text-xs text-gray-400">Homemade Goodness</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Preserving tradition through authentic spices & ancient grains.
              Empowering rural women entrepreneurs since 2020.
            </p>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-green-900/30 border border-green-700/50 px-3 py-2 rounded-lg">
              <span className="text-green-400 text-sm font-medium">✓ FSSAI Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Categories
            </h3>
            <ul className="space-y-3">
              {CATEGORIES.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Get In Touch
            </h3>
            <address className="not-italic space-y-4 mb-6">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ambedkar Chowk, 52, Warje,<br />
                  Pune, Maharashtra 411052
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+919021061883"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  +91 90210 61883
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:swadhomemade@gmail.com"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  swadhomemade@gmail.com
                </a>
              </div>
            </address>

            {/* CTA Button */}
            <a
              href="https://wa.me/919021061883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} Swad Food Products. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-gray-500 text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/swadfoods"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="https://facebook.com/swadfoods"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export { Footer };