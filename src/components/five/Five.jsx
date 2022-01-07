import "./five.css"
import third_right from "../../images/third_right.jpg"
const Five = () => {
    return (
        <div className="five_container">
            <img src={third_right} alt="" />
            <div className="five_wrapper">
                <h1>INSIDE DINING, PATIO, </h1>
                <h1>TO-GO, CURBSIDE, FAMILY STYLE AND CATERING ARE ALL AVAILABLE </h1>
                <h1>  CALL -: (775) 327-4422</h1>
                <a href="/">Order Pick-Up and Delivery</a>
            </div>
            <img src={third_right} alt="" />
        </div>
    )
}

export default Five
