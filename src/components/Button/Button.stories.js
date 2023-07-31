import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary", "secondary-color", "tertiary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    hasRightIcon: true,
    text: "Get Started",
    hasLeftIcon: true,
    type: "primary",
    className: {},
    labelClassName: {},
  },
};
