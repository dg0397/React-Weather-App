import React from 'react'

export default function SingleDetail({detail,value}){
    return(
        <div className="Single_Detail" >
            <h3>{detail}</h3>
            <h4>{value}</h4>
        </div>
    )
}