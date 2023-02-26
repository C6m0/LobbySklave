const { GatewayIntentBits } = require("discord.js")
const Discord = require("discord.js")
//require("dotenv").config()

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
})

TOKEN = "MTA3OTMyODg4MjU4NDQ3MzY4Mg.G7WS2u.TNjE0mR8BHEUmqton9iVnTyyM_d3mdyZ3x1m6s"

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    //if author is a bot, ignore
    if(message.author.bot){
        return;
    }
    if(message.content == "ping"){
        message.reply("Pong!")
    }
})

client.login(TOKEN)