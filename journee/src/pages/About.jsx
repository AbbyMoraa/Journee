import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Journee</h1>
      <p className="text-center text-gray-700 max-w-2xl mb-6">
        Journee is your smart travel companion. Discover beautiful destinations around the world,
        explore breathtaking beaches, and plan your next adventure effortlessly. Our goal is to make
        exploring the world fun, simple, and inspiring for everyone.
      </p>
      <img
        src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg"
        alt="Travel"
        className="w-full max-w-2xl rounded-2xl shadow-lg mb-6"
      />
      <p className="text-center text-gray-500 max-w-2xl">
        Built with your travel dreams in mind
      </p>
    </div>
  );
}
