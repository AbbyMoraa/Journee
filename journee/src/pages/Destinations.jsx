import React, { useEffect, useState } from "react";

const destinationsList = [
  { name: "Santorini", location: "Greece", type: "beach" },
  { name: "Bali", location: "Indonesia", type: "beach" },
  { name: "Maldives", location: "Maldives", type: "beach" },
  { name: "Maui", location: "Hawaii", type: "beach" },
  { name: "Tokyo", location: "Japan", type: "city" },
  { name: "Barcelona", location: "Spain", type: "city" },
  { name: "Lisbon", location: "Portugal", type: "city" },
  { name: "Swiss Alps", location: "Switzerland", type: "snow" },
  { name: "Iceland", location: "Iceland", type: "snow" },
];

const typeQueries = {
  beach: "beach tropical",
  city: "city skyline",
  snow: "snow mountains",
};

export default function Destinations() {
  const [photosByType, setPhotosByType] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const fetchPhotosByType = async () => {
      try {
        const types = Object.keys(typeQueries);
        const allPhotos = {};

        for (let type of types) {
          const response = await fetch(
            `https://api.pexels.com/v1/search?query=${typeQueries[type]}&per_page=12`,
            { headers: { Authorization: "mPHVzxGhOKepAwnrg0MGa493MrUTosy8HI8QZvYaaYErK9nZRlPog0p6" } }
          );
          if (!response.ok) throw new Error(`Failed to fetch ${type} photos`);
          const data = await response.json();
          allPhotos[type] = data.photos;
        }

        setPhotosByType(allPhotos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotosByType();
  }, []);

  const filteredDestinations = selectedType
    ? destinationsList.filter((dest) => dest.type === selectedType)
    : destinationsList;

  if (loading) return <p className="p-8 text-center">Loading destinations...</p>;
  if (error) return <p className="p-8 text-red-500 text-center">{error}</p>;

  return (
    <div className="p-8">
      {/* Dropdown Filter */}
      <div className="mb-6 flex justify-center">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="">All Trips</option>
          <option value="beach">Beach Trips</option>
          <option value="city">City Trips</option>
          <option value="snow">Snow Trips</option>
        </select>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDestinations.map((dest, index) => {
          const typePhoto =
            photosByType[dest.type]?.[index % 12] || {
              src: { medium: "/images/default.jpg" },
              alt: dest.name,
              photographer: "Unknown",
            };
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={typePhoto.src.medium}
                alt={typePhoto.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{dest.name}</h3>
                <p className="text-gray-500 text-sm">{dest.location}</p>
                <div className="text-gray-400 text-xs mt-1">
                  Photo by {typePhoto.photographer || "Pexels"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
