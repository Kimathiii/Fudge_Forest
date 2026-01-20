import React from 'react';
import { Heart, Award, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { aboutContent } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About Fudge Forest
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {aboutContent.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {aboutContent.mission}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="border-2 border-rose-100">
                  <CardContent className="p-6 text-center">
                    <Heart className="w-10 h-10 text-rose-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-800">Passion</h3>
                  </CardContent>
                </Card>
                <Card className="border-2 border-rose-100">
                  <CardContent className="p-6 text-center">
                    <Award className="w-10 h-10 text-rose-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-800">Excellence</h3>
                  </CardContent>
                </Card>
                <Card className="border-2 border-rose-100">
                  <CardContent className="p-6 text-center">
                    <Users className="w-10 h-10 text-rose-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-800">Community</h3>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-rose-200 to-amber-200 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800"
                  alt="Beautiful wedding cake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baker Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-rose-300 to-amber-300 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
                  alt="Nancy - Professional Cake Artist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
                Meet Our Founder
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {aboutContent.baker.name}
              </h2>
              <p className="text-xl text-rose-600 font-semibold mb-6">
                {aboutContent.baker.title}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutContent.baker.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every cake we create is a testament to our commitment to quality, creativity, and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Premium Ingredients
                </h3>
                <p className="text-gray-600">
                  We use only the finest ingredients to ensure every bite is as delicious as it is beautiful.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Custom Designs
                </h3>
                <p className="text-gray-600">
                  Each cake is uniquely designed to match your vision and exceed your expectations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Expert Training
                </h3>
                <p className="text-gray-600">
                  Learn from the best with our hands-on masterclasses designed for aspiring professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;