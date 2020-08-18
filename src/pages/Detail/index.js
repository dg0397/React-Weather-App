import React, { Suspense } from 'react';


import useGlobalLocation from '../../hooks/useGlobalLocation';
import Spinner from '../../Components/Spinner';

const WeatherDetails = React.lazy(
    () => import('../../Components/WeatherDetails/WeatherDetails')
)


export default function Detail(){
    const {location:{detailData},location:{name},temperatureUnit} = useGlobalLocation();
    console.log(detailData)
    return(
        <Suspense fallback = {<Spinner/>}>
            <WeatherDetails data = {detailData} temperatureUnit = {temperatureUnit} name = {name}/>
        </Suspense>
    )
}