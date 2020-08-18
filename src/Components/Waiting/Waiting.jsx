import React from 'react'
import useLocationContext from '../../hooks/useLocationContext';
import './Waiting.css'
import {useLocation} from 'wouter';

export default function Waiting(){
    useLocationContext()
    const [path,setPath] = useLocation();
    if(path !== '/'){
      setPath('/')
    }
    return(
      <h1>Wait a minute...</h1>
    )
}