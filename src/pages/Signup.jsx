import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/ws-wordmark-refresh.48a6eb42.svg";
import { useAuth } from "../contexts/AuthContext";

const Signup = ({ onBack, onLoginClick }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accountType: "Cash Account",
    fullName: "",
    email: "",
    password: "",
    phone: "",
    callOption: "call_now",
    preferredTime: "As soon as possible",
    language: "English",
  });

  const [errors, setErrors] = useState({});

  const accountTypes = [
    {
      id: "Cash Account",
      title: "Wealthsimple Cash",
      desc: "Earn up to 4.5% interest with zero account fees",
      badge: "Popular",
    },
    {
      id: "Managed Investing",
      title: "Managed Portfolio (TFSA/RRSP)",
      desc: "Automated low-fee investing built for long-term growth",
      badge: "Automated",
    },
    {
      id: "Crypto & Stocks",
      title: "Self-Directed Stocks & Crypto",
      desc: "Commission-free stock and crypto trading",
      badge: "0% Commission",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!formData.phone.trim() || formData.phone.length < 7) newErrors.phone = "Valid phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const { signup } = useAuth();
  const [submitError, setSubmitError] = useState("");

  const handleNextStep = async (e) => {
    e.preventDefault();
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else if (step === 2) {
      // Validate step 2 if needed
      setSubmitError("");
      try {
        await signup({
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
          phone: formData.phone,
          accountType: formData.accountType
        });
        setStep(3);
      } catch (err) {
        setSubmitError(err.message || 'Registration failed');
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] text-fintech-textDark font-sans flex flex-col justify-between selection:bg-white selection:text-black">
      {/* Top Header Navigation */}
      <header className="w-full px-6 md:px-12 py-6 flex items-center justify-between border-b border-[#222]">
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={onBack}
        >
          <img
            src={logo}
            alt="Wealthsimple"
            className="h-[22px] w-auto brightness-0 invert transition-opacity group-hover:opacity-80"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-neutral-400 text-sm hidden sm:inline">Already have an account?</span>
          <button
            onClick={onLoginClick}
            className="text-fintech-textDark text-sm font-semibold border border-neutral-700 hover:border-white px-5 py-2 rounded-full transition-colors cursor-pointer"
          >
            Log in
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[540px]">
          
          {/* Progress Indicator (Steps 1 & 2) */}
          {step < 3 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs text-neutral-400 font-medium mb-2">
                <span>Step {step} of 2</span>
                <span>{step === 1 ? "Personal Details" : "Verification Call Options"}</span>
              </div>
              <div className="w-full bg-[#222] h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className="bg-white h-full"
                  initial={{ width: "50%" }}
                  animate={{ width: step === 1 ? "50%" : "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* STEP 1: Account Type & Details */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-[#1c1c1c] border border-[#2b2b2b] rounded-[28px] p-6 sm:p-10 shadow-md"
              >
                <div className="text-center mb-8">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-fintech-textDark mb-2">
                    Get started with Wealthsimple
                  </h1>
                  <p className="text-neutral-400 text-sm">
                    Select your preferred account type and enter your details to register.
                  </p>
                </div>

                <form onSubmit={handleNextStep} className="space-y-6">
                  {/* Account Type Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                      Select Account Type
                    </label>
                    <div className="space-y-3">
                      {accountTypes.map((type) => (
                        <div
                          key={type.id}
                          onClick={() => handleInputChange("accountType", type.id)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                            formData.accountType === type.id
                              ? "bg-[#282828] border-white text-fintech-textDark shadow-md"
                              : "bg-[#222222]/60 border-[#333] hover:border-neutral-500 text-neutral-300"
                          }`}
                        >
                          <div className="pr-2">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold text-sm">{type.title}</span>
                              <span className="bg-neutral-800 text-[11px] text-neutral-300 px-2 py-0.5 rounded-full border border-neutral-700">
                                {type.badge}
                              </span>
                            </div>
                            <p className="text-xs text-neutral-400">{type.desc}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            formData.accountType === type.id ? "border-white bg-white text-black" : "border-neutral-500"
                          }`}>
                            {formData.accountType === type.id && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Personal Info Inputs */}
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className={`w-full bg-[#242424] text-fintech-textDark text-[15px] px-4 py-3.5 rounded-xl border ${
                          errors.fullName ? "border-red-500" : "border-[#3a3a3a] focus:border-white"
                        } outline-none transition-colors placeholder:text-neutral-500`}
                      />
                      {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`w-full bg-[#242424] text-fintech-textDark text-[15px] px-4 py-3.5 rounded-xl border ${
                          errors.email ? "border-red-500" : "border-[#3a3a3a] focus:border-white"
                        } outline-none transition-colors placeholder:text-neutral-500`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className={`w-full bg-[#242424] text-fintech-textDark text-[15px] px-4 py-3.5 rounded-xl border ${
                          errors.password ? "border-red-500" : "border-[#3a3a3a] focus:border-white"
                        } outline-none transition-colors placeholder:text-neutral-500`}
                      />
                      {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                        Phone Number (for verification call)
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`w-full bg-[#242424] text-fintech-textDark text-[15px] px-4 py-3.5 rounded-xl border ${
                          errors.phone ? "border-red-500" : "border-[#3a3a3a] focus:border-white"
                        } outline-none transition-colors placeholder:text-neutral-500`}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {submitError && <div className="text-red-400 text-sm text-center font-medium bg-red-500/10 py-2 rounded-lg border border-red-500/20">{submitError}</div>}

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold text-base py-4 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer mt-4"
                  >
                    Continue to Verification Options
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 2: Call Options & Preferences */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-[#1c1c1c] border border-[#2b2b2b] rounded-[28px] p-6 sm:p-10 shadow-md"
              >
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-neutral-700">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-fintech-textDark mb-2">
                    Final Call Verification
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    Choose how you'd like to receive a call from a Wealthsimple specialist to verify your account.
                  </p>
                </div>

                <form onSubmit={handleNextStep} className="space-y-6">
                  {/* Call Preference Options */}
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      Call Preference
                    </label>

                    <div
                      onClick={() => handleInputChange("callOption", "call_now")}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        formData.callOption === "call_now"
                          ? "bg-[#282828] border-white text-fintech-textDark"
                          : "bg-[#222222]/60 border-[#333] hover:border-neutral-500 text-neutral-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Instant Verification Call</p>
                          <p className="text-xs text-neutral-400">Receive an automatic callback within 2 minutes</p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        formData.callOption === "call_now" ? "border-white bg-white text-black" : "border-neutral-500"
                      }`}>
                        {formData.callOption === "call_now" && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>

                    <div
                      onClick={() => handleInputChange("callOption", "schedule_call")}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        formData.callOption === "schedule_call"
                          ? "bg-[#282828] border-white text-fintech-textDark"
                          : "bg-[#222222]/60 border-[#333] hover:border-neutral-500 text-neutral-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Schedule Callback</p>
                          <p className="text-xs text-neutral-400">Choose a convenient time window for our call</p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        formData.callOption === "schedule_call" ? "border-white bg-white text-black" : "border-neutral-500"
                      }`}>
                        {formData.callOption === "schedule_call" && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                  </div>

                  {/* Scheduled Time Dropdown if Schedule Selected */}
                  {formData.callOption === "schedule_call" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-2 pt-1"
                    >
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                        className="w-full bg-[#242424] text-fintech-textDark text-sm px-4 py-3.5 rounded-xl border border-[#3a3a3a] focus:border-white outline-none"
                      >
                        <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                        <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                      </select>
                    </motion.div>
                  )}

                  {/* Preferred Language */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Preferred Language for Call
                    </label>
                    <select
                      value={formData.language}
                      onChange={(e) => handleInputChange("language", e.target.value)}
                      className="w-full bg-[#242424] text-fintech-textDark text-sm px-4 py-3.5 rounded-xl border border-[#3a3a3a] focus:border-white outline-none"
                    >
                      <option value="English">English</option>
                      <option value="French">Français</option>
                    </select>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 bg-[#262626] text-fintech-textDark font-semibold text-sm py-4 rounded-full hover:bg-[#333] transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-white text-black font-semibold text-sm py-4 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      Submit & Request Call
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 3: Complete & Call Confirmation */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1c1c1c] border border-[#2b2b2b] rounded-[28px] p-8 sm:p-10 shadow-md text-center"
              >
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fintech-textDark mb-3">
                  Registration Received!
                </h2>

                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-fintech-textDark">{formData.fullName}</span>. Your registration for <span className="text-fintech-textDark font-semibold">{formData.accountType}</span> has been submitted.
                </p>

                {/* Call Status Box */}
                <div className="bg-[#242424] border border-[#383838] rounded-2xl p-5 mb-8 text-left space-y-3">
                  <div className="flex items-center space-x-3 text-emerald-400 font-semibold text-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>Verification Call Scheduled</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    A Wealthsimple onboarding specialist will call you at <strong className="text-fintech-textDark font-mono">{formData.phone}</strong> {formData.callOption === "call_now" ? "shortly within 2 minutes" : `during your selected slot (${formData.preferredTime})`} to finalize your account verification.
                  </p>
                  <div className="pt-2 border-t border-[#333] flex justify-between text-[11px] text-neutral-400">
                    <span>Language: <strong>{formData.language}</strong></span>
                    <span>Email: <strong>{formData.email}</strong></span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={onBack}
                    className="w-full bg-white text-black font-semibold text-sm py-4 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Return to Homepage
                  </button>
                  <button
                    onClick={onLoginClick}
                    className="w-full bg-[#282828] border border-neutral-700 text-fintech-textDark font-semibold text-sm py-3.5 rounded-full hover:bg-[#333] transition-colors cursor-pointer"
                  >
                    Go to Login Page
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full px-6 py-4 text-center text-xs text-neutral-500 border-t border-[#1a1a1a]">
        © {new Date().getFullYear()} Wealthsimple Technologies Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default Signup;
