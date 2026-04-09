import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Plus, Search, Filter, Star, X, Clock, Flame, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuItems, MenuItem } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const Menu = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = ['All', 'Veg', 'Non-Veg', 'Drinks'];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      description: 'View your cart to checkout.',
      action: {
        label: 'View Cart',
        onClick: () => window.location.href = '/order'
      }
    });
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-neutral-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://img.freepik.com/premium-psd/delicious-burger-restaurant-menu-banner-template_609989-964.jpg?w=1480" 
            className="w-full h-full object-cover" 
            alt="Menu Background"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Our Exquisite Menu
          </motion.h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our diverse range of authentic dishes, from traditional favorites to modern twists.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 sm:px-6 py-2 h-auto text-sm shrink-0 ${activeCategory === cat ? 'bg-orange-600 hover:bg-orange-700' : ''}`}
              >
                {cat}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input 
              placeholder="Search dishes..." 
              className="pl-10 rounded-full border-neutral-200 focus:ring-orange-500 py-6"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="container mx-auto px-4 mt-12 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group border border-neutral-100 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${item.category === 'Veg' ? 'bg-green-600' : item.category === 'Non-Veg' ? 'bg-red-600' : 'bg-blue-600'} text-white border-none`}>
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-neutral-900">{item.name}</h3>
                    <span className="text-orange-600 font-bold text-lg">${item.price}</span>
                  </div>
                  <p className="text-neutral-500 text-sm mb-6 h-10 line-clamp-2">
                    {item.description}
                  </p>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                    className="w-full bg-neutral-900 hover:bg-orange-600 text-white rounded-xl py-6 transition-colors group"
                  >
                    <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-neutral-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-neutral-400" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">No dishes found</h3>
            <p className="text-neutral-500">Try adjusting your search or category filter.</p>
            <Button 
              variant="link" 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="text-orange-600 mt-4"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>

      {/* Item Details Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden rounded-[2.5rem] border-none shadow-2xl max-h-[92vh] flex flex-col" showCloseButton={false}>
          {selectedItem && (
            <div className="flex flex-col md:flex-row h-full overflow-hidden">
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 md:h-full shrink-0">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Close Button */}
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="absolute top-4 left-4 z-50 rounded-full bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-black transition-all shadow-lg"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="h-5 w-5" />
                </Button>

                <div className="absolute bottom-6 left-6">
                  <Badge className={`${
                    selectedItem.category === 'Veg' ? 'bg-green-500' : 
                    selectedItem.category === 'Non-Veg' ? 'bg-red-500' : 
                    'bg-blue-500'
                  } text-white border-none px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-2`}>
                    {selectedItem.category}
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 flex flex-col bg-white overflow-hidden">
                <div className="flex-1 overflow-y-auto p-8 md:p-10">
                  <div className="flex justify-between items-start mb-4">
                    <DialogTitle className="text-3xl font-black text-neutral-900 uppercase tracking-tight leading-none">
                      {selectedItem.name}
                    </DialogTitle>
                    <div className="flex items-center bg-orange-50 px-3 py-1 rounded-full shrink-0">
                      <Star className="h-4 w-4 text-orange-500 fill-orange-500 mr-1" />
                      <span className="text-orange-700 font-bold text-sm">4.9</span>
                    </div>
                  </div>

                  <DialogDescription className="text-neutral-500 text-base leading-relaxed mb-8">
                    {selectedItem.description}
                  </DialogDescription>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">Time</p>
                        <p className="text-sm font-black text-neutral-900">15-20 Min</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                      <Flame className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest">Calories</p>
                        <p className="text-sm font-black text-neutral-900">350 Kcal</p>
                      </div>
                    </div>
                  </div>

                  {/* Ingredients/Info */}
                  <div className="flex items-start space-x-3 mb-4 p-4 rounded-2xl bg-orange-50/50 border border-orange-100">
                    <Info className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-orange-800 leading-relaxed">
                      Allergy Info: Contains dairy and nuts. Prepared in a kitchen that handles gluten.
                    </p>
                  </div>
                </div>

                {/* Footer - Fixed at bottom of content area */}
                <div className="p-8 md:p-10 border-t border-neutral-100 bg-white flex items-center justify-between gap-6">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-widest mb-1">Total Price</p>
                    <p className="text-3xl font-black text-neutral-900">${selectedItem.price}</p>
                  </div>
                  <Button 
                    onClick={() => {
                      handleAddToCart(selectedItem);
                      setSelectedItem(null);
                    }}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white rounded-full py-8 text-xl font-black shadow-xl shadow-orange-600/20 transition-all hover:scale-105 active:scale-95"
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Menu;
