import * as vscode from "vscode";
import { commandHandler, getWordsFromText } from "./helpers";

const COMMAND_NAME = "vscode-change-case.toConstantCase";
const COMMAND_TITLE = "Transform to CONSTANT_CASE";

function toConstantCaseHandler(text: string) {
  return getWordsFromText(text)
    .map((w) => w.toUpperCase())
    .join("_");
}

export const toConstantCaseOptions = {
  handler: toConstantCaseHandler,
  name: COMMAND_NAME,
  title: COMMAND_TITLE,
};

export default vscode.commands.registerCommand(COMMAND_NAME, () =>
  commandHandler(toConstantCaseHandler)
);
