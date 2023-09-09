const logOut = async () => {
  await localStorage.removeItem("userJWT");
  return {
    done: true,
  };
};

export default logOut;
