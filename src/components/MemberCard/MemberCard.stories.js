import { MemberCard } from ".";

export default {
  title: "Components/MemberCard",
  component: MemberCard,
  argTypes: {
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "big"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    title: "CEO & Co-founder",
    name: "Rick Sanchez",
    variant: "two",
    size: "small",
    profileImage:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-2-4@2x.png",
    johnDoeClassName: {},
    text: "John Doe",
    text1: "Senior Product Designer",
    text2:
      "With over a decade of experience in product design, John brings a wealth of creativity and expertise to the team.",
    profileImageClassName: {},
    profileImageClassNameOverride: {},
    img:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1-1@2x.png",
    johnDoeClassNameOverride: {},
    text3: "Lead Designer",
    socialIconsTypeCircleStyle:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-10.svg",
    socialIconsImg:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-9.svg",
    socialIconsTypeCircleStyle1:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/social-icons-8.svg",
    className: {},
    twitterClassName: {},
    linkedinClassName: {},
    profileImage1:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/profile-image-placeholder-1@2x.png",
  },
};
