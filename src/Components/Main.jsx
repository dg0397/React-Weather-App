import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import Spinner from "./Spinner/index";
import getWeatherAPI from '../Services/getWeatherAPI'
import getLocation from '../Services/geolocation';

const Main = () => {
    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLocation(getWeatherAPI, setLocation,setLoading);
    }, [])
    console.log(location)
    return (
            <>
                {
                    loading ?
                    <Spinner /> :
                    <div>
                        {location && <Weather data={location} />}
                    </div>
                }
            </>
    )
}
export default Main