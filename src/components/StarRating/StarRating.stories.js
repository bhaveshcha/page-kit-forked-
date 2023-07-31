import { StarRating } from ".";

export default {
  title: "Components/StarRating",
  component: StarRating,
  argTypes: {
    star: {
      options: ["two", "three", "one", "four", "five"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    star: "two",
    className: {},
    starIconStarIcon:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
    starIconImg: "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
    starIconStarIcon1:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
    starIconStarIcon2:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
    starIconStarIconClassName: {},
    starIconStarIcon3:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/star-icon-131.svg",
    starIconStarIconClassNameOverride: {},
    emptyStarIconClassName: {},
    emptyStarIcon:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/empty-star-icon-11.svg",
  },
};
