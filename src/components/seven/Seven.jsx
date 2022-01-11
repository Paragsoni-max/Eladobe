import "./seven.css";
import sm1 from "../../images/sm1.jpg";
import sm2 from "../../images/sm2.jpg";
import sm3 from "../../images/sm3.jpg";

const Seven = () => {
  return (
    <div className="seven_container">
      
        <div className="seven_heading">
          <h1>@eladobecafe</h1>
          <span>Follow us on social media</span>
        </div>
        <div className="seven_social_ss">
          <img src={sm1} alt="" className="img" />
          <img src={sm2} alt="" className="img" />
          <img src={sm3} alt="" className="img" />
        </div>
      </div>
    
  );
};

export default Seven;
