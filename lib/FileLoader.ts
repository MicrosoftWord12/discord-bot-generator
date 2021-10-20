import * as fs from 'fs';
import * as path from 'path';

// Handlers
const commandHandleFile = path.resolve(__dirname, './handlers/CommandHandler.js');
const eventHandlerFile = path.resolve(__dirname, './handlers/EventHandler.js');

// Command Executor
const commandExecutorFile = path.resolve(__dirname, './handlers/message.js');

// Main Bot.js files
const jsonMainFile = path.resolve(__dirname, './botFiles/BotJson.js');
const envMainFile = path.resolve(__dirname, './botFiles/BotEnv.js');

// Test command/event
const testEventFile = path.resolve(__dirname, './testEvent/testEvent.js');
const testCommandFile = path.resolve(__dirname, './testCommands/testCommand.js');

// Config Files
const configJsonFile = path.resolve(__dirname, './configs/config.json');
const configEnvFile = path.resolve(__dirname, './configs/.env');

export async function configJson() {
	const mainJsonFile = fs.readFileSync(jsonMainFile, 'utf-8');
	fs.appendFileSync('./src/bot.js', mainJsonFile, { encoding: 'utf-8' });
}

export async function configEnv() {
	const mainEnvFile = fs.readFileSync(envMainFile, 'utf-8');
	fs.appendFileSync('./src/bot.js', mainEnvFile, { encoding: 'utf-8' });
}

export async function commandExecutor() {
	const executorFile = fs.readFileSync(commandExecutorFile, 'utf-8');
	fs.appendFileSync('./src/events/message.js', executorFile, { encoding: 'utf-8' });
}

export async function commandHandler() {
	const commandHandlerFile = fs.readFileSync(commandHandleFile, 'utf-8');
	fs.appendFileSync('./src/utils/handlers/commandHandler.js', commandHandlerFile, { encoding: 'utf-8' });
}

export async function eventHandler() {
	const eventHandler = fs.readFileSync(eventHandlerFile, 'utf-8');
	fs.appendFileSync('./src/utils/handlers/eventHandler.js', eventHandler, { encoding: 'utf-8' });
}

export async function JsonConfig() {
	const readJsonConfig = fs.readFileSync(configJsonFile, 'utf-8');
	fs.appendFileSync('./src/config.json', readJsonConfig, { encoding: 'utf-8' });
	return true;
}

export async function envConfig() {
	const readEnvFile = fs.readFileSync(configEnvFile, 'utf-8');
	fs.appendFileSync('./src/.env', readEnvFile, { encoding: 'utf-8' });
	return true;
}

export async function testEvent() {
	const loadTestEvent = fs.readFileSync(testEventFile, 'utf-8');
	fs.appendFileSync('./src/templates/testEvent.js', loadTestEvent, { encoding: 'utf-8' });
}

export async function testCommand() {
	const loadTestCommand = fs.readFileSync(testCommandFile, 'utf-8');
	fs.appendFileSync('./src/templates/testCommand.js', loadTestCommand, { encoding: 'utf-8' });
}

export async function loadAllFiles() {
	console.log('Config Json Loaded');
	await configJson();

	console.log('Command Executor Loaded');
	await commandExecutor();

	console.log('Command/Event Handler Loaded');
	await commandHandler();
	await eventHandler();

	console.log('Test Event and Command Loaded');
	await testEvent();
	await testCommand();
}
