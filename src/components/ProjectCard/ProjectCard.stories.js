import { ProjectCard } from ".";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
  argTypes: {
    size: {
      options: ["small", "big"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    category: "Category",
    shortInfo: "Short Description",
    projectName: "Project Title",
    size: "small",
    className: {},
    imagePlaceholder:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/image-placeholder-1-3@2x.png",
    img:
      "https://generation-sessions.s3.amazonaws.com/9e6de5936eab2f8d0051f2bd4ac889f3/img/image-placeholder-1-13@2x.png",
    shortDescriptionClassName: {},
  },
};
