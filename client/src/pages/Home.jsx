import React from "react";
import {Link} from 'react-router-dom';
export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://www.drbasko.com/wp-content/uploads/2017/09/retriever-home-1030.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f4e7e1",
      }}
    >
      <div className="p-10 max-w-xl text-center">
        <h1
          className="text-4xl font-extrabold mb-6 text-[#d33302]"
          style={{textShadow: "2px 2px 4px black"}}
          
        >
          Welcome to <span className="text-[#ff9b45]">Paws Furvive🐾</span>
        </h1>
        <p
          className="text-lg font-medium text-[#521c0d]"
          style={{textShadow: "1px 1px 10px white" , fontSize: "1.1rem"}}

        >
          Every dog deserves a loving home. Our platform connects caring
          adopters with wonderful rescue dogs, ensuring they find their forever
          family. Start your journey today
        </p>
        <button
          className="mt-8 px-8 py-3 bg-[#ff9b45] text-white font-bold rounded-full shadow-lg hover:bg-[#d33302] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#d33302] focus:ring-offset-2"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
