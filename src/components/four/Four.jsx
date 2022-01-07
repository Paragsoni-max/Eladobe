import "./four.css";
import gallery1 from "../../images/gallery1.jpg"
import gallery2 from "../../images/gallery2.jpg"
import gallery3 from "../../images/gallery3.jpg"
import gallery4 from "../../images/gallery4.jpg"
import gallery5 from "../../images/gallery5.jpg"
import gallery6 from "../../images/gallery6.jpg"

const Four = () => {
  return (
    <div className="four_container">
      <div className="four_content">
        <h1>OUR GALLERY</h1>
        <p>
          All family size platters comes with beans and rice, chips, salsa &
          sour cream
        </p>
      </div>
      <div className="four_gallery">
        <div className="four_gallery_ic">
          <img src={gallery1} alt="" className="img1"/>
          <img src={gallery2} alt="" className="img2"/>
        </div>
        <div className="four_gallery_ic">
        <img src={gallery3} alt="" className="img2"/>
          <img src={gallery4} alt="" className="img1"/>
        </div>
        <div className="four_gallery_ic">
        <img src={gallery5} alt="" className="img1"/>
          <img src={gallery6} alt="" className="img2"/>
        </div>
      </div>
      <button>View More</button>
    </div>
  );
};

export default Four;
