import React from 'react'
import TemperatureButtons from './TemperatureButtons';

const Weather = ({data,changeTemperatureFormat,temperatureUnit }) =>{
    const {name,country,temp,mainDescription,icon} = data
    const newTemperature = temperatureUnit === "C" ? temp : ((temp * 9/5) + 32).toFixed(2);
    return(
        <div className = 'Weather'>
            <h2>{name}, {country}</h2>
            <TemperatureButtons temp = {newTemperature} changeTemperatureFormat = {changeTemperatureFormat} temperatureUnit = {temperatureUnit}/>
            <h3>{mainDescription}</h3>
            <img src={icon} alt={mainDescription}/>
        </div>
    )
}

export default Weather