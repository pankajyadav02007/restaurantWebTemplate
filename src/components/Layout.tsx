import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X, Phone, Mail, MapPin, Instagram, Facebook, ArrowUp, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-nav py-3 shadow-2xl translate-y-0' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Utensils className="text-white h-6 w-6" />
          </div>
          <span className="text-2xl font-black text-white tracking-tighter">
            SPICE <span className="text-orange-500">GARDEN</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:bg-orange-500/10 ${
                  isActive ? 'text-orange-500 bg-orange-500/10' : 'text-white hover:text-orange-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="w-px h-6 bg-white/20 mx-4" />
          <Link to="/order" className="relative mr-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-500 hover:bg-transparent">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg"
                >
                  {totalItems}
                </motion.span>
              )}
            </Button>
          </Link>
          <Link to="/booking">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 font-bold shadow-lg shadow-orange-600/20 transition-all hover:scale-105 active:scale-95">
              Book Table
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/order" className="relative">
            <ShoppingCart className="h-6 w-6 text-white" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-white">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-black text-white border-orange-900/50">
              <div className="flex flex-col space-y-6 mt-10">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className="text-xl font-semibold hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link to="/booking">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg">
                    Book Table
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 border-t border-orange-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">Spice Garden</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Experience the authentic taste of Indian spices in a cozy and modern ambience. 
              We bring you the finest delicacies crafted with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><Link to="/menu" className="hover:text-orange-500 transition-colors">Our Menu</Link></li>
              <li><Link to="/booking" className="hover:text-orange-500 transition-colors">Reservations</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
                <span>123 Spice Street, Foodie City, FC 45678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                <span>hello@spicegarden.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-neutral-400 mb-4">Subscribe to get special offers and updates.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
              />
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-900 pt-8 text-center text-neutral-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Spice Garden Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-orange-600 text-white p-3 rounded-full shadow-2xl hover:bg-orange-700 transition-colors"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
