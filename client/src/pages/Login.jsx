import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    alert(`Logged in as: ${email}`);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#F4E7E1] relative overflow-hidden">
      
      <div
        className="absolute top-10 left-16 opacity-20 z-20 pointer-events-none text-[60px]"
      >🐾</div>
      <div
        className="absolute bottom-20 right-20 opacity-15 z-20 pointer-events-none text-[80px]"
      >🐾</div>
   
      <div className="max-w-[400px] w-full bg-white p-8 rounded-2xl shadow-lg text-center border-2.5 border-[#B521C0] relative z-30 backdrop-blur-sm">
        <div className="mb-6">
        
          <h2 className="text-[#D5451B] m-0 font-pacifico tracking-wide text-3xl">
            Login🐕
          </h2>
          <p className="text-[#B521C0] text-[15px] mt-2">
            Welcome back! Please login to find your new best friend.💎
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-left">
              <label className="font-medium text-[#D5451B]">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-3 py-2 mt-1 rounded-lg border border-[#FF9B45] outline-none text-[16px] bg-[#F4E7E1] text-[#B521C0] transition-shadow focus:shadow-[0_0_0_2px_#FF9B4555] focus:border-[#B521C0]"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label className="font-medium text-[#D5451B]">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 rounded-lg border border-[#FF9B45] outline-none text-[16px] bg-[#F4E7E1] text-[#B521C0] transition-shadow focus:shadow-[0_0_0_2px_#FF9B4555] focus:border-[#B521C0]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#FF9B45] to-[#B521C0] text-white rounded-lg font-semibold text-[16px] cursor-pointer transition-transform active:scale-95 shadow-lg tracking-wide mt-1"
            >
              Login 🐶
            </button>
            <div className="mt-6 text-[#B521C0] text-sm italic tracking-wide flex items-center justify-center gap-2">
              <span>Not a member?</span>
              <Link to="/signup" className="text-[#FF9B45] underline font-medium">
                Sign Up!
              </Link>
              <span >🐾</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;