export const setUserJWT = (token) => {
  localStorage.setItem("userJWT", token);
};

export const removeUserToken = () => {
  localStorage.removeItem("userJWT");
};
