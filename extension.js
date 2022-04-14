const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	// FOLD MOBILE
	//
	//
	let disposable = vscode.commands.registerCommand('extension.foldMob', () => {

		console.log('Fold mobile ran!');

		const activeEditor = vscode.window.activeTextEditor;
		var allText = activeEditor.document.getText();
		var allTextArray = allText.split("\n");
		var linesToFoldMob = [];
		
		const startFoldTermMob = `<!--[if !mso ]><!-->`;
		
		vscode.commands.executeCommand('editor.unfoldAll'); // instead, unfold mobile first
		allTextArray.forEach(myFunc);
		
		function myFunc(item, index, arr) {
			if (item.includes(startFoldTermMob)) {
				linesToFoldMob.push(index + 1);
			}
		}
		
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
		
		const activeEditor = vscode.window.activeTextEditor;
		var allText = activeEditor.document.getText();
		var allTextArray = allText.split("\n");
		var linesToFoldDT = [];
		
		const startFoldTermDT = `<div class="desktop-content">`;
		
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
