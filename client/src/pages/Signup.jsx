import React from 'react'
import { useState } from 'react';
export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Handle signup logic here (e.g., API call)
    alert('Signup successful!');
  };

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-[#F4E7E1] relative">
      {/* Dog paw prints background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
        <div className="absolute top-10 left-10 text-6xl">🐾</div>
        <div className="absolute bottom-16 right-16 text-7xl">🐾</div>
        <div className="absolute top-1/2 left-1/4 text-5xl">🐶</div>
        <div className="absolute bottom-24 left-1/3 text-4xl">🐾</div>
      </div>
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border-2 border-[#FF9B45] relative z-10">
        <div className="flex flex-col items-center mb-5">
          <span className="text-5xl mb-2">🐶</span>
          <h2 className="text-3xl font-bold text-center text-[#B521C0]">Sign Up</h2>
          <p className="text-[#D5451B] text-sm mt-1">Join our dog lovers community!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-[#D5451B] mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-[#FF9B45] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B521C0] bg-[#F4E7E1] placeholder:text-[#D5451B] text-[#B521C0]"
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-5">
            <label className="block text-[#D5451B] mb-1 font-medium" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full px-3 py-2 border border-[#FF9B45] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B521C0] bg-[#F4E7E1] placeholder:text-[#D5451B] text-[#B521C0]"
              type="tel"
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-5">
            <label className="block text-[#D5451B] mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-[#FF9B45] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B521C0] bg-[#F4E7E1] placeholder:text-[#D5451B] text-[#B521C0]"
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-5">
            <label className="block text-[#D5451B] mb-1 font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-[#FF9B45] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B521C0] bg-[#F4E7E1] placeholder:text-[#D5451B] text-[#B521C0]"
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-5">
            <label className="block text-[#D5451B] mb-1 font-medium" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border border-[#FF9B45] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B521C0] bg-[#F4E7E1] placeholder:text-[#D5451B] text-[#B521C0]"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
              placeholder="Confirm your password"
            />
          </div>
          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#B521C0] text-white py-2 rounded-lg hover:bg-[#FF9B45] hover:text-[#B521C0] transition-colors font-semibold shadow-md flex items-center justify-center gap-2"
          >
            <span>Sign Up</span>
            <span className="text-lg">🐾</span>
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
