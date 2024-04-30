import * as vscode from "vscode";

export function getWordsFromText(text: string) {
  let wordsArr = [text];

  const spiltFn = (handler: (string: string) => string[]) => {
    return wordsArr
      .map((item) => {
        return handler(item);
      })
      .flat(1);
  };

  wordsArr = spiltFn((text) => text.split(" "));
  wordsArr = spiltFn((text) =>
    text.replace(/([A-Z])([a-z])/g, " $1$2")?.split(" ")
  );
  wordsArr = spiltFn((text) =>
    text.replace(/([a-z_-])([A-Z])/g, "$1 $2")?.split(" ")
  );
  wordsArr = spiltFn((text) => text.split("-"));
  wordsArr = spiltFn((text) => text.split("_"));
  wordsArr = spiltFn((text) => text.split("."));
  wordsArr = spiltFn((text) => text.split("/"));
  wordsArr = wordsArr.filter((word) => word.length);

  return wordsArr;
}

export function commandHandler(fn: (text: string) => string) {
  const editor = vscode.window.activeTextEditor as vscode.TextEditor;

  editor.selections = editor.selections.map((selection) => {
    if (selection.isEmpty) {
      const range = editor.document.getWordRangeAtPosition(
        editor.selection.active,
        /\w+(?:[-_]\w+)*/
      ) as vscode.Range;
      return new vscode.Selection(range.start, range.end);
    }

    return selection;
  });

  const selections = editor.selections;

  return editor.edit((builder) => {
    selections.forEach((selection, idx) => {
      builder.replace(
        selection,
        selections.map((selection) => fn(editor.document.getText(selection)))[
          idx
        ]
      );
    });
  });
}
