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
    createTask: builder.mutation({
      query: (taskDetails) => {
        return {
          url: "/",
          method: "POST",
          body: taskDetails,
        };
      },
    }),
    updateTask: builder.mutation({
      query: ({ id, taskDetails }) => {
        return {
          url: `/${id}`,
          method: "PATCH",
          body: taskDetails,
        };
      },
    }),
    deleteTask: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
    }),
    completedTask: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}/complete`,
          method: "PATCH",
        };
      },
    }),

    uncompletedTask: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}/uncomplete`,
          method: "PATCH",
        };
      },
    }),

    RemoveParticipant: builder.mutation({
      query: ({ id, user }) => {
        return {
          url: `/${id}/participants/${user}`,
          method: "DELETE",
        };
      },
    }),
    changeParticipantRole: builder.mutation({
      query: ({ id, role }) => {
        return {
          url: `/:taskId/participants/${id}`,
          method: "PATCH",
          body: {
            role, //admin or assigner
          },
        };
      },
    }),

    //  endpoints end
  }),
});
export default taskApiSlice;
export const { useGetAllTaskQuery, useCreateTaskMutation } = taskApiSlice;
