const fs = require('fs');
const path = require('path');
const { stdin, stdout } = require('process');

const readLine = require('readline');

const { commandHandler, eventHandler, commandExecuter, botFile } = require('./dcHandlers');

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

				botFile()
					.then(console.log('Main Bot File Loaded'))
					.catch((err) => console.log(err));

				try {
					commandHandler();
				} catch (error) {
					console.error(error);
				}

				eventHandler()
					.then(console.log('Event Handler Loaded'))
					.catch((err) => console.log(err));

				commandExecuter()
					.then(console.log('Command Executor Loaded'))
					.catch((err) => console.log(err));
			});
		}

		// eventHandler()
		// 	.then(console.log('Event Handler Created'))
		// 	.catch((err) => {
		// 		if (err) {
		// 			console.log(err);
		// 		}
		// 	});
		// commandExecution()
		// 	.then(console.log('Ready for commands'))
		// 	.catch((err) => {
		// 		if (err) {
		// 			console.log(err);
		// 		}
		// 	});

		// mainFile()
		// 	.then(console.log('Main File ready'))
		// 	.catch((err) => {
		// 		if (err) {
		// 			console.log(err);
		// 		}
		// 	});
	});
}

module.exports = questions;
