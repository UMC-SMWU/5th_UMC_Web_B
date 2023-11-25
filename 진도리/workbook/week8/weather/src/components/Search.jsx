import React, {useEffect, useState} from 'react'
import Input from './Input';
import Card from './Card';
import axios from "axios";


const Search = () => {
    const [data, setData] = useState(null);
  
    const searchWeather=async(city)=> {
      try{
        const trimCity=city.trim();
        if(!trimCity){ // 입력값 없을 경우, 검색 안함
          console.log("입력이 없습니다.");
          setData(null); // Card 숨김
          return;
        }

        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${trimCity}&appid=d3db69d3f4d9c3b7997a8d4829890c58`);

        setData(response.data);
        console.log(response.data);
      }catch(error){
        console.error(error);
        setData(null); // Card 숨김
      }
    };

    useEffect(()=> {
      if(data) {
        console.log(data);
      }
    }, [data]);

  return (
    <div>
        <Input searchWeather={searchWeather}/>
        {data && <Card data={data}/>}
    </div>
  )
}

export default Search