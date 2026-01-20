import React from 'react';
import { Heart, Sparkles, Gift, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { services } from '../mock';

const iconMap = {
  Heart,
  Sparkles,
  Gift,
  Star
};

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From elegant wedding cakes to personalized celebrations, we create edible art tailored to your vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card
                  key={service.id}
                  className="border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-2xl group"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose-100 group-hover:bg-rose-200 transition-colors">
                      <IconComponent className="w-10 h-10 text-rose-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Choose Fudge Forest?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every cake we create is a personalized masterpiece. We work closely with you to understand your vision, preferences, and the story you want to tell through your cake.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-rose-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  We begin with a detailed consultation to understand your preferences, theme, and dietary requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-rose-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Custom Design
                </h3>
                <p className="text-gray-600">
                  Our team creates a unique design tailored specifically to your celebration and personal style.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-rose-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Perfect Delivery
                </h3>
                <p className="text-gray-600">
                  We ensure your cake arrives perfectly on time and exactly as you envisioned.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Order Your Perfect Cake?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a personalized quote and consultation. Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/254720678099?text=Hello%2C%20I%27d%20like%20to%20discuss%20ordering%20a%20cake"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-rose-600 text-rose-600 hover:bg-rose-50 text-lg px-8 py-6"
            >
              <Link to="/contact">
                View Contact Info
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;