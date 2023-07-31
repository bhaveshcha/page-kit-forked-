/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  brand:
    | "hubspot"
    | "stripe"
    | "sketch"
    | "airbnb"
    | "loom"
    | "kickstarter"
    | "paypal"
    | "google"
    | "product-hunt"
    | "zoom"
    | "shopify"
    | "apple"
    | "slack"
    | "eventbrite"
    | "spotify"
    | "figma"
    | "dropbox"
    | "amazon"
    | "mailchimp"
    | "discord"
    | "react";
  className: any;
}

export const ClientLogoMark = ({ brand, className }: Props): JSX.Element => {
  return <div className={`client-logo-mark ${brand} ${className}`} />;
};

ClientLogoMark.propTypes = {
  brand: PropTypes.oneOf([
    "hubspot",
    "stripe",
    "sketch",
    "airbnb",
    "loom",
    "kickstarter",
    "paypal",
    "google",
    "product-hunt",
    "zoom",
    "shopify",
    "apple",
    "slack",
    "eventbrite",
    "spotify",
    "figma",
    "dropbox",
    "amazon",
    "mailchimp",
    "discord",
    "react",
  ]),
};
