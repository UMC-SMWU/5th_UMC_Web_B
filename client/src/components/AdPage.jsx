import React, { useState } from 'react'
import Ad from './Ad'
import "./Ad.css"

const AdPage = () => {
    const [showAd, setShowAd]=useState(true);

    const handleToggleClick = () => {
        setShowAd(ShowAd => !ShowAd);
    }

  return (
    <div>
        <Ad showAd={showAd}/>
        <button className="ad_button" onClick={handleToggleClick}>
            {showAd? "광고 숨기기": "광고 보기"}
        </button>
    </div>
  )
}

export default AdPage