/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MemberCard } from "../MemberCard";
import "./style.css";

interface Props {
  screen: "tablet" | "desktop" | "tablet-horizontal" | "mobile";
  variant: "two" | "one";
  className: any;
}

export const Team = ({ screen, variant, className }: Props): JSX.Element => {
  return (
    <div className={`team screen-80-${screen} variant-10-${variant} ${className}`}>
      <div className="headline-subhead-4">
        <div className="meet-our-team">Meet our team</div>
        <p className="get-to-know-the">
          Get to know the faces behind the scenes and learn about the values that drive us.
        </p>
      </div>
      <div className="cards-row-4">
        <MemberCard
          className={`${["mobile", "tablet-horizontal"].includes(screen) && "class-95"} ${
            screen === "tablet" && "class-96"
          }`}
          img={
            screen === "desktop" && variant === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1-10@2x.png"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1-7@2x.png"
              : undefined
          }
          johnDoeClassName={`${variant === "two" && "class-93"}`}
          johnDoeClassNameOverride={`${screen === "desktop" && variant === "one" && "class-94"}`}
          linkedinClassName={`${variant === "two" && screen === "mobile" && "class-98"}`}
          profileImage={
            variant === "two" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-2-16@2x.png"
              : screen === "tablet-horizontal" || (screen === "desktop" && variant === "two")
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-2-13@2x.png"
              : screen === "tablet" && variant === "two"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-2-10@2x.png"
              : undefined
          }
          profileImage1={
            variant === "one" && screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1-4@2x.png"
              : undefined
          }
          profileImageClassNameOverride={`${variant === "one" && "class-97"}`}
          size={screen === "tablet" ? "small" : "big"}
          socialIconsImg={
            screen === "desktop" && variant === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-36.svg"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-27.svg"
              : variant === "one" && screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-18.svg"
              : undefined
          }
          socialIconsTypeCircleStyle={
            screen === "desktop" && variant === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-twitter.svg"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-28.svg"
              : variant === "one" && screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-19.svg"
              : undefined
          }
          socialIconsTypeCircleStyle1={
            screen === "desktop" && variant === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-35.svg"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-26.svg"
              : variant === "one" && screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-17.svg"
              : undefined
          }
          text="Sarah K."
          text1={variant === "two" ? "Lead Designer" : undefined}
          text2={
            variant === "two"
              ? "With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life."
              : undefined
          }
          text3={variant === "one" ? "UX Designer" : undefined}
          twitterClassName={`${variant === "two" && screen === "mobile" && "class-92"}`}
          variant={variant === "two" ? "two" : "one"}
        />
        <MemberCard
          className={`${["mobile", "tablet-horizontal"].includes(screen) && "class-95"} ${
            screen === "tablet" && "class-96"
          }`}
          img={
            screen === "desktop" && variant === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1-9@2x.png"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1-6@2x.png"
              : undefined
          }
          linkedinClassName={`${variant === "two" && screen === "mobile" && "class-98"}`}
          profileImage={
            variant === "two" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-2-15@2x.png"
              : screen === "tablet-horizontal" ||
                (screen === "desktop" && variant === "two") ||
                (screen === "tablet" && variant === "two")
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-2-12@2x.png"
              : undefined
          }
          profileImage1={
            variant === "one" && screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1-3@2x.png"
              : undefined
          }
          profileImageClassName={`${variant === "two" && "class-97"}`}
          profileImageClassNameOverride={`${variant === "one" && "class-97"}`}
          size={screen === "tablet" ? "small" : "big"}
          socialIconsImg={
            screen === "desktop" && variant === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-36.svg"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-24.svg"
              : variant === "one" && screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-15.svg"
              : undefined
          }
          socialIconsTypeCircleStyle={
            variant === "one" && ["desktop", "tablet"].includes(screen)
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-twitter.svg"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-25.svg"
              : undefined
          }
          socialIconsTypeCircleStyle1={
            screen === "desktop" && variant === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-35.svg"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-23.svg"
              : variant === "one" && screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-14.svg"
              : undefined
          }
          text="Michael L."
          text1={variant === "two" ? "Product Designer" : undefined}
          text2={
            variant === "two"
              ? "Michael got a sharp eye for detail and the ability to turn any boring interface into a work of art."
              : undefined
          }
          text3={variant === "one" ? "Lead Designer" : undefined}
          twitterClassName={`${variant === "two" && screen === "mobile" && "class-92"}`}
          variant={variant === "two" ? "two" : "one"}
        />
        <MemberCard
          className={`${["mobile", "tablet-horizontal"].includes(screen) && "class-95"} ${
            screen === "tablet" && "class-96"
          }`}
          img={
            screen === "desktop" && variant === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1-8@2x.png"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1-5@2x.png"
              : undefined
          }
          johnDoeClassName={`${variant === "two" && "class-93"}`}
          johnDoeClassNameOverride={`${screen === "desktop" && variant === "one" && "class-94"}`}
          linkedinClassName={`${variant === "two" && screen === "mobile" && "class-98"}`}
          profileImage={
            variant === "two" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-2-14@2x.png"
              : screen === "tablet-horizontal" || (screen === "desktop" && variant === "two")
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-2-11@2x.png"
              : screen === "tablet" && variant === "two"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-2-8@2x.png"
              : undefined
          }
          profileImage1={
            variant === "one" && screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1-2@2x.png"
              : undefined
          }
          size={screen === "tablet" ? "small" : "big"}
          socialIconsImg={
            screen === "desktop" && variant === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-36.svg"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-24.svg"
              : variant === "one" && screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-12.svg"
              : undefined
          }
          socialIconsTypeCircleStyle={
            screen === "desktop" && variant === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-twitter.svg"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-22.svg"
              : variant === "one" && screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-13.svg"
              : undefined
          }
          socialIconsTypeCircleStyle1={
            screen === "desktop" && variant === "one"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-35.svg"
              : variant === "one" && screen === "mobile"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-23.svg"
              : variant === "one" && screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-11.svg"
              : undefined
          }
          text="Lauren M."
          text1={variant === "two" ? "UX Designer" : undefined}
          text2={
            variant === "two"
              ? "Lauren is the mastermind behind all the seamless user experiences you love. She&#39;s a wizard at making things intuitive."
              : undefined
          }
          text3={variant === "one" ? "Product Designer" : undefined}
          twitterClassName={`${variant === "two" && screen === "mobile" && "class-92"}`}
          variant={variant === "two" ? "two" : "one"}
        />
      </div>
    </div>
  );
};

Team.propTypes = {
  screen: PropTypes.oneOf(["tablet", "desktop", "tablet-horizontal", "mobile"]),
  variant: PropTypes.oneOf(["two", "one"]),
};
