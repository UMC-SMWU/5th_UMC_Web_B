import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function WeatherContainer({ url }) {
  const [data, setData] = useState({ city: '', temp: '', weather: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { city, temp, weather } = data;

  useEffect(() => {
    const searchWeather = async () => {
      try {
        setError(null);
        setLoading(true);

        const result = await axios.get(url);
        const { name, main, weather } = result.data;

        setData(() => ({
          city: name,
          temp: `${Math.round(main.temp * 10) / 10}℃`,
          weather: weather[0].main,
        }));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    url && searchWeather();
  }, [url]);

  if (loading) return <Message>Loading...</Message>;
  if (city && error) return <Message>Error!!!</Message>;
  if (Object.values(data).some((data) => data === '')) return null;
  return (
    <WeatherBox>
      <City>{city}</City>
      <Temperature>{temp}</Temperature>
      <Weather>{weather}</Weather>
    </WeatherBox>
  );
}

const Message = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

const City = styled.div`
  font-size: 1.2rem;
`;

const Temperature = styled.div`
  margin: 0.5rem 0;
  font-size: 3rem;
`;

const Weather = styled.div`
  text-align: right;
  font-size: 1rem;
`;
