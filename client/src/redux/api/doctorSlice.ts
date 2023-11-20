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
      providesTags: ["Doctors"],
    }),
    changeDoctorStatus: builder.mutation({
      query: (data) => {
        return {
          url: "users/change-doctor-status",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Doctors"],
    }),
    updateDoctor: builder.mutation({
      query: (data) => {
        return {
          url: `users/doctors/${data.userId}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Doctors"],
    }),
    getDoctor: builder.query({
      query: (data) => ({
        url: `/users/doctors/${data.userId}`,
        method: "GET",
      }),
      providesTags: ["Doctors"],
    }),
    getApprovedDoctors: builder.query({
      query: () => ({
        url: "/users/approved-doctors",
        method: "GET",
      }),
      providesTags: ["Doctors"],
    }),
  }),
});

export const {
  useDoctorSignupMutation,
  useGetAllDoctorsQuery,
  useChangeDoctorStatusMutation,
  useUpdateDoctorMutation,
  useGetDoctorQuery,
  useGetApprovedDoctorsQuery,
} = doctorApiSlice;
