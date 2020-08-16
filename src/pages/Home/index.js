import React from 'react';
import useGlobalLocation from '../../hooks/useGlobalLocation';
import Weather from '../../Components/Weather/Weather';

export default function Home(){
    const {location,setTemperatureUnit,temperatureUnit} = useGlobalLocation();
    console.log(location)
    const changeTemperatureFormat = (format) => {
        setTemperatureUnit(format)
    }
    return(
        <Weather  data = {location} changeTemperatureFormat = {changeTemperatureFormat} temperatureUnit = {temperatureUnit}/>
    )
}