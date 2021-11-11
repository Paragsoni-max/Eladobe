import React from 'react'
import "../styling/service.css"


const ServiceCard = (props) => {
    return (
        <div className="card" style={{width:"350px",margin:"10px",borderRadius:"10px",boxShadow:"5px 5px 5px 0px gray "}}>
            <img src={props.img} style={{height:"250px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h1 style={{fontSize:"xx-large",fontWeight:"600"}} className="card-title">{props.title}</h1>
                <p style={{fontSize:"20px",width:"100%"}} className="card-text">{props.desc}</p>
            </div>
        </div>
    )
}

export default ServiceCard
