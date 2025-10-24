import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Journee. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://www.pexels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors text-sm"
          >
            Images by Pexels
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition-colors text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition-colors text-sm"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
