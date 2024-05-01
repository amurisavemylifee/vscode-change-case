import * as vscode from "vscode";
import { commandHandler, getWordsFromText } from "./helpers";

const COMMAND_NAME = "vscode-change-string-case.toKebabCase";
const COMMAND_TITLE = "Transform to kebab-case";

function toKebabCaseHandler(text: string) {
  return getWordsFromText(text)
    .map((w) => w.toLowerCase())
    .join("-");
}

export const toKebabCaseOptions = {
  handler: toKebabCaseHandler,
  name: COMMAND_NAME,
  title: COMMAND_TITLE,
};

export default vscode.commands.registerCommand(COMMAND_NAME, () =>
  commandHandler(toKebabCaseHandler)
);
