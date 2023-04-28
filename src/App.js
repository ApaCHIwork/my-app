import React, { useState, useRef, useEffect } from "react";
import fetchWeather from "./services/fetchWeatherService";
import "./App.css";
import Inputs from "./components/Inputs";
import TopButtons from "./components/TopButtons";
import Asd from "./components/Asd";

function App() {
  const [wetherData, setWetherData] = useState();

  const handleButtonClick = async (value) => {
    let wetherData = await fetchWeather(value);
    setWetherData(wetherData);
  };

  return (
    <div className="flex ">
      <div
        className=" w-3/12 py-5 px-3 bg-gradient-to-br from-cyan-100 to-blue-800 h-screen 
        shadow-xl shadow-gray-400"
      >
        <Inputs handleButtonClick={handleButtonClick} />
        {wetherData && (
          <>
            <div className="text-white text-lg font-medium">
              <h2 className="location">
                Location:
                <span id="location">{wetherData.name}</span>
              </h2>
              <p>
                Temperature:{" "}
                <span id="temperature">
                  {Math.round(wetherData.main.temp)}
                  <sup> o</sup>C
                </span>
              </p>
              <p>
                Conditions: <span id="conditions"></span>
              </p>
            </div>
          </>
        )}
      </div>
      <div
        className=" w-9/12 py-5 px-10 bg-gradient-to-br from-cyan-700 to-blue-700 h-screen 
        shadow-xl shadow-gray-400"
      >
        <h1 className=" text-white font-bold flex justify-center">
          Weather App
        </h1>
        <TopButtons handleButtonClick={handleButtonClick} />
      </div>
      {/* <Asd /> */}
    </div>
  );
}

export default App;
