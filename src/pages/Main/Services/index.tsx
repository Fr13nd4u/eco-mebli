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
            <div className="services-item_hovered">
              <h4 className="services-item_hovered-title">світло</h4>
            </div>
          </Link>
          <Link
            to="/"
            className="services-item"
            style={{
              backgroundImage: `url(${services_2})`,
            }}
          >
            <div className="services-item_hovered">
              <h4 className="services-item_hovered-title">підстінники</h4>
            </div>
          </Link>
          <Link
            to="/"
            className="services-item"
            style={{
              backgroundImage: `url(${services_3})`,
            }}
          >
            <div className="services-item_hovered">
              <h4 className="services-item_hovered-title">стільці</h4>
            </div>
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
            <div className="services-item_hovered">
              <h4 className="services-item_hovered-title">двері</h4>
              <Link to="/" className="services-item_hovered-icon">
                {calculatorSvg}
              </Link>
            </div>
          </Link>
          <Link
            to="/"
            className="services-item"
            style={{
              backgroundImage: `url(${services_5})`,
            }}
          >
            <div className="services-item_hovered">
              <h4 className="services-item_hovered-title">столи</h4>
            </div>
          </Link>
          <Link
            to="/"
            className="services-item"
            style={{
              backgroundImage: `url(${services_6})`,
            }}
          >
            <div className="services-item_hovered">
              <h4 className="services-item_hovered-title">сходи</h4>
              <Link to="/" className="services-item_hovered-icon">
                {calculatorSvg}
              </Link>
            </div>
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

const calculatorSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
  >
    <path
      d="M1.0835 7.25004C1.0835 5.61454 1.7332 4.04602 2.88967 2.88955C4.04615 1.73307 5.61466 1.08337 7.25016 1.08337H25.7502C27.3857 1.08337 28.9542 1.73307 30.1107 2.88955C31.2671 4.04602 31.9168 5.61454 31.9168 7.25004V14.9584H1.0835V7.25004Z"
      stroke="#343434"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.521 23.4375H21.896"
      stroke="#343434"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.5002 14.9584H31.9168V25.75C31.9168 27.3855 31.2671 28.9541 30.1107 30.1105C28.9542 31.267 27.3857 31.9167 25.7502 31.9167H16.5002V14.9584ZM16.5002 14.9584H1.0835V25.75C1.0835 27.3855 1.7332 28.9541 2.88967 30.1105C4.04615 31.267 5.61466 31.9167 7.25016 31.9167H16.5002V14.9584Z"
      stroke="#343434"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.79199 23.4375L6.47949 21.125M6.47949 25.75L8.79199 23.4375L6.47949 25.75ZM8.79199 23.4375L11.1045 21.125L8.79199 23.4375ZM8.79199 23.4375L11.1045 25.75L8.79199 23.4375Z"
      stroke="#343434"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Services;
