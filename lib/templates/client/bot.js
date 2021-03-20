const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['CommandHandler', 'EventHandler'].forEach((handler) => {
	require(`./utils/Handlers/${handler}`)(client, Discord);
});

client.login(process.env.TOKEN);
