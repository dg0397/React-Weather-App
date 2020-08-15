import React from 'react';

export default function TemperatureButtons({temp,changeTemperatureFormat,temperatureUnit}){
    const handleClick = e =>{
        const value = e.target.innerText
        changeTemperatureFormat(value)
    }
    return(
        <div className = 'Temperature' >
            <h3>{`${temp} ${temperatureUnit}`}</h3>
            <button onClick = {handleClick} >C</button>
            <button onClick = {handleClick} >F</button>
        </div>
    )
}