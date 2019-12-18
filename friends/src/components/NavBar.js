import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <NavLink to='./login'>Login</NavLink>
            <NavLink to='./protected'>Friends</NavLink>
        </nav>
    )
}

export default NavBar;