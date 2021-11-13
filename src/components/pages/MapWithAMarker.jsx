import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import map from "../../files/map.png";

const MapWithAMarker = () => {
  const [hov, setHov] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: 22.719568,
    longitude: 75.857727,
    zoom: 15,
    width: "100vw",
    height: "75vh",
  });

  return (
    <>
      <div
        className="up-map"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          height: "200px",
          width: "98vw",
          backgroundColor: "#000000",
          backgroundImage: "linear-gradient(147deg, #000000 0%, #04619f 74%)",
    
          margin:"20px 5px"
        }}
      >
        <h1 style={{fontSize:"25px",color:"white",margin:"20px 0",fontWeight:"700",letterSpacing:"5px"}}>Find Us..</h1>
        <h1 style={{fontSize:"25px",color:"white",fontWeight:"700",letterSpacing:"5px"}}>Or Call - 000000000</h1>
      </div>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          height: "500px",
          margin: "25px 0",
        }}
      >
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={
            "pk.eyJ1IjoicGFyYWdzb25pIiwiYSI6ImNrdm5teWpyMjBoZ2wycHFoc3I5YzIxaHUifQ.88yn6u3F1Om5fsCbDgkWCQ"
          }
          mapStyle={"mapbox://styles/mapbox/dark-v10"}
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          <Marker latitude={22.719568} longitude={75.857727}>
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                setHov(!hov);
              }}
            >
              <img src={map} style={{ width: "30px", height: "30px" }} alt="" />
            </button>
          </Marker>
          {hov ? (
            <Popup
              latitude={22.719568}
              longitude={75.857727}
              onClose={() => {
                setHov(!hov);
              }}
            >
              <div style={{ color: "gray" }}>
                <h2>Aryan</h2>
                <h3>Logistic Packers and Movers</h3>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </>
  );
};

export default MapWithAMarker;
