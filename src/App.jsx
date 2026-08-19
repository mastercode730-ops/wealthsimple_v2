import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GlobalFloatingButtons from './components/GlobalFloatingButtons';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'login') {
    return <Login onBack={() => setCurrentPage('home')} onSignupClick={() => setCurrentPage('signup')} />;
  }

  if (currentPage === 'signup') {
    return <Signup onBack={() => setCurrentPage('home')} onLoginClick={() => setCurrentPage('login')} />;
  }

  return (
    <div className="relative">
      <Home 
        onLoginClick={() => setCurrentPage('login')} 
        onSignupClick={() => setCurrentPage('signup')} 
      />
      <GlobalFloatingButtons />
    </div>
  );
}

export default App;
