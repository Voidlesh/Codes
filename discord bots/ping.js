const Discord = require("discord.js")
const prefix = "!"
client.on("messageCreate", async message => {
  if(message.channel.type == "DM") return //bot will not read dm commands
   if(message.content == `${prefix}ping`){
    const ping = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle(`Bot Ping :- ${client.ws.ping}`)
  }
})
