import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomAppBar from "./CustomAppBar";
import { AppBarStub } from "./__test__/stub";

export default {
  title: "AppBar",
  component: CustomAppBar,
} as ComponentMeta<typeof CustomAppBar>;

const Template: ComponentStory<typeof CustomAppBar> = args => <CustomAppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...AppBarStub,
};
