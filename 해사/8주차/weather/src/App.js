import { useState } from 'react';
import CityInput from './components/CityInput';
import WeatherContainer from './components/WeatherContainer';
import styled from 'styled-components';

function App() {
  const [url, setUrl] = useState('');
  return (
    <AppContainer>
      <CityInput setUrl={setUrl} />
      <WeatherContainer url={url} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 10rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default App;
