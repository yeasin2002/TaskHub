import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baby-todo.onrender.com",
    headers: {
      "Content-Type": "application/json",
      Authentication: `Bearer ${localStorage.getItem("token")}`,
    },
  }),
  tagTypes: ["Videos"],
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: () => "/account/login",
    }),
  }),
});
export default apiSlice;
export const { useGetVideosQuery } = apiSlice;
