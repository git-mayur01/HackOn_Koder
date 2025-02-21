// src/components/MarketRow.jsx

import React from "react";

const MarketRow = ({ asset, supply, borrow, ltv, supplyAPY, borrowAPY, logo }) => {
  return (
    <tr className="hover:bg-[#1E293B] transition duration-200">
      <td className="flex items-center gap-2 py-4 px-6 text-white">
        <img src={logo} alt={asset} className="w-6 h-6 rounded-full" />
        {asset}
      </td>
      <td className="py-4 px-6 text-gray-300">{supply}</td>
      <td className="py-4 px-6 text-gray-300">{borrow}</td>
      <td className="py-4 px-6 text-gray-300">{ltv}%</td>
      <td className="py-4 px-6 text-green-400">{supplyAPY}%</td>
      <td className="py-4 px-6 text-orange-400">{borrowAPY}%</td>
      <td className="py-4 px-6">
        <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700">
          Supply
        </button>
      </td>
      <td className="py-4 px-6">
        <button className="bg-[#374151] text-orange-400 px-4 py-1 rounded-lg hover:bg-[#4B5563]">
          Borrow
        </button>
      </td>
    </tr>
  );
};

export default MarketRow;
