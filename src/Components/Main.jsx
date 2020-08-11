import React, {useState,useEffect} from 'react';
import Weather from './Weather';
import getWeatherAPI from '../Services/getWeatherAPI'
import getLocation from '../Services/geolocation';

const Main = () => {
    const [location,setLocation] = useState([]);
    useEffect(()=>{
      getLocation(getWeatherAPI,setLocation);
    },[])
    return(
        <div>
            {location && <Weather data = {location}/>}
        </div>
    )
}
export default Main