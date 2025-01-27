import React from "react";
import "./Greetings.scss";
import Image1 from "../../assets/images/Flow.svg";
import Image2 from "../../assets/images/Moto.webp";
import Image3 from "../../assets/images/Logo2.svg";
import Image4 from "../../assets/images/Arrow.svg";
import Fade from "react-reveal/Fade";

function Greetings() {
  return (
    <div className="greetings section-margin" id="greetings">
      <Fade left>
        <div className="greeting-left col-lg-6 col-md-12">
          <img src={Image1} className="float" alt="" />
          <div className="content">
            <h3>Your Vision,</h3>
            <h4>Our Kreation</h4>
            <p>
              An institution that caters to all your software <br></br>needs
              with their touch of Koding.
            </p>
            <img src={Image2} alt="Vision. Kreate. Inspire" />
            <div className="arrow">
              <a href="#aboutus">
                <img src={Image4} alt="scroll to about us page" />
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <div className="greeting-right col-lg-6 col-md-12">
        <Fade right>
          <div className="company-logo">
            <img src={Image3} alt="koders logo" />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Greetings;
