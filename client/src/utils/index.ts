import { parsePhoneNumber } from "libphonenumber-js";

// prevent auto form submission
export function onKeyDown(keyEvent: any) {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault();
  }
}

// remove dash and space from the number
export const removeDashAndSpace = (value: string) => {
  return value.replace(/[- ]/g, "");
};

// Format Date Time 2023-11-19T08:58:06.435Z => 11/19/2023, 1:58:06 PM
export function formatDateTime(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const date = new Date(dateString);
  const formattedDateTime = date.toLocaleString("en-US", options);

  return formattedDateTime;
}

// Masking Mobile Number +923234910944 =>
export const maskingPhoneNumber = (value: any) => {
  if (value) {
    const phoneNumber = parsePhoneNumber(value);
    return phoneNumber.formatNational();
  }
};

// Notification Friendly Messages
export function processNotification(notification: string) {
  switch (notification) {
    case "new-doctor-request":
      return "New Doctor 🩺 Request";
    case "new-doctor-request-changed":
      return "🎉 Your requested successfully accepted";
    default:
      return "Unknown Notification";
  }
}

// Salman Muazam => SM
export function getNameInitials(name: string) {
  const words = name?.split(" ");
  const initials = words?.map((word) => word.charAt(0).toUpperCase());
  return initials?.join("");
}
