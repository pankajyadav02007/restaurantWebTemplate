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
  Info,
  ChefHat,
  Music,
  HelpCircle,
  MapPin,
  Gift,
  Tag,
  Trophy,
  Instagram,
  Facebook,
  Phone
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

const GeometricBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
    <motion.div
      animate={{
        rotate: 360,
        scale: [1, 1.1, 1],
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/4 -left-20 w-96 h-96 border-[40px] border-orange-500/20 rounded-full"
    />
    <motion.div
      animate={{
        rotate: -360,
        scale: [1, 1.2, 1],
        x: [0, -40, 0],
        y: [0, 60, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 -right-20 w-80 h-80 border-[30px] border-yellow-500/20 rounded-[4rem]"
    />
    <motion.div
      animate={{
        y: [0, -100, 0],
        rotate: 45,
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-orange-500/10 rounded-3xl"
    />
    <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
  </div>
);

const Home = () => {
  const { addToCart } = useCart();
  const featuredDishes = menuItems.filter(item => item.featured);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null);
  const [selectedGalleryImg, setSelectedGalleryImg] = React.useState<string | null>(null);
  const [faqQuestion, setFaqQuestion] = React.useState("");
  const [isAsking, setIsAsking] = React.useState(false);
  const [userFaqs, setUserFaqs] = React.useState<{q: string, a: string}[]>([]);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  const banners = [
    {
      image: "https://thumbs.dreamstime.com/b/image-shows-modern-restaurant-building-glass-facade-building-lit-up-night-there-tables-chairs-322227519.jpg",
      tag: "The Ultimate Culinary Experience",
      title: "SPICE GARDEN",
      description: "Where tradition meets innovation. Discover the art of authentic Indian spices in a modern, sophisticated setting."
    },
    {
      image: "https://static.vecteezy.com/system/resources/thumbnails/031/119/066/small_2x/the-interior-of-a-cafe-or-restaurant-with-a-large-number-of-plants-ai-generated-photo.jpeg",
      tag: "Fresh & Organic Ingredients",
      title: "TASTE INDIA",
      description: "Experience the vibrant colors and rich aromas of our hand-crafted delicacies made with love."
    },
    {
      image: "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?cs=srgb&dl=pexels-quark-studio-1159039-3201921.jpg&fm=jpg",
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
    { name: 'Veg', icon: Leaf, color: 'text-green-600', bg: 'bg-green-50', image: 'https://img.freepik.com/premium-photo/artfully-arranged-vegetable-platter-with-vibrant-colors-textures_1077535-733.jpg' },
    { name: 'Non-Veg', icon: Flame, color: 'text-red-600', bg: 'bg-red-50', image: 'https://sulthansbiriyani.in/wp-content/uploads/2022/11/Tandoori-chicken-1.jpg' },
    { name: 'Drinks', icon: Coffee, color: 'text-blue-600', bg: 'bg-blue-50', image: 'https://media.istockphoto.com/id/1489532224/photo/bar-assortment-alcohol-drink-bottles-against-the-mirror-in-the-bar-counter-or-liquor-store.jpg?s=170667a&w=0&k=20&c=62f0pP6hBE90zcJG8khSK6B0Cd-mlH84ivFmBlX27f4=' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20 bg-neutral-950">
        <AnimatePresence>
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
                src={banners[currentSlide]?.image || undefined}
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
                  <Button size="lg" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 sm:px-14 py-6 sm:py-9 text-lg sm:text-2xl font-black group shadow-[0_0_50px_rgba(234,88,12,0.5)] transition-all hover:scale-110 active:scale-95 border-2 border-orange-500/20 cursor-pointer">
                    Order Now <ArrowRight className="ml-2 sm:ml-3 h-6 w-6 sm:h-8 sm:w-8 group-hover:translate-x-3 transition-transform" />
                  </Button>
                </Link>
                <Link to="/booking" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/60 text-black hover:bg-black hover:text-white rounded-full px-8 sm:px-14 py-6 sm:py-9 text-lg sm:text-2xl font-black backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-2xl whitespace-nowrap cursor-pointer">
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
      <section className="md:py-20 relative z-20 mt-20 rounded-t-[3rem] overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-600 font-black uppercase tracking-[0.3em] mb-2 text-sm"
            >
              Explore Our Menu
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tighter"
            >
              Crave-Worthy <span className="text-orange-600">Categories</span>
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

      {/* Special Offers Section */}
      <section className="py-24 text-neutral-900 relative overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div>
              <motion.h4 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-orange-600 font-black uppercase tracking-[0.3em] mb-4 text-sm"
              >
                Limited Time Deals
              </motion.h4>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none text-neutral-900"
              >
                Exclusive <span className="text-orange-600">Offers</span>
              </motion.h2>
            </div>
            <Link to="/menu">
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full px-10 py-7 text-lg font-black transition-all hover:scale-105">
                View All Deals
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col sm:flex-row group"
            >
              <div className="sm:w-1/2 h-64 sm:h-auto relative overflow-hidden">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-offers-design-template-9755c79fd6cd3510238e2c246f09b430_screen.jpg?ts=1599490952" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Offer 1" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">20% OFF</div>
              </div>
              <div className="p-8 sm:w-1/2 flex flex-col justify-center">
                <Tag className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-2xl font-black text-neutral-900 mb-2 uppercase tracking-tight">Family Weekend Feast</h3>
                <p className="text-neutral-500 text-sm mb-6">Enjoy a full course meal for the whole family at a special discounted price every weekend.</p>
                <Link to="/menu">
                  <Button className="bg-neutral-900 hover:bg-black text-white rounded-full w-full">Claim Offer</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col sm:flex-row group"
            >
              <div className="sm:w-1/2 h-64 sm:h-auto relative overflow-hidden">
                <img src="https://img.freepik.com/premium-photo/server-wearing-white-shirt-black-pants_961875-426357.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Offer 2" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">BUY 1 GET 1</div>
              </div>
              <div className="p-8 sm:w-1/2 flex flex-col justify-center">
                <Gift className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="text-2xl font-black text-neutral-900 mb-2 uppercase tracking-tight">Happy Hour Drinks</h3>
                <p className="text-neutral-500 text-sm mb-6">Join us between 4 PM to 7 PM and get a free drink with every appetizer you order.</p>
                <Link to="/menu">
                  <Button className="bg-neutral-900 hover:bg-black text-white rounded-full w-full">Claim Offer</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Menu Showcase */}
      <section className="md:py-24 relative overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-600 font-black uppercase tracking-[0.3em] mb-4 text-sm"
            >
              Chef's Masterpieces
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-neutral-900 mb-4 md:mb-6 tracking-tighter"
            >
              Signature <span className="text-orange-600">3D Showcase</span>
            </motion.h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg px-4 font-medium">
              Experience our culinary art from every angle.
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
                  src={selectedItem.image || undefined} 
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
      <section className="md:py-32 py-24 relative overflow-hidden">
        <GeometricBackground />
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
                <h4 className="text-orange-600 font-black uppercase tracking-[0.2em] mb-4">Why Choose Us</h4>
                <h2 className="text-4xl  md:text-6xl font-black mb-6 md:mb-8 leading-tight text-neutral-900 tracking-tighter">
                  Exceptional Services <br /> For Our <span className="text-orange-600">Valued Guests</span>
                </h2>
                <p className="text-neutral-600 md:text-lg mb-8 md:mb-12 leading-relaxed font-medium">
                  At Spice Garden, we go beyond just serving food. We curate experiences that cater to your every need, ensuring every visit is memorable and every meal is a celebration.
                </p>
                
                <div className="space-y-4 md:space-y-6">
                  {[
                    { title: "Quality Guaranteed", icon: ShieldCheck, text: "We use only the freshest, organic ingredients sourced from local farmers." },
                    { title: "Customer First", icon: Heart, text: "Our staff is trained to provide personalized service that makes you feel at home." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4 p-4 sm:p-6 rounded-2xl bg-white shadow-xl border border-neutral-100 hover:bg-neutral-50 transition-colors text-left">
                      <div className="bg-orange-600 p-2 sm:p-3 rounded-xl shrink-0">
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg sm:xl font-bold mb-1 text-neutral-900">{item.title}</h5>
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
                  className="bg-white p-8 rounded-[2.5rem] border border-neutral-100 hover:border-orange-500/50 shadow-xl transition-all group"
                >
                  <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_10px_20px_rgba(0,0,0,0.1)] group-hover:shadow-orange-500/20 group-hover:-translate-y-2 transform-gpu duration-300`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900">{service.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="md:py-24 relative overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h4 className="text-orange-600 font-black uppercase tracking-[0.3em] mb-4 text-sm">What's Happening</h4>
              <h2 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tighter">Upcoming <span className="text-orange-600">Events</span></h2>
            </div>
            <Link to="/booking">
              <Button className="bg-neutral-900 hover:bg-black text-white rounded-full px-10 py-6 font-bold">Book For Event</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { title: "Sufi Night", date: "Every Friday", time: "8:00 PM onwards", image: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/06/15/c7a51085365f12a3549e7e0740909549932ae.jpg?impolicy=abp_cdn&imwidth=480", desc: "Immerse yourself in the soulful melodies of live Sufi music while you dine." },
              { title: "Cooking Workshop", date: "Oct 15, 2024", time: "11:00 AM - 2:00 PM", image: "https://originsitaliancookingclasses.com/wp-content/uploads/2024/06/origins-italian-cooking-classes_26-05-24-85-scaled-e1718932374211-1024x691.jpg", desc: "Learn the secrets of Indian spices from our head chef in an interactive session." },
              { title: "Wine & Dine", date: "Last Saturday", time: "7:30 PM onwards", image: "https://tse1.mm.bing.net/th/id/OIP.zXis2D9WA_-c2XTa7ZBYGwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "A curated 5-course meal paired with the finest international wines." }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 rounded-[3rem] border border-neutral-100 overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-orange-400 font-black text-[10px] uppercase tracking-[0.2em] mb-1">{event.date} • {event.time}</p>
                    <h3 className="text-2xl font-black text-white tracking-tight">{event.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">{event.desc}</p>
                  <Button variant="link" className="p-0 text-orange-600 font-bold hover:text-orange-700 flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="md:py-32 relative overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto px-4 relative z-10">
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
                  src="https://i.pinimg.com/736x/40/d1/a2/40d1a2ce92e2b27d672352687ea5928f.jpg"
                  alt="Chef Cooking"
                  className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block border border-neutral-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-2xl">
                      <Utensils className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-orange-600 uppercase tracking-widest">Signature Dish</p>
                      <p className="text-lg font-black text-neutral-900">Butter Chicken Royal</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h4 className="text-orange-600 font-black uppercase tracking-[0.3em] mb-4 text-sm">Our Legacy</h4>
                <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 md:mb-8 tracking-tighter leading-none">
                  Crafting Memories <br /> Through <span className="text-orange-600">Flavor</span>
                </h2>
                <p className="text-neutral-600 text-lg mb-8 md:mb-10 leading-relaxed font-medium">
                  Spice Garden isn't just a restaurant; it's a journey through the heart of India. We've spent decades perfecting the balance of spices to bring you a taste that's both nostalgic and exciting.
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 mb-10 md:mb-12">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">25+</h3>
                    <p className="text-neutral-500 text-[10px] sm:text-sm uppercase tracking-[0.2em] font-black">Years of Excellence</p>
                  </div>
                  <div className="w-px h-12 bg-neutral-200" />
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">50k+</h3>
                    <p className="text-neutral-500 text-[10px] sm:text-sm uppercase tracking-[0.2em] font-black">Happy Guests</p>
                  </div>
                </div>
                <Link to="/about">
                  <Button className="bg-neutral-900 hover:bg-black text-white rounded-full px-10 py-8 text-xl font-black shadow-xl transition-all hover:scale-105">
                    Discover Our Story
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-32 relative overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-600 font-black uppercase tracking-[0.3em] mb-4 text-sm"
            >
              The Culinary Team
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 tracking-tighter"
            >
              Meet Our <span className="text-orange-600">Expert Chefs</span>
            </motion.h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg font-medium">The masters behind the magic. Our chefs bring decades of experience and passion to every plate.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Chef Vikram Singh", role: "Executive Chef", image: "https://static.vecteezy.com/system/resources/previews/035/783/731/non_2x/ai-generated-chef-standing-proudly-in-front-of-a-restaurant-wearing-his-chef-s-jacket-and-a-big-smile-free-photo.jpg", bio: "Master of traditional North Indian cuisine with 20 years of experience." },
              { name: "Chef Ananya Rao", role: "Pastry Chef", image: "https://tse1.mm.bing.net/th/id/OIP.udvFfTri5eCTC7ynEG48XgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", bio: "Creating sweet masterpieces that blend Indian flavors with modern techniques." },
              { name: "Chef Rahul Kapoor", role: "Sous Chef", image: "https://t3.ftcdn.net/jpg/06/88/42/88/360_F_688428838_EbLyDq8Av1IJMNFy43E8o8znz7npU0Bv.jpg", bio: "Expert in tandoori delicacies and authentic street food flavors." },
              { name: "Chef Priya Sharma", role: "Head of Innovation", image: "https://tse1.mm.bing.net/th/id/OIP.MAiZz8Fc_G6EA0WQnonn7QHaM9?w=1143&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3", bio: "Developing our signature fusion dishes that surprise and delight." }
            ].map((chef, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] mb-6 shadow-2xl">
                  <img src={chef.image} alt={chef.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-white text-sm italic mb-4">"{chef.bio}"</p>
                    <div className="flex space-x-4">
                      <Instagram className="h-5 w-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
                      <Facebook className="h-5 w-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-1">{chef.name}</h3>
                  <p className="text-orange-600 font-bold uppercase tracking-widest text-xs">{chef.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Section - The "Relatable/Impressive" Section */}
      <section className="md:py-32 relative overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-orange-600 font-black uppercase tracking-[0.3em] mb-4 text-sm">The Vibe</h4>
                <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 tracking-tighter leading-none">
                  Where Every Corner <br /> Tells a <span className="text-orange-600">Story</span>
                </h2>
                <p className="text-neutral-600 text-lg mb-10 leading-relaxed font-medium">
                  Step into a world where modern elegance meets traditional warmth. Our restaurant is designed to be more than just a place to eat—it's a sanctuary for food lovers and a stage for unforgettable memories.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-neutral-900 tracking-tight">Acoustics</h3>
                    <p className="text-neutral-500 text-sm font-medium">Soulful music that complements your conversation.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-neutral-900 tracking-tight">Lighting</h3>
                    <p className="text-neutral-500 text-sm font-medium">Warm, ambient glow for the perfect dining mood.</p>
                  </div>
                </div>
 
                <Link to="/gallery">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-10 py-8 text-xl font-black shadow-xl shadow-orange-600/20 transition-all hover:scale-105">
                    Explore Our Gallery
                  </Button>
                </Link>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <img 
                    src="https://image.lexica.art/full_jpg/3533301a-8364-4c94-9f30-01a3cff1a760" 
                    className="rounded-[2rem] shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform" 
                    alt="Interior 1" 
                    referrerPolicy="no-referrer" 
                    onClick={() => setSelectedGalleryImg("https://picsum.photos/seed/interior-1/1200/1600")}
                  />
                  <img 
                    src="https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123" 
                    className="rounded-[2rem] shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform" 
                    alt="Interior 2" 
                    referrerPolicy="no-referrer" 
                    onClick={() => setSelectedGalleryImg("https://picsum.photos/seed/interior-2/1200/800")}
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4 pt-12"
                >
                  <img 
                    src="https://tse2.mm.bing.net/th/id/OIP.yAWkMonYanOJ0XZQsuJEKwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" 
                    className="rounded-[2rem] shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform" 
                    alt="Interior 3" 
                    referrerPolicy="no-referrer" 
                    onClick={() => setSelectedGalleryImg("https://picsum.photos/seed/interior-3/1200/800")}
                  />
                  <img 
                    src="https://rachelgouk.com/wp-content/uploads/2021/10/caminetto-italian-restaurant-xintiandi-36.jpg" 
                    className="rounded-[2rem] shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform" 
                    alt="Interior 4" 
                    referrerPolicy="no-referrer" 
                    onClick={() => setSelectedGalleryImg("https://picsum.photos/seed/interior-4/1200/1600")}
                  />
                </motion.div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100 rounded-full blur-[100px] opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <HelpCircle className="h-16 w-16 text-orange-600 mx-auto mb-6" />
            <h4 className="text-orange-600 font-black uppercase tracking-[0.3em] mb-4 text-sm">Got Questions?</h4>
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-4 tracking-tighter">Frequently Asked <span className="text-orange-600">Questions</span></h2>
            <p className="text-neutral-500 text-lg font-medium">Everything you need to know about dining with us.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Do you offer vegan and gluten-free options?", a: "Yes, we have a wide range of vegan and gluten-free dishes clearly marked on our menu. Our chefs can also customize meals to accommodate specific allergies." },
              { q: "Is prior reservation mandatory?", a: "While we welcome walk-ins, we highly recommend making a reservation, especially on weekends and during dinner hours, to ensure you get a table without waiting." },
              { q: "Do you have parking facilities?", a: "Yes, we offer complimentary valet parking for all our guests. There is also ample street parking available around the restaurant." },
              { q: "Can I host a private event at Spice Garden?", a: "Absolutely! We have dedicated lounge areas and private dining rooms for events. Please contact our events team for customized packages." },
              ...userFaqs
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-100"
              >
                <h4 className="text-lg font-bold text-neutral-900 mb-3 flex items-start">
                  <span className="text-orange-600 mr-3">Q.</span> {faq.q}
                </h4>
                <p className="text-neutral-600 text-sm pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Ask a Question Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-orange-50 p-8 md:p-12 rounded-[3rem] border border-orange-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-neutral-900 mb-2">Still Have <span className="text-orange-600">Questions?</span></h3>
              <p className="text-neutral-500 text-sm">Ask us anything and get an instant AI-powered reply.</p>
            </div>
            
            <form 
              className="flex flex-col md:flex-row gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (!faqQuestion.trim()) return;
                setIsAsking(true);
                
                // Simulate AI reply
                setTimeout(() => {
                  const newFaq = {
                    q: faqQuestion,
                    a: "Thank you for your question! Our team will get back to you with a detailed answer shortly. In the meantime, feel free to contact us directly at +1 (234) 567-890."
                  };
                  setUserFaqs(prev => [newFaq, ...prev]);
                  setFaqQuestion("");
                  setIsAsking(false);
                  toast.success("Question submitted! Check the list above for a reply.");
                }, 1500);
              }}
            >
              <input 
                type="text" 
                value={faqQuestion}
                onChange={(e) => setFaqQuestion(e.target.value)}
                placeholder="Type your question here..." 
                className="flex-1 bg-white border border-orange-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 transition-colors"
                required
              />
              <Button 
                type="submit" 
                disabled={isAsking}
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-orange-600/20 disabled:opacity-50"
              >
                {isAsking ? "Thinking..." : "Ask Question"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Testimonials & Add Review */}
      <section className=" relative overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-2/3">
              <div className="mb-12">
                <motion.h4 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-orange-600 font-black uppercase tracking-[0.3em] mb-4 text-sm"
                >
                  Guest Experiences
                </motion.h4>
                <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-4 md:mb-6 tracking-tighter">What Our <span className="text-orange-600">Guests Say</span></h2>
                <p className="text-neutral-500 text-lg font-medium">Real experiences from real people who love our food.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: "Sarah Johnson", text: "The Biryani here is absolutely divine. The spices are perfectly balanced, and the service is top-notch!", rating: 5, role: "Food Critic" },
                  { name: "Michael Chen", text: "Best Indian food in the city. The Tandoori Chicken was juicy and flavorful. Highly recommend for family dinners.", rating: 5, role: "Regular Guest" },
                  { name: "Emma Wilson", text: "Cozy atmosphere and delicious vegetarian options. The Paneer Butter Masala is a must-try!", rating: 5, role: "Local Resident" },
                  { name: "David Miller", text: "The hospitality is unmatched. They really know how to make you feel special. 10/10 experience.", rating: 5, role: "Traveler" }
                ].map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-[2rem] shadow-xl border border-neutral-100 relative group hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-orange-500 fill-orange-500" />
                      ))}
                    </div>
                    <p className="text-neutral-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-neutral-900">{review.name}</h5>
                        <p className="text-orange-600 text-[10px] font-bold uppercase tracking-widest">{review.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-neutral-100 sticky top-32">
                <h3 className="text-2xl font-black text-neutral-900 mb-2">Share Your <span className="text-orange-600">Experience</span></h3>
                <p className="text-neutral-500 text-sm mb-8">Your feedback helps us grow and serve you better.</p>
                
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Thank you for your review!");
                  (e.target as HTMLFormElement).reset();
                }}>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Your Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Rating</label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} type="button" className="text-orange-500 hover:scale-110 transition-transform">
                          <Star className="h-6 w-6 fill-orange-500" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Your Message</label>
                    <textarea required placeholder="Tell us what you loved..." rows={4} className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none" />
                  </div>

                  <Button type="submit" className="w-full bg-neutral-900 hover:bg-black text-white py-6 rounded-xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
                    Submit Review
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="md:py-32 py-24 text-neutral-900 relative overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-orange-600 font-black uppercase tracking-[0.3em] mb-4 md:text-sm">Find Us</h4>
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-none text-neutral-900">
                  Visit Our <br />
                  <span className="text-orange-600">Culinary Sanctuary</span>
                </h2>
                
                <div className="space-y-12 mb-12">
                  <div className="flex items-start space-x-8 group">
                    <div className="bg-orange-600 md:p-3 p-1 rounded-[2rem] shadow-2xl shadow-orange-600/30 group-hover:scale-110 transition-transform duration-500">
                      <MapPin className="md:h-8 md:w-8 text-white" />
                    </div>
                    <div>
                      <h5 className="md:text-2xl text-xl font-black mb-2 uppercase tracking-tight text-neutral-900">Find Us At</h5>
                      <p className="text-neutral-500 text-sm font-medium leading-relaxed">
                        123 Spice Street, Foodie City,<br />
                        FC 45678, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-8 group">
                    <div className="bg-orange-600 p-1 md:p-3 rounded-[2rem] shadow-2xl shadow-orange-600/30 group-hover:scale-110 transition-transform duration-500">
                      <Clock className="md:h-8 md:w-8 text-white" />
                    </div>
                    <div>
                      <h5 className="md:text-2xl text-xl font-black mb-2 uppercase tracking-tight text-neutral-900">When We're Open</h5>
                      <div className="space-y-1">
                        <p className="text-neutral-500 text-sm font-medium">Mon - Thu: 11:00 AM - 10:00 PM</p>
                        <p className="text-neutral-500 text-sm font-medium">Fri - Sun: 11:00 AM - 11:30 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-8 group">
                    <div className="bg-orange-600 p-1 md:p-3 rounded-[2rem] shadow-2xl shadow-orange-600/30 group-hover:scale-110 transition-transform duration-500">
                      <Phone className="md:h-8 md:w-8 text-white" />
                    </div>
                    <div>
                      <h5 className="md:text-2xl text-xl font-black mb-2 uppercase tracking-tight text-neutral-900">Get In Touch</h5>
                      <p className="text-neutral-500 text-sm font-medium">+1 (234) 567-890</p>
                      <p className="text-neutral-500 text-sm font-medium">hello@spicegarden.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-12 py-8 text-xl font-black shadow-2xl shadow-orange-600/40 transition-all hover:scale-105 active:scale-95">
                    Get Directions
                  </Button>
                  <Link to="/contact">
                    <Button variant="outline" className="border-neutral-200 text-neutral-900 hover:bg-neutral-900 hover:text-white rounded-full px-12 py-8 text-xl font-black backdrop-blur-md transition-all hover:scale-105 active:scale-95">
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 w-full h-[500px] md:h-[800px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white relative group">
              {/* Real Google Maps Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789012!2d77.2167!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b34710335%3A0x1234567890abcdef!2sSpice%20Garden!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-10 grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>

              <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center z-0">
                <div className="text-center">
                  <MapPin className="h-20 w-20 text-orange-600 mx-auto mb-6 animate-bounce" />
                  <p className="text-neutral-500 font-black uppercase tracking-[0.2em]">Interactive Map Loading...</p>
                </div>
              </div>

              <div className="absolute md:bottom-12 bottom-6 md:left-12 left-6 md:right-12 right-6 bg-white/90 backdrop-blur-xl md:p-5 p-2 rounded-[3rem] border border-white shadow-2xl z-20 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                <div className="flex items-center md:gap-8 gap-4">
                  <div className="bg-orange-600 p-2 rounded-2xl shadow-xl">
                    <ChefHat className="md:h-10 md:w-10 text-white" />
                  </div>
                  <div>
                    <p className="text-neutral-900 md:text-3xl font-black uppercase tracking-tight">Spice Garden</p>
                    <p className="text-neutral-500 md:text-lg text-[12px] font-medium">Experience the royalty of Indian flavors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Popup Dialog */}
      <Dialog open={!!selectedGalleryImg} onOpenChange={() => setSelectedGalleryImg(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
          <DialogTitle className="sr-only">Gallery Image</DialogTitle>
          {selectedGalleryImg && (
            <div className="relative group">
              <img 
                src={selectedGalleryImg || undefined} 
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl" 
                alt="Gallery Full View" 
                referrerPolicy="no-referrer" 
              />
              <DialogClose className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md">
                <X className="h-6 w-6" />
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
