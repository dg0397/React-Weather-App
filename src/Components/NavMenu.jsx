import React from 'react';
import { Link } from 'wouter';
import "./NavMenu.css";

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
