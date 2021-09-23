const Discord = require('discord.js');
module.exports = {
	name: 'test', // Where test is replace with command Name
	description: 'This is a test', // Where description is put the description of the command
	aliases: [], // Aliases for commands (more names)

	/**
	 *
	 * @param {Discord.Client} client
	 * @param {Discord.Message} message
	 * @param {string[]} args
	 */
	// Discord Param is optional
	execute(client, message, args) {
		message.channel.send('Test Command!!!');
	},
};
