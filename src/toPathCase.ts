import * as vscode from "vscode";
import { commandHandler, getWordsFromText } from "./helpers";

const COMMAND_NAME = "vscode-change-string-case.toPathCase";
const COMMAND_TITLE = "Transform to path/case";

function toPathCaseHandler(text: string) {
  return getWordsFromText(text)
    .map((w) => w.toLowerCase())
    .join("/");
}

export const toPathCaseOptions = {
  handler: toPathCaseHandler,
  name: COMMAND_NAME,
  title: COMMAND_TITLE,
};

export default vscode.commands.registerCommand(COMMAND_NAME, () =>
  commandHandler(toPathCaseHandler)
);
