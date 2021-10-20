import * as fs from 'fs';

export async function DirectoryLoad() {
	console.log('Src Folder Loaded');
	fs.mkdir('./src/', (error) => {
		// console.log(error);
		console.log('Src Folder Created');
	});

	console.log('Utils Folder Created');
	fs.mkdir('./src/utils', (error) => {
		// console.log(error);
		console.log('Utils Folder Created');
	});
	console.log('Handlers Folder Created');
	fs.mkdir('./src/utils/handlers/', (error) => {
		// console.log(error);
		console.log('Handler Folder Created');
	});

	console.log('Templates Folder Created');
	fs.mkdir('./src/templates/', (error) => {
		// console.log(error);
		console.log('Templates Folder Created');
	});

	console.log('Events Folder Created');
	fs.mkdir('./src/events/', (error) => {
		// console.log(error);
		console.log('Events Folder Created');
	});

	console.log('Commands Folder Created');
	fs.mkdir('./src/commands/', (error) => {
		// console.log(error);
		console.log('Command Folder Created');
	});
}
