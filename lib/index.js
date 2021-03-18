const fs = require('fs');
const { stdin, stdout } = require('process');
const readLine = require('readline');

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
			});
		}
		commandHandler()
			.then(console.log('Command Handler Created'))
			.catch((err) => {
				if (err) {
					console.log(err);
				}
			});

		eventHandler()
			.then(console.log('Event Handler Created'))
			.catch((err) => {
				if (err) {
					console.log(err);
				}
			});
		commandExecution()
			.then(console.log('Ready for commands'))
			.catch((err) => {
				if (err) {
					console.log(err);
				}
			});

		mainFile()
			.then(console.log('Main File ready'))
			.catch((err) => {
				if (err) {
					console.log(err);
				}
			});
	});
}

questions();
async function commandHandler() {
	fs.readFile('lib/templates/CommandHandler.js', (err, data) => {
		fs.appendFileSync('src/utils/handlers/CommandHandler.js', data);
	});
}

async function eventHandler() {
	fs.readFile('lib/templates/EventHandler.js', (err, data) => {
		fs.appendFileSync('src/utils/handlers/EventHandler.js', data);
	});
}

async function commandExecution() {
	fs.readFile('lib/utils/CommandExecution.js', (err, data) => {
		fs.appendFileSync('src/utils/events/CommandExecuter.js', data);
	});
}

async function mainFile() {
	fs.readFile('lib/utils/client/bot.js', (err, data) => {
		fs.appendFileSync('src/bot.js', data);
	});
}
