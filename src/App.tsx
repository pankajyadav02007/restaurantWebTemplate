import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar, Footer, BackToTop } from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import { Toaster } from './components/ui/sonner';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans selection:bg-orange-200 selection:text-orange-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/order" element={<Order />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </CartProvider>
  );
}
