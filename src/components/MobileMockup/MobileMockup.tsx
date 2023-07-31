/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  color: "black" | "white";
  className: any;
  overlapGroupClassName: any;
  buttonClassName: any;
  buttonClassNameOverride: any;
  divClassName: any;
  divClassNameOverride: any;
  deviceClassName: any;
  insertYourScreenClassName: any;
  topSpeakerClassName: any;
  rectangleClassName: any;
  ellipseClassName: any;
}

export const MobileMockup = ({
  color,
  className,
  overlapGroupClassName,
  buttonClassName,
  buttonClassNameOverride,
  divClassName,
  divClassNameOverride,
  deviceClassName,
  insertYourScreenClassName,
  topSpeakerClassName,
  rectangleClassName,
  ellipseClassName,
}: Props): JSX.Element => {
  return (
    <div className={`mobile-mockup ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className={`button-2 ${color} ${buttonClassName}`} />
        <div className={`button-3 color-${color} ${buttonClassNameOverride}`} />
        <div className={`button-4 color-0-${color} ${divClassName}`} />
        <div className={`button-5 color-1-${color} ${divClassNameOverride}`} />
        <div className={`device color-2-${color} ${deviceClassName}`} />
        <div className={`insert-your-screen color-3-${color} ${insertYourScreenClassName}`} />
        <div className={`top-speaker color-4-${color} ${topSpeakerClassName}`}>
          <div className={`rectangle ${rectangleClassName}`} />
          <div className={`ellipse ${ellipseClassName}`} />
        </div>
      </div>
    </div>
  );
};

MobileMockup.propTypes = {
  color: PropTypes.oneOf(["black", "white"]),
};
