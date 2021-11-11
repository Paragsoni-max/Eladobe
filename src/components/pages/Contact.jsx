import React from "react";
import "../styling/contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="contact-container">
      <div className="inputs">

          <h1>CONTACT US..</h1>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

            <input type="text" placeholder="Name.." {...register("name")} />
            <input type="email" placeholder="E-mail.." {...register("email")}/>
            <input type="text" placeholder="Contact number.." {...register("contact")}/>
            <textarea type="text" placeholder="Message.." {...register("message")}/>
            <button type="submit">Submit</button>
          
          </form>

      </div>
      <div className="address">
        <div className="line1 line">
          <i class="far fa-address-card fa-3x" />
          <h2>ward no.03 , umariya , Nainpur</h2>
        </div>
        <div className="line2 line">
          <i class="far fa-envelope-open fa-3x" />
          <h2>xyz@gmail.com</h2>
        </div>
        <div className="line3 line">
          <i class="fas fa-mobile-alt fa-3x"/>
          <h2>  0000000000</h2>
        </div>
        <div className="line3 line">
          <i class="fab fa-twitter fa-3x"/>
          <h2>  @ Twitter</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
