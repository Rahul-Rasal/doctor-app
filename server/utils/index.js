const moment = require("moment");

function convertToISOStringFrom12HourFormat(time12Hour) {
  const formatString = "h:mm:ss A";
  const date = moment(time12Hour, formatString);
  const isoString = date.toISOString();

  return isoString;
}

module.exports = {
  convertToISOStringFrom12HourFormat,
};
