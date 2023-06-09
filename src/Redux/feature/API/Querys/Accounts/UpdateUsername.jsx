const UpdateUsername = ({ password, new_username }) => ({
  url: "/account/password-reset",
  body: {
    password: password,
    new_username: new_username,
  },
});

export default UpdateUsername;
