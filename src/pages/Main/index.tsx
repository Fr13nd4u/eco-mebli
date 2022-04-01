import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import Services from "./Services";

import item_1 from "../../assets/slides/item-1.png";
import item_2 from "../../assets/slides/item-2.png";
import logo from "../../assets/img/logo.png";

const Main = () => {
  return (
    <>
      <Carousel>
        <div className="slide">
          <div className="container">
            <div className="slide_body">
              <div className="slide_body-circle">
                <img src={logo} alt="logo" />
                {circleSvg}
              </div>
              <div className="slide_body-text">
                <h2>
                  еко <br />
                  <span>меблі</span>
                </h2>
                <h4>під замовлення</h4>
              </div>
              <img src={item_1} alt="" style={{ margin: "-160px 40px 0 0" }} />
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="container">
            <div className="slide_body">
              <div className="slide_body-circle">
                <img src={logo} alt="logo" />
                {circleSvg}
              </div>
              <div className="slide_body-text">
                <h2>
                  у дусі <br />
                  <span>часу</span>
                </h2>
                <h4>
                  індустріальний <br /> стиль
                </h4>
              </div>
              <img src={item_2} alt="" style={{ margin: "0 40px 0 0" }} />
            </div>
          </div>
        </div>
      </Carousel>
      <About />
      <Services />
    </>
  );
};

const circleSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="732"
    height="732"
    viewBox="0 0 732 732"
    fill="none"
  >
    <g filter="url(#filter0_f_175_4)">
      <circle cx="366" cy="366" r="316" fill="#C9AD98" />
    </g>
    <defs>
      <filter
        id="filter0_f_175_4"
        x="0"
        y="0"
        width="732"
        height="732"
        filterUnits="userSpaceOnUse"
        colorInterpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="25"
          result="effect1_foregroundBlur_175_4"
        />
      </filter>
    </defs>
  </svg>
);

export default Main;
