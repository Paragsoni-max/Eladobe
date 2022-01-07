import "./navbar.css"
import React from 'react'






const Navbar = () => {
    return (
        <div className="Nav_container">
        
        <div className="first">
            <h1 className="logo">El Adobe Cafe</h1>
        </div>

        
            <nav>
                <ul>
                <li><a className="a" href="/">Home</a></li>
                <li><a className="a" href="/about">About Us</a></li>
                <li><a className="a" href="/service">Menu</a></li>
                <li><a className="a" href="/contact">Catering & Events</a></li>
                <li><a className="a" href="/contact">Giving Back</a></li>
                <li><a className="a" href="/contact">Contact Us</a></li>
                </ul>
            </nav>
        
        <div className="last">
            <a href="/">Order Online</a>
        </div>
        </div>
)
}

            
            
        
  

export default Navbar
