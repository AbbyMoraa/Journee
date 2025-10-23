import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-300">
      <Navbar />
      <div className="flex-grow flex items-center justify-center text-white text-4xl font-bold">
        Hello from Journee 🌴
      </div>
    </div>
  );
}

export default App;
