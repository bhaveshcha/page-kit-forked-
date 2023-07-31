import { ArrowLeft } from ".";

export default {
  title: "Components/ArrowLeft",
  component: ArrowLeft,
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
