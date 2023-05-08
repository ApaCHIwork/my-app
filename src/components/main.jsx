import React from "react";

function WeatherMain({ weatherData }) {
  return (
    <>
      {weatherData && (
        <>
          <h1>{weatherData.weather[0].main}</h1>
          <p>{weatherData.weather[0].description}</p>
        </>
      )}
    </>
  );
}

export default WeatherMain;
