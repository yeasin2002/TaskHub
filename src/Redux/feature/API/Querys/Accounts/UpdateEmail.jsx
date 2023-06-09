const upDateEmail = ({ newEmail, Password, code }) => ({
  url: "/account/change-email",
  body: {
    Password: Password,
    new_email: newEmail,
    code: code,
  },
});

export default upDateEmail;
