import { useLocalStorage } from "$hooks/useLocalStorage";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { value, setLocalStorage, removeLocalStorage, setCustomValue } =
    useLocalStorage("usersToken");
  const { value: isLoggedIn, setLocalStorage: setIsLoggedIn } =
    useLocalStorage("isLoggedIn");
  const navigate = useNavigate();

  const logOut = (token, redirectTo) => {
    setLocalStorage(token);
    setIsLoggedIn(true);
    navigate(redirectTo);
  };

  const logIn = (redirectTo) => {
    removeLocalStorage();
    setCustomValue(false);
    setIsLoggedIn(false);
    navigate(redirectTo);
  };

  const values = {
    token: value,
    logIn,
    logOut,
    setCustomValue,
    isLoggedIn,
    setIsLoggedIn,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};


