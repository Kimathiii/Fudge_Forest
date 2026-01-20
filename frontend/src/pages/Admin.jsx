import React, { useState } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { galleryImages } from '../mock';
import { toast } from 'sonner';

const Admin = () => {
  const [images, setImages] = useState(galleryImages);
  const [newImage, setNewImage] = useState({
    url: '',
    category: 'wedding',
    title: '',
    alt: ''
  });

  const handleAddImage = () => {
    if (!newImage.url || !newImage.title) {
      toast.error('Please fill in all required fields');
      return;
    }

    const imageToAdd = {
      id: Date.now().toString(),
      ...newImage
    };

    setImages([...images, imageToAdd]);
    setNewImage({ url: '', category: 'wedding', title: '', alt: '' });
    toast.success('Image added successfully!');
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter(img => img.id !== id));
    toast.success('Image deleted successfully!');
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Gallery Admin Panel
          </h1>
          <p className="text-gray-600">
            Manage your gallery images here
          </p>
        </div>

        {/* Add New Image */}
        <Card className="mb-8 border-2 border-rose-100">
          <CardHeader>
            <CardTitle className="text-2xl">Add New Image</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="url">Image URL *</Label>
                <Input
                  id="url"
                  placeholder="https://example.com/image.jpg"
                  value={newImage.url}
                  onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="Elegant Wedding Cake"
                  value={newImage.title}
                  onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={newImage.category}
                  onValueChange={(value) => setNewImage({ ...newImage, category: value })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding Cakes</SelectItem>
                    <SelectItem value="birthday">Birthday Cakes</SelectItem>
                    <SelectItem value="custom">Custom Designs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="alt">Alt Text</Label>
                <Input
                  id="alt"
                  placeholder="Description for accessibility"
                  value={newImage.alt}
                  onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })}
                  className="mt-2"
                />
              </div>
            </div>
            <Button
              onClick={handleAddImage}
              className="mt-6 bg-rose-600 hover:bg-rose-700 text-white"
            >
              <Plus className="mr-2 w-4 h-4" />
              Add Image
            </Button>
          </CardContent>
        </Card>

        {/* Current Images */}
        <Card className="border-2 border-rose-100">
          <CardHeader>
            <CardTitle className="text-2xl">Current Gallery ({images.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image) => (
                <Card key={image.id} className="overflow-hidden border border-gray-200">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt || image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-600 capitalize mb-3">
                      {image.category}
                    </p>
                    <Button
                      onClick={() => handleDeleteImage(image.id)}
                      variant="destructive"
                      size="sm"
                      className="w-full"
                    >
                      <Trash2 className="mr-2 w-4 h-4" />
                      Delete
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            {images.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No images in gallery</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;