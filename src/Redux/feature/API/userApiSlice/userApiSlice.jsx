import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApiSlice = createApi({
  reducerPath: "userApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baby-todo.onrender.com/account",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("userJWT")}`,
    },
  }),

  endpoints: (builder) => ({
    //  endpoints start
    getAllUserCount: builder.query({
      query: () => "/new-token",
    }),

    //  endpoints end
  }),
});
export default userApiSlice;
export const { useGetJWTQuery } = userApiSlice;
