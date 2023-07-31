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
  desktopGrayClassName: any;
  maskGroupClassName: any;
  maskGroup: string;
  topSpeakerCamClassName: any;
  rectangleClassName: any;
  ellipseClassName: any;
  ellipseClassNameOverride: any;
}

export const DesktopMockup = ({
  color,
  className,
  desktopGrayClassName,
  maskGroupClassName,
  maskGroup = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-7.png",
  topSpeakerCamClassName,
  rectangleClassName,
  ellipseClassName,
  ellipseClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className={`desktop-mockup color-5-${color} ${className}`}>
      <div className={`desktop-gray ${desktopGrayClassName}`}>
        <img
          className={`mask-group ${maskGroupClassName}`}
          alt="Mask group"
          src={
            color === "white"
              ? maskGroup
              : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-8.png"
          }
        />
        <div className={`top-speaker-cam ${topSpeakerCamClassName}`}>
          <div className={`rectangle-7 ${rectangleClassName}`} />
          <div className={`ellipse-12 ${ellipseClassName}`} />
          <div className={`ellipse-13 ${ellipseClassNameOverride}`} />
        </div>
      </div>
    </div>
  );
};

DesktopMockup.propTypes = {
  color: PropTypes.oneOf(["black", "white"]),
  maskGroup: PropTypes.string,
};
