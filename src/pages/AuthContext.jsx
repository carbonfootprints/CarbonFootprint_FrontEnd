import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../../const';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for existing authToken
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true); // Set login status based on token
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);  // Save token to localStorage
    setIsLoggedIn(true); // Update state immediately
    window.location.reload();
    navigate('/home'); // Redirect after login
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/user/logout`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        localStorage.removeItem('authToken'); // Remove token from localStorage
        setIsLoggedIn(false); // Update state to reflect logout
        navigate('/'); // Redirect to login page
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
