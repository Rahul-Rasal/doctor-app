import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyUser: builder.query({
      query: () => ({
        url: "/users/verify-user",
        method: "GET",
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getUser: builder.query({
      query: (data) => ({
        url: `/users/${data.userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useVerifyUserQuery, useGetAllUsersQuery, useGetUserQuery } =
  userApiSlice;
