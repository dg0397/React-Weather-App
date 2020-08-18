import React from 'react'
import useLocationContext from '../../hooks/useLocationContext';
import './Waiting.css'

export default function Waiting(){
    useLocationContext()
    return(
      <h1>Wait a minute...</h1>
    )
}