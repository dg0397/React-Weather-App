import React from 'react';
import './TemperatureButtons.css'

export default function TemperatureButtons({temp,changeTemperatureFormat,temperatureUnit}){
    const handleClick = e =>{
        const value = e.target.innerText
        changeTemperatureFormat(value)
    }
    return(
        <div className = 'Temperature' >
            <h3>{`${temp} ${temperatureUnit}`}</h3>
            <div className = "TemperatureButtons" >
                <button onClick = {handleClick} id = {temperatureUnit === 'C'? 'active': null}>C</button>
                <button onClick = {handleClick} id = {temperatureUnit === 'F'? 'active': null}>F</button>
            </div>
        </div>
    )
}