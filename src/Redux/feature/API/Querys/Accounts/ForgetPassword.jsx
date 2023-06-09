const ForgetPassword = ({ newPassword, userDetails, code }) => ({
  url: "/account/password-reset",
  body: {
    login: userDetails,
    code: code,
    new_password: newPassword,
  },
});

export default ForgetPassword;
