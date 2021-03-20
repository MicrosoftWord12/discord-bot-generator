const fs = require('fs');
const path = require('path');
const { stdin, stdout } = require('process');

const readLine = require('readline');

const { commandHandler, eventHandler, commandExecuter, botFile, testEvent, testCommand } = require('./dcHandlers');

let rl = readLine.createInterface({
	input: stdin,
	output: stdout,
});

function questions() {
	rl.question('Do you want to generate a project? ', (answer) => {
		if (answer === 'yes') {
			fs.mkdir(`./src/`, (err) => {
				fs.mkdir(`./src/templates`, (err) => {
					console.log('Templates Done');
				});

				fs.mkdir('./src/templates/command', (err) => {
					console.log("Templates's Commands Done");
				});

				fs.mkdir('./src/templates/events', (err) => {
					console.log("Template's Events Done");
				});

				fs.mkdir(`./src/commands`, (err) => {
					console.log('Commands Done');
				});

				fs.mkdir(`./src/events`, (err) => {
					console.log('Events Done');
				});

				fs.mkdir(`./src/utils`, (err) => {
					console.log('Utils Done');
				});

				fs.mkdir(`./src/utils/handlers`, (err) => {
					console.log('Handlers Done');
				});

				fs.mkdir(`./src/utils/events`, (err) => {
					console.log(`Utility Events Done`);
				});
				testCommand()
					.then(console.log('Test Command Loaded'))
					.catch((err) => console.log(err));

				testEvent()
					.then(console.log('Test Event Loaded'))
					.catch((err) => console.log(err));

				botFile()
					.then(console.log('Main Bot File Loaded'))
					.catch((err) => console.log(err));

				commandHandler()
					.then(console.log('Command Handler Loaded'))
					.catch((err) => console.log(err));

				eventHandler()
					.then(console.log('Event Handler Loaded'))
					.catch((err) => console.log(err));

				commandExecuter()
					.then(console.log('Command Executor Loaded'))
					.catch((err) => console.log(err));
				process.on('exit', (code) => {
					return console.log(`I am closing down with the code ${code}, Good luck coding`);
				});
				process.exit();
			});
		}
	});
}

module.exports = questions;
