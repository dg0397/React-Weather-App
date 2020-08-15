import React, { useState } from 'react';

const Context = React.createContext({});

export function LocationContextProvider({ children }) {
    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(false);
    const [temperatureUnit,setTemperatureUnit] = useState("C");

    return (
        <Context.Provider value={{ location, setLocation , loading ,setLoading , temperatureUnit, setTemperatureUnit }}>
            {children}
        </Context.Provider>
    )
}

export default Context;