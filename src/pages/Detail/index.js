import React from 'react';
import WeatherDetails from '../../Components/WeatherDetails/WeatherDetails'

import useGlobalLocation from '../../hooks/useGlobalLocation';



export default function Detail(){
    const {location:{detailData},location:{name},temperatureUnit} = useGlobalLocation();
    console.log(detailData)
    return(
        <WeatherDetails data = {detailData} temperatureUnit = {temperatureUnit} name = {name}/>
    )
}