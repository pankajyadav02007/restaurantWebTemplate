import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  Utensils, 
  Users, 
  Truck, 
  Calendar, 
  ShieldCheck, 
  Heart,
  Leaf,
  Flame,
  Coffee,
  ChevronRight,
  X,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuItems, MenuItem } from '@/data/menu';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from 'sonner';
import { useCart } from '@/context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const featuredDishes = menuItems.filter(item => item.featured);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  const banners = [
    {
      image: "https://picsum.photos/seed/indian-food-1/1920/1080",
      tag: "The Ultimate Culinary Experience",
      title: "SPICE GARDEN",
      description: "Where tradition meets innovation. Discover the art of authentic Indian spices in a modern, sophisticated setting."
    },
    {
      image: "https://picsum.photos/seed/indian-curry/1920/1080",
      tag: "Fresh & Organic Ingredients",
      title: "TASTE OF INDIA",
      description: "Experience the vibrant colors and rich aromas of our hand-crafted delicacies made with love."
    },
    {
      image: "https://picsum.photos/seed/restaurant-interior/1920/1080",
      tag: "Cozy & Modern Ambience",
      title: "ROYAL DINING",
      description: "Perfect for family dinners, romantic dates, and special celebrations with an unforgettable atmosphere."
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Fine Dining",
      description: "Experience a luxurious atmosphere with world-class service and gourmet dishes.",
      icon: Utensils,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Home Delivery",
      description: "Get your favorite meals delivered hot and fresh to your doorstep within 30 minutes.",
      icon: Truck,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Event Catering",
      description: "Make your special occasions memorable with our professional catering services.",
      icon: Calendar,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Private Parties",
      description: "Exclusive lounge areas for birthdays, anniversaries, and corporate gatherings.",
      icon: Users,
      color: "bg-green-100 text-green-600"
    }
  ];

  const categories = [
    { name: 'Veg', icon: Leaf, color: 'text-green-600', bg: 'bg-green-50', image: 'https://picsum.photos/seed/veg-cat/400/400' },
    { name: 'Non-Veg', icon: Flame, color: 'text-red-600', bg: 'bg-red-50', image: 'https://picsum.photos/seed/meat-cat/400/400' },
    { name: 'Drinks', icon: Coffee, color: 'text-blue-600', bg: 'bg-blue-50', image: 'https://picsum.photos/seed/drinks-cat/400/400' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <motion.div style={{ y: y1 }} className="h-full w-full">
              <img
                src={banners[currentSlide].image}
                alt="Restaurant Ambience"
                className="w-full h-full object-cover brightness-[0.3] scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        <div className="container mx-auto px-4 z-10 text-center mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-6 py-2 rounded-full bg-orange-600/30 border border-orange-500/40 text-orange-400 font-bold text-xs tracking-[0.4em] uppercase mb-8 backdrop-blur-md"
              >
                {banners[currentSlide].tag}
              </motion.div>
              <h1 className="text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white mb-6 md:mb-8 tracking-tighter leading-none drop-shadow-2xl">
                {banners[currentSlide].title.split(' ')[0]} <span className="text-orange-500 drop-shadow-[0_0_40px_rgba(234,88,12,0.6)]">{banners[currentSlide].title.split(' ')[1]}</span>
              </h1>
              <p className="text-neutral-200 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed font-medium drop-shadow-lg px-4">
                {banners[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <Link to="/menu" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto cursor-pointer bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 sm:px-14 py-6 sm:py-9 text-lg sm:text-2xl font-black group shadow-[0_0_50px_rgba(234,88,12,0.5)] transition-all hover:scale-110 active:scale-95 border-2 border-orange-500/20">
                    Order Now <ArrowRight className="ml-2 sm:ml-3 h-6 w-6 sm:h-8 sm:w-8 group-hover:translate-x-3 transition-transform" />
                  </Button>
                </Link>
                <Link to="/booking" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full cursor-pointer sm:w-auto border-white/60 text-white hover:bg-black hover:text-white rounded-full px-8 sm:px-14 py-6 sm:py-9 text-lg sm:text-2xl font-black backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-2xl">
                    Book A Table
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-transparent rounded-full" />
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-12 bg-orange-500' : 'w-3 bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        {/* <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background to-transparent z-10" /> */}
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white relative z-20 mt-20 rounded-t-[3rem]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-600 font-bold uppercase tracking-widest mb-2 text-sm"
            >
              Explore Our Menu
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-neutral-900"
            >
              Popular <span className="text-orange-600">Categories</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/menu?category=${cat.name}`} className="group block">
                  <div className="relative overflow-hidden rounded-[2.5rem] aspect-square shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`${cat.bg} p-3 rounded-2xl`}>
                          <cat.icon className={`h-6 w-6 ${cat.color}`} />
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">{cat.name}</h3>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white group-hover:bg-orange-600 transition-colors">
                        <ChevronRight className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Menu Showcase */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-black text-neutral-900 mb-4 md:mb-6 tracking-tight"
            >
              Signature <span className="text-orange-600">3D Showcase</span>
            </motion.h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-base sm:text-lg px-4">
              Hover over our masterpieces to see them come to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 perspective-1000">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, rotateY: 45, translateZ: -100 }}
                whileInView={{ opacity: 1, rotateY: 0, translateZ: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }
                }}
                className="preserve-3d cursor-pointer"
                onClick={() => setSelectedItem(dish)}
              >
                <div className="card-3d bg-white rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-neutral-100 group h-full transform-gpu transition-all duration-500 hover:shadow-[0_40px_80px_rgba(234,88,12,0.2)]">
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-8">
                      <p className="text-white text-sm font-bold leading-relaxed drop-shadow-md">
                        {dish.description}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-orange-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl font-black shadow-xl ring-4 ring-white/20 text-sm sm:text-base">
                      ${dish.price}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 text-center">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 fill-orange-500" />
                      ))}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors">{dish.name}</h3>
                    <Button size="lg" className="rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 sm:px-8 shadow-lg shadow-orange-600/20 transition-all hover:scale-105 w-full sm:w-auto">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Services Section - The "Impression" Section */}
      <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-orange-500 font-bold uppercase tracking-[0.2em] mb-4">Why Choose Us</h4>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">
                  Exceptional Services <br /> For Our <span className="text-orange-500">Valued Guests</span>
                </h2>
                <p className="text-neutral-400 text-base sm:text-lg mb-8 md:mb-12 leading-relaxed">
                  At Spice Garden, we go beyond just serving food. We curate experiences that cater to your every need, ensuring every visit is memorable and every meal is a celebration.
                </p>
                
                <div className="space-y-4 md:space-y-6">
                  {[
                    { title: "Quality Guaranteed", icon: ShieldCheck, text: "We use only the freshest, organic ingredients sourced from local farmers." },
                    { title: "Customer First", icon: Heart, text: "Our staff is trained to provide personalized service that makes you feel at home." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left">
                      <div className="bg-orange-600 p-2 sm:p-3 rounded-xl shrink-0">
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg sm:xl font-bold mb-1">{item.title}</h5>
                        <p className="text-neutral-500 text-xs sm:text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-800/50 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 hover:border-orange-500/50 transition-all group"
                >
                  <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_10px_20px_rgba(0,0,0,0.1)] group-hover:shadow-orange-500/20 group-hover:-translate-y-2 transform-gpu duration-300`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
                <img
                  src="https://picsum.photos/seed/indian-chef/800/1000"
                  alt="Chef Cooking"
                  className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h4 className="text-orange-600 font-bold uppercase tracking-widest mb-4">Our Legacy</h4>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-neutral-900 mb-6 md:mb-8 leading-tight">
                  Crafting Memories <br /> Through <span className="text-orange-600">Flavor</span>
                </h2>
                <p className="text-neutral-600 text-base sm:text-lg mb-8 md:mb-10 leading-relaxed">
                  Spice Garden isn't just a restaurant; it's a journey through the heart of India. We've spent decades perfecting the balance of spices to bring you a taste that's both nostalgic and exciting.
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 mb-10 md:mb-12">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-neutral-900">25+</h3>
                    <p className="text-neutral-500 text-[10px] sm:text-sm uppercase tracking-widest">Years of Excellence</p>
                  </div>
                  <div className="w-px h-12 bg-neutral-200" />
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-neutral-900">50k+</h3>
                    <p className="text-neutral-500 text-[10px] sm:text-sm uppercase tracking-widest">Happy Guests</p>
                  </div>
                </div>
                <Link to="/about">
                  <Button className="bg-neutral-900 hover:bg-black text-white rounded-full px-8 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-bold">
                    Discover Our Story
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 mb-4 md:mb-6">What Our <span className="text-orange-600">Guests Say</span></h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-sm sm:text-base px-4">Real experiences from real people who love our food.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Sarah Johnson", text: "The Biryani here is absolutely divine. The spices are perfectly balanced, and the service is top-notch!", rating: 5, role: "Food Critic" },
              { name: "Michael Chen", text: "Best Indian food in the city. The Tandoori Chicken was juicy and flavorful. Highly recommend for family dinners.", rating: 5, role: "Regular Guest" },
              { name: "Emma Wilson", text: "Cozy atmosphere and delicious vegetarian options. The Paneer Butter Masala is a must-try!", rating: 5, role: "Local Resident" }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-neutral-100 relative group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="absolute top-10 right-10 text-orange-100 group-hover:text-orange-200 transition-colors">
                  <Utensils className="h-16 w-16 rotate-12" />
                </div>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-neutral-600 text-lg italic mb-8 relative z-10 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-lg shadow-orange-600/30">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-neutral-900 text-lg">{review.name}</h5>
                    <p className="text-orange-600 text-xs font-bold uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
