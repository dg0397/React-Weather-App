import { useEffect, useContext } from 'react';
import LocationContext from '../context/LocationContext';
import getWeatherAPI from '../Services/getWeatherAPI'
import getLocation from '../Services/geolocation';

export default function useLocationContext() {
    const { location, setLocation, loading, setLoading } = useContext(LocationContext);

    useEffect(() => {
        getLocation(getWeatherAPI, setLocation, setLoading);
    }, [setLocation, setLoading])

    return { location, loading }
}