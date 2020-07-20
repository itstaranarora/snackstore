import React, { useRef } from "react";
import "./Listing.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Listing({ title, grid }) {
  const leftArrow = useRef(null);
  const rightArrow = useRef(null);

  const handleClassChange = (direction) => {
    if (direction === "right") {
      rightArrow.current.classList.remove("listing__darker");
      leftArrow.current.classList.add("listing__darker");
    } else if (direction === "left") {
      leftArrow.current.classList.remove("listing__darker");
      rightArrow.current.classList.add("listing__darker");
    }
  };

  return (
    <div className="listing__container">
      <div className="listing__header">
        <div className="listing__title">
          <h2>{title}</h2>
        </div>
        <div className="listing_viewOptions">
          <span
            ref={leftArrow}
            onClick={(e) => {
              handleClassChange("left");
              grid.current.scrollTo({
                left: 0,
                behavior: "smooth",
              });
            }}
            className="listing__arrow left"
          >
            <ArrowBackIcon />
          </span>
          <span
            ref={rightArrow}
            onClick={(e) => {
              handleClassChange("right");
              grid.current.scrollTo({
                left: grid.current.offsetWidth,
                behavior: "smooth",
              });
            }}
            className="listing__arrow right listing__darker"
          >
            <ArrowForwardIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Listing;
