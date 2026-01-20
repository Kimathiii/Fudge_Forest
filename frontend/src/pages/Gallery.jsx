import React, { useState } from 'react';
import { galleryImages } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Cakes' },
    { value: 'wedding', label: 'Wedding Cakes' },
    { value: 'birthday', label: 'Birthday Cakes' },
    { value: 'custom', label: 'Custom Designs' }
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautifully crafted cakes that have made celebrations unforgettable.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className="data-[state=active]:bg-rose-600 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                  <Card
                    key={image.id}
                    className="overflow-hidden border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-xl group"
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800">
                          {image.title}
                        </h3>
                        <p className="text-sm text-gray-600 capitalize mt-1">
                          {image.category}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">
                No cakes found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;