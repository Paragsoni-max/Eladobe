import React from 'react'
import { Link } from 'react-router-dom'
import "../styling/footer.css"
import map from "../../files/map.png"
import call from "../../files/call.png"
import email from "../../files/email.png"
import instagram1 from "../../files/instagram1.png"
import facebook from "../../files/facebook.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="fone">
                <h1 style={{fontSize:"25px"}}>About Us</h1>
                <p>Aryan Group Packers and Movers is Indore based moving company. We’re proud to be the favorite for customers who needs packing and moving services. We have 100+ branches all over India. Learn More</p>
                <div className="fone-link">
                    <Link to=""><img src={facebook} alt="" /></Link>
                    <Link to=""><img src={instagram1} alt="" /></Link>
                </div>
            </div>
            <div className="ftwo">
                <h1 style={{fontSize:"25px"}}>Important Links</h1>
                <div className="ftwo-links">
                    <Link className="ftwo-link" to="/">Home</Link>
                    <Link className="ftwo-link" to="contact">Contact</Link>
                    <Link className="ftwo-link" to="">Private Policy</Link>
                    <Link className="ftwo-link" to="">Return Policy</Link>
                </div>
            </div>
            <div className="fthree">
                <h1 style={{fontSize:"25px"}}>Address</h1>
                <div className="fthree-details">
                    <div className="fthree-detail">
                        <img src={map} alt="" />
                        <p>G-2, Rajiv Awas Vihar, Scheme No. 114, Vijay Nagar, Indore, Madhya Pradesh 452010</p>
                    </div>
                    <div className="fthree-detail">
                        <img src={email} alt="" />
                        <p>xyzxyz@gmail.com</p>
                    </div>
                    <div className="fthree-detail">
                        <img src={call} alt="" />
                        <p>+91 0000000000</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
