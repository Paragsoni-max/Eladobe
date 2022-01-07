import "./one.css";
import one_img_1 from "../../images/one_img_1.jpg"
import one_img_2 from "../../images/one_img_2.jpg"

const One = () => {
  return (
    <div className="one_container">
      <div className="one_wrapper">
        <div className="one_left">
          <a href="/">El Adobe</a>
          <h1>OUR STORY</h1>
          <p>
            We invite you to visit us soon and enjoy the most delicious Mexican
            food in Reno! Made from authentic family recipes handed down through
            3 generations. Only the choicest meats and freshest vegetables,
            delivered daily, find their way into our Cocina (kitchen).
          </p>
          <button>Read More</button>
        </div>
        <div className="one_right">
          <img className="one_right_image" src={one_img_1} alt="" />
          <img src={one_img_2} className="one_right_image" alt="" />
        </div>
        {/* <button className="bottom_btn">Read More</button> */}
      </div>
    </div>
  );
};

export default One;
