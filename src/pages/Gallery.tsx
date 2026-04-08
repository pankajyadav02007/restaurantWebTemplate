import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, src: 'https://picsum.photos/seed/food-1/800/800', category: 'Food', title: 'Signature Biryani' },
    { id: 2, src: 'https://picsum.photos/seed/interior-1/800/800', category: 'Interior', title: 'Main Dining Hall' },
    { id: 3, src: 'https://picsum.photos/seed/kitchen-1/800/800', category: 'Kitchen', title: 'Our Busy Kitchen' },
    { id: 4, src: 'https://picsum.photos/seed/food-2/800/800', category: 'Food', title: 'Paneer Tikka' },
    { id: 5, src: 'https://picsum.photos/seed/interior-2/800/800', category: 'Interior', title: 'Private Lounge' },
    { id: 6, src: 'https://picsum.photos/seed/food-3/800/800', category: 'Food', title: 'Butter Naan' },
    { id: 7, src: 'https://picsum.photos/seed/interior-3/800/800', category: 'Interior', title: 'Outdoor Seating' },
    { id: 8, src: 'https://picsum.photos/seed/kitchen-2/800/800', category: 'Kitchen', title: 'Fresh Ingredients' },
    { id: 9, src: 'https://picsum.photos/seed/food-4/800/800', category: 'Food', title: 'Mango Lassi' },
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Food', 'Interior', 'Kitchen'];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-neutral-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://picsum.photos/seed/gallery-bg/1920/600" 
            className="w-full h-full object-cover" 
            alt="Gallery Background"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Visual Experience
          </motion.h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
            Take a visual tour of our restaurant, from the vibrant dishes to our welcoming ambience.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 mt-8 sm:mt-12 text-center">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={filter === cat ? 'default' : 'outline'}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-6 sm:px-8 py-2 h-auto text-sm ${filter === cat ? 'bg-orange-600 hover:bg-orange-700' : 'border-neutral-200'}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-square shadow-lg"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                  <ZoomIn className="h-10 w-10 mb-4 text-orange-500" />
                  <h4 className="text-xl font-bold mb-1">{img.title}</h4>
                  <span className="text-sm text-orange-400 uppercase tracking-widest">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Video Section */}
      <section className="mt-16 md:mt-24 py-16 md:py-24 bg-neutral-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Experience the Vibe</h2>
              <p className="text-neutral-400 mb-8 leading-relaxed text-sm sm:text-base">
                Watch our short film to get a glimpse of the passion we put into every dish 
                and the atmosphere we've created for our guests.
              </p>
              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center space-x-4 text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center shrink-0">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-white" />
                  </div>
                  <span className="font-bold text-sm sm:text-base">Behind the Scenes: Our Kitchen</span>
                </div>
                <div className="flex items-center space-x-4 text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center shrink-0">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-white" />
                  </div>
                  <span className="font-bold text-sm sm:text-base">The Art of Spices: A Documentary</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/video-thumb/1280/720" 
                  className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" 
                  alt="Video Thumbnail"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="h-8 w-8 fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent showCloseButton={false} className="max-w-4xl bg-transparent border-none p-0 shadow-none outline-none">
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="w-full h-auto rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-orange-500 transition-all hover:rotate-90"
              >
                <X className="h-10 w-10" />
              </button>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
