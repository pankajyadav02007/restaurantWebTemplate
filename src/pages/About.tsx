import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Award, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/about-hero/1920/1080" 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="About Hero"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Culinary Journey
          </motion.h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Discover the passion, tradition, and people behind Spice Garden.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-neutral-900 mb-8">The Story of Spice Garden</h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Founded in 1995, Spice Garden began as a small family-run eatery with a simple mission: 
                  to share the rich, diverse flavors of Indian cuisine with our community. Our founder, 
                  Chef Rajan, brought his grandmother's secret recipes and a passion for authentic spices.
                </p>
                <p>
                  Over the decades, we have evolved into a beloved culinary destination, known for our 
                  commitment to quality, freshness, and traditional cooking techniques. Every dish we 
                  serve is a tribute to the vibrant food culture of India.
                </p>
                <p>
                  Today, Spice Garden is more than just a restaurant; it's a place where families gather, 
                  friends celebrate, and memories are made over a shared love for exceptional food.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/about-1/600/800" className="rounded-2xl shadow-lg mt-12" alt="Restaurant History" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/about-2/600/800" className="rounded-2xl shadow-lg" alt="Restaurant History" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-neutral-900 p-12 rounded-3xl border border-neutral-800">
              <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-neutral-400 leading-relaxed">
                To provide an authentic and memorable dining experience by serving high-quality, 
                flavorful Indian cuisine crafted with traditional methods and modern hospitality.
              </p>
            </div>
            <div className="bg-neutral-900 p-12 rounded-3xl border border-neutral-800">
              <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-neutral-400 leading-relaxed">
                To be the leading destination for Indian culinary excellence, recognized for our 
                innovation, authenticity, and the warmth of our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Meet Our Master Chefs</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Chef Rajan", role: "Executive Chef", img: "https://picsum.photos/seed/chef-1/400/500" },
              { name: "Chef Priya", role: "Pastry & Dessert Specialist", img: "https://picsum.photos/seed/chef-2/400/500" },
              { name: "Chef Amit", role: "Tandoor Master", img: "https://picsum.photos/seed/chef-3/400/500" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl shadow-xl">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-900">{member.name}</h4>
                <p className="text-orange-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
