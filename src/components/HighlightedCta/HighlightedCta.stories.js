import { HighlightedCta } from ".";

export default {
  title: "Components/HighlightedCta",
  component: HighlightedCta,
  argTypes: {
    screen: {
      options: ["desktop", "tablet", "mobile"],
      control: { type: "select" },
    },
    variant: {
      options: ["two", "three", "four", "one", "five"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    screen: "desktop",
    variant: "two",
    className: {},
    headerClassName: {},
    desktopMockupMaskGroup:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/mask-group-13.png",
  },
};
