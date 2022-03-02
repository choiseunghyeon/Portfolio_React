import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProjectCardItem from "./ProjectCardItem";
import { projectCardItemStub } from "./__test__/stub";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ProjectCardItem",
  component: ProjectCardItem,
} as ComponentMeta<typeof ProjectCardItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProjectCardItem> = args => <ProjectCardItem {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  item: projectCardItemStub,
};
