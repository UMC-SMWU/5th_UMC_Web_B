import React from 'react'

const Card = (props) => {
  const {data}=props;
  const cel=(fah)=>{  // 화씨온도->섭씨온도 변환 함수
    return Math.round(((fah-273.15)*10))/10;
  };
    
  return (
    <div className='card'>
      <div className='name'>{data.name}</div>
      <div className='temperture'>{cel(data.main?.temp)}°C</div>
      <div className='weather'>{data.weather?.[0]?.main}</div>
    </div>
  )
}

export default Card