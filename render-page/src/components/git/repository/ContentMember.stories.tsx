import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentMember from "./ContentMember";

export default {
  title: "ContentMember",
  component: ContentMember,
} as ComponentMeta<typeof ContentMember>;

const Template: ComponentStory<typeof ContentMember> = args => <ContentMember {...args} />;

export const FileMember = Template.bind({});
FileMember.args = {
  name: "extension.ts",
  path: "src/extension.ts",
  type: "file",
};

export const FolderMember = Template.bind({});
FolderMember.args = {
  name: "explorer",
  path: "src/explorer",
  type: "dir",
};
