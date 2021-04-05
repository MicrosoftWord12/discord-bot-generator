const { commandHandler, eventHandler, commandExecuter, botFile, testEvent, testCommand, configJson, configEnv } = require('../dcHandlers');

async function makeTemplates() {
	commandHandler()
		.then(console.log('Command Handler Loaded'))
		.catch((err) => console.log(err));

	eventHandler()
		.then(console.log('Event Handler Loaded'))
		.catch((err) => console.log(err));

	commandExecuter()
		.then(console.log('Command Executor Loaded'))
		.catch((err) => console.log(err));

	testEvent()
		.then(console.log('Test Template Loaded'))
		.catch((err) => console.log(err));

	testCommand()
		.then(console.log('Test Template Loaded'))
		.catch((err) => console.log(err));
}

async function makeJSONConfig() {
	configJson()
		.then(console.log('JSON Config File Loaded'))
		.catch((err) => console.log(err));
}

async function makeENVConfig() {
	configEnv()
		.then(console.log('ENV Config File Loaded'))
		.catch((err) => console.log(err));
}

module.exports = {
	makeTemplates,
	makeJSONConfig,
	makeENVConfig,
};
