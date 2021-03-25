const Discord = require('discord.js');
const client = new Discord.Client();

// These are not compulsory you can change this if you want its up to you
const config = require('./config.json');
require('dotenv').config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['CommandHandler', 'EventHandler'].forEach((handler) => {
	require(`./utils/Handlers/${handler}`)(client, Discord);
});

// This is also not compulsory you can choose
client.login(process.env.TOKEN) || client.login(config.TOKEN);
