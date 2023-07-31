/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ProjectCard } from "../ProjectCard";
import "./style.css";

interface Props {
  screen: "desktop" | "tablet" | "mobile";
  className: any;
}

export const Projects = ({ screen, className }: Props): JSX.Element => {
  return (
    <div className={`projects screen-74-${screen} ${className}`}>
      <div className="headline-subhead-2">
        <div className="discover-our-latest">Discover our latest work</div>
        <p className="explore-our">
          Explore our portfolio and see the latest and greatest projects that we&#39;ve brought to life.
        </p>
      </div>
      <div className="cards-row-2">
        {["desktop", "tablet"].includes(screen) && (
          <>
            <ProjectCard
              category="Category"
              className={`${screen === "tablet" && "class-84"}`}
              imagePlaceholder={
                screen === "tablet"
                  ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/image-placeholder-1-10@2x.png"
                  : undefined
              }
              projectName="Project Title"
              shortInfo="Short Description"
              size={screen === "tablet" ? "small" : "big"}
            />
            <ProjectCard
              category="Category"
              className={`${screen === "tablet" && "project-card-instance"}`}
              imagePlaceholder={
                screen === "tablet"
                  ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/image-placeholder-1-9@2x.png"
                  : undefined
              }
              projectName="Project Title"
              shortInfo="Short Description"
              size={screen === "tablet" ? "small" : "big"}
            />
            <ProjectCard
              category="Category"
              className={`${screen === "tablet" && "project-card-instance"}`}
              imagePlaceholder={
                screen === "tablet"
                  ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/image-placeholder-1-8@2x.png"
                  : undefined
              }
              projectName="Project Title"
              shortInfo="Short Description"
              size={screen === "tablet" ? "small" : "big"}
            />
          </>
        )}

        {screen === "mobile" && (
          <ProjectCard
            category="Category"
            className="project-card-instance"
            img="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/image-placeholder-1-7@2x.png"
            projectName="Project Title"
            shortDescriptionClassName="project-card-2"
            shortInfo="Short Description"
            size="big"
          />
        )}
      </div>
      {screen === "mobile" && (
        <>
          <div className="project-card-wrapper">
            <ProjectCard
              category="Category"
              className="project-card-instance"
              img="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/image-placeholder-1-7@2x.png"
              projectName="Project Title"
              shortDescriptionClassName="project-card-2"
              shortInfo="Short Description"
              size="big"
            />
          </div>
          <div className="project-card-wrapper">
            <ProjectCard
              category="Category"
              className="project-card-instance"
              img="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/image-placeholder-1-7@2x.png"
              projectName="Project Title"
              shortDescriptionClassName="project-card-2"
              shortInfo="Short Description"
              size="big"
            />
          </div>
        </>
      )}
    </div>
  );
};

Projects.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
};
