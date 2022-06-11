const Discord = require("discord.js")
const prefix = "!"

client.on("messageCreate", async message => {
  if(message.channel.type == "DM") return // cancel if messsage is a dm
  
   if(message.content == `${prefix}ping`){ // command
     
    const ping = new Discord.MessageEmbed() // creating embed
    .setColor("GREEN")
    .setTitle(`Bot Ping :- ${client.ws.ping}`)
    
    message.channel.send({ embeds: [ ping ] }) // sending embed
    
  }
})
