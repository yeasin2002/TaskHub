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
    getAllUser: builder.query({
      query: () => "/",
    }),

    updateUser: builder.mutation({
      query: (updateRequirement) => {
        return {
          url: `/`,
          method: "PATCH",
          body: updateRequirement,
        };
      },
    }),

    deleteUser: builder.mutation({
      query: (password) => {
        return {
          url: `/delete-me`,
          method: "PATCH",
          body: {
            password,
          },
        };
      },
    }),

    updateSettings: builder.mutation({
      query: (updateRequirement) => {
        return {
          url: `/settings`,
          method: "PATCH",
          body: updateRequirement,
        };
      },
    }),

    // Add Task Collection
    addTaskCollection: builder.mutation({
      query: (collectionRequirement) => {
        return {
          url: `/collections`,
          method: "PATCH",
          body: collectionRequirement,
        };
      },
    }),
    updateTaskCollection: builder.mutation({
      query: (updatedCollectionRequirement) => {
        return {
          url: `/collections`,
          method: "PATCH",
          body: updatedCollectionRequirement,
        };
      },
    }),
    deleteTaskCollection: builder.mutation({
      query: (id) => {
        return {
          url: `/collections/${id}`,
          method: "PATCH",
        };
      },
    }),

    //  endpoints end
  }),
});
export default userApiSlice;
export const {
  useAddTaskCollectionMutation,
  useDeleteTaskCollectionMutation,
  useUpdateTaskCollectionMutation,
  useDeleteUserMutation,
  useGetAllUserQuery,
  useGetNewJWTQuery,
  useUpdateSettingsMutation,
  useUpdateUserMutation,
  useLazyGetAllUserQuery,
  useLazyGetNewJWTQuery,
} = userApiSlice;
