import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentLocation from "./ContentLocation";

export default {
  title: "ContentLocation",
  component: ContentLocation,
} as ComponentMeta<typeof ContentLocation>;

const Template: ComponentStory<typeof ContentLocation> = args => <ContentLocation {...args} />;

export const RootLocation = Template.bind({});
RootLocation.args = {
  contentPath: "",
  handleContentPath: () => {},
};

export const FolderLocation = Template.bind({});
FolderLocation.args = {
  ...RootLocation.args,
  contentPath: "TIL/contents/Redux",
};

export const FileLocation = Template.bind({});
FileLocation.args = {
  ...RootLocation.args,
  contentPath: "TIL/contents/Redux/reselect.md",
};
