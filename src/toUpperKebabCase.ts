import * as vscode from "vscode";
import { commandHandler, getWordsFromText } from "./helpers";

const COMMAND_NAME = "vscode-change-string-case.toUpperKebabCase";
const COMMAND_TITLE = "Transform to UPPER-KEBAB-CASE";

function toUpperKebabCaseHandler(text: string) {
  return getWordsFromText(text)
    .map((w) => w.toUpperCase())
    .join("-");
}

export const toUpperKebabCaseOptions = {
  handler: toUpperKebabCaseHandler,
  name: COMMAND_NAME,
  title: COMMAND_TITLE,
};

export default vscode.commands.registerCommand(COMMAND_NAME, () =>
  commandHandler(toUpperKebabCaseHandler)
);
