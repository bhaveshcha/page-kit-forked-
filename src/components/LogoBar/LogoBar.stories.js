import { LogoBar } from ".";

export default {
  title: "Components/LogoBar",
  component: LogoBar,
  argTypes: {
    screen: {
      options: ["desktop", "tablet", "mobile"],
      control: { type: "select" },
    },
    variant: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    screen: "desktop",
    variant: "two",
    className: {},
    clientLogoMarkBrandHubspotClassName: {},
    clientLogoMarkBrandHubspotClassNameOverride: {},
  },
};
