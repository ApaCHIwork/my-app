import { getFormattedWeatherData, getWeatherData5Day } from "./weatherService";

export const fetchWeather = async (param = "london") => {
  try {
    let date = await getFormattedWeatherData({ q: param, units: "metric" });
    return date; // Повернути результат без проміса
  } catch (error) {
    console.log("Some error in service" + error);
  }
};

export const fetchWeather5Day = async (param = "london") => {
  try {
    let date = await getWeatherData5Day({ q: param, units: "metric" });
    return date; // Повернути результат без проміса
  } catch (error) {
    console.log("Some error in service" + error);
  }
};
