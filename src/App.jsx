import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { initTidioChat } from './utils/supportChat';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    initTidioChat();
  }, []);

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
    </div>
  );
}

export default App;
