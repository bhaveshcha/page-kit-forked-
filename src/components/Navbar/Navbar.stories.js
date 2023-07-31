import { Navbar } from ".";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    variant: {
      options: ["seven", "two", "three", "one", "four", "five", "eight", "six"],
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
    variant: "seven",
    screen: "desktop",
    variantScreenClassName: {},
    visible: true,
    visible1: true,
    buttonText: "Menu 3",
    buttonHasRightIcon: true,
  },
};
