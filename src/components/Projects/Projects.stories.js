import { Projects } from ".";

export default {
  title: "Components/Projects",
  component: Projects,
  argTypes: {
    screen: {
      options: ["desktop", "tablet", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    screen: "desktop",
    className: {},
  },
};
