import React, { useState, useEffect } from 'react';

export default function SavedDestinations() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    
    const savedData = JSON.parse(localStorage.getItem('savedDestinations')) || [];
    setSaved(savedData);
  }, []);

  const removeDestination = (id) => {
    const updated = saved.filter(dest => dest.id !== id);
    setSaved(updated);
    localStorage.setItem('savedDestinations', JSON.stringify(updated));
  };

  if (saved.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 via-yellow-100 to-teal-100 p-6">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" alt="Cute travel illustration" className="w-64 h-64 mb-4 rounded-2xl shadow-lg" />
        <h2 className="text-3xl font-bold text-pink-500 mb-4">No Saved Destinations Yet 💖</h2>
        <p className="text-pink-700 text-lg mb-6 text-center">Explore destinations and save your favorites to make your dream journey come alive!</p>
        <button className="bg-pink-400 text-white py-2 px-6 rounded-lg hover:bg-pink-500 transition-colors text-lg font-semibold">Start Exploring 🌴</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-yellow-100 to-teal-100 p-6">
      <h2 className="text-3xl font-bold text-pink-500 mb-6 text-center">Your Saved Destinations </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {saved.map(dest => (
          <div key={dest.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">{dest.name}</h3>
              <p className="text-gray-600 mb-4">{dest.description}</p>
              <button 
                onClick={() => removeDestination(dest.id)}
                className="w-full bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-500 transition-colors"
              >
                Remove 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
