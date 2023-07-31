/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { ClientLogoMark } from "../ClientLogoMark";
import "./style.css";

interface Props {
  screen: "desktop" | "tablet" | "mobile";
  variant: "two" | "three" | "one";
  className: any;
  clientLogoMarkBrandHubspotClassName: any;
  clientLogoMarkBrandHubspotClassNameOverride: any;
}

export const LogoBar = ({
  screen,
  variant,
  className,
  clientLogoMarkBrandHubspotClassName,
  clientLogoMarkBrandHubspotClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className={`logo-bar screen-83-${screen} variant-12-${variant} ${className}`}>
      {(variant === "two" ||
        (screen === "desktop" && variant === "one") ||
        (screen === "tablet" && variant === "one")) && (
        <div className="logos">
          {variant === "one" && (
            <>
              <img
                className="client-logo"
                alt="Client logo"
                src={
                  screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-11.svg"
                    : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-17.svg"
                }
              />
              <img
                className="client-logo-2"
                alt="Client logo"
                src={
                  screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-10.svg"
                    : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-16.svg"
                }
              />
              <img
                className="client-logo-3"
                alt="Client logo"
                src={
                  screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-9.svg"
                    : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-15.svg"
                }
              />
              <img
                className="client-logo-4"
                alt="Client logo"
                src={
                  screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-8.svg"
                    : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-14.svg"
                }
              />
              <img
                className="client-logo-5"
                alt="Client logo"
                src={
                  screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-7.svg"
                    : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-13.svg"
                }
              />
              <img
                className="client-logo-6"
                alt="Client logo"
                src={
                  screen === "tablet"
                    ? "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-6.svg"
                    : "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-12.svg"
                }
              />
            </>
          )}

          {variant === "two" && (
            <>
              <ClientLogoMark
                brand="loom"
                className={`${
                  screen === "tablet"
                    ? "client-logo-mark-instance"
                    : screen === "mobile"
                    ? "client-logo-mark-2"
                    : "class-99"
                }`}
              />
              <ClientLogoMark
                brand="slack"
                className={`${
                  screen === "tablet" ? "client-logo-mark-3" : screen === "mobile" ? "client-logo-mark-4" : "class-100"
                }`}
              />
              <ClientLogoMark
                brand="spotify"
                className={`${
                  screen === "tablet"
                    ? "client-logo-mark-5"
                    : screen === "mobile"
                    ? "client-logo-mark-6"
                    : "client-logo-mark-7"
                }`}
              />
              <ClientLogoMark
                brand="discord"
                className={`${
                  screen === "tablet"
                    ? "client-logo-mark-8"
                    : screen === "mobile"
                    ? "client-logo-mark-9"
                    : "client-logo-mark-10"
                }`}
              />
              <ClientLogoMark
                brand="kickstarter"
                className={`${
                  screen === "tablet"
                    ? "client-logo-mark-11"
                    : screen === "mobile"
                    ? "client-logo-mark-12"
                    : "class-101"
                }`}
              />
              <ClientLogoMark
                brand="dropbox"
                className={`${
                  screen === "tablet"
                    ? "client-logo-mark-13"
                    : screen === "mobile"
                    ? "client-logo-mark-14"
                    : "class-102"
                }`}
              />
            </>
          )}
        </div>
      )}

      {variant === "three" && (
        <>
          <div className="headline-subhead-5">
            <div className="more-than">More than 50 Integrations</div>
            <p className="we-integrate-with">We integrate with more than 50 apps you use daily</p>
          </div>
          <div className="logo-grid">
            {["desktop", "tablet"].includes(screen) && (
              <>
                <div className="logos-2">
                  {screen === "desktop" && (
                    <>
                      <ClientLogoMark brand="loom" className="client-logo-mark-15" />
                      <ClientLogoMark brand="slack" className={clientLogoMarkBrandHubspotClassName} />
                      <ClientLogoMark brand="spotify" className="client-logo-mark-7" />
                      <ClientLogoMark brand="discord" className="client-logo-mark-10" />
                      <ClientLogoMark brand="kickstarter" className={clientLogoMarkBrandHubspotClassNameOverride} />
                      <ClientLogoMark brand="dropbox" className="client-logo-mark-16" />
                    </>
                  )}

                  {screen === "tablet" && (
                    <div className="logos-3">
                      <ClientLogoMark brand="loom" className="client-logo-mark-instance" />
                      <ClientLogoMark brand="slack" className="client-logo-mark-3" />
                      <ClientLogoMark brand="spotify" className="client-logo-mark-5" />
                      <ClientLogoMark brand="discord" className="client-logo-mark-8" />
                      <ClientLogoMark brand="kickstarter" className="client-logo-mark-11" />
                      <ClientLogoMark brand="dropbox" className="client-logo-mark-13" />
                    </div>
                  )}
                </div>
                <div className="logos-4">
                  {screen === "desktop" && (
                    <>
                      <ClientLogoMark brand="mailchimp" className="client-logo-mark-17" />
                      <ClientLogoMark brand="stripe" className="client-logo-mark-18" />
                      <ClientLogoMark brand="zoom" className="client-logo-mark-19" />
                      <ClientLogoMark brand="apple" className="client-logo-mark-20" />
                      <ClientLogoMark brand="sketch" className="client-logo-mark-21" />
                    </>
                  )}

                  {screen === "tablet" && (
                    <div className="logos-3">
                      <ClientLogoMark brand="mailchimp" className="client-logo-mark-22" />
                      <ClientLogoMark brand="stripe" className="client-logo-mark-23" />
                      <ClientLogoMark brand="zoom" className="client-logo-mark-24" />
                      <ClientLogoMark brand="apple" className="client-logo-mark-25" />
                      <ClientLogoMark brand="sketch" className="client-logo-mark-26" />
                    </div>
                  )}
                </div>
                <div className="logos-5">
                  {screen === "desktop" && (
                    <>
                      <ClientLogoMark brand="airbnb" className="client-logo-mark-27" />
                      <ClientLogoMark brand="amazon" className="client-logo-mark-28" />
                      <ClientLogoMark brand="react" className="client-logo-mark-29" />
                      <ClientLogoMark brand="eventbrite" className="client-logo-mark-30" />
                    </>
                  )}

                  {screen === "tablet" && (
                    <div className="logos-3">
                      <ClientLogoMark brand="airbnb" className="client-logo-mark-31" />
                      <ClientLogoMark brand="amazon" className="client-logo-mark-32" />
                      <ClientLogoMark brand="react" className="client-logo-mark-33" />
                      <ClientLogoMark brand="eventbrite" className="client-logo-mark-34" />
                    </div>
                  )}
                </div>
              </>
            )}

            {screen === "mobile" && (
              <>
                <div className="logos-wrapper">
                  <div className="logos-3">
                    <ClientLogoMark brand="loom" className="client-logo-mark-2" />
                    <ClientLogoMark brand="slack" className="client-logo-mark-4" />
                    <ClientLogoMark brand="spotify" className="client-logo-mark-6" />
                    <ClientLogoMark brand="discord" className="client-logo-mark-9" />
                    <ClientLogoMark brand="kickstarter" className="client-logo-mark-12" />
                    <ClientLogoMark brand="dropbox" className="client-logo-mark-14" />
                  </div>
                </div>
                <div className="logos-wrapper-2">
                  <div className="logos-3">
                    <ClientLogoMark brand="mailchimp" className="client-logo-mark-35" />
                    <ClientLogoMark brand="stripe" className="client-logo-mark-36" />
                    <ClientLogoMark brand="zoom" className="client-logo-mark-37" />
                    <ClientLogoMark brand="apple" className="client-logo-mark-38" />
                    <ClientLogoMark brand="sketch" className="client-logo-mark-39" />
                  </div>
                </div>
                <div className="logos-wrapper-3">
                  <div className="logos-3">
                    <ClientLogoMark brand="airbnb" className="client-logo-mark-40" />
                    <ClientLogoMark brand="amazon" className="client-logo-mark-41" />
                    <ClientLogoMark brand="react" className="client-logo-mark-42" />
                    <ClientLogoMark brand="eventbrite" className="client-logo-mark-43" />
                  </div>
                </div>
                <div className="rectangle-6" />
              </>
            )}
          </div>
          <Button hasLeftIcon={false} hasRightIcon={false} text="View All Integrations" type="primary" />
        </>
      )}

      {variant === "one" && screen === "mobile" && (
        <>
          <div className="logos-6">
            <img
              className="client-logo-7"
              alt="Client logo"
              src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-5.svg"
            />
            <img
              className="client-logo-8"
              alt="Client logo"
              src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-4.svg"
            />
            <img
              className="client-logo-7"
              alt="Client logo"
              src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-3.svg"
            />
          </div>
          <div className="logos-6">
            <img
              className="client-logo-9"
              alt="Client logo"
              src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-2.svg"
            />
            <img
              className="client-logo-10"
              alt="Client logo"
              src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo-1.svg"
            />
            <img
              className="client-logo-11"
              alt="Client logo"
              src="https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/-client-logo.svg"
            />
          </div>
        </>
      )}
    </div>
  );
};

LogoBar.propTypes = {
  screen: PropTypes.oneOf(["desktop", "tablet", "mobile"]),
  variant: PropTypes.oneOf(["two", "three", "one"]),
};
