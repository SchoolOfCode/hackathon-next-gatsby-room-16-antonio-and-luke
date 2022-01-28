const FourDay = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 3);
  let day = weekday[tomorrow.getDay()];
  return day;
};

export default FourDay;
