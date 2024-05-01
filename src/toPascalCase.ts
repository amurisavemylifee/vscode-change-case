import * as vscode from "vscode";
import { commandHandler, getWordsFromText } from "./helpers";

const COMMAND_NAME = "vscode-change-string-case.toPascalCase";
const COMMAND_TITLE = "Transform to PascalCase";

function toPascalCaseHandler(text: string) {
  return getWordsFromText(text).reduce((acc, word) => {
    return acc + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }, "");
}

export const toPascalCaseOptions = {
  handler: toPascalCaseHandler,
  name: COMMAND_NAME,
  title: COMMAND_TITLE,
};

export default vscode.commands.registerCommand(COMMAND_NAME, () =>
  commandHandler(toPascalCaseHandler)
);
