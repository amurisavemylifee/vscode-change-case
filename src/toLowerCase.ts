import * as vscode from "vscode";
import { commandHandler, getWordsFromText } from "./helpers";

const COMMAND_NAME = "vscode-change-string-case.toLowerCase";
const COMMAND_TITLE = "Transform to lower case";

function toLowerCaseHandler(text: string) {
  return getWordsFromText(text)
    .map((w) => w.toLowerCase())
    .join(" ");
}

export const toLowerCaseOptions = {
  handler: toLowerCaseHandler,
  name: COMMAND_NAME,
  title: COMMAND_TITLE,
};

export default vscode.commands.registerCommand(COMMAND_NAME, () =>
  commandHandler(toLowerCaseHandler)
);
