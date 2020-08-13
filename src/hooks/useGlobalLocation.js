import { useContext } from 'react'
import LocationContext from '../context/LocationContext';

export default function useGlobalLocation() {
    const { location, loading } = useContext(LocationContext)
    return { location, loading }
}
