import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GlobalFloatingButtons from './components/GlobalFloatingButtons';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="relative">
      {currentPage === 'home' && (
        <Home 
          onLoginClick={() => setCurrentPage('login')} 
          onSignupClick={() => setCurrentPage('signup')} 
        />
      )}
      {currentPage === 'login' && (
        <Login 
          onBack={() => setCurrentPage('home')} 
          onSignupClick={() => setCurrentPage('signup')} 
        />
      )}
      {currentPage === 'signup' && (
        <Signup 
          onBack={() => setCurrentPage('home')} 
          onLoginClick={() => setCurrentPage('login')} 
        />
      )}
      <GlobalFloatingButtons />
    </div>
  );
}

export default App;
