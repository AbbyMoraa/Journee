import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center p-8"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1442179368/photo/maldives-island.jpg?s=612x612&w=0&k=20&c=t38FJQ6YhyyZGN91A8tpn3nz9Aqcy_aXolImsOXOZ34=')",
      }}
    >
      {/* Dark overlay for text readability */}
      
      {/* Hero Text */}
      <h1 className="relative text-5xl font-extrabold text-white mb-6">
        Roam the Earth with Journee 
      </h1>
      <p className="relative text-gray-100 max-w-xl mb-8">
        Discover breathtaking destinations, plan your next adventure, and make memories that last a lifetime.
      </p>

      {/* Buttons */}
      <div className="relative flex flex-col sm:flex-row gap-4">
        <Link
          to="/destinations"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Explore Destinations
        </Link>
        <Link
          to="/login"
          className="bg-white border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

