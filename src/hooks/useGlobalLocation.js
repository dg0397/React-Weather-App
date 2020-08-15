import { useContext } from 'react'
import LocationContext from '../context/LocationContext';

export default function useGlobalLocation() {
    const { location, loading ,temperatureUnit,setTemperatureUnit} = useContext(LocationContext)
    return { location, loading ,temperatureUnit ,setTemperatureUnit}
}
