// src/services/api.js

export const fetchMarketData = async () => {
    try {
      const response = await fetch('https://api.example.com/market-data'); // Replace with actual API URL
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching market data:", error);
      return [];
    }
  };
  