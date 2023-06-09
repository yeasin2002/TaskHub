const ResetPassword = ({ newPassword, userDetails, code }) => ({
  url: "/account/password-reset",
  method: "POST",
  body: {
    login: userDetails,
    code: code,
    new_password: newPassword,
  },
});

export default ResetPassword;
