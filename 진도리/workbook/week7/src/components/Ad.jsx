import React from 'react'
import "./Ad.css"

const Ad = ({showAd}) => {
    if (!showAd) {
        return null;
    }
    return (
        <div className='ad'>
        </div>
    )
}

export default Ad