#### Discord Bot Project Generator

### How to activate

**I AM WORKING ON THIS SO IT DOES IT AUTOMATICALLY**

run:
`npm i -g djs-bot-generation-package` **THIS HAS TO BE GLOBAL OTHERWISE IT DOES NOT WORK**

then:
`djs-bot-gen`

##### Description:

- The idea for this project is for people to quickly make a discord bot outline

##### Version Key

Version 1.0.0 = Finalised and working version <br>
Version 0.1.0 = Semi Working, testing for bug fixes <br>
Version 0.0.1 = Not currently working <br>

These numbers will go up

##### Features

- Creates directories
- Creates Command, Event Handler
- Creates ENV and JSON Config file
- Creates Command Executor File
- Different Bot.js file depending on configuration (JSON, ENV)

##### Known Bugs

- Honestly I do not know but from what I can tell I don't have many
- Bug with the command execution
  - I hard coded '-' in [FILE](lib/templates/executor/message.js) which was the command prefix (LINE 12)
- Majour bug, I don't know why but the files are not being loaded: EventHandler, CommandHandler struggles to load

##### Requirements

- You will need discord.js
  [Discord.js Github](https://github.com/discordjs/discord.js)
  [Discord.js Docs](https://discord.js.org/#/docs/main/stable/general/welcome)

- You will need a regular NPM project
  `npm init -y` (or vice versa)

- Nodemon is not required but recommended `nodemon`
- If you go with ENV you will need `.dotenv`

##### Helpful stuff

- This project is using `discord.js@12.5.3` because it seems to be the more supported one, you are however more than welcome to change this
- I am making a Discord Shortcut project checkout
  [Shortcut Github](https://github.com/MicrosoftWord12/Discord-JS-Shortcuts-JS)
  - Probably is going to be remade

#### Functionality:

Compatible:

- Javascript
  - Probably going to keep it just Javascript
  - If you want other compatibility support similiar languages and it to the issues tab
