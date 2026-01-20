import React from 'react';
import { Phone, MapPin, Instagram, Facebook, MessageCircle, Clock, Mail } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { contactInfo } from '../mock';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our cakes, classes, or anything else, we're ready to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>
              
              {/* Phone Card */}
              <Card className="border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-rose-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Phone
                      </h3>
                      {contactInfo.phones.map((phone, index) => (
                        <p key={index} className="text-gray-600">
                          <a
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="hover:text-rose-600 transition-colors"
                          >
                            {phone}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-rose-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Location
                      </h3>
                      <p className="text-gray-600">{contactInfo.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Card */}
              <Card className="border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-rose-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        WhatsApp
                      </h3>
                      <Button
                        asChild
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <a
                          href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20your%20services`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 w-4 h-4" />
                          Message Us on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Card */}
              <Card className="border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href={contactInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-rose-100 hover:bg-rose-200 rounded-lg transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-rose-600" />
                      <span className="text-gray-700">Instagram</span>
                    </a>
                    <a
                      href={contactInfo.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-rose-100 hover:bg-rose-200 rounded-lg transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-rose-600" />
                      <span className="text-gray-700">Facebook</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Image & Business Hours */}
            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-200 to-amber-200 overflow-hidden shadow-2xl">
                <img
                  src="https://customer-assets.emergentagent.com/job_8011bedc-43b8-4383-be26-1e14cb04c333/artifacts/pnkzxsfs_cake%202.jpeg"
                  alt="Beautiful cake by Fudge Forest"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <Card className="border-2 border-rose-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-rose-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Business Hours
                      </h3>
                      <div className="space-y-2 text-gray-600">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-100 bg-gradient-to-br from-rose-50 to-amber-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Quick Tips
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Order wedding cakes at least 2-3 months in advance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Custom designs require consultation booking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Class bookings available upon request</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss your dream cake today. We're here to make your celebration unforgettable.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6"
          >
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%2C%20I%27d%20like%20to%20get%20in%20touch`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Start a Conversation
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;