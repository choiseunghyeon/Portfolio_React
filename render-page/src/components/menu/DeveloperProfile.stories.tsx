import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DeveloperProfile from "./DeveloperProfile";
import { developerInfoStub } from "./__test__/stub";

export default {
  title: "DeveloperInfo",
  component: DeveloperProfile,
} as ComponentMeta<typeof DeveloperProfile>;

const Template: ComponentStory<typeof DeveloperProfile> = args => <DeveloperProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...developerInfoStub,
};
