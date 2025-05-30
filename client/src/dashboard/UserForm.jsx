import React, { useState } from "react";

export default function UserForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#F4E7E1] font-sans overflow-hidden">
      {/* Floating Dog Paws Background */}
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .dog-paw {
          position: absolute;
          fill: #D5451B;
          opacity: 0.15;
          animation: floatUpDown 6s ease-in-out infinite;
          filter: drop-shadow(0 0 2px rgba(213,69,27,0.2));
        }
        .paw1 { top: 10%; left: 5%; width: 60px; animation-delay: 0s; }
        .paw2 { top: 30%; right: 10%; width: 100px; animation-delay: 2s; }
        .paw3 { bottom: 15%; left: 15%; width: 80px; animation-delay: 4s; }
        .paw4 { bottom: 25%; right: 20%; width: 70px; animation-delay: 1s; }
      `}</style>

      {/* SVG Background Paws */}
      {["paw1", "paw2", "paw3", "paw4"].map((paw, i) => (
        <svg
          key={paw}
          className={`dog-paw ${paw}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle cx="5.5" cy="10.5" r="2.5" />
          <circle cx="18.5" cy="10.5" r="2.5" />
          <circle cx="12" cy="4.5" r="2.5" />
          <ellipse cx="12" cy="17" rx="5" ry="7" />
        </svg>
      ))}

      {/* Sticky Navbar */}
      <nav
        className="sticky top-0 z-50"
        style={{
          backgroundColor: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          maxWidth: "100%",
        }}
      >
        {/* Header Section Replaced */}
        <div
          className="flex items-center gap-2"
          style={{ color: "#D5451B", minWidth: "200px" }}
        >
          <span className="text-3xl font-extrabold tracking-tight font-serif flex items-center gap-2">
            PawsFurVive
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="5.5" cy="10.5" r="2.5" />
              <circle cx="18.5" cy="10.5" r="2.5" />
              <circle cx="12" cy="4.5" r="2.5" />
              <ellipse cx="12" cy="17" rx="5" ry="7" />
            </svg>
          </span>
        </div>

        {/* Center: Title */}
        <div style={{ textAlign: "center", flexGrow: 1 }}>
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#1e3a8a",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Pet Adoption
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#475569", margin: 0 }}>
            Adopt your love here
          </p>
        </div>

        {/* Right Spacer */}
        <div style={{ minWidth: "200px" }}></div>
      </nav>

      {/* Form Section */}
      <div className="flex items-center justify-center px-4 py-10 relative z-10">
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}</style>

        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10 transition-all duration-300">
          {submitted ? (
            <div className="text-center animate-fade-in">
              <h2 className="text-4xl font-bold text-[#D5451B] mb-4">🎉 Woof Woof!</h2>
              <p className="text-lg text-[#521C0D]">
                Your dog adoption form has been{" "}
                <span className="font-semibold text-[#FF9B45]">paw-sitively</span> submitted! 🐶
                <br />
                We'll bark back to you soon with more details. 🐾💌
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center text-[#D5451B] mb-8">
                🐶 Dog Adoption Form
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dog Details */}
                <div>
                  <label className="block text-[#521C0D] font-semibold mb-2">Dog Name</label>
                  <input type="text" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9B45]" />
                </div>
                <div>
                  <label className="block text-[#521C0D] font-semibold mb-2">Dog Age</label>
                  <input type="number" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9B45]" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[#521C0D] font-semibold mb-2">Dog Breed</label>
                  <input type="text" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9B45]" />
                </div>

                {/* Parent Details */}
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-[#D5451B] mt-4 mb-2">👨‍👩‍👧‍👦 Parent Details</h3>
                </div>
                <div>
                  <label className="block text-[#521C0D] font-semibold mb-2">Parent Name</label>
                  <input type="text" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9B45]" />
                </div>
                <div>
                  <label className="block text-[#521C0D] font-semibold mb-2">Contact Number</label>
                  <input type="tel" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9B45]" />
                </div>
                <div>
                  <label className="block text-[#521C0D] font-semibold mb-2">Email Address</label>
                  <input type="email" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9B45]" />
                </div>
                <div>
                  <label className="block text-[#521C0D] font-semibold mb-2">Address</label>
                  <textarea required rows="3" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9B45]"></textarea>
                </div>

                <div className="md:col-span-2">
                  <button type="submit" className="w-full bg-[#FF9B45] hover:bg-[#D5451B] text-white font-bold py-3 rounded-lg transition duration-300">
                    Submit Adoption Form
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
