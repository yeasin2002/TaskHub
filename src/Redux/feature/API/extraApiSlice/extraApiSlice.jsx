import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const extraApiSlice = createApi({
  reducerPath: "extraApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baby-todo.onrender.com/extra",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("userJWT")}`,
    },
  }),

  endpoints: (builder) => ({
    //  endpoints start
    getAllUserCount: builder.query({
      query: () => "/users-count",
    }),

    //  endpoints end
  }),
});
export default extraApiSlice;
export const { useGetAllUserCountQuery } = extraApiSlice;
