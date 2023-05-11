import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }),
  tagTypes: ["AllTodo"],
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: () => "videos",
      keepUnusedDataFor: 600,
      providesTags: ["AllTodo"],
    }),
  }),
});
export default apiSlice;
export const { useGetAllTodoQuery } = apiSlice;
