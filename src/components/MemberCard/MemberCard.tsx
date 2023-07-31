/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SocialIcons } from "../SocialIcons";
import "./style.css";

interface Props {
  title: string;
  name: string;
  variant: "two" | "one";
  size: "small" | "big";
  profileImage: string;
  johnDoeClassName: any;
  text: string;
  text1: string;
  text2: string;
  profileImageClassName: any;
  profileImageClassNameOverride: any;
  img: string;
  johnDoeClassNameOverride: any;
  text3: string;
  socialIconsTypeCircleStyle: string;
  socialIconsImg: string;
  socialIconsTypeCircleStyle1: string;
  className: any;
  twitterClassName: any;
  linkedinClassName: any;
  profileImage1: string;
}

export const MemberCard = ({
  title = "CEO & Co-founder",
  name = "Rick Sanchez",
  variant,
  size,
  profileImage = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-2-4@2x.png",
  johnDoeClassName,
  text = "John Doe",
  text1 = "Senior Product Designer",
  text2 = "With over a decade of experience in product design, John brings a wealth of creativity and expertise to the team.",
  profileImageClassName,
  profileImageClassNameOverride,
  img = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1-1@2x.png",
  johnDoeClassNameOverride,
  text3 = "Lead Designer",
  socialIconsTypeCircleStyle = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-10.svg",
  socialIconsImg = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-9.svg",
  socialIconsTypeCircleStyle1 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-8.svg",
  className,
  twitterClassName,
  linkedinClassName,
  profileImage1 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1@2x.png",
}: Props): JSX.Element => {
  return (
    <div className={`member-card variant-9-${variant} size-3-${size} ${className}`}>
      {variant === "one" && (
        <>
          <img
            className={`profile-image ${profileImageClassNameOverride}`}
            alt="Profile image"
            src={size === "small" ? profileImage1 : img}
          />
          <div className="text-4">
            <div className={`john-doe-2 ${johnDoeClassNameOverride}`}>{text}</div>
            <div className="lead-designer">{text3}</div>
          </div>
          <div className="social-links">
            <SocialIcons
              social="twitter"
              style="secondary"
              type="circle"
              typeCircleStyle2={socialIconsTypeCircleStyle}
              typeCircleStyleClassName="social-icons-instance"
            />
            <SocialIcons
              social="dribbble"
              style="secondary"
              type="circle"
              typeCircleStyle3={socialIconsImg}
              typeCircleStyleClassName="social-icons-instance"
            />
            <SocialIcons
              social="instagram"
              style="secondary"
              type="circle"
              typeCircleStyle4={socialIconsTypeCircleStyle1}
              typeCircleStyleClassName="social-icons-instance"
            />
          </div>
        </>
      )}

      {variant === "two" && (
        <>
          <div className={`client-info-item ${profileImageClassNameOverride}`}>
            <img className={`profile-image-2 ${profileImageClassName}`} alt="Profile image" src={profileImage} />
            <div className="person-details-2">
              <div className={`john-doe-3 ${johnDoeClassName}`}>{text}</div>
              <div className="senior-product">{text1}</div>
            </div>
          </div>
          <div className="with-over-a-decade-wrapper">
            <p className="with-over-a-decade">{text2}</p>
          </div>
          <div className="social-link">
            <div className={`twitter-2 ${twitterClassName}`}>Twitter</div>
            <div className="dribbble">Dribbble</div>
            <div className={`linkedin ${linkedinClassName}`}>Linkedin</div>
          </div>
        </>
      )}
    </div>
  );
};

MemberCard.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.oneOf(["two", "one"]),
  size: PropTypes.oneOf(["small", "big"]),
  profileImage: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  img: PropTypes.string,
  text3: PropTypes.string,
  socialIconsTypeCircleStyle: PropTypes.string,
  socialIconsImg: PropTypes.string,
  socialIconsTypeCircleStyle1: PropTypes.string,
  profileImage1: PropTypes.string,
};
