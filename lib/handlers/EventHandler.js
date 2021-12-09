const fs = require('fs');
const Discord = require('discord.js');
const path = require('path');
const client = new Discord.Client();

module.exports = (client, Discord) => {
	const load_dir = () => {
		dir = ['commands', 'events'];
		const event_files = fs.readdirSync(path.resolve(__dirname, `../../events/${dir}`)).filter((file) => file.endsWith('.js' || '.ts'));

		for (const file of event_files) {
			const event = require(`../../events/${dir}/${file}`);
			const event_name = file.split('.')[0];
			client.on(event.name, event.bind(null, Discord, client));
		}
	};

	// ['client', 'guild', 'executor'].forEach((e) => load_dir(e));
	load_dir();
};
