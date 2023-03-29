import getFormattedWeatherData from "./weatherService";

const fetchWeather = async (param = "london") => {
  console.log("PARAMS",param);
  try {
    const data = await getFormattedWeatherData({ q: param });
    console.log("fetchWeather DATA", data);
  } catch (error) {
    console.log("Some error in service" + error);
  }
};



export default fetchWeather