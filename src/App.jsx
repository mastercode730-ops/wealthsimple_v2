import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import GlobalFloatingButtons from './components/GlobalFloatingButtons';
import { initTidioChat } from './utils/supportChat';
import { useAuth } from './contexts/AuthContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { user } = useAuth();

  useEffect(() => {
    initTidioChat();
  }, []);

  // Simple routing based on state and auth
  if (user) {
    return (
      <div className="relative">
        <Dashboard onLogout={() => setCurrentPage('home')} />
        <GlobalFloatingButtons />
      </div>
    );
  }

  return (
    <div className="relative">
      {currentPage === 'login' && (
        <Login onBack={() => setCurrentPage('home')} onSignupClick={() => setCurrentPage('signup')} />
      )}
      {currentPage === 'signup' && (
        <Signup onBack={() => setCurrentPage('home')} onLoginClick={() => setCurrentPage('login')} />
      )}
      {currentPage === 'home' && (
        <Home
          onLoginClick={() => setCurrentPage('login')}
          onSignupClick={() => setCurrentPage('signup')}
        />
      )}
      <GlobalFloatingButtons />
    </div>
  );
}

export default App;
