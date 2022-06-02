import React, { useEffect, useState, Children, cloneElement } from "react";
import "./Galery.scss";
import { Link } from "react-router-dom";
import Routers from "../../routers";

const Slider = ({ children, startIndex, active, setActive, title }: any) => {
  const [slides, setSlides] = useState([]);
  const [offset, setOffset] = useState(0);

  const SLIDE_WIDTH = 100;

  useEffect(() => {
    console.log(offset);
    setOffset(startIndex && -SLIDE_WIDTH * startIndex);
    setSlides(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${SLIDE_WIDTH}%`,
            maxWidth: `${SLIDE_WIDTH}%`,
          },
        });
      })
    );
  }, [children, startIndex]);

  const handleLeftArrowClick = (e) => {
    e.stopPropagation();
    setOffset((currentOffset) => {
      const newOffset = currentOffset + SLIDE_WIDTH;
      console.log(active);
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = (e) => {
    e.stopPropagation();
    setOffset((currentOffset) => {
      const newOffset = currentOffset - SLIDE_WIDTH;

      const maxOffset = -(SLIDE_WIDTH * (slides.length - 1));
      console.log(active);
      return Math.max(maxOffset, newOffset);
    });
  };
  return (
    <div
      className={active ? "slider-wrapper" : "slider-closed"}
      onClick={() => setActive(false)}
    >
      <div className="slider-container">
        <span className="slider-title">{title}</span>
        <div className="slider-content">
          <div className="arrow arrow-l" onClick={handleLeftArrowClick}>
            {LEFT_ARROW}
          </div>

          <div className="slider-window" onClick={(e) => e.stopPropagation()}>
            <div
              className="slider-all-slides"
              style={{
                transform: `translateX(${offset}%)`,
              }}
            >
              {slides}
            </div>
          </div>

          <div className="arrow arrow-r" onClick={handleRightArrowClick}>
            {RIGHT_ARROW}
          </div>
        </div>
        <span className="slider-calculation">
          ви можете розрахувати вартість розробки кухні
          <Link to={Routers.KITCHENCALC} className="slider-calculation-link">
            натисніть сюди
          </Link>
        </span>
      </div>
    </div>
  );
};

const LEFT_ARROW = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="76"
    height="76"
    viewBox="0 0 76 76"
    fill="none"
  >
    <circle
      r="36.1335"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 37.6335 37.6335)"
      stroke="#865C53"
      strokeWidth="3"
    />
    <mask id="path-2-inside-1_257_13" fill="white">
      <path d="M42.9355 25.3306L26.9355 38.5959L42.9355 51.3306" />
    </mask>
    <path
      d="M41.0208 23.0211C42.2963 21.9636 44.1875 22.1403 45.245 23.4158C46.3025 24.6913 46.1258 26.5826 44.8503 27.6401L41.0208 23.0211ZM26.9355 38.5959L25.0673 40.9431L25.0208 36.2864L26.9355 38.5959ZM44.8038 48.9833C46.1001 50.0151 46.3146 51.9024 45.2828 53.1988C44.251 54.4952 42.3637 54.7096 41.0673 53.6778L44.8038 48.9833ZM44.8503 27.6401L28.8503 40.9054L25.0208 36.2864L41.0208 23.0211L44.8503 27.6401ZM28.8038 36.2486L44.8038 48.9833L41.0673 53.6778L25.0673 40.9431L28.8038 36.2486Z"
      fill="#956860"
      mask="url(#path-2-inside-1_257_13)"
    />
  </svg>
);

const RIGHT_ARROW = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="76"
    height="76"
    viewBox="0 0 76 76"
    fill="none"
  >
    <circle
      cx="38.3021"
      cy="37.6335"
      r="36.1335"
      transform="rotate(90 38.3021 37.6335)"
      stroke="#865C53"
      strokeWidth="3"
    />
    <mask id="path-2-inside-1_257_15" fill="white">
      <path d="M33 25.3306L49 38.5959L33 51.3306" />
    </mask>
    <path
      d="M34.9148 23.0211C33.6393 21.9636 31.748 22.1403 30.6905 23.4158C29.633 24.6913 29.8098 26.5826 31.0852 27.6401L34.9148 23.0211ZM49 38.5959L50.8682 40.9431L50.9148 36.2864L49 38.5959ZM31.1318 48.9833C29.8354 50.0151 29.6209 51.9024 30.6527 53.1988C31.6845 54.4952 33.5719 54.7096 34.8682 53.6778L31.1318 48.9833ZM31.0852 27.6401L47.0852 40.9054L50.9148 36.2864L34.9148 23.0211L31.0852 27.6401ZM47.1318 36.2486L31.1318 48.9833L34.8682 53.6778L50.8682 40.9431L47.1318 36.2486Z"
      fill="#956860"
      mask="url(#path-2-inside-1_257_15)"
    />
  </svg>
);
export default Slider;
