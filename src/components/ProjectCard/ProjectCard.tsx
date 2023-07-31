/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  category: string;
  shortInfo: string;
  projectName: string;
  size: "small" | "big";
  className: any;
  imagePlaceholder: string;
  img: string;
  shortDescriptionClassName: any;
}

export const ProjectCard = ({
  category = "Category",
  shortInfo = "Short Description",
  projectName = "Project Title",
  size,
  className,
  imagePlaceholder = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/image-placeholder-1-3@2x.png",
  img = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/image-placeholder-1-13@2x.png",
  shortDescriptionClassName,
}: Props): JSX.Element => {
  return (
    <div className={`project-card ${size} ${className}`}>
      <img className="image-placeholder" alt="Image placeholder" src={size === "small" ? imagePlaceholder : img} />
      <div className="text-3">
        <div className="project-title">{projectName}</div>
        <div className={`short-description ${shortDescriptionClassName}`}>{shortInfo}</div>
        <div className="category">{category}</div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  category: PropTypes.string,
  shortInfo: PropTypes.string,
  projectName: PropTypes.string,
  size: PropTypes.oneOf(["small", "big"]),
  imagePlaceholder: PropTypes.string,
  img: PropTypes.string,
};
