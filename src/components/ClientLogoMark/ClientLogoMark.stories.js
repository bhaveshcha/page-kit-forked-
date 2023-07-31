import { ClientLogoMark } from ".";

export default {
  title: "Components/ClientLogoMark",
  component: ClientLogoMark,
  argTypes: {
    brand: {
      options: [
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
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    brand: "hubspot",
    className: {},
  },
};
