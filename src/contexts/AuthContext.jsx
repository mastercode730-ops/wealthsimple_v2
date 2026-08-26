import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for session on mount
    const storedUser = localStorage.getItem('userSession');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }

      setUser(data.user);
      localStorage.setItem('userSession', JSON.stringify(data.user));
      return data.user;
    } catch (err) {
      throw new Error(err.message || 'Invalid credentials');
    }
  };

  const signup = async (userData) => {
    const response = await fetch('http://localhost:3001/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Signup failed');
    }

    setUser(data.user);
    localStorage.setItem('userSession', JSON.stringify(data.user));
    return data.user;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userSession');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
