import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ArrowLeft, CreditCard, Truck, Wallet, CheckCircle2, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const Order = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'UPI'
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Please fill in all details');
      return;
    }
    setStep('success');
    clearCart();
    toast.success('Order placed successfully!');
  };

  if (step === 'success') {
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
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Order Confirmed!</h2>
          <p className="text-neutral-600 mb-8">
            Thank you for choosing Spice Garden. Your delicious meal will be at your doorstep in 30-45 minutes.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button className="w-full bg-neutral-900 hover:bg-black text-white py-6 rounded-xl">
                Back to Home
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline" className="w-full py-6 rounded-xl border-neutral-200">
                Order More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0 && step === 'cart') {
    return (
      <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4">
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full">
          <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingCart className="h-12 w-12 text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Your cart is empty</h2>
          <p className="text-neutral-500 mb-10">
            Looks like you haven't added any delicious items to your cart yet.
          </p>
          <Link to="/menu">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-7 rounded-full text-lg">
              Explore Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4 mb-10">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => step === 'checkout' ? setStep('cart') : window.history.back()}
            className="rounded-full hover:bg-orange-100 hover:text-orange-600"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-4xl font-bold text-neutral-900">
            {step === 'cart' ? 'Your Shopping Cart' : 'Checkout Details'}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {step === 'cart' ? (
              <div className="space-y-4">
                {cart.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex items-center gap-6"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-24 rounded-xl object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-neutral-900">{item.name}</h3>
                      <p className="text-orange-600 font-bold">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded-xl border border-neutral-100">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-lg hover:bg-white"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-lg hover:bg-white"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-full"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-neutral-900 text-white p-8">
                  <CardTitle className="text-2xl">Delivery Information</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        className="rounded-xl py-6"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        placeholder="+1 (234) 567-890" 
                        className="rounded-xl py-6"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Delivery Address</Label>
                    <Textarea 
                      id="address" 
                      placeholder="Enter your full address..." 
                      className="rounded-xl min-h-[120px]"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Payment Method</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: 'UPI', icon: Wallet, label: 'UPI / Wallet' },
                        { id: 'Card', icon: CreditCard, label: 'Credit/Debit Card' },
                        { id: 'COD', icon: Truck, label: 'Cash on Delivery' }
                      ].map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setFormData({...formData, paymentMethod: method.id})}
                          className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${
                            formData.paymentMethod === method.id 
                            ? 'border-orange-600 bg-orange-50 text-orange-600' 
                            : 'border-neutral-100 bg-white text-neutral-500 hover:border-neutral-200'
                          }`}
                        >
                          <method.icon className="h-8 w-8 mb-2" />
                          <span className="text-sm font-bold">{method.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-none shadow-xl rounded-3xl overflow-hidden sticky top-32">
              <CardHeader className="bg-orange-600 text-white p-8">
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Delivery Fee</span>
                    <span className="text-green-600 font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Tax (5%)</span>
                    <span className="font-bold">${(totalPrice * 0.05).toFixed(2)}</span>
                  </div>
                  <Separator className="bg-neutral-100" />
                  <div className="flex justify-between text-xl font-bold text-neutral-900">
                    <span>Total</span>
                    <span className="text-orange-600">${(totalPrice * 1.05).toFixed(2)}</span>
                  </div>
                </div>

                {step === 'cart' ? (
                  <Button 
                    onClick={() => setStep('checkout')}
                    className="w-full bg-neutral-900 hover:bg-black text-white py-8 rounded-2xl text-lg font-bold shadow-lg"
                  >
                    Proceed to Checkout
                  </Button>
                ) : (
                  <Button 
                    onClick={handleCheckout}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-8 rounded-2xl text-lg font-bold shadow-lg"
                  >
                    Place Order Now
                  </Button>
                )}

                <div className="text-center">
                  <p className="text-xs text-neutral-400 mb-4">Or order via external platforms</p>
                  <div className="flex justify-center space-x-4">
                    <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.png" alt="Zomato" className="h-6 grayscale hover:grayscale-0 transition-all" />
                    </a>
                    <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png" alt="Swiggy" className="h-6 grayscale hover:grayscale-0 transition-all" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
