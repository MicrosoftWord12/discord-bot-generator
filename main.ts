import * as fs from 'fs'
import * as cp from 'child_process'
import * as readline from 'readline';
import { DirectoryLoad } from './lib/DirectoryLoader';
import { commandExecutor, commandHandler, configJson, envConfig, eventHandler, JsonConfig, loadAllFiles } from './lib/FileLoader';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export function main(){
    rl.question("Would you like to create a project?", async (option)=>{

        if (option == "yes"){
            cp.exec("npm init -y && npm i discord.js@12.5.3 && npm i nodemon", (buffer) => {
                console.log("NPM initialised and installing packages");
            })
            rl.question("JSON Config File or ENV?\n", async (configOption) =>{
                configOption.toLowerCase();
                if (configOption == "json"){
                            await DirectoryLoad();
                            await JsonConfig();
                            await loadAllFiles();
                            process.on('exit', (code) => {
                                console.log(`The installer is closing down with exit code ${code}, good luck programming`)
                            })
                        }else if (configOption == "env"){
                            await DirectoryLoad();
                            await envConfig();
                            await loadAllFiles();
                            process.on('exit', (code) => {
                                console.log(`The installer is closing down with exit code ${code}, good luck programming`)
                            })
                        }else{
                            console.error("It has to be one of those!!")
                        }
                })
        }else if(option == "no"){
            process.exit();
        }
    })
}
