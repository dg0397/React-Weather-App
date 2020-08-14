import React from 'react';
import './SingleDetail.css'

export default function SingleDetail({detail,value}){
    const newDetailFormat = detail.replace("_"," ").toUpperCase();
    if(newDetailFormat === "SUNRISE" || newDetailFormat === "SUNSET" || newDetailFormat === "DT"){
        const date = new Date(value*1000);
        const hour = date.getHours();
        const mins = date.getMinutes();
        value = `${hour} : ${mins}`
    }
    return(
        <div className="Single_Detail" >
            <p>{newDetailFormat}</p>
            <h4>{value ? value : "-"}</h4>
        </div>
    )
}