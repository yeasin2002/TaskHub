export const setUserJWT = (token) => {
  return localStorage.setItem("userJWT", token);
};

export const removeUserToken = () => {
  return localStorage.removeItem("userJWT");
};

export const getJWT = () => {
  return localStorage.getItem("userJWT");
};
