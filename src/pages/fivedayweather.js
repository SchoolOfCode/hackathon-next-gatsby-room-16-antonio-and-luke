// Step 1: Import React
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { container } from "../Components/layout.module.css";
import Input from "../Components/input";
import FiveDayWeather from "../Components/FiveDayWeather";

// Step 2: Define your component
const FiveDayWeatherpage = () => {
  const [userInput, setuserInput] = useState("");
  const [weatherData, setweatherData] = useState([]);

  useEffect(() => {
    async function getWeather() {
      // check that user entered input
      if (userInput === "") {
        return;
      }

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&cnt=7&appid=160cec49564aa8277fc523ac242c7bb0`
      );

      const data = await res.json();
      console.log(data);

      setweatherData({
        name: data.city.name,
        temp1: `${Math.round(Number(data.list[0].main.temp))}°C`,
        temp2: `${Math.round(Number(data.list[1].main.temp))}°C`,
        temp3: `${Math.round(Number(data.list[2].main.temp))}°C`,
        temp4: `${Math.round(Number(data.list[3].main.temp))}°C`,
        temp5: `${Math.round(Number(data.list[4].main.temp))}°C`,
      });
    }
    getWeather();
  }, [userInput]);

  function handleSubmit(text) {
    setuserInput(text);
  }

  return (
    <main className={container}>
      <h1>Weather Finder</h1>
      <Input handleSubmit={handleSubmit} />
      <br></br>
      <FiveDayWeather weatherdata={weatherData} />
      <br></br>
      <Link to="/">Current Weather</Link>
    </main>
  );
};

export default FiveDayWeatherpage;
