import React, { useState } from 'react';

export default function Ad() {
  const [isToggled, setIsToggled] = useState(true);
  const handleToggleClick = () => {
    setIsToggled((prev) => !prev);
  };
  return (
    <div className="image-button">
      {isToggled ? (
        <img className="adImage" alt="adImage" src="ad.svg"></img>
      ) : null}

      <button className="adButton" onClick={handleToggleClick}>
        {isToggled ? '숨기기' : '보이기'}
      </button>
    </div>
  );
}
