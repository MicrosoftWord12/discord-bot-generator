import * as fs from 'fs'

export async function DirectoryLoad(){
    fs.mkdir("./src/", (error) => {
        console.log("Src Folder Created");
    })

    fs.mkdir("./src/utils", (error) => {
        console.log("Utils Folder Created")
    })
    console.log("Handlers folder")
    fs.mkdir('./src/utils/handlers/', (error)=> {
        console.log("Handler Folder Created")
    })

    fs.mkdir('./src/templates/', (error) => {
        console.log("Templates Folder Created");
    })

    fs.mkdir('./src/events/', (error) => {
        console.log("Events Folder Created")
    })
    fs.mkdir('./src/commands/', (error) => {
        console.log("Command Folder Created")
    })
}

