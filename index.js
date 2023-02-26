const { GatewayIntentBits, MessageActivityType, EmbedBuilder } = require("discord.js")
const Discord = require("discord.js")
require("dotenv").config()

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


client.login(process.env.TOKEN)