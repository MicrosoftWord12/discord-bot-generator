const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config({ path: './src/.env' });
const config = require('./src/config.json');
/**
 *
 * @param {Discord} Discord
 * @param {client} client
 * @param {Discord.Message} message
 */
module.exports = (Discord, client, message) => {
	const prefix = process.env.PREFIX || config.PREFIX;
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();

	const command = client.commands.get(cmd) || client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
	if (command) command.execute(client, message, args, Discord);
};
