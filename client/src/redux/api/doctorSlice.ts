import { apiSlice } from "./apiSlice";

export const doctorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    doctorSignup: builder.mutation({
      query: (data) => {
        return {
          url: "users/doctor/signup",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllDoctors: builder.query({
      query: () => ({
        url: "/users/doctors",
        method: "GET",
      }),
    }),
  }),
});

export const { useDoctorSignupMutation, useGetAllDoctorsQuery } =
  doctorApiSlice;
