const Discord = require('discord.js');
module.exports = {
	// Where test is replace with command Name
	name: test,
	once: true,

	/**
	 *
	 * @param {Discord.Client} client
	 * @param {Discord.Message} message
	 * @param {string[]} args
	 */
	execute(client, message, args) {
		message.channel.send('Test Command!!!');
	},
};
