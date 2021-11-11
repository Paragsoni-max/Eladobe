import "./navbar.css"
import React from 'react'

import {Link} from "react-router-dom";

const style = {
    color:"rgb(236, 236, 236)",
    fontWeight: "700",
    paddingTop: "10px",
    fontSize:"25px"
}


const Navbar = () => {
    return (
        <>
        
        <header>
            <h1 className="logo" style={style}>A-G</h1>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
            <nav>
                <ul>
                <li><Link className="a" to="/">Home</Link></li>
                <li><Link className="a" to="/about">About</Link></li>
                <li><Link className="a" to="/service">Services</Link></li>
                <li><Link className="a" to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <label for="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </header>
  
        </>
    )
}

export default Navbar
