import * as vscode from "vscode";
import { commandHandler, getWordsFromText } from "./helpers";

const COMMAND_NAME = "vscode-change-string-case.toSnakeCase";
const COMMAND_TITLE = "Transform to snake_case";

function toSnakeCaseHandler(text: string) {
  return getWordsFromText(text)
    .map((w) => w.toLowerCase())
    .join("_");
}

export const toSnakeCaseOptions = {
  handler: toSnakeCaseHandler,
  name: COMMAND_NAME,
  title: COMMAND_TITLE,
};

export default vscode.commands.registerCommand(COMMAND_NAME, () =>
  commandHandler(toSnakeCaseHandler)
);
