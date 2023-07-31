import { MobileMockup } from ".";

export default {
  title: "Components/MobileMockup",
  component: MobileMockup,
  argTypes: {
    color: {
      options: ["black", "white"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "black",
    className: {},
    overlapGroupClassName: {},
    buttonClassName: {},
    buttonClassNameOverride: {},
    divClassName: {},
    divClassNameOverride: {},
    deviceClassName: {},
    insertYourScreenClassName: {},
    topSpeakerClassName: {},
    rectangleClassName: {},
    ellipseClassName: {},
  },
};
