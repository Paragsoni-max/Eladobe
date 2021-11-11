import React from "react";
import dt from "../../files/dt.png";
import lm from "../../files/lm.png";
import building from "../../files/building.png";
import "../styling/headerbottom.css"

import { useForm } from "react-hook-form";


  

const HeaderBottom = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="header-bottom">
      <div className="left-para">
        <div className="details">
          <h1>ONE OF THE BEST PACKERS AND MOVERS</h1>
          <h4>
            Indore is among the very populous and the most significant town of
            Madhya Pradesh. Indore has lots of movers and packers, that assist
            individuals move from 1 spot to another, make it in-city or even
            out-of-city.</h4> 
            <h4>These many options make finding the best home shifting
            providers in Indore time consuming. Aryan Group Packers and Movers
            Indore are well known packers & movers company in Indore. We supply
            excellent packing and moving services to local customers.</h4>
            <h4> We are the
            regular, constant packers movers company in Indore. We at Aryan Group
            Packers and Movers Indore take best care of your Household Goods and
            Vehicle and Car Transportation to your desired destination.
          </h4>
        </div>
        <div className="imf-icons">
          <div className="i1">
            <img src={dt} alt="" />
            <h1>1000+ Delivery Trucks</h1>
          </div>
          <div className="i1">
            <img src={building} alt="" />
            <h1>100+ Offices</h1>
          </div>
          <div className="i1">
            <img src={lm} alt="" />
            <h1>1000+ Delivery Codes</h1>
          </div>
        </div>
      </div>
      <div className="quote">
          <h1>
              Get Free Quotation
          </h1>
          <form action="" onSubmit={handleSubmit(onSubmit)}>

            <input type="text" placeholder="Enter your name.." {...register("name")} />
            <input type="email" placeholder="Enter your email" {...register("email")}/>
            <input type="text" placeholder="Enter your Contact number" {...register("contact")}/>
            <input type="text" placeholder="Service..?" {...register("service")}/>
            <input type="submit" />
          </form>
      </div>
    </div>
  );
};

export default HeaderBottom;
