// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	// FOLD MOBILE
	//
	//
	let disposable = vscode.commands.registerCommand('extension.foldMob', () => {

		console.log('Fold mobile ran!');

		// The code you place here will be executed every time your command is executed
		const activeEditor = vscode.window.activeTextEditor;
		var allText = activeEditor.document.getText();
		var allTextArray = allText.split("\n");
		var linesToFoldMob = [];
		
		const startFoldTermMob = `<!--[if !mso ]><!-->`;
		// const endFoldTermMob = `<!--<![endif]-->`;
		const startFoldTermDT = `<div class="desktop-content">`;
		// const endFoldTermDT = `</div>`;
		
		vscode.commands.executeCommand('editor.unfoldAll'); // instead, unfold mobile first
		allTextArray.forEach(myFunc);
		
		// function myFunc(item, index, arr) {
		// 	if (item.includes(startFoldTermMob)) {
		// 		linesToFoldMob.push(index + 1);
		// 	}
		// }
		
		linesToFoldMob.forEach(e => { 
			vscode.commands.executeCommand('editor.fold', { selectionLines: [e - 1] }); 
			console.log(`folded lines ${linesToFoldMob.join(', ')}`);
		});
	});


	// FOLD DESKTOP
	//
	//
	let disposable2 = vscode.commands.registerCommand('extension.foldDT', () => {
		console.log('Fold DT ran!');
		
		// The code you place here will be executed every time your command is executed
		const activeEditor = vscode.window.activeTextEditor;
		var allText = activeEditor.document.getText();
		var allTextArray = allText.split("\n");
		var linesToFoldDT = [];
		
		const startFoldTermMob = `<!--[if !mso ]><!-->`;
		// const endFoldTermMob = `<!--<![endif]-->`;
		const startFoldTermDT = `<div class="desktop-content">`;
		// const endFoldTermDT = `</div>`;
		
		vscode.commands.executeCommand('editor.unfoldAll');
		allTextArray.forEach(myFunc);
		
		function myFunc(item, index, arr) {
			if (item.includes(startFoldTermDT)) {
				linesToFoldDT.push(index + 1);
			}
		}
		
		linesToFoldDT.forEach(e => { 
			vscode.commands.executeCommand('editor.fold', { selectionLines: [e - 1] }); 
			console.log(`folded lines ${linesToFoldDT.join(', ')}`);
		});
	});

	context.subscriptions.push(disposable, disposable2);
}

// this method is called when your extension is deactivated
function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}
