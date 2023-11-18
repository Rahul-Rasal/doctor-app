import { apiSlice } from "./apiSlice";

export const notificationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    seenNotifications: builder.mutation({
      query: () => ({
        url: "users/mark-all-notification-as-seen",
        method: "POST",
      }),
    }),
  }),
});

export const { useSeenNotificationsMutation } = notificationApiSlice;
