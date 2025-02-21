import React from 'react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0B1623] text-gray-400 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Logo & Social Icons */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-white text-2xl font-semibold">FISCAL</h1>
          <div className="flex space-x-4">
            <FaDiscord className="text-gray-400 hover:text-white text-xl" />
            <FaTwitter className="text-gray-400 hover:text-white text-xl" />
          </div>
          <p className="text-xs">©2025 Fiscal. All rights reserved</p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-white mb-2">About</h3>
          <ul className="space-y-1">
            <li className="hover:text-white">Documentation</li>
            <li className="hover:text-white">Terms</li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-white mb-2">Products</h3>
          <ul className="space-y-1">
            <li className="hover:text-white">Lending</li>
            <li className="hover:text-white">Liquidity</li>
            <li className="hover:text-white">Multiply</li>
            <li className="hover:text-white">Leverage</li>
            <li className="hover:text-white">Creator Vaults</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-white mb-2">Resources</h3>
          <ul className="space-y-1">
            <li className="hover:text-white">Litepaper</li>
            <li className="hover:text-white">K-Lend Risk Dashboard</li>
            <li className="text-gray-600">Leaderboard (Coming Soon)</li>
            <li className="text-gray-600">Referrals (Coming Soon)</li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-white mb-2">Connect</h3>
          <ul className="space-y-1">
            <li className="hover:text-white">Discord</li>
            <li className="hover:text-white">Twitter</li>
            <li className="hover:text-white">Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
