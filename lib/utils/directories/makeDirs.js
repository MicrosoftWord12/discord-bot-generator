const fs = require('fs');

async function makeDirs() {
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

	fs.mkdir(`./src/events/client`, (err) => {
		console.log('Client Event Folder Done');
	});

	fs.mkdir(`./src/events/executor`, (err) => {
		console.log(`Executor Event Folder Done`);
	});

	fs.mkdir(`./src/events/guild`, (err) => {
		console.log(`Guild Event Folder Done`);
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
	return true;
}

module.exports = {
	makeDirs,
};
