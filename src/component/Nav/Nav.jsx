import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className = "NavBody">
            <div className = "navbar">
                <Link className = "navbarMenu" to={'/'}>Main</Link>
                <Link className = "navbarMenu" to={'/about'}>Main</Link>
                <Link className = "navbarMenu" to={'/contact'}>Main</Link>
            </div>
        </div>
    )
}

export default Nav;