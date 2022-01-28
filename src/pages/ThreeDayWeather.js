import React from "react";
import CurrentDay from "../Components/currentDay";
import TwoDay from "../Components/TwoDay";
import ThreeDay from "../Components/ThreeDay";

const ThreeDayWeather = ({ weatherdata }) => {
  return (
    <div>
      <h2>{weatherdata.name}</h2>
      <p>
        {weatherdata.temp1} <CurrentDay />
      </p>
      <p>
        {weatherdata.temp2} <TwoDay />
      </p>
      <p>
        {weatherdata.temp3} <ThreeDay />
      </p>
    </div>
  );
};

export default ThreeDayWeather;
