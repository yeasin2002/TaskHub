import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  endpoints query's
import verificationOTP from "./Querys/Accounts/verificationOTP";
// import GetJWT from "./Querys/Accounts/GetJWT";
import singUP from "./Querys/Accounts/Signup";
import logIn from "./Querys/Accounts/Login";
import ForgetPassword from "./Querys/Accounts/ForgetPassword";
import ResetPassword from "./Querys/Accounts/ResetPassword";
import UpdateEmail from "./Querys/Accounts/UpdateEmail";
import UpdateUsername from "./Querys/Accounts/UpdateUsername";
import UpdatePassword from "./Querys/Accounts/UpdatePassword";

const accountApiSlice = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baby-todo.onrender.com",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("user_jwt")}`,
    },
  }),

  endpoints: (builder) => ({
    // Get an OTP to verify your email
    GetJWT: builder.query({
      query: () => "/account/new-token",
    }),

    //  Get an OTP to verify your email
    getVerificationOTP: builder.mutation({
      query: verificationOTP,
    }),

    // singUp
    singUp: builder.query({
      query: singUP,
    }),

    // logIn
    logIn: builder.query({
      query: logIn,
    }),

    // forgotPassword
    forgotPassword: builder.query({
      query: ForgetPassword,
    }),

    // resetPassword
    resetPassword: builder.query({
      query: ResetPassword,
    }),
    // Update Email
    UpdateEmail: builder.query({
      query: UpdateEmail,
    }),
    // Update Username
    UpdateUsername: builder.query({
      query: UpdateUsername,
    }),
    // Update Password
    UpdatePassword: builder.query({
      query: UpdatePassword,
    }),

    //  end points - end
  }),
});
export default accountApiSlice;
export const { useGetJWTQuery } = accountApiSlice;
