// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "open-in-pure-data" is now active!');

	// .pdファイルをPure Dataで開くコマンド
	const disposable = vscode.commands.registerCommand('open-in-pure-data.openPd', async (uri: vscode.Uri) => {
		let filePath = uri?.fsPath;
		if (!filePath) {
			const active = vscode.window.activeTextEditor?.document.uri.fsPath;
			if (active && active.endsWith('.pd')) {
				filePath = active;
			}
		}
		if (!filePath || !filePath.endsWith('.pd')) {
			vscode.window.showErrorMessage('.pdファイルを選択してください');
			return;
		}
		const exec = require('child_process').exec;
		exec(`open -n -a "/Applications/Pd-0.55-2.app" "${filePath}"`, (err: any) => {
			if (err) {
				vscode.window.showErrorMessage('Pure Dataの起動に失敗しました: ' + err.message);
			} else {
				vscode.window.showInformationMessage('Pure Dataで開きました: ' + filePath);
			}
		});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
