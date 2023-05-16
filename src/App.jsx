import React, { useState, useRef, useEffect } from "react";
import { fetchWeather, fetchWeather5Day } from "./services/fetchWeatherService";
import Inputs from "./components/Inputs";
import TopButtons from "./components/TopButtons";
import FiveDay from "./components/fiveday";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [fiveDayWetherData, setFiveDayWetherData] = useState();

  const handleButtonClick = async (value) => {
    let weatherData = await fetchWeather(value);
    let fiveDayWetherData = await fetchWeather5Day(value);
    setWeatherData(weatherData);
    setFiveDayWetherData(fiveDayWetherData);
  };

  console.log(weatherData);
  //new comment

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" w-10/12 py-5 px-10 ">
        <div className="w-100">
          <Inputs handleButtonClick={handleButtonClick} />
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="w-5/12">
          {weatherData && (
            <div className="wetherBlock flex justify-center relative p-3 rounded-xl">
              <div className="w-full text-white text-lg font-medium">
                <h2 className="location flex items-center absolute right-8 top-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    className="mr-3 fill-violet-300"
                  >
                    <path d="M5.83337 4.16683C4.91671 4.16683 4.16671 4.91683 4.16671 5.8335C4.16671 6.75017 4.91671 7.50017 5.83337 7.50017C6.75004 7.50017 7.50004 6.75017 7.50004 5.8335C7.50004 4.91683 6.75004 4.16683 5.83337 4.16683ZM5.83337 0.000167847C8.55837 0.000167847 11.6667 2.05017 11.6667 5.9585C11.6667 8.44183 9.89171 11.0585 6.34171 13.7835C6.04171 14.0168 5.62504 14.0168 5.32504 13.7835C1.77504 11.0502 3.8147e-05 8.44183 3.8147e-05 5.9585C3.8147e-05 2.05017 3.10837 0.000167847 5.83337 0.000167847Z" />
                  </svg>
                  <span className="text-violet-300" id="location">
                    {weatherData.name}
                  </span>
                </h2>
                <div className="text-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                    alt="test"
                    className="mx-auto"
                  />
                  <p className="flex justify-center my-0">
                    <span className="text-6xl" id="temperature">
                      {Math.round(weatherData.main.temp)}
                    </span>
                    <span className="text-violet-200">
                      <sup> o</sup>C
                    </span>
                  </p>
                  <p className="text-center">
                    <span className="text-1xl mr-2">
                      {Math.round(weatherData.main.temp_max)}
                      <sup>o</sup>
                    </span>
                    <span className="text-1xl text-violet-200">
                      {Math.round(weatherData.main.temp_min)}
                      <sup>o</sup>
                    </span>
                  </p>
                </div>
                <div className="flex gap-x-3 justify-between w-full absolute bottom-3 left-0 px-3">
                  <div className="flex flex-auto items-center bg-violet-300/60 p-3 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="mr-3 fill-white"
                    >
                      <g opacity="0.4">
                        <path d="M3.45539 7.66197C3.45539 6.94084 3.93614 6.46009 4.65727 6.46009H5.85914C6.58027 6.46009 7.06102 6.94084 7.06102 7.66197C7.06102 8.3831 6.58027 8.86385 5.85914 8.86385H4.65727C3.93614 8.86385 3.45539 8.3831 3.45539 7.66197ZM4.65727 17.277C4.65727 16.5559 5.13802 16.0751 5.85914 16.0751H7.06102C7.78215 16.0751 8.2629 16.5559 8.2629 17.277C8.2629 17.9981 7.78215 18.4789 7.06102 18.4789H5.85914C5.13802 18.4789 4.65727 17.9981 4.65727 17.277ZM4.65727 20.8826C3.93614 20.8826 3.45539 21.3634 3.45539 22.0845C3.45539 22.8056 3.93614 23.2864 4.65727 23.2864H14.2723C14.9934 23.2864 15.4742 22.8056 15.4742 22.0845C15.4742 21.3634 14.9934 20.8826 14.2723 20.8826H4.65727ZM25.0892 7.66197C25.0892 6.94084 25.5699 6.46009 26.2911 6.46009H28.6948C29.416 6.46009 29.8967 6.94084 29.8967 7.66197C29.8967 8.3831 29.416 8.86385 28.6948 8.86385H26.2911C25.5699 8.86385 25.0892 8.3831 25.0892 7.66197ZM8.2629 25.6901C7.54177 25.6901 7.06102 26.1709 7.06102 26.892C7.06102 27.6131 7.54177 28.0939 8.2629 28.0939H16.676C17.3972 28.0939 17.8779 27.6131 17.8779 26.892C17.8779 26.1709 17.3972 25.6901 16.676 25.6901H8.2629ZM3.45539 13.6714C2.73426 13.6714 2.25351 13.1906 2.25351 12.4695C2.25351 11.7484 2.73426 11.2676 3.45539 11.2676H17.8779C19.2 11.2676 20.2817 10.1859 20.2817 8.86385C20.2817 7.54178 19.2 6.46009 17.8779 6.46009C17.1568 6.46009 16.5559 6.70047 16.1953 7.18122C15.7145 7.66197 14.9934 7.66197 14.5127 7.18122C14.0319 6.70047 14.0319 5.97934 14.5127 5.49859C15.354 4.65727 16.5559 4.05634 17.8779 4.05634C20.5221 4.05634 22.6854 6.21972 22.6854 8.86385C22.6854 11.508 20.5221 13.6714 17.8779 13.6714H3.45539ZM26.2911 16.0751C27.0122 16.0751 27.4929 15.5944 27.4929 14.8732C27.4929 14.1521 27.0122 13.6714 26.2911 13.6714C25.9305 13.6714 25.6901 13.7915 25.4498 14.0319C24.969 14.5127 24.2479 14.5127 23.7671 14.0319C23.2864 13.5512 23.2864 12.83 23.7671 12.3493C24.3681 11.6282 25.3296 11.2676 26.2911 11.2676C28.3343 11.2676 29.8967 12.83 29.8967 14.8732C29.8967 16.9164 28.3343 18.4789 26.2911 18.4789H15.4742C14.753 18.4789 14.2723 17.9981 14.2723 17.277C14.2723 16.5559 14.753 16.0751 15.4742 16.0751H26.2911ZM25.0892 23.2864H19.0798C18.3587 23.2864 17.8779 22.8056 17.8779 22.0845C17.8779 21.3634 18.3587 20.8826 19.0798 20.8826H25.0892C27.1324 20.8826 28.6948 22.4451 28.6948 24.4883C28.6948 26.5315 27.1324 28.0939 25.0892 28.0939C24.1277 28.0939 23.1662 27.7333 22.5652 27.0122C22.0845 26.5315 22.0845 25.8103 22.5652 25.3296C23.046 24.8488 23.7671 24.8488 24.2479 25.3296C24.4883 25.57 24.7286 25.6901 25.0892 25.6901C25.8103 25.6901 26.2911 25.2094 26.2911 24.4883C26.2911 23.7671 25.8103 23.2864 25.0892 23.2864Z" />
                      </g>
                    </svg>
                    <div>
                      <p className="text-xs">Wind</p>
                      {weatherData.wind.speed.toFixed(1)}{" "}
                      <span className="text-sm">km/h</span>
                    </div>
                  </div>
                  <div className="flex flex-auto items-center bg-violet-300/60 p-3 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                      className="mr-3 fill-white"
                    >
                      <g opacity="0.4">
                        <path d="M7.27033 25.0844C6.61663 26.4441 7.18926 28.0774 8.54917 28.7295C9.90927 29.3836 11.5415 28.8107 12.1952 27.451C12.8489 26.0913 12.1514 21.2352 12.1514 21.2352C12.1514 21.2352 7.92422 23.7247 7.27033 25.0844Z" />
                        <path d="M14.5596 25.0844C13.9061 26.4441 14.4785 28.0774 15.8386 28.7295C17.1983 29.3836 18.8308 28.8107 19.4845 27.451C20.1382 26.0913 19.4407 21.2352 19.4407 21.2352C19.4407 21.2352 15.2133 23.7247 14.5596 25.0844Z" />
                        <path d="M17.67 18.6483C18.3237 17.2886 17.6262 12.4325 17.6262 12.4325C17.6262 12.4325 13.399 14.922 12.7451 16.2817C12.0914 17.6414 12.664 19.2746 14.0239 19.9267C15.3841 20.5808 17.0163 20.008 17.67 18.6483Z" />
                        <path d="M21.9582 19.9267C23.3181 20.5808 24.9504 20.008 25.604 18.6483C26.2577 17.2886 25.5602 12.4325 25.5602 12.4325C25.5602 12.4325 21.333 14.922 20.6792 16.2817C20.0257 17.6414 20.5981 19.2746 21.9582 19.9267Z" />
                        <path d="M24.3799 10.5486C25.0338 9.18869 24.3365 4.33317 24.3365 4.33317C24.3365 4.33317 20.1089 6.82148 19.4554 8.18139C18.8017 9.5413 19.374 11.1737 20.7341 11.8274C22.094 12.4801 23.7262 11.9087 24.3799 10.5486Z" />
                        <path d="M26.2311 21.2352C26.2311 21.2352 22.0038 23.7247 21.3501 25.0844C20.6964 26.4441 21.269 28.0774 22.6287 28.7295C23.9888 29.3836 25.6211 28.8107 26.275 27.451C26.9286 26.0913 26.2311 21.2352 26.2311 21.2352Z" />
                      </g>
                    </svg>
                    <div>
                      <p className="text-xs">Humidity</p>
                      {weatherData.main.humidity}{" "}
                      <span className="text-sm">%</span>
                    </div>
                  </div>
                  <div className="flex flex-auto items-center bg-violet-300/60 p-3 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                      className="mr-3 fill-white"
                    >
                      <g opacity="0.4">
                        <path d="M25.8454 13.4869C25.8325 13.4869 25.8207 13.4905 25.8079 13.4906C26.0448 12.9427 26.1775 12.3392 26.1775 11.7043C26.1775 9.21472 24.1592 7.19643 21.6697 7.19643C20.7898 7.19643 19.9715 7.45251 19.2776 7.88845C18.3391 5.60734 16.097 3.99996 13.4773 3.99996C10.0133 3.99996 7.20528 6.80796 7.20528 10.272C7.20528 10.5338 7.22648 10.7903 7.25766 11.0436C7.23999 11.0434 7.22294 11.041 7.20528 11.041C4.88285 11.041 2.99997 12.9238 2.99997 15.2464C2.99997 17.5688 4.88285 19.4516 7.20528 19.4516H25.8454C27.4926 19.4516 28.8277 18.1164 28.8277 16.4693C28.8277 14.8221 27.4926 13.4869 25.8454 13.4869Z" />
                        <path d="M11.2647 26.7994C10.7581 27.8533 9.49295 28.2971 8.43903 27.7905C7.38511 27.2839 6.94134 26.0188 7.44794 24.9649C7.9547 23.9109 11.2307 21.9825 11.2307 21.9825C11.2307 21.9825 11.7713 25.7455 11.2647 26.7994Z" />
                        <path d="M16.5297 26.7994C16.0233 27.8533 14.7581 28.2971 13.7042 27.7905C12.6501 27.2839 12.2065 26.0188 12.7131 24.9649C13.2199 23.9109 16.4959 21.9825 16.4959 21.9825C16.4959 21.9825 17.0365 25.7455 16.5297 26.7994Z" />
                        <path d="M21.8693 26.7994C21.3627 27.8533 20.0975 28.2971 19.0436 27.7905C17.9897 27.2839 17.5461 26.0188 18.0525 24.9649C18.5593 23.9109 21.8353 21.9825 21.8353 21.9825C21.8353 21.9825 22.3759 25.7455 21.8693 26.7994Z" />
                      </g>
                    </svg>
                    <div>
                      <p className="text-xs">Clouds</p>
                      {weatherData.clouds.all} <span className="text-sm">%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
          <div className="w-7/12 ">
            <div className="flex flex-wrap h-auto">
              <div className="w-full">
                <FiveDay fiveDayWetherData={fiveDayWetherData}></FiveDay>
              </div>
              <div className="w-full">
                <TopButtons handleButtonClick={handleButtonClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
