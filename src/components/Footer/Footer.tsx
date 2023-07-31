/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { SocialIcons } from "../SocialIcons";
import "./style.css";

interface Props {
  screen: "desktop" | "tablet" | "mobile";
  className: any;
  elementAnimaLandingClassName: any;
  text: string;
  socialIconsTypeCircleStyle: string;
  socialIconsImg: string;
  socialIconsTypeCircleStyle1: string;
  href: string;
  href1: string;
  href2: string;
  href3: string;
}

export const Footer = ({
  screen,
  className,
  elementAnimaLandingClassName,
  text = "© 2023 Anima Landing Page Ui Kit.",
  socialIconsTypeCircleStyle = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-white--social-youtube.svg",
  socialIconsImg = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-48.svg",
  socialIconsTypeCircleStyle1 = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-46.svg",
  href,
  href1,
  href2,
  href3,
}: Props): JSX.Element => {
  return (
    <div className={`footer screen-151-${screen} ${className}`}>
      {["desktop", "tablet"].includes(screen) && (
        <>
          <p className={`element-anima-landing ${elementAnimaLandingClassName}`}>{text}</p>
          <div className="social-links-2">
            <SocialIcons
              href={href}
              img={
                screen === "tablet"
                  ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-45.svg"
                  : undefined
              }
              social={screen === "tablet" ? "instagram" : "you-tube"}
              style="white"
              type="circle"
              typeCircleStyle={socialIconsTypeCircleStyle}
              typeCircleStyleClassName="social-icons-2"
            />
            <SocialIcons
              href={href1}
              img={socialIconsImg}
              social={screen === "tablet" ? "dribbble" : "instagram"}
              style="white"
              type="circle"
              typeCircleStyle5={
                screen === "tablet"
                  ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-44.svg"
                  : undefined
              }
              typeCircleStyleClassName="social-icons-2"
            />
            <SocialIcons
              href={href2}
              social="github"
              style="white"
              type="circle"
              typeCircleStyleClassName="social-icons-2"
            />
            <SocialIcons
              href={href3}
              social={screen === "tablet" ? "twitter" : "linked-in"}
              style="white"
              type="circle"
              typeCircleStyle1={socialIconsTypeCircleStyle1}
              typeCircleStyleClassName="social-icons-2"
            />
          </div>
        </>
      )}

      {screen === "mobile" && (
        <>
          <div className={`social-links-2 ${elementAnimaLandingClassName}`}>
            <SocialIcons
              img="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-41.svg"
              social="instagram"
              style="white"
              type="circle"
              typeCircleStyleClassName="social-icons-2"
            />
            <SocialIcons
              social="dribbble"
              style="white"
              type="circle"
              typeCircleStyle5="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-40.svg"
              typeCircleStyleClassName="social-icons-2"
            />
            <SocialIcons social="github" style="white" type="circle" typeCircleStyleClassName="social-icons-2" />
            <SocialIcons
              social="twitter"
              style="white"
              type="circle"
              typeCircleStyle6="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-38.svg"
              typeCircleStyleClassName="social-icons-2"
            />
          </div>
          <p className="element-anima-landing-2">{text}</p>
        </>
      )}
    </div>
  );
};

Footer.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  text: PropTypes.string,
  socialIconsTypeCircleStyle: PropTypes.string,
  socialIconsImg: PropTypes.string,
  socialIconsTypeCircleStyle1: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
  href3: PropTypes.string,
};
