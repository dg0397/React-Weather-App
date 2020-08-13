import React from 'react';
import WeatherDetails from '../../Components/WeatherDetails'

import useGlobalLocation from '../../hooks/useGlobalLocation';



export default function Detail(){
    const {location} = useGlobalLocation();
    console.log(location)
    return(
        <WeatherDetails />
    )
}