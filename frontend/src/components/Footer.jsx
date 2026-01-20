import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rose-50 to-amber-50 border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_8011bedc-43b8-4383-be26-1e14cb04c333/artifacts/usv687xq_Fudge%20Forest%20%28Image%201%29-Photoroom.png" 
              alt="Fudge Forest Bakehouse" 
              className="h-20 w-auto mb-3"
            />
            <p className="text-sm text-gray-600 italic">
              Perfection by Confection
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Crafting elegant cakes for life's sweetest moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 hover:text-rose-700 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-gray-600 hover:text-rose-700 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-600 hover:text-rose-700 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/classes"
                  className="text-sm text-gray-600 hover:text-rose-700 transition-colors"
                >
                  Baking Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-rose-600 mt-1" />
                <div className="text-sm text-gray-600">
                  {contactInfo.phones.map((phone, index) => (
                    <div key={index}>{phone}</div>
                  ))}
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-rose-600 mt-1" />
                <p className="text-sm text-gray-600">
                  {contactInfo.location}
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href={contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:text-rose-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:text-rose-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-rose-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Fudge Forest Bakehouse – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;