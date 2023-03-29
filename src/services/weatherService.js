import Title from "antd/es/skeleton/Title";
import { DateTime } from "luxon";

const API_KEY = "48790b76e580b27666554fa7181175e0";

// const API_KEY = "510cd0b2236762ab68abee5054069515"; api indianos

const MAIN_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&
// lon-2.3488&exclude=current, minutely, hourly, alerts& appid-1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(MAIN_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url)
  return fetch(url)
  .then((res) => res.json())
  .then((data) => {
    return data
  })
  .catch(error => console.log("CATCH", error))
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
    name,
    dt,
    sys: { country, sunrize, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    feels_like,
    humidity,
    pressure,
    temp,
    temp_max,
    temp_min,
    name,
    dt,
    country,
    sunrize,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather =  (data) => {
    let {timezone,  daily, hourly} = data 
    console.log(daily)
    daily = daily.slice(1, 6).map( d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });

    hourly = hourly.slice(1, 6).map( d => {
      return {
        title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
        temp: d.temp.day,
        icon: d.weather[0].icon
      };
    });

    return {timezone, daily, hourly}
}

 const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a") => 
    DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
  

    //need fix
const getFormattedWeatherData = async (searchParams) => {
  return getWeatherData("weather", searchParams)
  .then(formatCurrentWeather)
  .then((response) => {
    const {lat, lon} = response
    getWeatherData("onecall", {
      //units use for change C to F
      lat,
      lon,
      exclude: "current,minutely,alerts"
    })
    //.then(formatForecastWeather);
  }).catch(error =>   console.log("ERROR",error))

  // try{
  //   const formattedCurrentWeather = await getWeatherData(
  //     "weather",
  //     searchParams
  //   )
  //   formatCurrentWeather(formattedCurrentWeather);
  //   const { lat, lon } = formattedCurrentWeather;

  // } catch(error){
  //   //обробити error
  //   console.log("ERROR in weatherService")
  // }



  //try to  return hourly weather data forecast
  // const formattedForecastWeather = await getWeatherData("onecall", 
  // {
  //   //units use for change C to F
  //   lat,
  //   lon,
  //   exclude: "current,minutely,alerts",
  //   units: searchParams.units
  // }).then(formatForecastWeather);

  // return { ...formattedCurrentWeather, ...formattedForecastWeather };

};

//works
// const getFormattedWeatherData = async (searchParams) => {
//   const formattedCurrentWeather = await getWeatherData(
//     "weather",
//     searchParams
//   ).then(formatCurrentWeather);

//   return formattedCurrentWeather ;
// };



export default getFormattedWeatherData;
