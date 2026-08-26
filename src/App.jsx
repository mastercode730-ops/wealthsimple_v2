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
  const [signupInitialEmail, setSignupInitialEmail] = useState('');
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
        <Login onBack={() => setCurrentPage('home')} onSignupClick={() => { setSignupInitialEmail(''); setCurrentPage('signup'); }} />
      )}
      {currentPage === 'signup' && (
        <Signup
          initialEmail={signupInitialEmail}
          onBack={() => setCurrentPage('home')}
          onLoginClick={() => setCurrentPage('login')}
        />
      )}
      {currentPage === 'home' && (
        <Home
          onLoginClick={() => setCurrentPage('login')}
          onSignupClick={(email) => {
            if (typeof email === 'string') {
              setSignupInitialEmail(email);
            } else {
              setSignupInitialEmail('');
            }
            setCurrentPage('signup');
          }}
        />
      )}
      <GlobalFloatingButtons />
    </div>
  );
}

export default App;
