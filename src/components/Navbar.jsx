import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Fiscal</h1>
      <div className='flex items-center justify-center space-x-8 text-white'>
      <ul>
      <Link to="/" className="hover:underline mr-8">Home</Link>
      <Link to="/features" className="hover:underline mr-8">Features</Link>
      <Link to="/pricing" className="hover:underline mr-8">Pricing</Link>
      <Link to="/about" className="hover:underline ">About</Link>
      </ul>
      </div>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
