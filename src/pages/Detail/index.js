import React from 'react';
import WeatherDetails from '../../Components/WeatherDetails'

import useGlobalLocation from '../../hooks/useGlobalLocation';



export default function Detail(){
    const {location:{detailData}} = useGlobalLocation();
    console.log(detailData)
    return(
        <WeatherDetails data = {detailData} />
    )
}