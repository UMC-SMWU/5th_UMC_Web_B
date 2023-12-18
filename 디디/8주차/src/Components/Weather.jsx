import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const searchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=53e1e531cc57c7efb828e0449e7a8a12`
      );

      setWeatherData(response.data);
    } catch (error) {
      setWeatherData(null);
    }
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      searchWeather();
    }
  };
  return (
    <CityName className="cityname">
      <input
        type="text"
        value={cityName}
        placeholder="도시를 입력하세요"
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <br />
      <br />

      {weatherData && (
        <Box>
          <div>{cityName}</div>
          <div>{Math.round((weatherData.main.temp - 273.15) * 10) / 10}℃</div>
          <div>{weatherData.weather[0].main}</div>
        </Box>
      )}
    </CityName>
  );
}

//=======================================
const CityName = styled.div`
  position: absolute;
  top: 100px;
  left: 40%;
  width: 500px;
  align-items: center;
  input {
    border: 1px solid #ccc;
    padding: 8px;
    font-size: 16px;
  }
`;
const Box = styled.div`
  width: 180px;
  border: 5px double black;
  border-radius: 10px;
  padding: 10px;
  div {
    &:nth-child(2) {
      font-size: 30px;
    }
    &:nth-child(3) {
      left: 200px;
    }
  }
`;
