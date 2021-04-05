const fs = require('fs');
const path = require('path');

// const EXAMPLE = path.resolve(__dirname, './relative/path/from/index.js/to/the/file');

// Handlers
const commandHandlerFile = path.resolve(__dirname, '../templates/handlers/CommandHandler.js');
// const commandHandlerFile = path.resolve(__dirname, './lib/template/handler/CommandHandler.js');

const eventHandlerFile = path.resolve(__dirname, '../templates/handlers/EventHandler.js');

// Command Executor
const commandExecuterFile = path.resolve(__dirname, '../templates/events/CommandExecution.js');

const jsonMainFile = path.resolve(__dirname, '../templates/client/BotJson.js');
const envMainFile = path.resolve(__dirname, '../templates/client/BotEnv.js');

// config Files etc
const configJSON = path.resolve(__dirname, '../templates/settings/config.json');
const configENV = path.resolve(__dirname, '../templates/settings/.env');

// Test Commands and stuff
const testEventFile = path.resolve(__dirname, '../templates/events/testEvent.js');
const testCommandFile = path.resolve(__dirname, '../templates/commands/testCommand.js');

async function configJson() {
	// Loads the Bot.js JSON configuration file
	const mainFileJson = fs.readFileSync(jsonMainFile, 'utf8');
	fs.appendFileSync('./src/bot.js', mainFileJson, { encoding: 'utf8' });

	// Loads Config file JSON
	const data = fs.readFileSync(configJSON, 'utf8');
	fs.appendFileSync('./src/config.json', data, { encoding: 'utf8' });
}

async function configEnv() {
	// Loads the Bot.js ENV configuration file
	const mainFileEnv = fs.readFileSync(envMainFile, 'utf8');
	fs.appendFileSync('./src/bot.js', mainFileEnv, { encoding: 'utf8' });

	// Loads config file ENV
	const data = fs.readFileSync(configENV, 'utf8');
	fs.appendFileSync('./src/.env', data, { encoding: 'utf8' });
}

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

/**
 * @deprecated
 * ! DO NOT USE THIS FUNCTION
 */
const mainBotFile = path.resolve(__dirname, '../templates/client/bot.js');
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
