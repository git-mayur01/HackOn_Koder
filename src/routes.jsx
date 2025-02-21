import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BorrowLend from './pages/BorrowLend';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/borrow-lend" element={<BorrowLend />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
