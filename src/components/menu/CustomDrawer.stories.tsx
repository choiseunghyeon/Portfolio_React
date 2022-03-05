import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomDrawer from "./CustomDrawer";
import { DrawerStub } from "./__test__/stub";

export default {
  title: "Drawer",
  component: CustomDrawer,
} as ComponentMeta<typeof CustomDrawer>;

const Template: ComponentStory<typeof CustomDrawer> = args => <CustomDrawer {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...DrawerStub,
};
