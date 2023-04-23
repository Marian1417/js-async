export default async function fetchCurrentWeather(city) {
  const API_KEY = "fa8558fd1c76083945de593e93f411c1";
  const CURRENT_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(CURRENT_WEATHER_API);
  const weatherData = await response.json();

  return weatherData;
}
