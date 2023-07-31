import { Testimonials } from ".";

export default {
  title: "Components/Testimonials",
  component: Testimonials,
  argTypes: {
    screen: {
      options: ["desktop", "default", "tablet-horizontal", "tablet", "mobile"],
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
  },
};
