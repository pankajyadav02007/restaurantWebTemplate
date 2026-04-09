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
            src="https://marketplace.canva.com/EAGFv9wbcDA/1/0/800w/canva-orange-and-white-modern-asian-food-restaurant-outdoor-banner-sG2Out-SBX0.jpg" 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="About Hero"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
          >
            Our Culinary Journey
          </motion.h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto px-4">
            Discover the passion, tradition, and people behind Spice Garden.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 md:mb-8">The Story of Spice Garden</h2>
              <div className="space-y-4 sm:space-y-6 text-neutral-600 leading-relaxed text-sm sm:text-base">
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
              <img src="https://img.freepik.com/premium-photo/stylish-exterior-design-contemporary-cafeteria_952161-105356.jpg?w=2000" className="rounded-2xl shadow-lg mt-12" alt="Restaurant History" referrerPolicy="no-referrer" />
              <img src="https://tse4.mm.bing.net/th/id/OIP.uhuabPtigRBfJUsO3ix2mQHaHp?rs=1&pid=ImgDetMain&o=7&rm=3" className="rounded-2xl shadow-lg" alt="Restaurant History" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-neutral-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-neutral-900 p-8 sm:p-12 rounded-3xl border border-neutral-800">
              <div className="bg-orange-600 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                To provide an authentic and memorable dining experience by serving high-quality, 
                flavorful Indian cuisine crafted with traditional methods and modern hospitality.
              </p>
            </div>
            <div className="bg-neutral-900 p-8 sm:p-12 rounded-3xl border border-neutral-800">
              <div className="bg-orange-600 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Vision</h3>
              <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                To be the leading destination for Indian culinary excellence, recognized for our 
                innovation, authenticity, and the warmth of our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Meet Our Master Chefs</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: "Chef Rajan", role: "Executive Chef", img: "https://img.freepik.com/premium-photo/beautiful-photo-chef-smiling-their-restaurant-kitchen-with-dishes-ingredients_1294789-810.jpg" },
              { name: "Chef Priya", role: "Pastry & Dessert Specialist", img: "https://img.freepik.com/premium-photo/beautiful-korean-chef-girl-is-ready-cook-food-restaurant-kitchen_148840-15155.jpg?w=2000" },
              { name: "Chef Amit", role: "Tandoor Master", img: "https://static.vecteezy.com/system/resources/thumbnails/041/439/142/small_2x/ai-generated-elevating-fine-dining-savoring-success-chef-standing-in-a-gourmet-restaurant-generative-ai-photo.jpg" }
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
