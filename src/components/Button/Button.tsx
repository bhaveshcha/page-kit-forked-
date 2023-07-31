/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLeft } from "../ArrowLeft";
import { ArrowRight } from "../ArrowRight";
import "./style.css";

interface Props {
  hasRightIcon: boolean;
  text: string;
  hasLeftIcon: boolean;
  type: "primary" | "secondary" | "secondary-color" | "tertiary";
  className: any;
  override: JSX.Element;
  labelClassName: any;
  override1: JSX.Element;
}

export const Button = ({
  hasRightIcon = true,
  text = "Get Started",
  hasLeftIcon = true,
  type,
  className,
  override = <ArrowRight className="arrow-right-instance" size="twenty" />,
  labelClassName,
  override1 = <ArrowLeft className="arrow-left-instance" size="twenty" />,
}: Props): JSX.Element => {
  return (
    <a
      className={`button ${type} ${className}`}
      href="https://www.animaapp.com/?utm_source=figma-samples&amp;utm_campaign=figma-lp-ui-kit&amp;utm_medium=figma-samples"
      rel="noopener noreferrer"
      target="_blank"
    >
      {hasLeftIcon && <>{override}</>}

      <div className={`label ${labelClassName}`}>{text}</div>
      {hasRightIcon && <>{override1}</>}
    </a>
  );
};

Button.propTypes = {
  hasRightIcon: PropTypes.bool,
  text: PropTypes.string,
  hasLeftIcon: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary", "secondary-color", "tertiary"]),
};
