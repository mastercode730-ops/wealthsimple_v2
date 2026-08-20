import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/ws-wordmark-refresh.48a6eb42.svg';

const Dashboard = ({ onLogout }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    if (onLogout) onLogout();
  };

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] text-white font-sans flex flex-col">
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-[#222]">
        <img
          src={logo}
          alt="Wealthsimple"
          className="h-[22px] w-auto brightness-0 invert"
        />
        <button
          onClick={handleLogout}
          className="text-white text-sm font-semibold border border-neutral-700 hover:border-white px-5 py-2 rounded-full transition-colors"
        >
          Log out
        </button>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome back, {user?.profile?.fullName || 'User'}!</h1>
        <p className="text-neutral-400 mb-8">This is your dashboard. Your account is active.</p>
        <div className="bg-[#1c1c1c] p-6 rounded-2xl border border-[#2b2b2b] max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          <div className="space-y-2 text-sm text-neutral-300">
            <p><span className="font-medium text-neutral-500 w-24 inline-block">Email:</span> {user?.email}</p>
            <p><span className="font-medium text-neutral-500 w-24 inline-block">Phone:</span> {user?.profile?.phone}</p>
            <p><span className="font-medium text-neutral-500 w-24 inline-block">Plan:</span> {user?.profile?.accountType}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
