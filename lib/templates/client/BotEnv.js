const Discord = require('discord.js');
const client = new Discord.Client();

// Loaded ENV file
require('dotenv').config({ path: './src/.env' });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['CommandHandler', 'EventHandler'].forEach((handler) => {
	require(`./utils/Handlers/${handler}`)(client, Discord);
});

// This is also not compulsory you can choose
client.login(process.env.TOKEN);
