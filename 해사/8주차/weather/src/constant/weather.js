const WEATHER = {
  url: (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEAHTER_API_KEYWEAHTER_API_KEY}`,
};
export default WEATHER;
