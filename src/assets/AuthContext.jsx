import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
  const [token, setToken] = useState(localStorage.getItem('Token'));

  const saveToken = (userToken) => {
    localStorage.setItem('Token', userToken);
    navigate('/home')
    setToken(userToken);
  };

  const removeToken = async () => {
      localStorage.removeItem('Token');
      setToken(null);
      navigate('/')
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
