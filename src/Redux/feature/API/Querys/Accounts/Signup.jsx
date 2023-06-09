const singUP = ({ email, username, name, avatar, password, code }) => ({
  url: "/account/signup",
  body: {
    email: email,
    username: username,
    name: name,
    avatar: avatar,
    password: password,
    code: code,
  },
});

export default singUP;
