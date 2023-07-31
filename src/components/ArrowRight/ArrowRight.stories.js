import { ArrowRight } from ".";

export default {
  title: "Components/ArrowRight",
  component: ArrowRight,
  argTypes: {
    size: {
      options: ["twelve", "sixteen", "twenty"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "twelve",
    className: {},
  },
};
