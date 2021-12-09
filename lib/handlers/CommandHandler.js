const fs = require('fs');
const path = require('path');
const Discord = require('discord.js');

/**
 *
 * @param {Discord.Client} client
 * @param {Discord} Discord
 */
module.exports = (client, Discord) => {
	const command_files = fs.readdirSync(path.resolve(__dirname, '../../commands/')).filter((file) => file.endsWith('.js'));
	for (const file of command_files) {
		const command = require(`../../commands/${file}`);
		if (command.name || command.aliases) {
			client.commands.set(command.name.toLowerCase() || command.aliases, command.execute(client, Discord));
		} else {
			continue;
		}
	}
};
