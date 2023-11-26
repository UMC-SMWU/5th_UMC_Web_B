import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const API_KEY = "0fa5687af80e21da9e9492579e81e450";
  const searchWeather = async () => {
    setError(false);
    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        .then((res) => {
          setData(res.data);
        });
    } catch (err) {
      setData(null);
      setError(true);
    }
  };

  return (
    <Container>
      <Box>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? searchWeather() : null)}
          placeholder="도시를 입력하세요."
        />
        {data && (
          <Weather>
            <h3>{data.name}</h3>
            <h1>{data.main.temp} ℃</h1>
            <span>{data.weather[0].main}</span>
          </Weather>
        )}
        {error && <Error>다시 시도해주세요.</Error>}
      </Box>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 500px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 150px;
  height: 30px;
  border-radius: 20px;
  border: 1.5px solid gray;
  padding: 10px;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

const Weather = styled.div`
  width: 200px;
  height: 150px;
  margin: 20px 0px;
  box-sizing: border-box;
  padding: 10px;

  border: 1.5px solid gray;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h1 {
    margin: 0;
    font-size: 50px;
    font-weight: 500;
  }

  & h3 {
    margin: 0;
  }

  & span {
    margin: 0;
    display: flex;
    justify-content: flex-end;
  }
`;

const Error = styled.span`
  width: 150px;
  color: red;
  font-size: 12px;
  margin: 5px 0px;
  text-align: center;
`;
