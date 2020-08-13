import React, { useState } from 'react';

const Context = React.createContext({});

export function LocationContextProvider({ children }) {
    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        <Context.Provider value={{ location, setLocation , loading ,setLoading }}>
            {children}
        </Context.Provider>
    )
}

export default Context;