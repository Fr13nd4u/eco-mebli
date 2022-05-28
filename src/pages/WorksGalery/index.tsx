import Header from "../../components/Header/index";
import "./Galery.scss";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import kitchen_images from "../Works/kitchen_images.json";
const Galery = () => {
  const location = useLocation();
  const data = location.state;
  useEffect(() => {
    console.log(location.state);
  }, []);
  return (
    <section>
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
      <div className="container">
        <div className="offers offers-top">
          {kitchen_images.map((image, index) =>
            index <= kitchen_images.length - 4 ? (
              <div
                key={index}
                className="offers-item"
                style={{
                  backgroundImage: `url(${image.image})`,
                }}
              ></div>
            ) : (
              <></>
            )
          )}
        </div>
        <div className="offers offers-bottom">
          {kitchen_images.map((image, index) =>
            index > kitchen_images.length - 4 ? (
              <div
                key={index}
                className="offers-item"
                style={{
                  backgroundImage: `url(${image.image})`,
                }}
              ></div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </section>
  );
};
export default Galery;
