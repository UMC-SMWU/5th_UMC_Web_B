import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      
      const kelvinTemperature = response.data.main.temp;

      // 섭씨로 변환
      const celsiusTemperature = Math.round(((kelvinTemperature - 273.15) * 10)) / 10;

      setTemperature(celsiusTemperature);
      setError('');
    } catch (err) {
    
      setTemperature(null);
      setError('도시를 찾을 수 없습니다.');
    }
  };

  return (
    <div>
      <h1>날씨 앱</h1>
      <input
        type="text"
        placeholder="도시 이름을 입력하세요"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
      {temperature !== null && <p>{`${city}의 온도는 ${temperature}도입니다.`}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Search;
