import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accountApiSlice = createApi({
  reducerPath: "accountApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baby-todo.onrender.com",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("userJWT")}`,
    },
  }),

  endpoints: (builder) => ({
    //  endpoints start
    getJWT: builder.query({
      query: () => "account/new-token",
    }),

    //  endpoints end
  }),
});
export default accountApiSlice;
export const { useGetJWTQuery } = accountApiSlice;
