import React, { useState, useRef, useEffect } from "react";
import { fetchWeather, fetchWeather5Day } from "./services/fetchWeatherService";
import Inputs from "./components/Inputs";
import TopButtons from "./components/TopButtons";
import Asd from "./components/Asd";
import WeatherMain from "./components/main";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [fiveDayWetherData, setFiveDayWetherData] = useState();

  const handleButtonClick = async (value) => {
    let weatherData = await fetchWeather(value);
    let fiveDayWetherData = await fetchWeather5Day(value);
    setWeatherData(weatherData);
    setFiveDayWetherData(fiveDayWetherData);
  };

  console.log(fiveDayWetherData);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" w-9/12 py-5 px-10 ">
        <Inputs handleButtonClick={handleButtonClick} />
        {weatherData && (
          <>
            <div className="text-white text-lg font-medium">
              <h2 className="location">
                Location:
                <span id="location">{weatherData.name}</span>
              </h2>
              <p>
                Temperature:{" "}
                <span id="temperature">
                  {Math.round(weatherData.main.temp)}
                  <sup> o</sup>C
                </span>
              </p>
              <p>
                Conditions: <span id="conditions"></span>
              </p>
              <p>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  alt="test"
                />
              </p>
            </div>
          </>
        )}
        <h1 className=" text-white font-bold flex justify-center">
          Weather App
        </h1>
        <TopButtons handleButtonClick={handleButtonClick} />
        <WeatherMain weatherData={weatherData}></WeatherMain>
      </div>
      {/* <Asd /> */}
    </div>
  );
}

export default App;
