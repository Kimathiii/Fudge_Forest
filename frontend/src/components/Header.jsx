import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/services', label: 'Services' },
    { path: '/classes', label: 'Baking Classes' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_8011bedc-43b8-4383-be26-1e14cb04c333/artifacts/usv687xq_Fudge%20Forest%20%28Image%201%29-Photoroom.png" 
              alt="Fudge Forest Bakehouse" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-rose-700 ${
                  isActive(link.path) ? 'text-rose-700' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-rose-600 hover:bg-rose-700 text-white"
            >
              <a
                href="https://wa.me/254720678099?text=Hello%2C%20I%27d%20like%20to%20order%20a%20cake"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-rose-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-sm font-medium transition-colors hover:text-rose-700 ${
                  isActive(link.path) ? 'text-rose-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full mt-4 bg-rose-600 hover:bg-rose-700 text-white"
            >
              <a
                href="https://wa.me/254720678099?text=Hello%2C%20I%27d%20like%20to%20order%20a%20cake"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;