/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowRight } from "../ArrowRight";
import { BoundingBox } from "../BoundingBox";
import { Button } from "../Button";
import { FlyingSaucer } from "../FlyingSaucer";
import { MagicWand } from "../MagicWand";
import { MobileMockup } from "../MobileMockup";
import { Package } from "../Package";
import "./style.css";

interface Props {
  screen: "desktop" | "tablet-horizontal" | "tablet" | "mobile";
  variant: "two" | "one";
  className: any;
  ourFeaturesClassName: any;
  flyingSaucerFlyingSaucer: string;
  magicWandMagicWand: string;
  boundingBoxBoundingBox: string;
  packagePackage: string;
}

export const Features = ({
  screen,
  variant,
  className,
  ourFeaturesClassName,
  flyingSaucerFlyingSaucer = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/flyingsaucer-4.svg",
  magicWandMagicWand = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/magicwand-4.svg",
  boundingBoxBoundingBox = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/boundingbox-4.svg",
  packagePackage = "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/package-4.svg",
}: Props): JSX.Element => {
  return (
    <div className={`features screen-54-${screen} variant-2-${variant} ${className}`}>
      {(screen === "tablet-horizontal" ||
        variant === "two" ||
        (screen === "desktop" && variant === "one") ||
        (screen === "tablet" && variant === "one")) && (
        <>
          <div className="headline-subhead">
            {variant === "one" && (
              <>
                <div className="text-wrapper-11">Features</div>
                <p className="text-wrapper-12">
                  Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.
                </p>
              </>
            )}

            {screen === "desktop" && variant === "two" && (
              <div className="overlap-6">
                <div className="ellipse-10" />
                <img
                  className="circle-mask"
                  alt="Circle mask"
                  src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/circle-mask-3@2x.png"
                />
                <MobileMockup
                  buttonClassName="mobile-mockup-3"
                  buttonClassNameOverride="mobile-mockup-4"
                  className="mobile-mockup-instance"
                  color="black"
                  deviceClassName="mobile-mockup-7"
                  divClassName="mobile-mockup-5"
                  divClassNameOverride="mobile-mockup-6"
                  ellipseClassName="mobile-mockup-11"
                  insertYourScreenClassName="mobile-mockup-8"
                  overlapGroupClassName="mobile-mockup-2"
                  rectangleClassName="mobile-mockup-10"
                  topSpeakerClassName="mobile-mockup-9"
                />
                <img
                  className="subtract-5"
                  alt="Subtract"
                  src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-17.svg"
                />
                <img
                  className="subtract-6"
                  alt="Subtract"
                  src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-16.svg"
                />
              </div>
            )}

            {(screen === "mobile" || (screen === "tablet" && variant === "two")) && (
              <>
                <div className="div-3">
                  <div className="our-features">Our features</div>
                  <p className="few-good-reasons-why">
                    Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.
                  </p>
                </div>
                <div className="card">
                  <div className="div-4">
                    <div className="card-info">
                      <div className="icon">
                        <FlyingSaucer
                          className="instance-node-2"
                          flyingSaucer={
                            screen === "mobile"
                              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/flyingsaucer-2.svg"
                              : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/flyingsaucer-3.svg"
                          }
                        />
                      </div>
                      <div className="text">
                        <div className="text-wrapper-13">Fast building</div>
                      </div>
                    </div>
                    <div className="card-info-2">
                      <div className="icon">
                        <MagicWand
                          className="instance-node-2"
                          magicWand="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/magicwand-3.svg"
                        />
                      </div>
                      <div className="text">
                        <div className="text-wrapper-13">Easy to edit</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-5">
                    <div className="card-info-3">
                      <div className="icon">
                        <BoundingBox
                          boundingBox={
                            screen === "mobile"
                              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/boundingbox-2.svg"
                              : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/boundingbox-3.svg"
                          }
                          className="instance-node-2"
                        />
                      </div>
                      <div className="text">
                        <div className="text-wrapper-13">Responsiveness</div>
                      </div>
                    </div>
                    <div className="card-info-4">
                      <div className="icon">
                        <Package
                          className="instance-node-2"
                          img="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/package-3.svg"
                        />
                      </div>
                      <div className="text">
                        <div className="text-wrapper-13">No code needed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="cards-row">
            {variant === "one" && (
              <>
                <div className="feature-card">
                  <div className="card-info-5">
                    <div className="magic-wand-wrapper">
                      <MagicWand
                        className="instance-node-3"
                        magicWand={
                          screen === "tablet"
                            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/magicwand-7.svg"
                            : screen === "tablet-horizontal"
                            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/magicwand-6.svg"
                            : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/magicwand-8.svg"
                        }
                      />
                    </div>
                    <div className="text-2">
                      <div className="write-a-feature">Fast building</div>
                      <p className="text-wrapper-12">
                        Tailor Anima&#39;s Landing Page UI Kit to your unique style and brand with customisable
                        components, in no time!
                      </p>
                    </div>
                  </div>
                  <Button
                    hasLeftIcon={false}
                    override1={
                      <ArrowRight className={`${screen === "tablet" ? "class-71" : "arrow-right-2"}`} size="sixteen" />
                    }
                    text="Learn More"
                    type="tertiary"
                  />
                </div>
                <div className="feature-card-2">
                  <div className="card-info-5">
                    <div className="flying-saucer-wrapper">
                      <FlyingSaucer
                        className="instance-node-3"
                        flyingSaucer={
                          screen === "tablet"
                            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/flyingsaucer-7.svg"
                            : screen === "tablet-horizontal"
                            ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/flyingsaucer-6.svg"
                            : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/flyingsaucer-8.svg"
                        }
                      />
                    </div>
                    <div className="text-2">
                      <div className="write-a-feature-i">Responsive Design</div>
                      <p className="text-wrapper-12">
                        No need to worry about screen size. Anima&#39;s Landing Page UI Kit adapts to any screen size,
                        from desktop to mobile.
                      </p>
                    </div>
                  </div>
                  <Button
                    hasLeftIcon={false}
                    override1={<ArrowRight className="arrow-right-2" size="sixteen" />}
                    text="Learn More"
                    type="tertiary"
                  />
                </div>
                <div className="feature-card-3">
                  <div className="card-info-5">
                    <div className="icon-2">
                      {screen === "desktop" && (
                        <img
                          className="confetti"
                          alt="Confetti"
                          src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/confetti.svg"
                        />
                      )}

                      {["tablet-horizontal", "tablet"].includes(screen) && (
                        <Package
                          className="instance-node-3"
                          img={
                            screen === "tablet-horizontal"
                              ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/package-6.svg"
                              : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/package-7.svg"
                          }
                        />
                      )}
                    </div>
                    <div className="text-2">
                      <div className="write-a-feature-2">No Code Needed</div>
                      <p className="text-wrapper-12">
                        Zero coding skills required, Anima&#39;s Landing Page UI Kit empowers you to create stunning
                        landing pages with ease.
                      </p>
                    </div>
                  </div>
                  <Button
                    hasLeftIcon={false}
                    override1={
                      <ArrowRight className={`${screen === "tablet" ? "class-72" : "arrow-right-2"}`} size="sixteen" />
                    }
                    text="Learn More"
                    type="tertiary"
                  />
                </div>
              </>
            )}

            {screen === "desktop" && variant === "two" && (
              <>
                <div className="header-8">
                  <div className={`our-features-2 ${ourFeaturesClassName}`}>Our features</div>
                  <p className="few-good-reasons-why-2">
                    Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.
                  </p>
                </div>
                <div className="card">
                  <div className="div-6">
                    <div className="card-info-6">
                      <div className="icon">
                        <FlyingSaucer className="instance-node-2" flyingSaucer={flyingSaucerFlyingSaucer} />
                      </div>
                      <div className="text">
                        <div className="text-wrapper-13">Fast building</div>
                      </div>
                    </div>
                    <div className="card-info-6">
                      <div className="icon">
                        <MagicWand className="instance-node-2" magicWand={magicWandMagicWand} />
                      </div>
                      <div className="text">
                        <div className="text-wrapper-13">Easy to edit</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-7">
                    <div className="card-info-6">
                      <div className="icon">
                        <BoundingBox boundingBox={boundingBoxBoundingBox} className="instance-node-2" />
                      </div>
                      <div className="text">
                        <div className="text-wrapper-13">Responsiveness</div>
                      </div>
                    </div>
                    <div className="card-info-6">
                      <div className="icon">
                        <Package className="instance-node-2" img={packagePackage} />
                      </div>
                      <div className="text">
                        <div className="text-wrapper-13">No code needed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {(screen === "mobile" || (screen === "tablet" && variant === "two")) && (
              <div className="overlap-7">
                <div className="ellipse-11" />
                <img
                  className="circle-mask-2"
                  alt="Circle mask"
                  src={
                    screen === "mobile"
                      ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/circle-mask-1@2x.png"
                      : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/circle-mask-3@2x.png"
                  }
                />
                <MobileMockup
                  buttonClassName={`${screen === "mobile" ? "class-76" : "mobile-mockup-3"}`}
                  buttonClassNameOverride={`${screen === "mobile" ? "class-80" : "mobile-mockup-4"}`}
                  className={`${screen === "mobile" ? "class-78" : "mobile-mockup-instance"}`}
                  color="black"
                  deviceClassName={`${screen === "mobile" ? "class-75" : "mobile-mockup-7"}`}
                  divClassName={`${screen === "mobile" ? "class-79" : "mobile-mockup-5"}`}
                  divClassNameOverride={`${screen === "mobile" ? "class-83" : "mobile-mockup-6"}`}
                  ellipseClassName={`${screen === "mobile" ? "class-81" : "mobile-mockup-11"}`}
                  insertYourScreenClassName={`${screen === "mobile" ? "class-77" : "mobile-mockup-8"}`}
                  overlapGroupClassName={`${screen === "mobile" ? "class-82" : "mobile-mockup-2"}`}
                  rectangleClassName={`${screen === "mobile" ? "class-73" : "mobile-mockup-10"}`}
                  topSpeakerClassName={`${screen === "mobile" ? "class-74" : "mobile-mockup-9"}`}
                />
                <img
                  className="subtract-7"
                  alt="Subtract"
                  src={
                    screen === "mobile"
                      ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-13.svg"
                      : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-17.svg"
                  }
                />
                <img
                  className="subtract-8"
                  alt="Subtract"
                  src={
                    screen === "mobile"
                      ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-12.svg"
                      : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/subtract-16.svg"
                  }
                />
              </div>
            )}
          </div>
        </>
      )}

      {variant === "one" && screen === "mobile" && (
        <>
          <div className="div-3">
            <div className="text-wrapper-14">Features</div>
            <p className="text-wrapper-12">
              Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.
            </p>
          </div>
          <div className="feature-card-4">
            <div className="card-info-5">
              <div className="magic-wand-wrapper">
                <MagicWand
                  className="instance-node-3"
                  magicWand="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/magicwand-5.svg"
                />
              </div>
              <div className="text-2">
                <div className="write-a-feature-3">Fast building</div>
                <p className="text-wrapper-12">
                  Tailor Anima&#39;s Landing Page UI Kit to your unique style and brand with customisable components, in
                  no time!
                </p>
              </div>
            </div>
            <Button
              hasLeftIcon={false}
              override1={<ArrowRight className="arrow-right-3" size="sixteen" />}
              text="Learn More"
              type="tertiary"
            />
          </div>
          <div className="feature-card-5">
            <div className="card-info-5">
              <div className="flying-saucer-wrapper">
                <FlyingSaucer
                  className="instance-node-3"
                  flyingSaucer="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/flyingsaucer-5.svg"
                />
              </div>
              <div className="text-2">
                <div className="write-a-feature-3">Responsive Design</div>
                <p className="text-wrapper-12">
                  No need to worry about screen size. Anima&#39;s Landing Page UI Kit adapts to any screen size, from
                  desktop to mobile.
                </p>
              </div>
            </div>
            <Button
              hasLeftIcon={false}
              override1={<ArrowRight className="arrow-right-3" size="sixteen" />}
              text="Learn More"
              type="tertiary"
            />
          </div>
          <div className="feature-card-5">
            <div className="card-info-5">
              <div className="icon-2">
                <Package
                  className="instance-node-3"
                  img="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/package-5.svg"
                />
              </div>
              <div className="text-2">
                <div className="write-a-feature-3">No Code Needed</div>
                <p className="text-wrapper-12">
                  Zero coding skills required, Anima&#39;s Landing Page UI Kit empowers you to create stunning landing
                  pages with ease.
                </p>
              </div>
            </div>
            <Button
              hasLeftIcon={false}
              override1={<ArrowRight className="arrow-right-3" size="sixteen" />}
              text="Learn More"
              type="tertiary"
            />
          </div>
        </>
      )}
    </div>
  );
};

Features.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet-horizontal", "tablet", "mobile"]),
  variant: PropTypes.oneOf(["two", "one"]),
  flyingSaucerFlyingSaucer: PropTypes.string,
  magicWandMagicWand: PropTypes.string,
  boundingBoxBoundingBox: PropTypes.string,
  packagePackage: PropTypes.string,
};
