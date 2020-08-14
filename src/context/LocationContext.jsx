import React, { useState } from 'react';

const Context = React.createContext({});

export function LocationContextProvider({ children }) {
    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(false);
    const [temperature,setTemperature] = useState("C");

    return (
        <Context.Provider value={{ location, setLocation , loading ,setLoading , temperature, setTemperature }}>
            {children}
        </Context.Provider>
    )
}

export default Context;