/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  size: "twelve" | "sixteen" | "twenty";
  className: any;
}

export const RocketLaunch = ({ size, className }: Props): JSX.Element => {
  return <div className={`rocket-launch ${size} ${className}`} />;
};

RocketLaunch.propTypes = {
  size: PropTypes.oneOf(["twelve", "sixteen", "twenty"]),
};
