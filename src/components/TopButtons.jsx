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
    <div className=" flex items-center justify-between p-7 my-6">
      {cities.map((city, index) => (
        <div key={index}>
          {city.info && (
            <button
              onClick={() => handleButtonClick(city.title)}
              key={city.id}
              className="text-white text-lg font-medium m-4"
            >
              {city.title}
              <small className="ml-2">
                {Math.round(city.info.main.temp)}
                <sup> o</sup>C
              </small>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TopButtons;
