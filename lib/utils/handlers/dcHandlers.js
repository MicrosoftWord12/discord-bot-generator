const fs = require('fs');

async function commandHandler() {
	fs.readFileSync('./lib/templates/handlers/CommandHandler.js', (err, data) => {
		fs.appendFileSync('src/utils/handlers/CommandHandler.js', data);
	});
}

// async function commandHandler() {
// 	fs.readFileSync('../../templates/handlers/CommandHandler.js', (err, data) => {
// 		fs.appendFileSync('src/utils/handlers/CommandHandler.js', data);
// 	});
// }

// async function eventHandler() {
// 	fs.readFileSync('./lib/templates/handlers/EventHandler.js', (err, data) => {
// 		fs.appendFileSync('src/utils/handlers/EventHandler.js', data);
// 	});
// }

// async function commandExecution() {
// 	fs.readFileSync('./lib/templates/events/CommandExecution.js', (err, data) => {
// 		fs.appendFileSync('src/utils/events/CommandExecuter.js', data);
// 	});
// }

// async function mainFile() {
// 	fs.readFileSync('./lib/index.js', (err, data) => {
// 		fs.appendFileSync('src/bot.js', data);
// 	});
// }

module.exports = {
	commandHandler,
	// eventHandler,
	// commandExecution,
	// mainFile,
};
