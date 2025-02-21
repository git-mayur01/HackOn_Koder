import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';


const App = () => (
<Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
