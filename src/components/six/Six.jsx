import "./six.css";
import balcony1 from "../../images/balcony1.jpg"
import balcony2 from "../../images/balcony2.jpg"

const Six = () => {
  return (
    <div className="six_container">
      <div className="six_wrapper">
       <img src={balcony1} alt="" />
        <div className="six_content">
          <h1>OUR SPACIOUS AND SUNNY DINING DECK IS NOW OPEN </h1>
          <h5>
            Time to enjoy the warmer weather and have Lunch, Dinner or Cocktails
            on our Brand New outdoor deck. Plenty of seating and beautiful
            mountain views. Join us soon!
          </h5>
        </div>
        <img src={balcony2} alt="" />
      </div>
    </div>
  );
};

export default Six;
