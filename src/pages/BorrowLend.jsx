import React from 'react';
import Navbar from '../components/Navbar';
import Tabs from '../components/Tabs';

const BorrowLend = () => {
  return (
    <div className="min-h-screen bg-[#0B1623] text-white font-sans">
      <Navbar />

      {/* Page Heading */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-2">Borrow / Lend</h2>
        <p className="text-[#60A5FA]">
          Supply assets to earn yield and borrow against collateral. <span className="underline cursor-pointer">How it works</span>
        </p>
      </div>

      {/* Market Tabs */}
      <Tabs />

      {/* Market Table */}
      <div className="px-8">
        <div className="bg-[#1F2937] rounded-xl p-4">
          {/* Table Header */}
          <div className="grid grid-cols-6 text-gray-400 text-sm mb-4">
            <span>Asset</span>
            <span>Total Supply</span>
            <span>Total Borrow</span>
            <span>Liquidation LTV</span>
            <span>Supply APY</span>
            <span>Borrow APY</span>
          </div>

          {/* Table Rows */}
          {[
            { asset: 'SOL', supply: '730.93K', borrow: '656.42K', ltv: '0%', supplyAPY: '8.37%', borrowAPY: '7.21%' },
            { asset: 'JITOSOL', supply: '735.65K', borrow: '320.88K', ltv: '55%', supplyAPY: '0.02%', borrowAPY: '0.06%' }
          ].map((row, idx) => (
            <div key={idx} className="grid grid-cols-6 items-center py-3 bg-[#111827] rounded-lg mb-2 hover:bg-[#1F2937] transition">
              <span>{row.asset}</span>
              <span>{row.supply}</span>
              <span>{row.borrow}</span>
              <span>{row.ltv}</span>
              <span className={row.supplyAPY > '1%' ? 'text-[#10B981]' : 'text-[#60A5FA]'}>{row.supplyAPY}</span>
              <span className={row.borrowAPY > '1%' ? 'text-[#F97316]' : 'text-[#60A5FA]'}>{row.borrowAPY}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorrowLend;
