import React from 'react';
import WeatherDetails from '../../Components/WeatherDetails/WeatherDetails'

import useGlobalLocation from '../../hooks/useGlobalLocation';



export default function Detail(){
    const {location:{detailData},temperatureUnit} = useGlobalLocation();
    console.log(detailData)
    return(
        <WeatherDetails data = {detailData} temperatureUnit = {temperatureUnit} />
    )
}