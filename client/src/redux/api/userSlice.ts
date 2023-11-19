import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyUser: builder.query({
      query: () => ({
        url: "/users/verify-user",
        method: "GET",
      }),
    }),
  }),
});

export const { useVerifyUserQuery } = userApiSlice;
