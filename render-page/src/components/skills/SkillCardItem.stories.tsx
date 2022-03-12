import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SkillCardItem from "./SkillCardItem";
import { skillCardItemStub } from "./__test__/stub";

export default {
  title: "SkillCardItem",
  component: SkillCardItem,
} as ComponentMeta<typeof SkillCardItem>;

const Template: ComponentStory<typeof SkillCardItem> = args => <SkillCardItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...skillCardItemStub,
};
