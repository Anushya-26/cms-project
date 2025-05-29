import React from 'react'

export default function Header() {
return (
    <>
    <nav className="z-20 flex justify-between items-center max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2">
          {/* Dog paw icon next to the name */}
          <span className="text-2xl font-extrabold text-[#B521C0] tracking-tight font-serif flex items-center">
            PawsFurVive
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-[#D5451B]"
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
        <div className="hidden md:flex gap-8 text-[#D5451B] font-semibold px-5">
          <a href="/home" className="hover:text-[#B521C0] transition">
            Home
          </a>
          <a href="/login" className="hover:text-[#B521C0] transition">
            Adopt
          </a>
          <a href="/about" className="hover:text-[#B521C0] transition">
            About
          </a>
          <a href="/developers" className="hover:text-[#B521C0] transition">
            Developer
          </a>
        </div>
        <div className="flex gap-3">
          {/* Sign In and Sign Up buttons */}
          <a
            href="/Login"
            className="bg-white border border-[#B521C0] text-[#B521C0] hover:bg-[#B521C0] hover:text-white font-bold py-2 px-4 rounded-xl shadow transition-colors duration-300 text-base ml-2"
          >
            Sign In
          </a>
          <a
            href="/Signup"
            className="bg-[#B521C0] text-white hover:bg-[#D5451B] font-bold py-2 px-4 rounded-xl shadow transition-colors duration-300 text-base ml-2"
          >
            Sign Up
          </a>
        </div>
      </nav>

      </>
)
}
