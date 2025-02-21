import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import MarketDataSection from './components/MarketDataSection';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* MarketDataSection - Only on Home Page, above Footer */}
      {location.pathname === '/' && <MarketDataSection />}

      {/* Footer displayed on all pages */}
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
