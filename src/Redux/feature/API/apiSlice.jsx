import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),
  tagTypes: ["Videos"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "videos",
      keepUnusedDataFor: 600,
      providesTags: ["Videos"],
    }),
  }),
});
export default apiSlice;
export const { useGetVideosQuery } = apiSlice;
