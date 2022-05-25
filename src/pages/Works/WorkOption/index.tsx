import React from "react";
import { Link } from "react-router-dom";
import "../Works.scss";

const WorkOption = ({
  imageURL,
  backgroundClassName,
  headerClssName,
  title,
}) => {
  console.log(imageURL);
  return (
    <Link
      to="/"
      className={backgroundClassName}
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
   
        <span className={headerClssName}>
          <p>{title}</p>
        </span>
      
    </Link>
  );
};
export default WorkOption;
