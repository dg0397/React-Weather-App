import React from 'react';
import Button from './Button';
import { Link } from 'wouter';


const NavMenu = () => {
    return (
        <div className="Buttons">
            <Link to='/'>
            Current Weather
            </Link>
            <Link to='/detail'>
                Detail Weather
            </Link>
        </div>
    )
}

export default NavMenu
