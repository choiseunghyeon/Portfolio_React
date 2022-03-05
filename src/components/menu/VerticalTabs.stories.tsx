import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import VerticalTabs from "./VerticalTabs";
import { verticalTabsStub } from "./__test__/stub";

export default {
  title: "VerticalTabs",
  component: VerticalTabs,
} as ComponentMeta<typeof VerticalTabs>;

const Template: ComponentStory<typeof VerticalTabs> = args => <VerticalTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...verticalTabsStub,
};
