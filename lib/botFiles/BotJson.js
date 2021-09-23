const Discord = require('discord.js');
const client = new Discord.Client();

// Loaded Config File
const config = require('./config.json');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['CommandHandler', 'EventHandler'].forEach((handler) => {
	require(`./utils/Handlers/${handler}`)(client, Discord);
});

// This is also not compulsory you can choose
client.login(config.TOKEN);
