/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { DesktopMockup } from "../DesktopMockup";
import { MobileMockup } from "../MobileMockup";
import { RocketLaunch } from "../RocketLaunch";
import "./style.css";

interface Props {
  variant: "hero-4" | "hero-5" | "hero-3" | "hero-1" | "hero-6" | "hero-2";
  screen: "desktop" | "tablet" | "mobile";
  className: any;
  button: JSX.Element;
  insertYourMockup: string;
}

export const HeroSection = ({
  variant,
  screen,
  className,
  button = <RocketLaunch className="design-component-instance-node" size="sixteen" />,
  insertYourMockup = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/insert-your-mockup-image-here-9.png",
}: Props): JSX.Element => {
  return (
    <div className={`hero-section ${variant} screen-3-${screen} ${className}`}>
      {((screen === "mobile" && variant === "hero-6") ||
        (screen === "tablet" && variant === "hero-6") ||
        variant === "hero-1" ||
        variant === "hero-2" ||
        variant === "hero-3" ||
        variant === "hero-5") && (
        <>
          <div className="header">
            {["hero-1", "hero-5", "hero-6"].includes(variant) && (
              <>
                <div className="header-2">
                  {["hero-1", "hero-6"].includes(variant) && (
                    <div className="create-engaging">Create Engaging Landing Pages</div>
                  )}

                  {variant === "hero-5" && (
                    <p className="create-stunning">Create Stunning Landing Pages Without Code</p>
                  )}

                  <p className="build-beautiful">
                    {["hero-1", "hero-6"].includes(variant) && (
                      <>
                        <span className="text-wrapper-2">Build beautiful landing pages in record time with </span>
                        <a
                          href="https://www.animaapp.com/?utm_source=figma-samples&amp;utm_campaign=figma-lp-ui-kit&amp;utm_medium=figma-samples"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span className="text-wrapper-3">Anima</span>
                        </a>
                        <span className="text-wrapper-4">’s Landing Page UI kit for Figma. No code required!</span>
                      </>
                    )}

                    {variant === "hero-5" && (
                      <>Get ready to elevate your design game with Anima&#39;s ultimate landing page UI kit.</>
                    )}
                  </p>
                </div>
                <div className="CT-as">
                  {(variant === "hero-5" || variant === "hero-6" || (screen === "desktop" && variant === "hero-1")) && (
                    <>
                      <Button
                        className={`${["desktop", "tablet"].includes(screen) && "instance-node"}`}
                        hasRightIcon={false}
                        labelClassName={`${variant === "hero-5" && ["mobile", "tablet"].includes(screen) && "class"}`}
                        override={
                          <RocketLaunch
                            className={`${
                              variant === "hero-1"
                                ? "class-2"
                                : ["mobile", "tablet"].includes(screen) &&
                                  (screen === "mobile" || variant === "hero-5") &&
                                  (screen === "tablet" || variant === "hero-6") &&
                                  ["hero-6", "hero-5"].includes(variant)
                                ? "class-3"
                                : screen === "desktop" && variant === "hero-5"
                                ? "class-4"
                                : "class-5"
                            }`}
                            size="sixteen"
                          />
                        }
                        text="Get Started"
                        type="primary"
                      />
                      <Button
                        className={`${screen === "mobile" ? "button-6" : "instance-node"}`}
                        hasLeftIcon={false}
                        hasRightIcon={false}
                        labelClassName={`${variant === "hero-5" && ["mobile", "tablet"].includes(screen) && "class"}`}
                        text="How it works"
                        type="secondary"
                      />
                    </>
                  )}

                  {variant === "hero-1" && ["mobile", "tablet"].includes(screen) && (
                    <Button
                      hasRightIcon={false}
                      override={
                        <RocketLaunch className={`${screen === "mobile" ? "class-6" : "class-7"}`} size="sixteen" />
                      }
                      text="Get Started"
                      type="primary"
                    />
                  )}
                </div>
              </>
            )}

            {variant === "hero-2" && (
              <div className="overlap">
                <div className="ellipse-2" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
                <img
                  className="star"
                  alt="Star"
                  src={
                    screen === "mobile"
                      ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-3.svg"
                      : screen === "desktop"
                      ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-1.svg"
                      : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-9.svg"
                  }
                />
                <img
                  className="star-2"
                  alt="Star"
                  src={
                    screen === "mobile"
                      ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-2.svg"
                      : screen === "desktop"
                      ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-1.svg"
                      : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-8.svg"
                  }
                />
                <MobileMockup
                  buttonClassName={`${screen === "desktop" ? "class-14" : "class-15"}`}
                  buttonClassNameOverride={`${screen === "desktop" ? "class-23" : "class-24"}`}
                  className={`${screen === "desktop" ? "class-19" : "class-20"}`}
                  color="black"
                  deviceClassName={`${screen === "desktop" ? "class-12" : "class-13"}`}
                  divClassName={`${screen === "desktop" ? "class-21" : "class-22"}`}
                  divClassNameOverride={`${screen === "desktop" ? "class-29" : "class-30"}`}
                  ellipseClassName={`${screen === "desktop" ? "class-25" : "class-26"}`}
                  insertYourScreenClassName={`${
                    screen === "mobile" ? "class-16" : screen === "desktop" ? "class-17" : "class-18"
                  }`}
                  overlapGroupClassName={`${screen === "desktop" ? "class-27" : "class-28"}`}
                  rectangleClassName={`${screen === "desktop" ? "class-8" : "class-9"}`}
                  topSpeakerClassName={`${screen === "desktop" ? "class-10" : "class-11"}`}
                />
              </div>
            )}

            {variant === "hero-3" && (
              <>
                <p className="build-live-landing">Build Live Landing Pages in Record Time</p>
                <p className="say-goodbye-to">
                  Say goodbye to endless tweaking - our landing page ui kit is optimised for conversions.
                </p>
              </>
            )}
          </div>
          <div className="visuals">
            {["hero-1", "hero-3", "hero-5", "hero-6"].includes(variant) && (
              <div className="overlap-2">
                {["hero-1", "hero-5"].includes(variant) && (
                  <>
                    <div className="ellipse-5" />
                    <div className="ellipse-6" />
                    <div className="ellipse-7" />
                  </>
                )}

                {variant === "hero-6" && (
                  <div className="overlap-3">
                    <div className="rectangle-2" />
                    <img
                      className="subtract"
                      alt="Subtract"
                      src={
                        screen === "mobile"
                          ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-7.svg"
                          : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-11.svg"
                      }
                    />
                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-2">
                        <div className="button-7" />
                        <div className="button-8" />
                        <div className="button-9" />
                        <div className="button-10" />
                        <div className="device-2" />
                        <div className="insert-your-mockup-wrapper">
                          <img
                            className="insert-your-mockup"
                            alt="Insert your mockup"
                            src={
                              screen === "mobile"
                                ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/insert-your-mockup-image-here-7@2x.png"
                                : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/insert-your-mockup-image-here-9.png"
                            }
                          />
                        </div>
                        <div className="top-speaker-2">
                          <div className="rectangle-3" />
                          <div className="ellipse-8" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {["hero-1", "hero-6"].includes(variant) && (
                  <img
                    className="subtract-2"
                    alt="Subtract"
                    src={
                      screen === "tablet" && variant === "hero-6"
                        ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-10.svg"
                        : variant === "hero-6" && screen === "mobile"
                        ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-6.svg"
                        : screen === "desktop"
                        ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-11.svg"
                        : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-9.svg"
                    }
                  />
                )}

                {variant === "hero-5" && (
                  <DesktopMockup
                    className={`${screen === "mobile" ? "class-31" : "class-32"}`}
                    color="white"
                    desktopGrayClassName={`${screen === "mobile" ? "class-43" : "class-44"}`}
                    ellipseClassName={`${screen === "mobile" ? "class-41" : "class-42"}`}
                    ellipseClassNameOverride={`${screen === "mobile" ? "class-33" : "class-34"}`}
                    maskGroup={
                      screen === "tablet"
                        ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-5.png"
                        : screen === "mobile"
                        ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-4@2x.png"
                        : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-6.png"
                    }
                    maskGroupClassName={`${screen === "mobile" ? "class-35" : "class-36"}`}
                    rectangleClassName={`${screen === "mobile" ? "class-39" : "class-40"}`}
                    topSpeakerCamClassName={`${screen === "mobile" ? "class-37" : "class-38"}`}
                  />
                )}

                {variant === "hero-3" && (
                  <>
                    <Button
                      className={`${screen === "mobile" ? "button-6" : "instance-node"}`}
                      hasRightIcon={false}
                      labelClassName={`${screen === "mobile" && "rocket-launch-wrapper"}`}
                      override={
                        <RocketLaunch
                          className={`${
                            screen === "tablet"
                              ? "class-5"
                              : screen === "mobile"
                              ? "rocket-launch-instance"
                              : "class-45"
                          }`}
                          size="sixteen"
                        />
                      }
                      text="Get Started"
                      type="primary"
                    />
                    <Button
                      className={`${screen === "mobile" ? "button-6" : "instance-node"}`}
                      hasLeftIcon={false}
                      hasRightIcon={false}
                      text="How it works"
                      type="secondary"
                    />
                  </>
                )}

                {variant === "hero-1" && (
                  <>
                    <img
                      className="star-3"
                      alt="Star"
                      src={
                        screen === "desktop"
                          ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-11.svg"
                          : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-8.svg"
                      }
                    />
                    <MobileMockup
                      buttonClassName={`${screen === "desktop" ? "class-14" : "class-15"}`}
                      buttonClassNameOverride={`${screen === "desktop" ? "class-23" : "class-24"}`}
                      className={`${screen === "desktop" ? "class-19" : "class-20"}`}
                      color="white"
                      deviceClassName={`${screen === "desktop" ? "class-12" : "class-13"}`}
                      divClassName={`${screen === "desktop" ? "class-21" : "class-22"}`}
                      divClassNameOverride={`${screen === "desktop" ? "class-29" : "class-30"}`}
                      ellipseClassName={`${screen === "desktop" ? "class-25" : "class-26"}`}
                      insertYourScreenClassName={`${screen === "desktop" ? "class-46" : "class-47"}`}
                      overlapGroupClassName={`${screen === "desktop" ? "class-27" : "class-28"}`}
                      rectangleClassName={`${screen === "desktop" ? "class-8" : "class-9"}`}
                      topSpeakerClassName={`${screen === "desktop" ? "class-10" : "class-11"}`}
                    />
                  </>
                )}
              </div>
            )}

            {variant === "hero-2" && (
              <>
                <div className="header-3">
                  <div className="create-engaging-2">Create Engaging Landing Pages</div>
                  <p className="p">
                    <span className="text-wrapper-5">Build beautiful landing pages in record time with </span>
                    <a
                      href="https://www.animaapp.com/?utm_source=figma-samples&amp;utm_campaign=figma-lp-ui-kit&amp;utm_medium=figma-samples"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="text-wrapper-6">Anima</span>
                    </a>
                    <span className="text-wrapper-7">’s Landing Page UI kit for Figma. No code required!</span>
                  </p>
                </div>
                <div className="CT-as-wrapper">
                  <div className="CT-as-2">
                    {["mobile", "tablet"].includes(screen) && (
                      <Button
                        hasRightIcon={false}
                        override={
                          <RocketLaunch className={`${screen === "mobile" ? "class-48" : "class-49"}`} size="sixteen" />
                        }
                        text="Get Started"
                        type="primary"
                      />
                    )}

                    {screen === "desktop" && (
                      <>
                        <Button
                          className="instance-node"
                          hasRightIcon={false}
                          override={<RocketLaunch className="rocket-launch-2" size="sixteen" />}
                          text="Get Started"
                          type="primary"
                        />
                        <Button
                          className="instance-node"
                          hasLeftIcon={false}
                          hasRightIcon={false}
                          text="How it works"
                          type="secondary"
                        />
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {screen === "desktop" && variant === "hero-6" && (
        <div className="hero-content">
          <div className="header-4">
            <div className="header-5">
              <div className="create-engaging-3">Create Engaging Landing Pages</div>
              <p className="build-beautiful-2">
                <span className="text-wrapper-8">Build beautiful landing pages in record time with </span>
                <a
                  href="https://www.animaapp.com/?utm_source=figma-samples&amp;utm_campaign=figma-lp-ui-kit&amp;utm_medium=figma-samples"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-9">Anima</span>
                </a>
                <span className="text-wrapper-10">’s Landing Page UI kit for Figma. No code required!</span>
              </p>
            </div>
            <div className="CT-as-3">
              <Button
                className="instance-node"
                hasRightIcon={false}
                override={button}
                text="Get Started"
                type="primary"
              />
              <Button
                className="instance-node"
                hasLeftIcon={false}
                hasRightIcon={false}
                text="How it works"
                type="secondary"
              />
            </div>
          </div>
          <div className="mockup">
            <div className="overlap-4">
              <div className="overlap-5">
                <div className="rectangle-4" />
                <img
                  className="subtract-3"
                  alt="Subtract"
                  src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-11.svg"
                />
                <div className="div-wrapper">
                  <div className="overlap-group-3">
                    <div className="button-11" />
                    <div className="button-12" />
                    <div className="button-13" />
                    <div className="button-14" />
                    <div className="device-3" />
                    <div className="img-wrapper">
                      <img className="insert-your-mockup-2" alt="Insert your mockup" src={insertYourMockup} />
                    </div>
                    <div className="top-speaker-3">
                      <div className="rectangle-5" />
                      <div className="ellipse-9" />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="subtract-4"
                alt="Subtract"
                src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-10.svg"
              />
            </div>
          </div>
        </div>
      )}

      {variant === "hero-4" && ["desktop", "tablet"].includes(screen) && (
        <div className="div-2">
          <div className="header-6">
            <p className="build-live-landing-2">Build Live Landing Pages in Record Time</p>
            <p className="say-goodbye-to-2">
              Say goodbye to endless tweaking - our landing page ui kit is optimised for conversions.
            </p>
          </div>
          <div className="CT-as-4">
            <div className="CT-as-5">
              <Button
                className="instance-node"
                hasRightIcon={false}
                override={<RocketLaunch className={`${screen === "tablet" ? "class-5" : "class-45"}`} size="sixteen" />}
                text="Get Started"
                type="primary"
              />
              <Button
                className="instance-node"
                hasLeftIcon={false}
                hasRightIcon={false}
                text="How it works"
                type="secondary"
              />
            </div>
          </div>
        </div>
      )}

      {variant === "hero-4" && screen === "mobile" && (
        <>
          <div className="header-7">
            <p className="build-live-landing-3">Build Live Landing Pages in Record Time</p>
            <p className="say-goodbye-to-3">
              Say goodbye to endless tweaking - our landing page ui kit is optimised for conversions.
            </p>
          </div>
          <div className="CT-as-6">
            <div className="CT-as-7">
              <Button
                className="button-6"
                hasRightIcon={false}
                labelClassName="rocket-launch-wrapper"
                override={<RocketLaunch className="rocket-launch-instance" size="sixteen" />}
                text="Get Started"
                type="primary"
              />
              <Button
                className="button-6"
                hasLeftIcon={false}
                hasRightIcon={false}
                text="How it works"
                type="secondary"
              />
            </div>
          </div>
        </>
      )}

      {variant === "hero-4" && (
        <DesktopMockup
          className={`${screen === "desktop" ? "class-50" : screen === "tablet" ? "class-51" : "class-52"}`}
          color="white"
          desktopGrayClassName={`${screen === "desktop" ? "class-68" : screen === "tablet" ? "class-69" : "class-70"}`}
          ellipseClassName={`${screen === "desktop" ? "class-65" : screen === "tablet" ? "class-66" : "class-67"}`}
          ellipseClassNameOverride={`${
            screen === "desktop" ? "class-53" : screen === "tablet" ? "class-54" : "class-55"
          }`}
          maskGroup={
            screen === "desktop"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-3.png"
              : screen === "tablet"
              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-2.png"
              : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-1@2x.png"
          }
          maskGroupClassName={`${screen === "desktop" ? "class-56" : screen === "tablet" ? "class-57" : "class-58"}`}
          rectangleClassName={`${screen === "desktop" ? "class-62" : screen === "tablet" ? "class-63" : "class-64"}`}
          topSpeakerCamClassName={`${
            screen === "desktop" ? "class-59" : screen === "tablet" ? "class-60" : "class-61"
          }`}
        />
      )}
    </div>
  );
};

HeroSection.propTypes = {
  variant: PropTypes.oneOf(["hero-4", "hero-5", "hero-3", "hero-1", "hero-6", "hero-2"]),
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  insertYourMockup: PropTypes.string,
};
