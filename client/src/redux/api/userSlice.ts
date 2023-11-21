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
    bookAppointment: builder.mutation({
      query: (data) => ({
        url: "/users/book-appointment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Doctors"],
    }),
    userAppointments: builder.query({
      query: (data) => ({
        url: `/users/user-appointments/${data.userId}`,
        method: "GET",
      }),
      providesTags: ["Doctors"],
    }),
  }),
});

export const {
  useVerifyUserQuery,
  useGetAllUsersQuery,
  useGetUserQuery,
  useBookAppointmentMutation,
  useUserAppointmentsQuery,
} = userApiSlice;
