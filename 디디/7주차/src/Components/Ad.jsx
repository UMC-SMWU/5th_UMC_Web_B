import React from 'react';

export default function Ad({ isToggled, handleToggleClick }) {
  return (
    <div className="image-button">
      {isToggled && <img className="adImage" alt="adImage" src="ad.svg"></img>}

      <button className="adButton" onClick={handleToggleClick}>
        {isToggled ? '숨기기' : '보이기'}
      </button>
    </div>
  );
}
