import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProjectCardList from "./ProjectCardList";
import { projectCardItemStub } from "./__test__/stub";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ProjectCardList",
  component: ProjectCardList,
} as ComponentMeta<typeof ProjectCardList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProjectCardList> = args => <ProjectCardList {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  projectInfoList: [projectCardItemStub, projectCardItemStub],
};
