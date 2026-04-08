import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all the fields');
      return;
    }
    setIsSubmitted(true);
    toast.success('Message sent successfully!');
  };

  return (
    <div className="pt-24 min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-neutral-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://picsum.photos/seed/contact-bg/1920/600" 
            className="w-full h-full object-cover" 
            alt="Contact Background"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Get In Touch
          </motion.h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our menu, 
            want to book a private event, or just want to say hello.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-none shadow-xl rounded-3xl overflow-hidden bg-white p-8">
              <h3 className="text-2xl font-bold mb-8 text-neutral-900">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-neutral-900">Our Location</h5>
                    <p className="text-neutral-500 text-sm">123 Spice Street, Foodie City, FC 45678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-neutral-900">Phone Number</h5>
                    <p className="text-neutral-500 text-sm">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-neutral-900">Email Address</h5>
                    <p className="text-neutral-500 text-sm">hello@spicegarden.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-neutral-100">
                <h5 className="font-bold text-neutral-900 mb-4">Chat with us on WhatsApp</h5>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl rounded-3xl overflow-hidden bg-white p-8 md:p-12">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">Message Sent!</h2>
                  <p className="text-neutral-600 mb-8">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-neutral-900 hover:bg-black text-white px-10 py-6 rounded-xl"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-neutral-700 font-semibold">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        className="py-7 rounded-xl border-neutral-200 focus:ring-orange-500"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-neutral-700 font-semibold">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="john@example.com" 
                        className="py-7 rounded-xl border-neutral-200 focus:ring-orange-500"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-neutral-700 font-semibold">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      className="rounded-xl min-h-[200px] border-neutral-200 focus:ring-orange-500"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-8 rounded-2xl text-xl font-bold shadow-xl transition-all hover:scale-[1.01] flex items-center justify-center space-x-2"
                  >
                    <Send className="h-6 w-6" />
                    <span>Send Message</span>
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <Card className="border-none shadow-xl rounded-3xl overflow-hidden h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019297216734!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050c58!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625123456789!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Google Maps"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
