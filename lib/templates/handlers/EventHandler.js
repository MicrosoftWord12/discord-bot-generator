const { Client } = require('discord.js');
const fs = require('fs');

/**
 *
 * @param {Client} client
 * @param {Discord} Discord
 */
module.exports = (client, Discord) => {
	const files = fs.readdirSync('./src/Events').filter((file) => file.endsWith('.js'));
	console.log(`Events loaded: ${files.length}`);
	console.log(`Event Names: ${files}`);

	for (const file of files) {
		const event = require(`../Events/${file}`);
		if (event.name) {
			// client.once(event.name, (...args) => event.execute(...args));
			client.on(event.name, (...args) => event.execute(...args));
		} else {
			continue;
		}
	}
};
