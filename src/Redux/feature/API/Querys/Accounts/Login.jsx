const logIn = ({ password, userDetails }) => ({
  url: "/account/login",
  body: {
    login: userDetails,
    password: password,
  },
});

export default logIn;
