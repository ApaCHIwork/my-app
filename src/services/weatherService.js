import { DateTime } from "luxon";

const API_KEY = "48790b76e580b27666554fa7181175e0";
// const API_KEY = "d5d51a990569975c4dff09bdb8feffa0";

// const API_KEY = "510cd0b2236762ab68abee5054069515"; api indianos

const MAIN_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&
// lon-2.3488&exclude=current, minutely, hourly, alerts& appid-1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(MAIN_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  });
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("CATCH", error);
    throw error; // Перекинути помилку далі
  }
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  console.log(daily);
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

//need fix
export const getFormattedWeatherData = async (searchParams) => {
  try {
    const weatherData = await getWeatherData("weather", searchParams);
    return weatherData;
  } catch (error) {
    console.log("ERROR", error);
    throw error; // Перекинути помилку далі
  }
};

export const getWeatherData5Day = async (searchParams) => {
  try {
    const weatherData = await getWeatherData("forecast", searchParams);
    return weatherData;
  } catch (error) {
    console.log("ERROR", error);
    throw error; // Перекинути помилку далі
  }
};

//works
// const getFormattedWeatherData = async (searchParams) => {
//   const formattedCurrentWeather = await getWeatherData(
//     "weather",
//     searchParams
//   ).then(formatCurrentWeather);

//   return formattedCurrentWeather;
// };
