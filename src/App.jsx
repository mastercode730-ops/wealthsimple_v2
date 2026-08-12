import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalFloatingButtons from './components/GlobalFloatingButtons';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'login') {
    return <Login onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="relative">
      <Home onLoginClick={() => setCurrentPage('login')} />
      <GlobalFloatingButtons />
    </div>
  );
}

export default App;
