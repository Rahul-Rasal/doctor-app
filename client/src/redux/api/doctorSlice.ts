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
  }),
});

export const { useDoctorSignupMutation } = doctorApiSlice;
