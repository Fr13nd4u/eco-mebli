
import "./Galery.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import kitchen_images from "../Works/kitchen_images.json";

import Slider from "./Slider";
const Galery = () => {
  const location = useLocation();
  const [indexForSlider, setIndexForSlider] = useState(0);
  const[active,setActive]=useState(false)
  const data = location.state;
  useEffect(() => {
    console.log(location.state);
  }, []);
  const sliderShower = (index) => {
    setIndexForSlider(index);
    setActive(true)
  };
  return (
    <section
  
    >
      <div className="backgroundImg">
        <div className="backgroundImg-offer">
          <h2 className="backgroundImg-offer-text">{data.title}</h2>
          <span className="backgroundImg-offer_bottom">
            <p>для розрахування вартості</p>
            <Link to="/">
              <p className="backgroundImg-offer_button">натисніть сюди</p>
            </Link>
          </span>
        </div>
      </div>
      <div className="container" style={{height:"100%"}}>
        <div className="offers offers-top">
          {kitchen_images.map(
            (image, index) =>
              index <= kitchen_images.length - 4 && (
                <div
                  key={index}
                  className="offers-item"
                  style={{
                    backgroundImage: `url(${image.image})`,
                  }}
                  onClick={() => sliderShower(index)}
                ></div>
              )
          )}
        </div>
        <div className="offers offers-bottom">
          {kitchen_images.map(
            (image, index) =>
              index > kitchen_images.length - 4 && (
                <div
                  key={index}
                  className="offers-item"
                  style={{
                    backgroundImage: `url(${image.image})`,
                  }}
                  onClick={() => sliderShower(index)}
                ></div>
              )
          )}
        </div>
      </div>
      <Slider startIndex={indexForSlider} setIndexForSlider={setIndexForSlider} active ={active} setActive={setActive} title={data.title}>
        {kitchen_images.map((imag) => (
          <div className="slide">
            <img src={imag.image} />
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default Galery;
