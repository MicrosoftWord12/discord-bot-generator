const fs = require('fs');
const cp = require('child_process');
const { stdin, stdout } = require('process');
const { makeTemplates, makeENVConfig, makeJSONConfig } = require('./utils/templates/generateTemplates');
const { makeDirs } = require('./utils/directories/makeDirs');

const readLine = require('readline');

let rl = readLine.createInterface({
	input: stdin,
	output: stdout,
});

function main() {
	rl.question('Do you want to generate a project?', (answer) => {
		if (answer.toLowerCase() === 'yes') {
			fs.mkdir(`./src/`, (err) => {
				if (makeDirs() && makeTemplates()) {
					cp.execSync('npm init -y && npm i discord.js@12.5.3 && npm i nodemon');
					console.log('NPM stuff and all requirements are being loaded');
					setTimeout(() => {
						rl.question('What config file do you want? JSON or ENV? ', (config) => {
							if (config.toLowerCase() === 'json') {
								makeJSONConfig();
							} else if (config.toLowerCase() === 'env') {
								cp.execSync('npm i dotenv');
								makeENVConfig();
							}
							process.on('exit', (code) => {
								return console.log(`I am closing down with the code ${code}, Good luck coding`);
							});
							process.exit();
						});
					}, 2000);
				}
			});
		}
	});
}

module.exports = {
	main,
};
