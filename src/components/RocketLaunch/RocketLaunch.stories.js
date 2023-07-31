import { RocketLaunch } from ".";

export default {
  title: "Components/RocketLaunch",
  component: RocketLaunch,
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
