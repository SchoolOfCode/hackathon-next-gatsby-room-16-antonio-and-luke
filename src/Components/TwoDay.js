const TwoDay = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var today = new Date();
  today.setDate(today.getDate() + 1);
  let day = weekday[today.getDay()];
  return day;
};

export default TwoDay;
