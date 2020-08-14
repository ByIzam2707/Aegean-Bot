const {MessageEmbed} = require('discord.js');
module.exports={
name: 'announce',
category: 'Staff',
usage: "<channel id> <msg>,
description: 'Makes an announcement with the message provided.'
run: async(bot, message, args)=>{
let rChannel = message.guild.channels.cache.get(args[0])
if(!rChannel)return = message.channel.send(`Hey, tell me the channel.`)
let MSG = message.content.split(`${bot.prefix}shout ${rChannel}`).join(" ")
if(!MSG)return = message.channel.send(`Tell me the message to announce.`)
const _ = new MessageEmbed()
.setTitle("Announcement")
.setDescription(`${MSG}`)
.setColor('RANDOM')
rChannel.send(_)
message.delete()
}
}
