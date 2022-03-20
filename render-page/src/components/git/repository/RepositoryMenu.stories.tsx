import { ComponentStory, ComponentMeta } from "@storybook/react";
import RepositoryMenu from "./RepositoryMenu";

export default {
  title: "RepositoryMenu",
  component: RepositoryMenu,
} as ComponentMeta<typeof RepositoryMenu>;

const Template: ComponentStory<typeof RepositoryMenu> = args => <RepositoryMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  repositoryNameList: ["vscode-multi-project", "TIL"],
  currentRepositoryName: "vscode-multi-project",
  handleCurrentRepository: () => {},
};
