import { ComponentStory, ComponentMeta } from "@storybook/react";
import FileViewer from "./FileViewer";

export default {
  title: "FileViewer",
  component: FileViewer,
} as ComponentMeta<typeof FileViewer>;

const Template: ComponentStory<typeof FileViewer> = args => <FileViewer {...args} />;

export const Markdown = Template.bind({});
Markdown.args = {
  fileName: "ARTICLE.md",
  fileContent: `# Multi Project Extension 제작 회고

  ## 제작 동기
  
  현재 다니고 있는 ECount 회사는 Client/Server Framework를 자체 제작해서 사용한다.  
  신규 Framework를 제작 중인데 핵심 개념은 모듈화다.  
  가능한 모듈로 분리하고 조립하여 하나의 기능, 사이트를 제작한다는 컨셉이다.`,
};

export const File = Template.bind({});
File.args = {
  fileName: "extension.ts",
  fileContent: `// The module 'vscode' contains the VS Code extensibility API\n// Import the module and reference it with the alias vscode in your code below\nimport * as vscode from "vscode";\nimport { BookmarkExplorer } from "./explorer/bookmarkExplorer";\nimport { MultiProjectExplorer } from "./explorer/multiProjectExplorer";\nimport { TaskExplorer } from "./explorer/taskExplorer";\nimport { IRegisterCommand } from "./type";\n\nconst addSubscriptions = (context: vscode.ExtensionContext, units: any): void => {\n  context.subscriptions.push(\n    ...units.reduce((result: any, unit: any) => {\n      const commands = unit.getCommands();\n      return result.concat(commands.map((command: IRegisterCommand) => registerCommand(unit, command)));\n    }, [])\n  );\n};\n\nconst registerCommand = (thisArg: any, command: IRegisterCommand) => {\n  return vscode.commands.registerCommand(command.name, (...arg) => {\n    command.callback.call(thisArg, ...arg);\n  });\n};\n\nexport let publicInstance: any;\n// this method is called when your extension is activated\n// your extension is activated the very first time the command is executed\nexport function activate(context: vscode.ExtensionContext) {\n  const multiProjectExplorer = new MultiProjectExplorer(context.globalStorageUri.fsPath);\n  const bookmarkExplorer = new BookmarkExplorer(context.globalStorageUri.fsPath);\n  const taskExplorer = new TaskExplorer(context.globalStorageUri.fsPath);\n  publicInstance = [multiProjectExplorer, bookmarkExplorer, taskExplorer];\n  addSubscriptions(context, publicInstance);\n}\n\n// this method is called when your extension is deactivated\nexport function deactivate() {}\n`,
};
