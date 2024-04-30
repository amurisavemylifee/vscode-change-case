import * as vscode from "vscode";
import { commandHandler, getWordsFromText } from "./helpers";

const COMMAND_NAME = "vscode-change-case.toCamelCase";
const COMMAND_TITLE = "Transform to camelCase";

function toCamelCaseHandler(text: string) {
  return getWordsFromText(text).reduce((acc, word, idx) => {
    if (idx === 0) {
      return acc + word.toLowerCase();
    }
    return acc + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }, "");
}

export const toCamelCaseOptions = {
  handler: toCamelCaseHandler,
  name: COMMAND_NAME,
  title: COMMAND_TITLE,
};

export default vscode.commands.registerCommand(COMMAND_NAME, () =>
  commandHandler(toCamelCaseHandler)
);
