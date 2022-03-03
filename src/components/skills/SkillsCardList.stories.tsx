import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { skillCardItemStub } from "./__test__/stub";
import SkillsCardList from "./SkillsCardList";

export default {
  title: "SkillsCardList",
  component: SkillsCardList,
} as ComponentMeta<typeof SkillsCardList>;

const Template: ComponentStory<typeof SkillsCardList> = args => <SkillsCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconInfoList: [skillCardItemStub, skillCardItemStub],
};
