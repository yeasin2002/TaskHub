const verificationOTP = ({ email }) => {
  return {
    url: "/account/request-email-verify",
    method: "POST",
    body: { email: email },
  };
};

export default verificationOTP;
