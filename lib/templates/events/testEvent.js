const Discord = require('discord.js');

module.exports = {
	// Where event is put in a discord event like 'ready'.
	name: 'EVENT',
	once: true,

	/**
	 *
	 * @param {Discord.Client} client
	 */
	execute(client) {
		console.log(`The ${client.user.tag} is online!!`);
	},
};
