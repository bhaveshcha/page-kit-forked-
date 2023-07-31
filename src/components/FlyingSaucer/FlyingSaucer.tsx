/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  flyingSaucer: string;
}

export const FlyingSaucer = ({
  className,
  flyingSaucer = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/flyingsaucer-1.svg",
}: Props): JSX.Element => {
  return <img className={`flying-saucer ${className}`} alt="Flying saucer" src={flyingSaucer} />;
};

FlyingSaucer.propTypes = {
  flyingSaucer: PropTypes.string,
};
