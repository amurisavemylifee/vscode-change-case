import * as vscode from "vscode";
import { commandHandler, getWordsFromText } from "./helpers";

const COMMAND_NAME = "vscode-change-string-case.toUpperCase";
const COMMAND_TITLE = "Transform to UPPER CASE";

function toUpperCaseHandler(text: string) {
  return getWordsFromText(text)
    .map((w) => w.toUpperCase())
    .join(" ");
}

export const toUpperCaseOptions = {
  handler: toUpperCaseHandler,
  name: COMMAND_NAME,
  title: COMMAND_TITLE,
};

export default vscode.commands.registerCommand(COMMAND_NAME, () =>
  commandHandler(toUpperCaseHandler)
);
