import React, { useState } from 'react';

const Input = (props) => {
  const [location, setLocation] = useState("");

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if(e.key ==="Enter"){
      props.searchWeather(location);  
    }
  }

  return (
    <div>
          <input 
          type="text" 
          value={location} 
          onChange={handleInputChange} 
          onKeyDown={handleKeyDown}
          placeholder='도시를 입력하세요'/>
    </div>
  )
}

export default Input