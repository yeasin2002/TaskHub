import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getUserToken } from "../../../../utils/userStorageInfo"

const accountApiSlice = createApi({
  reducerPath: "accountApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baby-todo.onrender.com/account",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getUserToken()}}`,
    },
  }),

  endpoints: (builder) => ({
    //  endpoints start
    getJWT: builder.query({
      query: () => "/new-token",
    }),
    getOTP: builder.mutation({
      query: (userMail) => ({
        url: "/request-email-verify",
        method: "POST",
        body: {
          email: userMail,
        },
      }),
    }),
    singUp: builder.mutation({
      query: (singUpDetails = {}) => ({
        url: "/signup",
        method: "POST",
        body: singUpDetails,
      }),
    }),
    logIn: builder.mutation({
      query: (logInDetails = {}) => ({
        url: "/login",
        method: "POST",
        body: logInDetails,
      }),
    }),
    ForgetPassword: builder.mutation({
      query: (userNameOrmail = "") => ({
        url: "/password-forget",
        method: "POST",
        body: { userNameOrmail },
      }),
    }),
    ResetPassword: builder.mutation({
      query: (name_code_newpass = {}) => ({
        url: "/password-reset",
        method: "POST",
        body: name_code_newpass,
      }),
    }),
    UpdateEmail: builder.mutation({
      query: (password_newmail_code = {}) => ({
        url: "/change-email",
        method: "PATCH",
        body: password_newmail_code,
      }),
    }),

    UpdateUsername: builder.mutation({
      query: (password_newPassword = {}) => ({
        url: "/change-username",
        method: "PATCH",
        body: password_newPassword,
      }),
    }),
    UpdatePassword: builder.mutation({
      query: (passwordAndnewPassword = {}) => ({
        url: "/change-password",
        method: "PATCH",
        body: passwordAndnewPassword,
      }),
    }),

    //  endpoints end
  }),
})
export default accountApiSlice
export const {
  useGetJWTQuery,
  useGetOTPMutation,
  useSingUpMutation,
  useLogInMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useUpdateEmailMutation,
  useUpdateUsernameMutation,
  useUpdatePasswordMutation,
} = accountApiSlice
