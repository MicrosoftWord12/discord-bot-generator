const fs = require('fs');

function commandHandler() {
	const data = fs.readFileSync('./lib/templates/handlers/CommandHandler.js', 'utf8');
	fs.appendFileSync('./src/utils/handlers/CommandHandler.js', data, { encoding: 'utf8' });
}

async function eventHandler() {
	const data = fs.readFileSync('./lib/templates/handlers/EventHandler.js', 'utf8');
	fs.appendFileSync('./src/utils/handlers/EventHandler.js', data, { encoding: 'utf8' });
}

async function commandExecuter() {
	const data = fs.readFileSync('./lib/templates/events/CommandExecution.js', 'utf8');
	fs.appendFileSync('./src/utils/events/CommandExecutor.js', data, { encoding: 'utf8' });
}

async function botFile() {
	const data = fs.readFileSync('./lib/templates/client/bot.js', 'utf8');
	fs.appendFileSync('./src/bot.js', data, { encoding: 'utf8' });
}

module.exports = {
	commandHandler,
	eventHandler,
	commandExecuter,
	botFile,
};
