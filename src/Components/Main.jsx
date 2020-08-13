import React from 'react';
import Spinner from '../Components/Spinner/index';
import Home from "../pages/Home/index";
import Detail from '../pages/Detail/index'

import useLocation from '../hooks/useLocation'

import { Route, Link } from "wouter";


const Main = () => {
    const { loading } = useLocation()
    return (
        <>
            {
                loading ?
                    <Spinner /> :
                    <div className='Main'>
                        <Link to='/'>Current</Link>
                        <Link to='/detail'>Detail</Link>
                        <Route path="/" component={Home} />
                        <Route path="/detail" component={Detail} />
                    </div>

            }
        </>
    )
}
export default Main