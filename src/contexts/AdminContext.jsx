import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminEmail, setAdminEmail] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('adminEmail');
    const storedAuth = localStorage.getItem('isAdminAuthenticated');

    if (storedEmail && storedAuth === 'true') {
      setIsAuthenticated(true);
      setAdminEmail(storedEmail);
    }
  }, []);

  const login = async (email, password) => {
    // Simple demo credentials (replace with API later if needed)
    if (email === 'admin@broaderai.com' && password === 'admin123') {
      setIsAuthenticated(true);
      setAdminEmail(email);
      localStorage.setItem('adminEmail', email);
      localStorage.setItem('isAdminAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminEmail(null);
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('isAdminAuthenticated');
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, adminEmail, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
