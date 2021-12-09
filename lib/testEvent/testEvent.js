const Discord = require('discord.js');
// const { execute } = require('../testCommands/testCommand');

/**
 *
 * @param {Discord.Client} client
 * @param {Discord} Discord
 */
module.exports = (client, Discord) = {
	name: 'ready',

	/**
	 * 
	 * @param {Discord} client 
	 * @param {client} Discord 
	 */
	execute(client, Discord) {
		console.log('Your Bot Is Online');
	}
};
