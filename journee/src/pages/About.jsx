export default function About() {
  return (
    <div className="relative bg-gradient-to-r from-[#F8E7C9] to-[#D1F0E1] min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center">
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
          About Journee
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Journee was built with one mission — to make exploring the world simpler, smarter, 
          and more inspiring. Whether you dream of relaxing on sunlit beaches, 
          wandering vibrant cities, or hiking through snow-capped peaks, Journee helps 
          you find your perfect getaway with ease and confidence.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          We bring together handpicked destinations, stunning imagery, and seamless 
          booking tools — so every trip you plan feels effortless from start to finish.
        </p>

        <h2 className="text-2xl font-semibold text-teal-600 mb-3">
          Why Choose Journee?
        </h2>
        <ul className="text-gray-700 space-y-2">
          <li>Curated destinations from across the globe</li>
          <li>Real-time visuals powered by Pexels API</li>
          <li>Simple, friendly user experience</li>
          <li>Built with love, for travelers like you</li>
        </ul>
      </div>
    </div>
  );
}
