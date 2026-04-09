import React from 'react';
import { motion } from 'motion/react';
import { 
  Utensils, 
  Truck, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Heart, 
  Clock, 
  ChefHat, 
  Wine,
  Music,
  Camera,
  Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      title: "Fine Dining",
      description: "Experience a luxurious atmosphere with world-class service and gourmet dishes crafted by our master chefs.",
      icon: Utensils,
      image: "https://as1.ftcdn.net/v2/jpg/06/39/01/78/1000_F_639017831_SyiXzXpbH7lMz9W9eTM4iURBsMZ81njB.jpg",
      features: ["Elegant Ambience", "Premium Wine Selection", "Table Service"]
    },
    {
      title: "Home Delivery",
      description: "Get your favorite meals delivered hot and fresh to your doorstep within 30 minutes. Quality guaranteed.",
      icon: Truck,
      image: "https://www.synergysuite.com/wp-content/uploads/2023/07/restaurant-food-delivery-2-1024x576.jpg",
      features: ["Real-time Tracking", "Eco-friendly Packaging", "Contactless Delivery"]
    },
    {
      title: "Event Catering",
      description: "Make your special occasions memorable with our professional catering services for weddings and corporate events.",
      icon: Calendar,
      image: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/fjexglaz/f6f6a4d6-06c0-4a6e-8b06-0af5af7dda49.jpg",
      features: ["Custom Menus", "Professional Staff", "On-site Cooking"]
    },
    {
      title: "Private Parties",
      description: "Exclusive lounge areas for birthdays, anniversaries, and corporate gatherings with personalized themes.",
      icon: Users,
      image: "https://www.theimperialrestaurant.com/wp-content/uploads/2024/08/TheImperialRestaurant-PrivateEvents-Inset7-600x400.jpg",
      features: ["Private Lounge", "Custom Decor", "Dedicated Server"]
    }
  ];

  const additionalServices = [
    { title: "Live Music", icon: Music, desc: "Enjoy soulful live performances every weekend." },
    { title: "Wine Tasting", icon: Wine, desc: "Explore our curated collection of international wines." },
    { title: "Gift Cards", icon: Gift, desc: "Share the joy of great food with your loved ones." },
    { title: "Photography", icon: Camera, desc: "Professional photo spots for your social media." },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-neutral-950 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://marketplace.canva.com/EAGFv9wbcDA/1/0/800w/canva-orange-and-white-modern-asian-food-restaurant-outdoor-banner-sG2Out-SBX0.jpg" 
            className="w-full h-full object-cover"
            alt="Services Hero"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-neutral-950" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-bold uppercase tracking-[0.3em] mb-4 text-sm"
          >
            Our Offerings
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter"
          >
            Exceptional <span className="text-orange-500">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We don't just serve food; we create experiences. Discover the wide range of services we offer to make your visit special.
          </motion.p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-20 md:space-y-32">
            {mainServices.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                <div className="lg:w-1/2 relative">
                  <div className="absolute -inset-4 bg-orange-600/10 rounded-[3rem] blur-2xl" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="relative z-10 rounded-[2.5rem] shadow-2xl w-full aspect-[4/3] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block">
                    <service.icon className="h-10 w-10 text-orange-600" />
                  </div>
                </div>
                
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center lg:justify-start space-x-3 text-orange-600 mb-6">
                    <service.icon className="h-6 w-6" />
                    <span className="font-bold uppercase tracking-widest text-sm">Service {index + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">{service.title}</h2>
                  <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-3 text-neutral-700 font-medium">
                        <ShieldCheck className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.title === "Fine Dining" ? "/booking" : "/menu"}>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-10 py-7 text-lg font-bold shadow-xl shadow-orange-600/20 transition-all hover:scale-105">
                      {service.title === "Fine Dining" ? "Book A Table" : "Order Now"}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Perks */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4">Extra <span className="text-orange-600">Perks</span></h2>
            <p className="text-neutral-500">Small details that make a big difference.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all group"
              >
                <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                  <perk.icon className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -ml-32 -mb-32" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to Experience <br /> <span className="text-orange-500">Spice Garden?</span></h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/booking">
                  <Button className="cursor-pointer bg-orange-600 hover:bg-orange-700 text-white rounded-full px-12 py-8 text-xl font-black shadow-2xl shadow-orange-600/40 transition-all hover:scale-110">
                    Book A Table
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="cursor-pointer border-white/30 text-black hover:bg-black hover:text-white rounded-full px-12 py-8 text-xl font-black transition-all hover:scale-110">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
