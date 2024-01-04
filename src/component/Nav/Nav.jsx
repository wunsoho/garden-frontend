import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';
import home1 from "../image/home1.png";
import Ranking1 from "../image/Ranking1.png";
import Map1 from "../image/Map1.png";

function Nav() {    
    return (
        <div className = "NavBody">
            <div className = "navbar">
                <Link className = "navbarMenu" to={'/'}><img src={home1} alt="Home" /></Link>
                <Link className = "navbarMenu" to={'/Ranking'}><img src={Ranking1} alt="Ranking"/></Link>
                <Link className = "navbarMenu" to={'/Map'}><img src={Map1} alt="Map"/></Link>
            </div>
        </div>
    )
}

export default Nav;