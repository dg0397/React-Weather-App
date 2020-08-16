import React from 'react';
import { Link ,useLocation} from 'wouter';
import "./NavMenu.css";

const NavMenu = () => {
    const [path,] = useLocation();   
    const activeStyle = {
        backgroundColor: "#57acd6"
    }
    return (
        <div className="Buttons">
            <Link to='/'>
                <p style = {path === '/' ? activeStyle : null} >Current Weather</p>
            </Link>
            <Link to='/detail'>
                <p style = {path === '/detail' ? activeStyle : null} >Detail Weather</p>
            </Link>
        </div>
    )
}

export default NavMenu
