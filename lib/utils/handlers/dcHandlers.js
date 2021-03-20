const fs = require('fs');
const path = require('path');

const EXAMPLE = path.resolve(__dirname, './relative/path/from/index.js/to/the/file');
// const commandHandlerFile = path.resolve(__dirname, './lib/templates/handlers/CommandHandler.js');
// const commandHandlerFile = path.resolve(__dirname, './templates/handlers/CommandHandler.js');
const commandHandlerFile = path.resolve(__dirname, '../../templates/handlers/CommandHandler.js');
// const eventHandlerFile = path.resolve(__dirname, './lib/templates/handlers/EventHandler.js');
// const eventHandlerFile = path.resolve(__dirname, './templates/handlers/EventHandler.js');
const eventHandlerFile = path.resolve(__dirname, '../../templates/handlers/EventHandler.js');
// const commandExecuterFile = path.resolve(__dirname, './lib/templates/events/CommandExecution.js');
const commandExecuterFile = path.resolve(__dirname, '../../templates/events/CommandExecution.js');
// const mainBotFile = path.resolve(__dirname, './templates/client/bot.js');
const mainBotFile = path.resolve(__dirname, '../../templates/client/bot.js');

async function commandHandler() {
	const data = fs.readFileSync(commandHandlerFile, 'utf8');
	fs.appendFileSync('./src/utils/handlers/CommandHandler.js', data, { encoding: 'utf8' });
}

async function eventHandler() {
	const data = fs.readFileSync(eventHandlerFile, 'utf8');
	fs.appendFileSync('./src/utils/handlers/EventHandler.js', data, { encoding: 'utf8' });
}

async function commandExecuter() {
	const data = fs.readFileSync(commandExecuterFile, 'utf8');
	fs.appendFileSync('./src/utils/events/CommandExecutor.js', data, { encoding: 'utf8' });
}

async function botFile() {
	const data = fs.readFileSync(mainBotFile, 'utf8');
	fs.appendFileSync('./src/bot.js', data, { encoding: 'utf8' });
}

module.exports = {
	commandHandler,
	eventHandler,
	commandExecuter,
	botFile,
};
