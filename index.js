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