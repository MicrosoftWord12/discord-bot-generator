const fs = require('fs');
const path = require('path');

// const EXAMPLE = path.resolve(__dirname, './relative/path/from/index.js/to/the/file');

// Handlers
const commandHandlerFile = path.resolve(__dirname, '../../templates/handlers/CommandHandler.js');
const eventHandlerFile = path.resolve(__dirname, '../../templates/handlers/EventHandler.js');
const commandExecuterFile = path.resolve(__dirname, '../../templates/events/CommandExecution.js');
const mainBotFile = path.resolve(__dirname, '../../templates/client/bot.js');

// config Files etc
const configJSON = path.resolve(__dirname, '../../templates/settings/config.json');
const configENV = path.resolve(__dirname, '../../templates/settings/.env');

async function configJson() {
	const data = fs.readFileSync(configJSON, 'utf8');
	fs.appendFileSync('./src/config.json', data, { encoding: 'utf8' });
}

async function configEnv() {
	const data = fs.readFileSync(configENV, 'utf8');
	fs.appendFileSync('./src/.env', data, { encoding: 'utf8' });
}

// Test Commands and stuff
const testEventFile = path.resolve(__dirname, '../include/Events/testEvent.js');
const testCommandFile = path.resolve(__dirname, '../include/commands/testCommand.js');

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

async function testEvent() {
	const data = fs.readFileSync(testEventFile, 'utf8');
	fs.appendFileSync('./src/templates/events/testEvent.js', data, { encoding: 'utf8' });
}

async function testCommand() {
	const data = fs.readFileSync(testCommandFile, 'utf8');
	fs.appendFileSync('./src/templates/command/testCommand.js', data, { encoding: 'utf8' });
}

module.exports = {
	commandHandler,
	eventHandler,
	commandExecuter,
	botFile,
	testEvent,
	testCommand,
	configJson,
	configEnv,
};
