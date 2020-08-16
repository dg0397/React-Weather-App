import React from 'react';
import SingleDetail from '../SingleDetail/SingleDetail';
import './WeatherDetails.css'

export default function WeatherDetails({ data, temperatureUnit,name }) {
    const singleDetails = {...data};
    const singleDetailsKeys = Object.keys(singleDetails);
    console.log(singleDetails)
    return (
        <div className="WeatherDetails">
            <h2>{name}</h2>
            <div className="Single_Details" >
                {
                    singleDetailsKeys.map(singleDetailKey => {
                        return (
                            <SingleDetail key = {singleDetailKey} detail={singleDetailKey} valueKey={singleDetails[singleDetailKey]} temperatureUnit ={temperatureUnit}/>
                        )
                    })
                }
            </div>
        </div>
    )
}