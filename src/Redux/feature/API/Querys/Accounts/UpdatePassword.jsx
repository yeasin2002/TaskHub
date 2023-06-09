const UpdatePassword = ({ password, new_password }) => ({
  url: "/account/change-password",
  body: {
    password: password,
    new_password: new_password,
  },
});

export default UpdatePassword;
