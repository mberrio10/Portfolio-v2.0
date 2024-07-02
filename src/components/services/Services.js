import React from "react";
import WebDev from "../../img/web-development.png";
import FrontEnd from "../../img/front-end.png";
import BackEnd from "../../img/back-end.png";
import SoftEng from "../../img/software-engineer.png";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services">
        <div className="service">
          <div className="service-box u-text-center">
            <img
              src={WebDev}
              className="service-box__icon"
              alt="service-icons"
            />
            <h3 className="u-margin-bottom-small">Web Developer</h3>
          </div>
        </div>
        <div className="service">
          <div className="service-box u-text-center">
            <img
              src={FrontEnd}
              className="service-box__icon"
              alt="service-icons"
            />
            <h3 className="u-margin-bottom-small">Front-End Developer</h3>
          </div>
        </div>
        <div className="service">
          <div className="service-box u-text-center">
            <img
              src={BackEnd}
              className="service-box__icon"
              alt="service-icons"
            />
            <h3 className="u-margin-bottom-small">Back-End Developer</h3>
          </div>
        </div>
        <div className="service">
          <div className="service-box u-text-center">
            <img
              src={SoftEng}
              className="service-box__icon"
              alt="service-icons"
            />
            <h3 className="u-margin-bottom-small">Software Engineer</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
