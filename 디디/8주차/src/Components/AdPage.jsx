import React, { useState } from 'react';
import Ad from './Ad.jsx';

export default function AdPage() {
  const [isToggled, setIsToggled] = useState(true);
  const handleToggleClick = () => {
    setIsToggled((prev) => !prev);
  };

  return <Ad isToggled={isToggled} handleToggleClick={handleToggleClick} />;
}
