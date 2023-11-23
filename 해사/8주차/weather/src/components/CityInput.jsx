import { useState } from 'react';
import styled from 'styled-components';
import WEATHER from '../constant/weather';

export default function CityInput({ setUrl }) {
  const [city, setCity] = useState('');
  const handleChange = (event) => setCity(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(() => WEATHER.url(city));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        placeholder='도시를 입력하세요'
        onChange={handleChange}
        value={city}
      />
    </Form>
  );
}

const Form = styled.form`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid black;
  border-radius: 0.8rem;
`;
