const fs = require('fs');
const path = require('path');
const { stdin, stdout } = require('process');
const { makeTemplates, makeENVConfig, makeJSONConfig } = require('./utils/templates/generateTemplates');
const { makeDirs } = require('./utils/directories/makeDirs');

const readLine = require('readline');

let rl = readLine.createInterface({
	input: stdin,
	output: stdout,
});

function main() {
	rl.question('Do you want to generate a project? ', (answer) => {
		if (answer.toLowerCase() === 'yes') {
			fs.mkdir(`./src/`, (err) => {
				if (makeDirs() && makeTemplates()) {
					setTimeout(() => {
						rl.question('What config file do you want? JSON or ENV?', (config) => {
							if (config.toLowerCase() === 'json') {
								makeJSONConfig();
							} else if (config.toLowerCase() === 'env') {
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
