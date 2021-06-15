const { PREFIX } = require('../../config.json');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name: 'message',
	/**
	 *
	 * @param {Discord} Discord
	 * @param {Discord.Client} client
	 * @param {Discord.Message} message
	 */
	execute(message, client, Discord) {
		if (message.author.bot || !message.content.startsWith('!')) return;

		const args = message.content.slice(PREFIX.length).split(/ +/);
		const cmd = args.shift().toLocaleLowerCase();

		const commandFile = require(`../Commands/${cmd}`);
		commandFile.execute(client, message, args);
	},
};
