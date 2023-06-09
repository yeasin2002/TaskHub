import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  endpoints query's

const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baby-todo.onrender.com",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("user_jwt")}`,
    },
  }),

  endpoints: (builder) => ({
    //  Get all task
    getAllTask: builder.mutation({
      query: "",
    }),

    //  end points - end
  }),
});
export default userApiSlice;
// export const {  } = userApiSlice;
