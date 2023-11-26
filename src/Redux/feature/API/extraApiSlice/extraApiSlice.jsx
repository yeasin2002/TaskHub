import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getUserToken } from "../../../../utils/userStorageInfo"

const extraApiSlice = createApi({
  reducerPath: "extraApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baby-todo.onrender.com/extra",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getUserToken()}`,
    },
  }),

  endpoints: (builder) => ({
    //  endpoints start
    getAllUserCount: builder.query({
      query: () => "/users-count",
    }),

    //  endpoints end
  }),
})
export default extraApiSlice
export const { useGetAllUserCountQuery } = extraApiSlice
