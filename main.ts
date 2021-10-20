import * as cp from 'child_process';
import * as readline from 'readline';
import { DirectoryLoad } from './lib/DirectoryLoader';
import { envConfig, JsonConfig, loadAllFiles } from './lib/FileLoader';
import { exit } from 'process';
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export function main() {
	rl.question('Would you like to create a project?', async (option) => {
		if (option == 'yes') {
			rl.question('JSON Config File or ENV?\n', async (configOption) => {
				configOption.toLowerCase();
				if (configOption == 'json') {
					await DirectoryLoad();
					await JsonConfig();
					await loadAllFiles();
					//#region Cp Commands
					cp.exec('npm init -y', (error) => {
						console.log(error);
						console.log('Npm initialised');
					});
					cp.exec('npm i discord.js@12.5.3', (error) => {
						console.log(error);
						console.log('Discord is installing');
					});
					cp.exec('npm i nodemon', (error) => {
						console.log(error);
						console.log('Nodemon is installing');
					});
					//#endregion

					process.on('exit', (code) => {
						console.log(`The installer is closing down with exit code ${code}, good luck programming`);
					});
					exit();
				} else if (configOption == 'env') {
					await DirectoryLoad();
					await envConfig();
					await loadAllFiles();
					//#region Cp Commands
					cp.exec('npm init -y', (error) => {
						console.log(error);
						console.log('Npm initialised');
					});
					cp.exec('npm i discord.js@12.5.3', (error) => {
						console.log(error);
						console.log('Discord is installing');
					});
					cp.exec('npm i nodemon', (error) => {
						console.log(error);
						console.log('Nodemon is installing');
					});
					//#endregion
					process.on('exit', (code) => {
						console.log(`The installer is closing down with exit code ${code}, good luck programming`);
					});
					exit();
				} else {
					console.error('It has to be one of those!!');
				}
			});
		} else if (option == 'no') {
			process.exit();
		}
	});
}
