import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getUserToken } from "../../../../utils/userStorageInfo"

const taskApiSlice = createApi({
  reducerPath: "taskApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baby-todo.onrender.com/tasks",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getUserToken()}`,
    },
  }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    //  endpoints start
    getAllTask: builder.query({
      query: () => "/",
      providesTags: ["Task"],
    }),
    createTask: builder.mutation({
      query: (taskDetails) => {
        return {
          url: "/",
          method: "POST",
          body: taskDetails,
        }
      },
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: ({ id, taskDetails }) => {
        return {
          url: `/${id}`,
          method: "PATCH",
          body: taskDetails,
        }
      },
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        }
      },
      invalidatesTags: ["Task"],
    }),
    completedTask: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}/complete`,
          method: "PATCH",
        }
      },
      invalidatesTags: ["Task"],
    }),

    uncompletedTask: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}/uncomplete`,
          method: "PATCH",
        }
      },
      invalidatesTags: ["Task"],
    }),

    RemoveParticipant: builder.mutation({
      query: ({ id, user }) => {
        return {
          url: `/${id}/participants/${user}`,
          method: "DELETE",
        }
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
        }
      },
    }),

    //  endpoints end
  }),
})
export default taskApiSlice
export const {
  useGetAllTaskQuery,
  useCreateTaskMutation,
  useChangeParticipantRoleMutation,
  useCompletedTaskMutation,
  useUncompletedTaskMutation,
  useDeleteTaskMutation,
  useRemoveParticipantMutation,
  useUpdateTaskMutation,
} = taskApiSlice
