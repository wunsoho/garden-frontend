import { Link } from 'react-router-dom';
import React from 'react';
import './Nav.css';
import home from "../image/home.png"
import Ranking from "../image/Ranking.png"
import Map from "../image/Map.png"

function Nav() {    
    return (
        <div className = "NavBody">
            <div className = "navbar">
                <Link className = "navbarMenu" to={'/'}><img src={home} alt="Home" /></Link>
                <Link className = "navbarMenu" to={'/Ranking'}><img src={Ranking} alt="Ranking"/></Link>
                <Link className = "navbarMenu" to={'/Map'}><img src={Map} alt="Map"/></Link>
            </div>
        </div>
    )
}

export default Nav;