/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLeft } from "../ArrowLeft";
import { Button } from "../Button";
import { DesktopMockup } from "../DesktopMockup";
import { RocketLaunch } from "../RocketLaunch";
import "./style.css";

interface Props {
  screen: "desktop" | "tablet" | "mobile";
  variant: "two" | "three" | "four" | "one" | "five";
  className: any;
  headerClassName: any;
  button: JSX.Element;
  desktopMockupMaskGroup: string;
}

export const HighlightedCta = ({
  screen,
  variant,
  className,
  headerClassName,
  button = <RocketLaunch className="rocket-launch-3" size="sixteen" />,
  desktopMockupMaskGroup = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-13.png",
}: Props): JSX.Element => {
  return (
    <div className={`highlighted-CTA screen-96-${screen} variant-14-${variant} ${className}`}>
      {["four", "one", "two"].includes(variant) && (
        <div className="div-8">
          <div className="header-9">
            {variant === "four" && (
              <>
                <p className="get-landing-page-UI">Get Landing Page UI Kit Today!</p>
                <p className="break-figma-limits">
                  Break Figma limits and explore the endless possibilities with Anima.
                </p>
              </>
            )}

            {variant === "one" && (
              <>
                <div className="div-9">
                  <p className="get-landing-page-UI-2">Get Landing Page UI Kit Today!</p>
                  <p className="break-the-figma">
                    <span className="text-wrapper-15">
                      Break the Figma limits and explore the endless possibilities with{" "}
                    </span>
                    <a
                      href="https://www.animaapp.com/?utm_source=figma-samples&amp;utm_campaign=figma-lp-ui-kit&amp;utm_medium=figma-samples"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-wrapper-16">Anima</span>
                    </a>
                    <span className="text-wrapper-17">.</span>
                  </p>
                </div>
                <Button
                  className={`${screen === "mobile" && "class-103"}`}
                  hasLeftIcon={false}
                  override1={<ArrowLeft className="arrow-left-2" size="twenty" />}
                  text="Get Started"
                  type="primary"
                />
              </>
            )}

            {variant === "two" && (
              <>
                <div className="subscribe-now">Subscribe now</div>
                <p className="never-miss-a-beat-on">Never miss a beat on new landing page designs and features.</p>
              </>
            )}
          </div>
          {["one", "two"].includes(variant) && (
            <div className="mockup-2">
              {variant === "one" && (
                <div className="overlap-8">
                  <div className="ellipse-14" />
                  <div className="ellipse-15" />
                  <div className="mobile-mockup-12">
                    <div className="overlap-group-4">
                      <div className="button-15" />
                      <div className="button-16" />
                      <div className="button-17" />
                      <div className="button-18" />
                      <div className="device-4" />
                      <div className="insert-your-screen-2">
                        <img
                          className="insert-your-mockup-3"
                          alt="Insert your mockup"
                          src={
                            screen === "mobile"
                              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/insert-your-mockup-image-here-20@2x.png"
                              : screen === "desktop"
                              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/insert-your-mockup-image-here-16.png"
                              : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/insert-your-mockup-image-here-21@2x.png"
                          }
                        />
                      </div>
                      <div className="top-speaker-4">
                        <div className="rectangle-8" />
                        <div className="ellipse-16" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {variant === "two" && ["desktop", "tablet"].includes(screen) && <input className="enter-your-email" />}

              {variant === "two" && screen === "mobile" && (
                <div className="input-field">
                  <input className="input" />
                </div>
              )}

              {variant === "two" && (
                <Button
                  className={`${screen === "mobile" ? "class-103" : "class-104"}`}
                  hasRightIcon={false}
                  text="Subscribe"
                  type="primary"
                />
              )}
            </div>
          )}

          {variant === "four" && (
            <>
              <div className="CT-as-8">
                <div className="button-wrapper">
                  <Button
                    className="button-19"
                    hasRightIcon={false}
                    override={
                      <RocketLaunch
                        className={`${
                          screen === "tablet" ? "class-105" : screen === "mobile" ? "class-106" : "rocket-launch-3"
                        }`}
                        size="sixteen"
                      />
                    }
                    text="Get Started"
                    type="primary"
                  />
                </div>
              </div>
              <div className="desktop-mockup-wrapper">
                <DesktopMockup
                  className={`${screen === "tablet" ? "class-107" : screen === "mobile" ? "class-108" : "class-109"}`}
                  color="white"
                  desktopGrayClassName={`${
                    screen === "tablet" ? "class-125" : screen === "mobile" ? "class-126" : "class-127"
                  }`}
                  ellipseClassName={`${
                    screen === "tablet" ? "class-122" : screen === "mobile" ? "class-123" : "class-124"
                  }`}
                  ellipseClassNameOverride={`${
                    screen === "tablet" ? "class-110" : screen === "mobile" ? "class-111" : "class-112"
                  }`}
                  maskGroup={
                    screen === "tablet"
                      ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-10@2x.png"
                      : screen === "mobile"
                      ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-9@2x.png"
                      : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-14.png"
                  }
                  maskGroupClassName={`${
                    screen === "tablet" ? "class-113" : screen === "mobile" ? "class-114" : "class-115"
                  }`}
                  rectangleClassName={`${
                    screen === "tablet" ? "class-119" : screen === "mobile" ? "class-120" : "class-121"
                  }`}
                  topSpeakerCamClassName={`${
                    screen === "tablet" ? "class-116" : screen === "mobile" ? "class-117" : "class-118"
                  }`}
                />
              </div>
            </>
          )}
        </div>
      )}

      {variant === "five" && (
        <>
          <div className={`header-10 ${headerClassName}`}>
            <p className="get-landing-page-UI-3">Get Landing Page UI Kit Today!</p>
            <p className="break-figma-limits-2">Break Figma limits and explore the endless possibilities with Anima.</p>
          </div>
          <div className="CT-as-8">
            <div className="button-wrapper">
              <Button className="button-19" hasRightIcon={false} override={button} text="Get Started" type="primary" />
            </div>
          </div>
          <div className="mockup-3">
            <DesktopMockup
              className={`${screen === "tablet" ? "class-128" : screen === "mobile" ? "class-129" : "class-130"}`}
              color="white"
              desktopGrayClassName={`${
                screen === "tablet" ? "class-125" : screen === "mobile" ? "class-137" : "class-127"
              }`}
              ellipseClassName={`${
                screen === "tablet" ? "class-122" : screen === "mobile" ? "class-136" : "class-124"
              }`}
              ellipseClassNameOverride={`${
                screen === "tablet" ? "class-110" : screen === "mobile" ? "class-131" : "class-112"
              }`}
              maskGroup={desktopMockupMaskGroup}
              maskGroupClassName={`${
                screen === "tablet" ? "class-132" : screen === "mobile" ? "class-133" : "class-115"
              }`}
              rectangleClassName={`${
                screen === "tablet" ? "class-119" : screen === "mobile" ? "class-135" : "class-121"
              }`}
              topSpeakerCamClassName={`${
                screen === "tablet" ? "class-116" : screen === "mobile" ? "class-134" : "class-118"
              }`}
            />
            <img
              className="subtract-9"
              alt="Subtract"
              src={
                screen === "tablet"
                  ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-21.svg"
                  : screen === "mobile"
                  ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-19.svg"
                  : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-23.svg"
              }
            />
            <img
              className="subtract-10"
              alt="Subtract"
              src={
                screen === "tablet"
                  ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-20.svg"
                  : screen === "mobile"
                  ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-18.svg"
                  : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-22.svg"
              }
            />
          </div>
        </>
      )}

      {variant === "three" && (
        <>
          <div className="overlap-wrapper">
            <div className="overlap-9">
              <div className="ellipse-17" />
              <div className="ellipse-18" />
              <div className="mobile-mockup-wrapper">
                <div className="mobile-mockup-13">
                  <div className="overlap-group-5">
                    <div className="button-20" />
                    <div className="button-21" />
                    <div className="button-22" />
                    <div className="button-23" />
                    <div className="device-5" />
                    <div className="insert-your-screen-3">
                      <img
                        className="insert-your-mockup-4"
                        alt="Insert your mockup"
                        src={
                          screen === "mobile"
                            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/insert-your-mockup-image-here-18@2x.png"
                            : screen === "desktop"
                            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/insert-your-mockup-image-here-17@2x.png"
                            : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/insert-your-mockup-image-here-19@2x.png"
                        }
                      />
                    </div>
                    <div className="top-speaker-5">
                      <div className="rectangle-9" />
                      <div className="ellipse-19" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ellipse-20" />
            </div>
          </div>
          <div className="header-11">
            <div className="div-9">
              <p className="get-landing-page-UI-4">Get Landing Page UI Kit Today!</p>
              <p className="break-the-figma-2">
                Break the Figma limits and explore the endless possibilities with Anima.
              </p>
            </div>
            <div className="button-wrapper">
              <Button
                className="button-19"
                hasLeftIcon={false}
                override1={
                  <ArrowLeft
                    className={`${
                      screen === "mobile" ? "class-138" : screen === "desktop" ? "arrow-left-2" : "class-139"
                    }`}
                    size="twenty"
                  />
                }
                text="Get Started"
                type="primary"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

HighlightedCta.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  variant: PropTypes.oneOf(["two", "three", "four", "one", "five"]),
  desktopMockupMaskGroup: PropTypes.string,
};
