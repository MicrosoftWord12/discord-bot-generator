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
            setTimeout(async ()=>{
                await DirectoryLoad();
            }, 500)
            rl.question("JSON Config File or ENV?\n", async (configOption) =>{
                configOption.toLowerCase();
                if (configOption == "json"){
                    await JsonConfig();
                    await loadAllFiles();

                }else if (configOption == "env"){
                    envConfig();
                    await loadAllFiles();
                }else{
                    console.error("It has to be one of those!!")
                }
            })
        }else if(option == "no"){
            process.exit();
        }
    })
}