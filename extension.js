// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "helloworld-minimal-sample" is now active!');

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		const activeEditor = vscode.window.activeTextEditor;
		allText = activeEditor.document.getText();
		var allTextArray = allText.split("\n");
		var linesToFoldMob = [];

		
		const startFoldTermMob = `<!--[if !mso ]><!-->`;
		// const endFoldTermMob = `<!--<![endif]-->`;
		const startFoldTermDT = `<div class="desktop-content">`;
		// const endFoldTermDT = `</div>`;
		
		const lineNumberToFold = 3;
		
		allTextArray.forEach(myFunc);
		
		function myFunc(item, index, arr) {
			if (item.includes(startFoldTermMob)) {
				console.log(index);
			}
			// linesToFoldMob.push(allTextArray.indexOf(e) + 1);
			// console.log(e);
		}




		// 1 - for each startFoldTermMob mobile search result
		// 2 - grab the line of code it is on
		// 3 - fold the line at that number

		// 4 - check if startFoldTermMob has run
		// 5 - if not, do nothing, execute 1-3 of above but for startFoldTermDT
		// 6 - if it has, first unfold mobile lines, then execute 1-3 of above but for startFoldTermDT


		// fold the specific line of in active editor
		// filter through activeEditor looking for startFoldTermMob
		console.log(linesToFoldMob);
		vscode.commands.executeCommand('editor.fold', { selectionLines: [lineNumberToFold]});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}
