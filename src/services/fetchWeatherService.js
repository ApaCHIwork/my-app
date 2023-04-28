import getFormattedWeatherData from "./weatherService";

const fetchWeather = async (param = "london") => {
  console.log("PARAMS", param);
  try {
    let date = await getFormattedWeatherData({ q: param, units: "metric" });
    return date; // Повернути результат без проміса
  } catch (error) {
    console.log("Some error in service" + error);
  }
};

export default fetchWeather;
