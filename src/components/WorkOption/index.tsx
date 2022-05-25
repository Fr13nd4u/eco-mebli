import React from "react";
import { Link } from "react-router-dom";
import "./WorkOption.scss";

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
      <div>
        <span className={headerClssName}>
          <p>{title}</p>
        </span>
      </div>
    </Link>
  );
};
export default WorkOption;
