import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const taskApiSlice = createApi({
  reducerPath: "taskApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baby-todo.onrender.com/tasks",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("userJWT")}`,
    },
  }),

  endpoints: (builder) => ({
    //  endpoints start
    getAllTask: builder.query({
      query: () => "/",
    }),

    //  endpoints end
  }),
});
export default taskApiSlice;
export const { useGetAllTaskQuery } = taskApiSlice;
