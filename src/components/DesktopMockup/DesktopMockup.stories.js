import { DesktopMockup } from ".";

export default {
  title: "Components/DesktopMockup",
  component: DesktopMockup,
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
    desktopGrayClassName: {},
    maskGroupClassName: {},
    maskGroup: "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-7.png",
    topSpeakerCamClassName: {},
    rectangleClassName: {},
    ellipseClassName: {},
    ellipseClassNameOverride: {},
  },
};
