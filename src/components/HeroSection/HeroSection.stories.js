import { HeroSection } from ".";

export default {
  title: "Components/HeroSection",
  component: HeroSection,
  argTypes: {
    variant: {
      options: ["hero-4", "hero-5", "hero-3", "hero-1", "hero-6", "hero-2"],
      control: { type: "select" },
    },
    screen: {
      options: ["desktop", "tablet", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "hero-4",
    screen: "desktop",
    className: {},
    insertYourMockup:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/insert-your-mockup-image-here-9.png",
  },
};
