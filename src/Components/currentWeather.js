import React from "react";
import CurrentDay from "./currentDay";

const CurrentWeather = ({ weatherdata }) => {
  return (
    <div>
      <h2>{weatherdata.name}</h2>
      <p>
        {weatherdata.temp1} <CurrentDay />
      </p>
    </div>
  );
};

export default CurrentWeather;
