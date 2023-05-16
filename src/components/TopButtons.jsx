import React, { useState, useRef, useEffect } from "react";
import { fetchWeather } from "../services/fetchWeatherService";

let truster = true;

function TopButtons({ handleButtonClick }) {
  const [cities, setCities] = useState([
    {
      id: 1,
      title: "London",
    },

    {
      id: 2,
      title: "Kyiv",
    },

    {
      id: 3,
      title: "New York",
    },

    {
      id: 4,
      title: "Tokyo",
    },

    {
      id: 5,
      title: "Pekin",
    },
  ]);

  useEffect(() => {
    if (truster) {
      fetchWeatherData();
      truster = false;
    }
  }, [cities]);

  async function fetchWeatherData() {
    const updatedCities = await Promise.all(
      cities.map(async (city) => {
        const weatherData = await fetchWeather(city.title);
        return { ...city, info: weatherData };
      })
    );
    setCities(updatedCities);
  }

  return (
    <div className="flex items-center justify-between px-6 py-14 mt-8 rounded-xl bg-violet-500/30">
      {cities.map((city, index) => (
        <div key={index}>
          {city.info && (
            <button
              onClick={() => handleButtonClick(city.title)}
              key={city.id}
              className="text-white text-lg font-medium"
            >
              <div className="text-center">
                  <span className="text-violet-200">
                    {city.title}
                  </span>
                  <img
                    src={`https://openweathermap.org/img/wn/${city.info.weather[0].icon}.png`}
                    alt="test"
                    className="mx-auto"
                  />
                  <p className="text-center">
                    <span className="text-1xl mr-2">
                      {Math.round(city.info.main.temp_max)}
                      <sup>o</sup>
                    </span>
                    <span className="text-1xl text-violet-200">
                      {Math.round(city.info.main.temp_min)}
                      <sup>o</sup>
                    </span>
                  </p>
                </div>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TopButtons;
