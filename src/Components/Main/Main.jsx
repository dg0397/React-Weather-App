import React from 'react';
import Spinner from '../Spinner/index';
import Home from "../../pages/Home/index";
import Detail from '../../pages/Detail/index'

import { Route} from "wouter";
import NavMenu from '../NavMenu';

import './Main.css';
import useGlobalLocation from '../../hooks/useGlobalLocation';

const Main = () => {
    const { loading } = useGlobalLocation()
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