import "./two.css";
import { FaWineGlassAlt, FaWineBottle } from "react-icons/fa";

const Two = () => {
  return (
    <div className="two_container">
      <div className="two_left">
        <FaWineGlassAlt size="100px" className="glass" color="whitesmoke" />
        <FaWineBottle size="100px" color="whitesmoke" />
        <FaWineGlassAlt size="100px" className="glass" color="whitesmoke" />
      </div>
      <div className="two_right">
        <a href="/">El Adobe</a>
        <h1> DRINKS TO GO</h1>
        <p>
          Life is like a drink the more you add to it, the better it becomes.
        </p>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
  );
};

export default Two;
