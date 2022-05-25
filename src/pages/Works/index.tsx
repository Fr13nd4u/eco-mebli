import React from "react";
import "./Works.scss";
import WorkOption from "./WorkOption";
import images from "./images.json";
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
              backgroundClassName={"option "}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
