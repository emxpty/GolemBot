const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity("<help", { type:"LISTENING"})
    console.log(`Active as ${client.user.tag}!`);
    client.on('message', msg => {
        if (msg.content === '<ping') {
          msg.reply('pong');
        }
    });
     
    client.on('message', msg => {
        if (msg.content === '<help') {
            msg.reply('')
        }
    })
});

bot_token = "NjkyOTEzMTQ3MzEyNDcyMDg0.Xn5SuQ.YUyjz1cqpPk0fOOBV5dN2tscmsE"

client.login(bot_token)