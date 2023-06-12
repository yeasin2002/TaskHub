import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApiSlice = createApi({
  reducerPath: "userApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baby-todo.onrender.com/user",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("userJWT")}`,
    },
  }),

  endpoints: (builder) => ({
    //  endpoints start
    getNewJWT: builder.query({
      query: () => "/new-token",
    }),

    //  endpoints end
  }),
});
export default userApiSlice;
export const { useGetNewJWTQuery } = userApiSlice;
