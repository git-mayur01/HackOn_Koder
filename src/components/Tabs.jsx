import React from 'react';

const Tabs = () => {
  const markets = ['Jito Market', 'JLP Market', 'Main Market', 'Altcoins Market', 'Ethena Market'];

  return (
    <div className="flex space-x-4 px-8 py-4 mb-6 bg-[#1F2937] rounded-lg shadow-lg">
      {markets.map((market, idx) => (
        <button
          key={idx}
          className={`px-4 py-2 rounded-lg text-white ${market === 'JLP Market' ? 'bg-[#2563EB]' : 'bg-[#374151]'} hover:bg-[#4B5563] transition duration-300`}
        >
          {market}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
