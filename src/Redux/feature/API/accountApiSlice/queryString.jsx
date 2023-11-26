export const singUpString = (userMail) => ({
  url: "/request-email-verify",
  method: "POST",
  body: {
    email: userMail,
  },
})
