import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MarketDataSection = () => {
  const [marketData, setMarketData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.llama.fi/protocols'); // DeFi Llama API
        if (response && response.data) {
          // Filter protocols that have lending features
          const lendingProtocols = response.data.filter(protocol => protocol.category === 'Lending');
          setMarketData(lendingProtocols);
        } else {
          console.error('Unexpected API response structure:', response);
          setError('Invalid data format received from API');
        }
      } catch (error) {
        console.error('Error fetching market data:', error);
        setError('Failed to fetch market data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="bg-red-600 text-white p-4 rounded-2xl mt-1">
        <h2 className="text-xl font-bold">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-primary text-white p-6 rounded-2xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Market Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {marketData.length > 0 ? (
          marketData.map((protocol, index) => (
            <div key={index} className="bg-secondary p-4 rounded-xl hover:bg-opacity-80 transition">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{protocol.name || 'N/A'}</span>
                <img src={protocol.logo} alt={`${protocol.name} logo`} className="h-6 w-6 rounded-full" />
              </div>
              <p>TVL: ${protocol.tvl ? protocol.tvl.toLocaleString() : '0'}</p>
              <p>Change (1d): {protocol.change_1d ? `${protocol.change_1d}%` : '0%'}</p>
              <p>Change (7d): {protocol.change_7d ? `${protocol.change_7d}%` : '0%'}</p>
              <div className="flex justify-between mt-2">
                <button className="bg-green-500 px-3 py-1 rounded-lg">Supply</button>
                <button className="bg-red-500 px-3 py-1 rounded-lg">Borrow</button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading market data...</p>
        )}
      </div>
    </div>
  );
};

export default MarketDataSection;
