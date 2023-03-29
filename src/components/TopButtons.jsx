import React, { useState, useRef, useEffect } from "react";
import fetchWeather from "../services/fetchWeatherService";


const handleButtonClick = (param) => {
  console.log("По кнопке кликнули: ", param);
  fetchWeather(param)
  //fetchWeather(inputValue);
};


function TopButtons() {
  const cities = [
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
  ];
  return (
    <div className=" flex items-center justify-between p-7 my-6">
      {cities.map((city) => (
        <button
          onClick={() => handleButtonClick(city.title)}
          key={city.id}
          className="text-white text-lg font-medium m-4"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
