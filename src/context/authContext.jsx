import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const logOut = () => {
    setIsLogIn(false);
  };

  const logIn = () => {
    setIsLogIn(false);
  };

  const value = {
    isLogIn,
    setIsLogIn,
    logOut,
    logIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
