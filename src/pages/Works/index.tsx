import React from "react";
import { Link } from "react-router-dom";

import item1 from "../../assets/works_images/kitchen.png";
import item2 from "../../assets/works_images/bathroom.jpg";
import item3 from "../../assets/works_images/3.jpg";
import item4 from "../../assets/works_images/tables.jpg";
import item5 from "../../assets/works_images/stairs.jpg";
import item6 from "../../assets/works_images/light.jpg";
import item7 from "../../assets/works_images/doors.jpg";
import "./Works.scss";
const Works = () => {
  return (
    <section>
      <div className="works_container">
        <div className="apper_container"></div>
        <p className="apper_container-title">РОБОТИ</p>
        <div className="options_grid">
          <Link
            to="/"
            className="option top_option"
            style={{
              backgroundImage: `url(${item1})`,
            }}
          >
            <div>
              <span className="option_header">
                <p>КУХНІ</p>
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="option else_option"
            style={{
              backgroundImage: `url(${item2})`,
            }}
          >
            <div style={{ position: "relative" }}>
              <span className="option_header">
                <p>ШУХЛЯДКИ</p>
              </span>
            </div>
          </Link>
          <Link
            to="/"
            className="option else_option"
            style={{
              backgroundImage: `url(${item3})`,
            }}
          >
            <div style={{ position: "relative" }}>
              <span className="option_header">
                <p>ШУХЛЯДКИ</p>
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="option else_option"
            style={{
              backgroundImage: `url(${item4})`,
            }}
          >
            <div style={{ position: "relative" }}>
              <span className="option_header">
                <p>Столи</p>
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="option else_option"
            style={{
              backgroundImage: `url(${item5})`,
            }}
          >
            <div style={{ position: "relative" }}>
              <span className="option_header">
                <p>СХОДИ</p>
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="option else_option"
            style={{
              backgroundImage: `url(${item6})`,
            }}
          >
            <div style={{ position: "relative" }}>
              <span className="option_header">
                <p>СХОДИ</p>
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="option else_option"
            style={{
              backgroundImage: `url(${item7})`,
            }}
          >
            <div style={{ position: "relative" }}>
              <span className="option_header">
                <p>СХОДИ</p>
              </span>
            </div>
          </Link>
        </div>

      
      </div>
     
    </section>
  );
};

export default Works;