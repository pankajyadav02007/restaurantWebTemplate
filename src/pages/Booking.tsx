import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, Users, Phone, User, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast.error('Please fill in all the fields');
      return;
    }
    setIsSubmitted(true);
    toast.success('Table reserved successfully!');
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-neutral-50 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl text-center border border-orange-100"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Reservation Confirmed!</h2>
          <p className="text-neutral-600 mb-8">
            We've reserved a table for {formData.guests} guests on {formData.date} at {formData.time}. 
            A confirmation SMS has been sent to {formData.phone}.
          </p>
          <Button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-neutral-900 hover:bg-black text-white py-6 rounded-xl"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-neutral-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://picsum.photos/seed/booking-bg/1920/600" 
            className="w-full h-full object-cover" 
            alt="Booking Background"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Book Your Table
          </motion.h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Secure your spot for an unforgettable dining experience. 
            Whether it's a romantic dinner or a family gathering, we've got you covered.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <div className="lg:w-2/3">
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-neutral-700 font-semibold">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                        <Input 
                          id="name" 
                          placeholder="John Doe" 
                          className="pl-12 py-7 rounded-xl border-neutral-200 focus:ring-orange-500"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-neutral-700 font-semibold">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                        <Input 
                          id="phone" 
                          placeholder="+1 (234) 567-890" 
                          className="pl-12 py-7 rounded-xl border-neutral-200 focus:ring-orange-500"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-neutral-700 font-semibold">Date</Label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                        <Input 
                          id="date" 
                          type="date" 
                          className="pl-12 py-7 rounded-xl border-neutral-200 focus:ring-orange-500"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-neutral-700 font-semibold">Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                        <Input 
                          id="time" 
                          type="time" 
                          className="pl-12 py-7 rounded-xl border-neutral-200 focus:ring-orange-500"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="guests" className="text-neutral-700 font-semibold">Number of Guests</Label>
                      <Select 
                        value={formData.guests} 
                        onValueChange={(val) => setFormData({...formData, guests: val})}
                      >
                        <SelectTrigger className="py-7 rounded-xl border-neutral-200">
                          <div className="flex items-center">
                            <Users className="mr-3 h-5 w-5 text-neutral-400" />
                            <SelectValue placeholder="Select number of guests" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Guest' : 'Guests'}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-8 rounded-2xl text-xl font-bold shadow-xl transition-all hover:scale-[1.01]"
                  >
                    Confirm Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            <Card className="bg-neutral-900 text-white border-none shadow-xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">Opening Hours</h3>
              <div className="space-y-4 text-neutral-300">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Monday - Friday</span>
                  <span className="text-white font-semibold">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Saturday</span>
                  <span className="text-white font-semibold">10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Sunday</span>
                  <span className="text-white font-semibold">10:00 AM - 09:00 PM</span>
                </div>
              </div>
            </Card>

            <Card className="bg-orange-50 border-orange-100 shadow-xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Need Help?</h3>
              <p className="text-neutral-600 mb-6">
                For large parties (15+ guests) or special events, please contact us directly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-2 rounded-lg text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-neutral-900">+1 (234) 567-890</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
