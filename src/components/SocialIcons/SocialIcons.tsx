/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  type: "circle" | "default";
  style: "primary" | "white" | "color" | "secondary";
  social: "facebook" | "twitter" | "dribbble" | "behance" | "linked-in" | "instagram" | "you-tube" | "github";
  typeCircleStyleClassName: any;
  typeCircleStyle: string;
  img: string;
  typeCircleStyle1: string;
  typeCircleStyle2: string;
  typeCircleStyle3: string;
  typeCircleStyle4: string;
  typeCircleStyle5: string;
  typeCircleStyle6: string;
  href: string;
}

export const SocialIcons = ({
  type,
  style,
  social,
  typeCircleStyleClassName,
  typeCircleStyle = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-white--social-youtube.svg",
  img = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-white--social-instagram.svg",
  typeCircleStyle1 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-46.svg",
  typeCircleStyle2 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-twitter.svg",
  typeCircleStyle3 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-dribbble.svg",
  typeCircleStyle4 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-instagram.svg",
  typeCircleStyle5 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-white--social-dribbble.svg",
  typeCircleStyle6 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-42.svg",
  href,
}: Props): JSX.Element => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <img
        className={`social-icons style-${style} type-${type} ${social} ${typeCircleStyleClassName}`}
        alt="Type circle style"
        src={
          social === "twitter" && type === "circle" && style === "color"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-color--social-twitter.svg"
            : social === "twitter" && type === "circle" && style === "secondary"
            ? typeCircleStyle2
            : style === "white" && type === "circle" && social === "twitter"
            ? typeCircleStyle6
            : social === "linked-in" && type === "circle" && style === "primary"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-primary--social-linkedin.svg"
            : social === "linked-in" && type === "circle" && style === "color"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-color--social-linkedin.svg"
            : social === "linked-in" && type === "circle" && style === "secondary"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-linkedin.svg"
            : style === "white" && type === "circle" && social === "linked-in"
            ? typeCircleStyle1
            : type === "circle" && style === "primary" && social === "facebook"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-primary--social-facebook.svg"
            : type === "circle" && style === "secondary" && social === "facebook"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-facebook.svg"
            : style === "white" && type === "circle" && social === "facebook"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-white--social-facebook.svg"
            : social === "dribbble" && type === "circle" && style === "primary"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-primary--social-dribbble.svg"
            : social === "dribbble" && type === "circle" && style === "color"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-color--social-dribbble.svg"
            : social === "dribbble" && type === "circle" && style === "secondary"
            ? typeCircleStyle3
            : style === "white" && type === "circle" && social === "dribbble"
            ? typeCircleStyle5
            : type === "circle" && social === "instagram" && style === "primary"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-primary--social-instagram.svg"
            : type === "circle" && social === "instagram" && style === "secondary"
            ? typeCircleStyle4
            : style === "white" && type === "circle" && social === "instagram"
            ? img
            : type === "circle" && style === "primary" && social === "you-tube"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-primary--social-youtube.svg"
            : type === "circle" && style === "color" && social === "you-tube"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-color--social-youtube.svg"
            : type === "circle" && style === "secondary" && social === "you-tube"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-youtube.svg"
            : style === "white" && type === "circle" && social === "you-tube"
            ? typeCircleStyle
            : type === "circle" && style === "primary" && social === "behance"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-primary--social-behance.svg"
            : type === "circle" && style === "color" && social === "behance"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-color--social-behance.svg"
            : type === "circle" && style === "secondary" && social === "behance"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-behance.svg"
            : style === "white" && type === "circle" && social === "behance"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-white--social-behance.svg"
            : type === "circle" && style === "primary" && social === "github"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-primary--social-github.svg"
            : type === "circle" && style === "color" && social === "github"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-color--social-github.svg"
            : type === "circle" && style === "secondary" && social === "github"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-github.svg"
            : style === "white" && type === "circle" && social === "github"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-47.svg"
            : type === "circle" && social === "instagram" && style === "color"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-color--social-instagram.svg"
            : type === "circle" && style === "color" && social === "facebook"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-color--social-facebook.svg"
            : social === "dribbble" && style === "secondary" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-secondary--social-dribbble.svg"
            : social === "dribbble" && style === "color" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-color--social-dribbble.svg"
            : social === "dribbble" && style === "primary" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-primary--social-dribbble.svg"
            : style === "white" && social === "dribbble" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-white--social-dribbble.svg"
            : style === "secondary" && type === "default" && social === "behance"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-secondary--social-behance.svg"
            : style === "color" && type === "default" && social === "behance"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-color--social-behance.svg"
            : style === "primary" && type === "default" && social === "behance"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-primary--social-behance.svg"
            : style === "white" && type === "default" && social === "behance"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-white--social-behance.svg"
            : social === "linked-in" && style === "secondary" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-secondary--social-linkedin.svg"
            : social === "linked-in" && style === "color" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-color--social-linkedin.svg"
            : social === "linked-in" && style === "primary" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-primary--social-linkedin.svg"
            : style === "white" && type === "default" && social === "linked-in"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-white--social-linkedin.svg"
            : social === "instagram" && style === "secondary" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-secondary--social-instagram.svg"
            : social === "instagram" && style === "color" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-color--social-instagram.svg"
            : social === "instagram" && style === "primary" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-primary--social-instagram.svg"
            : style === "white" && social === "instagram" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-white--social-instagram.svg"
            : social === "twitter" && style === "secondary" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-secondary--social-twitter.svg"
            : social === "twitter" && style === "color" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-color--social-twitter.svg"
            : social === "twitter" && style === "primary" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-primary--social-twitter.svg"
            : style === "white" && social === "twitter" && type === "default"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-white--social-twitter.svg"
            : style === "secondary" && type === "default" && social === "facebook"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-secondary--social-facebook.svg"
            : style === "color" && type === "default" && social === "facebook"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-color--social-facebook.svg"
            : style === "primary" && type === "default" && social === "facebook"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-primary--social-facebook.svg"
            : style === "white" && type === "default" && social === "facebook"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-white--social-facebook.svg"
            : type === "default" && style === "secondary" && social === "github"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-secondary--social-github.svg"
            : type === "default" && style === "color" && social === "github"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-color--social-github.svg"
            : type === "default" && style === "primary" && social === "github"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-primary--social-github.svg"
            : style === "white" && type === "default" && social === "github"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-white--social-github.svg"
            : style === "secondary" && type === "default" && social === "you-tube"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-secondary--social-youtube.svg"
            : style === "color" && type === "default" && social === "you-tube"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-color--social-youtube.svg"
            : style === "primary" && type === "default" && social === "you-tube"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-primary--social-youtube.svg"
            : style === "white" && type === "default" && social === "you-tube"
            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-default--style-white--social-youtube.svg"
            : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-primary--social-twitter.svg"
        }
      />
    </a>
  );
};

SocialIcons.propTypes = {
  type: PropTypes.oneOf(["circle", "default"]),
  style: PropTypes.oneOf(["primary", "white", "color", "secondary"]),
  social: PropTypes.oneOf([
    "facebook",
    "twitter",
    "dribbble",
    "behance",
    "linked-in",
    "instagram",
    "you-tube",
    "github",
  ]),
  typeCircleStyle: PropTypes.string,
  img: PropTypes.string,
  typeCircleStyle1: PropTypes.string,
  typeCircleStyle2: PropTypes.string,
  typeCircleStyle3: PropTypes.string,
  typeCircleStyle4: PropTypes.string,
  typeCircleStyle5: PropTypes.string,
  typeCircleStyle6: PropTypes.string,
  href: PropTypes.string,
};
