import React from 'react'

const Weather = ({name,country,temp,main,icon}) =>{
    return(
        <div className = 'Weather'>
            <h2>{name}, {country}</h2>
            <h3>{temp} C</h3>
            <h3>{main}</h3>
            <img src={icon} alt={main}/>
        </div>
    )
}

export default Weather