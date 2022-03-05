import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MyTimeLine from "./MyTimeLine";
import { myTimeLineStub } from "./__test__/stub";
export default {
  title: "MyTimeLine",
  component: MyTimeLine,
} as ComponentMeta<typeof MyTimeLine>;

const Template: ComponentStory<typeof MyTimeLine> = args => <MyTimeLine {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...myTimeLineStub,
};
