/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  starIcon: string;
}

export const StarIcon = ({
  className,
  starIcon = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
}: Props): JSX.Element => {
  return <img className={`star-icon ${className}`} alt="Star icon" src={starIcon} />;
};

StarIcon.propTypes = {
  starIcon: PropTypes.string,
};
