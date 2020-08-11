import React from 'react'

const Weather = ({data}) =>{
    const {name,country,temp,main,icon} = data;
    console.log(data)
    return(
        <>
            <h2>{name}, {country}</h2>
            <h3>{temp} C</h3>
            <h3>{main}</h3>
            <img src={icon} alt={main}/>
        </>
    )
}

export default Weather