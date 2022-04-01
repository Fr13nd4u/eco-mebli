import React from "react";
import "./Services.scss";

import services_1 from "../../../assets/img/services-1.jpg";
import services_2 from "../../../assets/img/services-2.jpg";
import services_3 from "../../../assets/img/services-3.jpg";
import services_4 from "../../../assets/img/services-4.jpg";
import services_5 from "../../../assets/img/services-5.jpg";
import services_6 from "../../../assets/img/services-6.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="services services-top">
          <Link
            to="/"
            className="services-item"
            style={{
              backgroundImage: `url(${services_1})`,
            }}
          >
            <h4 className="services-item_title">світло</h4>
          </Link>
          <Link
            to="/"
            className="services-item"
            style={{
              backgroundImage: `url(${services_2})`,
            }}
          >
            <h4 className="services-item_title">світло</h4>
          </Link>
          <Link
            to="/"
            className="services-item"
            style={{
              backgroundImage: `url(${services_3})`,
            }}
          >
            <h4 className="services-item_title">світло</h4>
          </Link>
        </div>
        <div className="services services-bottom">
          <Link
            to="/"
            className="services-item"
            style={{
              backgroundImage: `url(${services_4})`,
            }}
          >
            <h4 className="services-item_title">світло</h4>
          </Link>
          <Link
            to="/"
            className="services-item"
            style={{
              backgroundImage: `url(${services_5})`,
            }}
          >
            <h4 className="services-item_title">світло</h4>
          </Link>
          <Link
            to="/"
            className="services-item"
            style={{
              backgroundImage: `url(${services_6})`,
            }}
          >
            <h4 className="services-item_title">світло</h4>
          </Link>
        </div>

        <div className="servicesLinks">
          <Link to="/">
            доставка <br /> та монтаж
          </Link>
          <Link to="/">
            безкоштовна <br /> консультація
          </Link>
          <Link to="/">
            виїзд <br /> на заміри
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
