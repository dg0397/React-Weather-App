import React from 'react';
import Spinner from '../Components/Spinner/index';
import Home from "../pages/Home/index";
import Detail from '../pages/Detail/index'

import useLocation from '../hooks/useLocation'

import { Route} from "wouter";
import NavMenu from './NavMenu';


const Main = () => {
    const { loading } = useLocation()
    return (
        <>
            {
                loading ?
                    <Spinner /> :
                    <div className='Main'>
                        <NavMenu />
                        <Route path="/" component={Home} />
                        <Route path="/detail" component={Detail} />
                    </div>

            }
        </>
    )
}
export default Main