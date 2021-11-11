import React from 'react'
import "../styling/service.css"
import tt from "../../files/tt.jpg"
import transportservices from "../../files/transportservices.png"
import logistic from "../../files/logistic.jpg"
import relocation1 from "../../files/relocation1.jpg"
import shifting from "../../files/shifting.jpg"
import vechile from "../../files/vechile.jpg"
import packingandmoving from "../../files/packingandmoving.jpg"
import ServiceCard from './ServiceCard'



const Service = () => {
    return (
      <div style={{background:"rgb(250, 250, 250)"}}>
      
      <div className="service-upper-page">
          <ServiceCard img={packingandmoving} title="Packing and Moving" desc="Quick Delivery"/>
          <ServiceCard img={vechile} title="Vechile Moving" desc="100% Safe , Damagefree  Movement "/>
          <ServiceCard img={transportservices} title="Transport Services" desc="Get your Goods Transported"/>
          <ServiceCard img={shifting} title="Shifting Services" desc="Shift Offices Quickly"/>
          <ServiceCard img={relocation1} title="Relocatin Services" desc="Relocate anywhere across India"/>
          <ServiceCard img={logistic} title="Logistic Services" desc=" Other Logistic Support "/>
      </div>
        <div className="service-page">
          <div className="service-heading">
            <h1>Why Choose us..</h1>
            <h3>Just after making the goods ready , we take delivery and unpack your goods at your given destination</h3>
          </div>
          <div className="service-card">
          <ServiceCard img={tt} title="Quick Booking" desc="You will get your booking Instantly , Just call us"/>
          <ServiceCard img={tt} title="Experienced Workers" desc="We have licenced and best Movers in Indore"/>
          <ServiceCard img={tt} title="Get Free Quotations" desc="Free and no-obligation Quotations with pre-survey facilities"/>
          <ServiceCard img={tt} title="Best Packers" desc="Packing with high quality materials for minimal loss"/>
          <ServiceCard img={tt} title="Insurance" desc="Insurance to cover any damage whatsoever during journey"/>
          <ServiceCard img={tt} title="Other Solutions" desc="Other requirements like bikes , cars , warehouse "/>

          </div>
        </div>
    </div>)
}

export default Service
