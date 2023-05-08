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
        <div className="w-100">
          <Inputs handleButtonClick={handleButtonClick} />
        </div>
        {weatherData && (
          <div className="wetherBlock relative p-3">
            <div className="text-white text-lg font-medium">
              <h2 className="location flex items-center absolute right-8 top-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  className="mr-3"
                >
                  <path
                    d="M5.83337 4.16683C4.91671 4.16683 4.16671 4.91683 4.16671 5.8335C4.16671 6.75017 4.91671 7.50017 5.83337 7.50017C6.75004 7.50017 7.50004 6.75017 7.50004 5.8335C7.50004 4.91683 6.75004 4.16683 5.83337 4.16683ZM5.83337 0.000167847C8.55837 0.000167847 11.6667 2.05017 11.6667 5.9585C11.6667 8.44183 9.89171 11.0585 6.34171 13.7835C6.04171 14.0168 5.62504 14.0168 5.32504 13.7835C1.77504 11.0502 3.8147e-05 8.44183 3.8147e-05 5.9585C3.8147e-05 2.05017 3.10837 0.000167847 5.83337 0.000167847Z"
                    fill="#9D99E4"
                  />
                </svg>
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
          </div>
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
