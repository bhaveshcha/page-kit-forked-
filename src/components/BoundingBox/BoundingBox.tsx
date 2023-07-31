/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  boundingBox: string;
}

export const BoundingBox = ({
  className,
  boundingBox = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/boundingbox-1.svg",
}: Props): JSX.Element => {
  return <img className={`bounding-box ${className}`} alt="Bounding box" src={boundingBox} />;
};

BoundingBox.propTypes = {
  boundingBox: PropTypes.string,
};
