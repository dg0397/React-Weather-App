import React from 'react';
import useGlobalLocation from '../../hooks/useGlobalLocation';
import Weather from '../../Components/Weather';

export default function Home(){
    const {location} = useGlobalLocation();
    console.log(location)
    return(
        <Weather  {...location}/>
    )
}