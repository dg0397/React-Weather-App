import React from 'react'

const Weather = ({name,country,temp,mainDescription,icon}) =>{
    return(
        <div className = 'Weather'>
            <h2>{name}, {country}</h2>
            <h3>{temp} C</h3>
            <h3>{mainDescription}</h3>
            <img src={icon} alt={mainDescription}/>
        </div>
    )
}

export default Weather