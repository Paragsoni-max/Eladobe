import React from "react";
import "../styling/about.css";
import transport1 from "../../files/transport1.jpg";
import transport from "../../files/transport.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="left">
        <div className="top">
            <img src={transport} alt="" className="up-img" style={{width:"100%",height:"300px",padding:"10px"}} />
          <h1>ABOUT US..</h1>
          <p>
            Aryan Packers and Movers is an Indore based moving organization that
            offers professional packing services, professional moving services
            for your packing and moving requirements throughout India. We take
            pride in offering great packing and moving services at reasonable
            prices. All our employees are experienced, courteous and careful.
          </p>
          <p>
            The Moving and Relocating or house shifting Service is start with
            searching the best Packers and Movers Indore. through various modes
            such as directories, search engine Google, or getting referred by
            friends. Aryan Packers and Movers always believe in providing the
            best services in the industry, so that it will be referred by
            clients to other play clients through word of mouth publicity.
          </p>
          <p>
            Packers and Movers in Indore, The Market leaders in served segments
            including House hold shifting, Industrial shifting and office
            relocation, Transporters and Logistics broker, marketing service
            providers for logistics industries.
          </p>
        </div>
        <div className="bottom">
          <h1>OUR VISION..</h1>
          <p>
            Aryan Group is amongst India’s most enduring and admired service
            providers. Headquartered in Indore, the major companies of the Group
            include Aryan Packers and movers, Aryan Indore Guwahati Transport
            company, Aryan Kart and Parcels, Aryan Fashion, Aryan Cargo and Allied
            services.
          </p>
          <p>
            Aryan is also deals in agro-business we tie-up with Nature & Nature
            Marketing Co. and Genetech INDIA.
          </p>
          <p>
            Market leaders in served segments including House hold shifting,
            Industrial shifting and office relocation, Transporters and
            Logistics broker, marketing service providers for Textile
            industries, Marketing for Bio Pesticides and PGRs, PGPs, and seeds
          </p>
        </div>
      </div>
      <div className="right">
        <img
          src={transport1}
          alt=""
          style={{
            width: "100%",
            height: "300px",
            padding: "5px",
            margin: "5px 0",
            borderRadious: "10px",
          }}
        />
        <img
          src={transport}
          alt=""
          style={{
            width: "100%",
            height: "300px",
            padding: "5px",
            marginTop: "5px",
            borderRadious: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default About;
