/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowRight } from "../ArrowRight";
import { Button } from "../Button";
import "./style.css";

interface Props {
  variant: "seven" | "two" | "three" | "one" | "four" | "five" | "eight" | "six";
  screen: "desktop" | "tablet" | "mobile";
  variantScreenClassName: any;
  visible: boolean;
  visible1: boolean;
  buttonText: string;
  buttonHasRightIcon: boolean;
  button: JSX.Element;
}

export const Navbar = ({
  variant,
  screen,
  variantScreenClassName,
  visible = true,
  visible1 = true,
  buttonText = "Menu 3",
  buttonHasRightIcon,
  button,
}: Props): JSX.Element => {
  return (
    <>
      {(screen === "desktop" ||
        (screen === "mobile" && variant === "eight") ||
        (screen === "mobile" && variant === "five") ||
        (screen === "mobile" && variant === "four") ||
        (screen === "mobile" && variant === "one") ||
        (screen === "mobile" && variant === "seven") ||
        (screen === "mobile" && variant === "three") ||
        screen === "tablet") && (
        <div className={`navbar variant-screen ${variant} ${screen} ${variantScreenClassName}`}>
          {(screen === "desktop" ||
            (screen === "mobile" && variant === "eight") ||
            (screen === "mobile" && variant === "five") ||
            (screen === "mobile" && variant === "one") ||
            (screen === "mobile" && variant === "seven") ||
            (screen === "tablet" && variant === "four") ||
            (screen === "tablet" && variant === "seven") ||
            (screen === "tablet" && variant === "six") ||
            (screen === "tablet" && variant === "two")) && (
            <div className="logo">
              {((screen === "desktop" && variant === "four") ||
                (screen === "desktop" && variant === "six") ||
                (screen === "desktop" && variant === "two") ||
                variant === "five" ||
                variant === "one" ||
                variant === "three") && (
                <>
                  <img
                    className="television"
                    alt="Television"
                    src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/television-13@2x.png"
                  />
                  <div className="landingpage">
                    <span className="text-wrapper">Landing</span>
                    <span className="span">Page</span>
                  </div>
                </>
              )}

              {((screen === "mobile" && variant === "eight") ||
                (screen === "mobile" && variant === "seven") ||
                (screen === "tablet" && variant === "seven")) && (
                <Button
                  className="button-instance"
                  hasLeftIcon={false}
                  hasRightIcon={variant === "seven" ? false : undefined}
                  text={variant === "eight" ? "Get Started" : "How it works"}
                  type={variant === "eight" ? "primary" : "secondary-color"}
                />
              )}

              {variant === "seven" && screen === "tablet" && (
                <Button className="button-instance" hasLeftIcon={false} text="Get Started" type="primary" />
              )}

              {((screen === "desktop" && variant === "eight") ||
                (screen === "desktop" && variant === "seven") ||
                (screen === "tablet" && variant === "four") ||
                (screen === "tablet" && variant === "six") ||
                (screen === "tablet" && variant === "two")) && (
                <div className="div">
                  <img
                    className="television"
                    alt="Television"
                    src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/television-13@2x.png"
                  />
                  <div className="landingpage">
                    <span className="text-wrapper">Landing</span>
                    <span className="span">Page</span>
                  </div>
                </div>
              )}

              {screen === "desktop" && ["eight", "seven"].includes(variant) && (
                <div className="navigation-menu">
                  <Button
                    className="button-instance"
                    hasLeftIcon={false}
                    hasRightIcon={false}
                    text="Menu 1"
                    type="tertiary"
                  />
                  <Button
                    className="button-instance"
                    hasLeftIcon={false}
                    hasRightIcon={false}
                    text="Menu 2"
                    type="tertiary"
                  />
                  <Button
                    className="button-instance"
                    hasLeftIcon={false}
                    hasRightIcon={false}
                    text="Menu 3"
                    type="tertiary"
                  />
                </div>
              )}
            </div>
          )}

          {((screen === "desktop" && variant === "five") ||
            (screen === "desktop" && variant === "four") ||
            (screen === "desktop" && variant === "one") ||
            (screen === "desktop" && variant === "seven") ||
            (screen === "desktop" && variant === "three") ||
            (screen === "tablet" && variant === "seven") ||
            variant === "six" ||
            variant === "two") && (
            <div className="navigation-menu-2">
              {(variant === "one" || (screen === "desktop" && variant === "two")) && (
                <>
                  <>
                    {visible && (
                      <Button
                        className="button-instance"
                        hasLeftIcon={false}
                        hasRightIcon={false}
                        text="Menu 1"
                        type="tertiary"
                      />
                    )}
                  </>
                  <>
                    {visible1 && (
                      <Button
                        className="button-instance"
                        hasLeftIcon={false}
                        hasRightIcon={false}
                        text="Menu 2"
                        type="tertiary"
                      />
                    )}
                  </>
                </>
              )}

              {((screen === "desktop" && variant === "seven") ||
                variant === "five" ||
                variant === "four" ||
                variant === "one" ||
                variant === "six" ||
                variant === "two") && (
                <Button
                  className="button-instance"
                  hasLeftIcon={screen === "desktop" || (screen === "tablet" && variant === "six") ? false : undefined}
                  hasRightIcon={
                    variant === "five" ||
                    variant === "one" ||
                    variant === "seven" ||
                    variant === "two" ||
                    (screen === "desktop" && variant === "six")
                      ? false
                      : undefined
                  }
                  override={screen === "tablet" && variant === "two" ? <ArrowRight size="twenty" /> : undefined}
                  text={
                    variant === "seven"
                      ? "How it works"
                      : screen === "tablet" || variant === "four"
                      ? "Get Started"
                      : variant === "five" || (screen === "desktop" && variant === "six")
                      ? "Menu 1"
                      : buttonText
                  }
                  type={
                    variant === "seven" || (screen === "tablet" && variant === "two")
                      ? "secondary-color"
                      : variant === "four" || (screen === "tablet" && variant === "six")
                      ? "primary"
                      : "tertiary"
                  }
                />
              )}

              {screen === "desktop" && ["seven", "two"].includes(variant) && (
                <Button className="button-instance" hasLeftIcon={false} text="Get Started" type="primary" />
              )}

              {(variant === "one" || variant === "three" || (screen === "tablet" && variant === "seven")) && (
                <div className="logo-2">
                  {variant === "seven" && (
                    <>
                      <img
                        className="television"
                        alt="Television"
                        src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/television-13@2x.png"
                      />
                      <div className="landingpage">
                        <span className="text-wrapper">Landing</span>
                        <span className="span">Page</span>
                      </div>
                    </>
                  )}

                  {screen === "desktop" && (
                    <>
                      <Button
                        className="button-instance"
                        hasLeftIcon={false}
                        hasRightIcon={false}
                        text="How it works"
                        type="secondary-color"
                      />
                      <Button
                        className="button-instance"
                        hasLeftIcon={false}
                        hasRightIcon={variant === "one" ? buttonHasRightIcon : undefined}
                        override={variant === "one" ? button : undefined}
                        text="Get Started"
                        type="primary"
                      />
                    </>
                  )}
                </div>
              )}

              {(variant === "five" || (screen === "desktop" && variant === "six")) && (
                <>
                  <Button
                    className="button-instance"
                    hasLeftIcon={false}
                    hasRightIcon={false}
                    text="Menu 2"
                    type="tertiary"
                  />
                  <Button
                    className="button-instance"
                    hasLeftIcon={false}
                    hasRightIcon={false}
                    text="Menu 3"
                    type="tertiary"
                  />
                </>
              )}
            </div>
          )}

          {((screen === "desktop" && variant === "eight") ||
            (screen === "desktop" && variant === "six") ||
            (screen === "tablet" && variant === "eight") ||
            (screen === "tablet" && variant === "four")) && (
            <Button className="button-instance" hasLeftIcon={false} text="Get Started" type="primary" />
          )}

          {((screen === "mobile" && variant === "eight") ||
            (screen === "mobile" && variant === "four") ||
            (screen === "mobile" && variant === "seven") ||
            (screen === "mobile" && variant === "three") ||
            (screen === "tablet" && variant === "eight") ||
            (screen === "tablet" && variant === "five") ||
            (screen === "tablet" && variant === "one") ||
            (screen === "tablet" && variant === "three")) && (
            <img
              className="img"
              alt="Logo"
              src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/logo-22.svg"
            />
          )}

          {((screen === "mobile" && variant === "four") ||
            (screen === "mobile" && variant === "three") ||
            (screen === "tablet" && variant === "five") ||
            (screen === "tablet" && variant === "one") ||
            (screen === "tablet" && variant === "three")) && (
            <div className="navigation-menu-3">
              {["five", "one"].includes(variant) && (
                <div className="highlighted-ctas">
                  <Button
                    className="button-instance"
                    hasLeftIcon={false}
                    hasRightIcon={false}
                    text="How it works"
                    type="secondary-color"
                  />
                  <Button className="button-instance" hasLeftIcon={false} text="Get Started" type="primary" />
                </div>
              )}

              {(screen === "mobile" || variant === "three") && (
                <Button
                  className="button-instance"
                  hasLeftIcon={false}
                  hasRightIcon={variant === "three" ? false : undefined}
                  text={variant === "four" ? "Get Started" : "How it works"}
                  type={variant === "four" ? "primary" : "secondary-color"}
                />
              )}

              {screen === "tablet" && variant === "three" && (
                <Button className="button-instance" hasLeftIcon={false} text="Get Started" type="primary" />
              )}
            </div>
          )}

          {screen === "desktop" && variant === "five" && (
            <div className="highlighted-ctas">
              <Button
                className="button-instance"
                hasLeftIcon={false}
                hasRightIcon={false}
                text="How it works"
                type="secondary-color"
              />
              <Button className="button-instance" hasLeftIcon={false} text="Get Started" type="primary" />
            </div>
          )}
        </div>
      )}

      {screen === "mobile" && ["six", "two"].includes(variant) && (
        <img
          className={`navbar variant-screen-2 ${variantScreenClassName}`}
          alt="Variant screen"
          src={
            variant === "six"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/variant-6--screen-mobile.svg"
              : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/variant-2--screen-mobile.svg"
          }
        />
      )}
    </>
  );
};

Navbar.propTypes = {
  variant: PropTypes.oneOf(["seven", "two", "three", "one", "four", "five", "eight", "six"]),
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonHasRightIcon: PropTypes.bool,
};
