import React from "react";
import { Link } from "react-router-dom";
import "./Works.scss";
import WorkOption from "../../components/WorkOption";

const images = [
  {
    image: "/assets/works_images/kitchen.png",
    title: "КУХНІ",
  },
  {
    image: "/assets/works_images/bathroom.jpg",
    title: "ШУХЛЯДКИ",
  },
  {
    image: "/assets/works_images/3.jpg",
    title: "ШУХЛЯДКИ",
  },
  {
    image: "/assets/works_images/tables.jpg",
    title: "Столи",
  },
  {
    image: "/assets/works_images/stairs.jpg",
    title: "СХОДИ",
  },
  {
    image: "/assets/works_images/light.jpg",
    title: "СВІТЛО",
  },
  {
    image: "/assets/works_images/doors.jpg",
    title: "ДВЕРІ",
  },
];
const Works = () => {
  return (
    <section>
      <div className="apper_container"></div>
      <div className="container">
      
        <p className="apper_container-title">РОБОТИ</p>
        <div className="options_grid">
          {images.map((item) => (
            <WorkOption
              key={item.image}
              imageURL={item.image}
              headerClssName="option_header"
              backgroundClassName={
                item === images[0] ? "option top_option" : "option else_option"
              }
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
