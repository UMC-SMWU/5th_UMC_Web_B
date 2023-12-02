import React from 'react'
import ad from "../img/umc_ad.svg"
import "./Ad.css"

const Ad = ({showAd}) => {
    if (!showAd) {
        return null;
    }
    return (
        <div>
            <img className='ad' src={ad} alt="ad"/>
        </div>
    )
}

export default Ad