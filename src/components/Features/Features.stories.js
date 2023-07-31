import { Features } from ".";

export default {
  title: "Components/Features",
  component: Features,
  argTypes: {
    screen: {
      options: ["desktop", "tablet-horizontal", "tablet", "mobile"],
      control: { type: "select" },
    },
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    screen: "desktop",
    variant: "two",
    className: {},
    ourFeaturesClassName: {},
    flyingSaucerFlyingSaucer:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/flyingsaucer-4.svg",
    magicWandMagicWand:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/magicwand-4.svg",
    boundingBoxBoundingBox:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/boundingbox-4.svg",
    packagePackage: "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/package-4.svg",
  },
};
