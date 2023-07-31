import { SocialIcons } from ".";

export default {
  title: "Components/SocialIcons",
  component: SocialIcons,
  argTypes: {
    type: {
      options: ["circle", "default"],
      control: { type: "select" },
    },
    style: {
      options: ["primary", "white", "color", "secondary"],
      control: { type: "select" },
    },
    social: {
      options: ["facebook", "twitter", "dribbble", "behance", "linked-in", "instagram", "you-tube", "github"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "circle",
    style: "primary",
    social: "facebook",
    typeCircleStyleClassName: {},
    typeCircleStyle:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-white--social-youtube.svg",
    img:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-white--social-instagram.svg",
    typeCircleStyle1:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-46.svg",
    typeCircleStyle2:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-twitter.svg",
    typeCircleStyle3:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-dribbble.svg",
    typeCircleStyle4:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-secondary--social-instagram.svg",
    typeCircleStyle5:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/type-circle--style-white--social-dribbble.svg",
    typeCircleStyle6:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-42.svg",
  },
};
