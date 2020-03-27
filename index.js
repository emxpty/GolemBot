const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    client.user.setActivity("<help", { type:"LISTENING"})
    console.log("Connected as " + client.user.tag)
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
})


bot_secret_token = "NjkyOTEzMTQ3MzEyNDcyMDg0.Xn3-mA.jvUxcGyRDftWvgHcBTDpdWs8QME"

client.login(bot_secret_token)