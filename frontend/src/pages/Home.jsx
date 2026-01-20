import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Gift, Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services } from '../mock';
import logoImage from '../assets/fudge-forest-logo.png';

const iconMap = {
  Heart,
  Sparkles,
  Gift,
  Star
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-amber-50 to-rose-50 pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgb(225, 29, 72, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Soft logo background in hero */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src={logoImage}
            alt="Fudge Forest House logo"
            className="w-[260px] sm:w-[340px] md:w-[420px] opacity-10 md:opacity-15"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Crafting Elegant Cakes
              <br />
              <span className="text-rose-700">for Life's Sweetest Moments</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 italic mb-8">
              Perfection by Confection
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Welcome to Fudge Forest Bakehouse, where every cake is a masterpiece designed to make your celebrations unforgettable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <a
                href="https://wa.me/254720678099?text=Hello%2C%20I%27d%20like%20to%20order%20a%20cake"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order a Cake
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-rose-600 text-rose-600 hover:bg-rose-50 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/classes">
                Book a Class
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From elegant wedding cakes to personalized birthday creations, we bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card
                  key={service.id}
                  className="border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-xl group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 group-hover:bg-rose-200 transition-colors">
                      <IconComponent className="w-8 h-8 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-rose-600 text-rose-600 hover:bg-rose-50"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-rose-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Dream Cake?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's bring your vision to life. Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg"
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-rose-600 text-lg px-8 py-6"
            >
              <Link to="/gallery">
                View Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;