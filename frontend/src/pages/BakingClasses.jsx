import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { classDetails } from '../mock';

const BakingClasses = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            {classDetails.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {classDetails.description}
          </p>
          <div className="inline-block px-8 py-4 bg-rose-600 text-white rounded-full text-2xl font-bold shadow-lg">
            {classDetails.fee}
          </div>
        </div>
      </section>

      {/* Class Details */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Topics List */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                What You'll Learn
              </h2>
              <div className="space-y-4">
                {classDetails.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-rose-600 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{topic}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="lg:sticky lg:top-24">
              <Card className="border-2 border-rose-200 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Class Information
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Who Should Attend?
                      </h4>
                      <p className="text-gray-600">
                        Aspiring professional bakers, home bakers looking to elevate their skills, and anyone passionate about mastering wedding cake artistry.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Class Format
                      </h4>
                      <p className="text-gray-600">
                        Hands-on practical training with personalized guidance from Nancy, a professional cake artist with years of experience.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Special Bonus
                      </h4>
                      <p className="text-gray-600">
                        Includes mentorship on your first two wedding cakes after completing the class!
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white text-lg py-6"
                    >
                      <a
                        href="https://wa.me/254720678099?text=Hello%2C%20I%27m%20interested%20in%20booking%20the%20Wedding%20Master%20Class"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 w-5 h-5" />
                        Book on WhatsApp
                      </a>
                    </Button>
                    <p className="text-sm text-gray-600 text-center">
                      Contact us to schedule your class
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Take This Class */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Take This Class?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-rose-100">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Expert Training
                </h3>
                <p className="text-gray-600">
                  Learn from Nancy, a professional cake artist with extensive experience in wedding cake design.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-rose-100">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Hands-On Practice
                </h3>
                <p className="text-gray-600">
                  Get practical, hands-on experience with all aspects of wedding cake creation and setup.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-rose-100">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ongoing Support
                </h3>
                <p className="text-gray-600">
                  Receive mentorship on your first two wedding cakes to ensure your success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BakingClasses;