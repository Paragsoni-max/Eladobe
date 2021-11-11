import React from 'react'
import logo3 from "../../files/logo3.jpg"
import "../styling/upper.css"
import transportation from "../../files/transportation.png"
import email from "../../files/email.png"
import call from "../../files/call.png"
const Upper = () => {
    return (
        <div className="upper">
            <div className="one">
                <img src={logo3} alt="" />
            </div>
            <div className="two">
                <span><img className="s-icons" src={transportation} alt="" /></span>
                <h1>All Over India</h1>
            </div>
            <div className="three">
                <span><img className="s-icons" src={call} alt="" /></span>
                <h1>0000000000</h1>
            </div>
            <div className="four">
                <span><img className="s-icons" src={email} alt="" /></span>
                <h1>xyz@gmail.com</h1>
            </div>
        </div>
    )
}

export default Upper
