import { Team } from ".";

export default {
  title: "Components/Team",
  component: Team,
  argTypes: {
    screen: {
      options: ["tablet", "desktop", "tablet-horizontal", "mobile"],
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
    screen: "tablet",
    variant: "two",
    className: {},
  },
};
