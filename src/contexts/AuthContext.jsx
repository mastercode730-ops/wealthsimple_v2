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
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error(e);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const matched = storedUsers.find((u) => u.email === email && u.password === password);
    if (matched) {
      setUser(matched);
      localStorage.setItem('userSession', JSON.stringify(matched));
      return matched;
    }
    throw new Error('Invalid credentials');
  };

  const signup = async (userData) => {
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const newUser = { id: Date.now().toString(), ...userData };
    storedUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));
    setUser(newUser);
    localStorage.setItem('userSession', JSON.stringify(newUser));
    return newUser;
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
