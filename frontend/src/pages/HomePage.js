import React from "react";

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-brown-300 to-brown-100 min-h-screen">
      <div className="container mx-auto text-center py-16">
        <h1 className="text-4xl font-bold text-brown-900">Welcome to AI SmartClass</h1>
        <p className="text-brown-700 mt-4">
          An interactive platform to enhance your learning experience.
        </p>
        <div className="mt-8">
          <button className="bg-brown-500 text-white px-4 py-2 rounded hover:bg-brown-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
