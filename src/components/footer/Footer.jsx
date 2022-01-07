import "./footer.css";
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube,FaPhone,FaEnvelopeOpenText,FaMapMarkerAlt} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <h1>El Adobe</h1>
      </div>
      <div className="footer_middle">
        <div className="middle_first">
          <div className="middle_first_content">
            <h1>Address</h1>
            <div className="address_content">
              <a href="/"><FaMapMarkerAlt size="30px"/></a>
              <span> 55 W Arroyo St,Reno,NV 89509,United States</span>
            </div>
          </div>
          <div className="middle_first_content">
            <h1>Get In Touch</h1>
            <div className="git_content">
              <div className="git_phone" style={{display:"flex",margin:"10px 0"}}>
                <a href="/"><FaPhone size="20px"/></a>
                <span>(+1) - 000000000</span>
              </div>
              <div className="git_email" style={{display:"flex"}}>
                <a href="/"><FaEnvelopeOpenText size="20px"/></a>
                <span> abc @ adobecafe.com</span>
              </div>
            </div>
          </div>
          <div className="middle_first_content">
            <h1>Follow Us</h1>
            <div className="followus_content">
                <a href="/"><FaFacebook size="30px"/></a>
                <a href="/"><FaInstagram size="30px"/></a>
                <a href="/"><FaTwitter size="30px"/></a>
                <a href="/"><FaYoutube size="30px"/></a>
            </div>
          </div>
          <div className="middle_first_content">
            <h1>Working Hours</h1>
            <div className="wh_content">
                <p>Monday-Thursday: 11 AM-9 PM</p>
                <p>Friday: 11 AM - 10 PM</p>
                <p>Saturday: 10 AM - 10 PM</p>
                <p>Sunday: 10 AM - 9 PM</p>
            </div>
          </div>
        </div>
        <div className="middle_last">
          <span>
            Cafe Adobe Menu | Reno Mexican Food | Mexican Food Menu | Reno Lunch
            | Mexican Cafe Menu | Event Catering Service | Find Me Mexican Food
          </span>
        </div>
      </div>

      <div className="footer_bottom">
        <span>@copyright 2021 , All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
