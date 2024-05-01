import * as vscode from "vscode";

import toCamelCase, { toCamelCaseOptions } from "./toCamelCase";
import toPascalCase, { toPascalCaseOptions } from "./toPascalCase";
import toKebabCase, { toKebabCaseOptions } from "./toKebabCase";
import toConstantCase, { toConstantCaseOptions } from "./toConstantCase";
import toSnakeCase, { toSnakeCaseOptions } from "./toSnakeCase";
import toLowerCase, { toLowerCaseOptions } from "./toLowerCase";
import toUpperCase, { toUpperCaseOptions } from "./toUpperCase";
import toUpperKebabCase, { toUpperKebabCaseOptions } from "./toUpperKebabCase";
import toDotCase, { toDotCaseOptions } from "./toDotCase";
import toPathCase, { toPathCaseOptions } from "./toPathCase";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    toCamelCase,
    toPascalCase,
    toKebabCase,
    toConstantCase,
    toSnakeCase,
    toLowerCase,
    toUpperCase,
    toUpperKebabCase,
    toDotCase,
    toPathCase
  );

  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      [{ scheme: "file" }, { scheme: "untitled" }],
      new ChangeCase(),
      {
        providedCodeActionKinds: [vscode.CodeActionKind.QuickFix],
      }
    )
  );
}

export function deactivate() {}

function getCasesMapping() {
  const workspaceConf = vscode.workspace.getConfiguration(
    "vscode-change-string-case"
  );

  const CASES_MAPPING = [];

  if (workspaceConf.get("useCamelCaseInQuickFixes"))
    CASES_MAPPING.push(toCamelCaseOptions);
  if (workspaceConf.get("usePascalCaseInQuickFixes"))
    CASES_MAPPING.push(toPascalCaseOptions);
  if (workspaceConf.get("useKebabCaseInQuickFixes"))
    CASES_MAPPING.push(toKebabCaseOptions);
  if (workspaceConf.get("useConstantCaseInQuickFixes"))
    CASES_MAPPING.push(toConstantCaseOptions);
  if (workspaceConf.get("useSnakeCaseInQuickFixes"))
    CASES_MAPPING.push(toSnakeCaseOptions);
  if (workspaceConf.get("useLowerCaseInQuickFixes"))
    CASES_MAPPING.push(toLowerCaseOptions);
  if (workspaceConf.get("useUpperCaseInQuickFixes"))
    CASES_MAPPING.push(toUpperCaseOptions);
  if (workspaceConf.get("useUpperKebabCaseInQuickFixes"))
    CASES_MAPPING.push(toUpperKebabCaseOptions);
  if (workspaceConf.get("useDotCaseInQuickFixes"))
    CASES_MAPPING.push(toDotCaseOptions);
  if (workspaceConf.get("usePathCaseInQuickFixes"))
    CASES_MAPPING.push(toPathCaseOptions);

  return CASES_MAPPING;
}

export class ChangeCase implements vscode.CodeActionProvider {
  public provideCodeActions(): vscode.CodeAction[] | undefined {
    const actions: vscode.CodeAction[] = [];

    for (const { name, title } of getCasesMapping()) {
      const action = new vscode.CodeAction(
        title,
        vscode.CodeActionKind.QuickFix
      );

      action.command = {
        command: name,
        title,
      };

      actions.push(action);
    }
    return actions;
  }
}
