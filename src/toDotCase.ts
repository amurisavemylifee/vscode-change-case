import * as vscode from "vscode";
import { commandHandler, getWordsFromText } from "./helpers";

const COMMAND_NAME = "vscode-change-string-case.toDotCase";
const COMMAND_TITLE = "Transform to dot.case";

function toDotCaseHandler(text: string) {
  return getWordsFromText(text)
    .map((w) => w.toLowerCase())
    .join(".");
}

export const toDotCaseOptions = {
  handler: toDotCaseHandler,
  name: COMMAND_NAME,
  title: COMMAND_TITLE,
};

export default vscode.commands.registerCommand(COMMAND_NAME, () =>
  commandHandler(toDotCaseHandler)
);
