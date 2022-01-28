import React from "react";
import CurrentDay from "./currentDay.js";
import TwoDay from "./TwoDay.js";
import ThreeDay from "./ThreeDay.js";
import FourDay from "./FourDay.js";
import FiveDay from "./FiveDay.js";

const FiveDayWeather = ({ weatherdata }) => {
  return (
    <div>
      <h2>{weatherdata.name}</h2>
      <p>
        {weatherdata.temp1} <CurrentDay />
      </p>
      <p className="temp">
        {weatherdata.temp2}
        <TwoDay />
      </p>
      <p className="temp">
        {weatherdata.temp3} <ThreeDay />
      </p>
      <p className="temp">
        {weatherdata.temp4}
        <FourDay />
      </p>
      <p className="temp">
        {weatherdata.temp5} <FiveDay />
      </p>
    </div>
  );
};

export default FiveDayWeather;
