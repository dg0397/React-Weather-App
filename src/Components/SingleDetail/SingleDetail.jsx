import React from 'react';
import './SingleDetail.css';

import useDataDetail from '../../hooks/useDataDetail'

export default function SingleDetail({detail,valueKey}){
    
    const {key,value} = useDataDetail(detail,valueKey,"F");
    const newDetailFormat = key.replace("_"," ").toUpperCase();
    
    return(
        <div className="Single_Detail" >
            <p>{newDetailFormat}</p>
            <h4>{value ? value : "-"}</h4>
        </div>
    )
}