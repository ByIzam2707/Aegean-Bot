const {MessageEmbed} = require('discord.js');
module.exports={
name: 'ping',
category: 'info',
description: 'Returns the latency of the API ping.'
run: async(bot, message, args)=>{
    const msg = await message.channel.send('🏓 Checking Ping...')
    const Embed = new Discord.MessageEmbed() 
    .setTitle('🏓Pong')
    .setDescripton(`🏓\n Latency is ${Math.floor(msg.createdTimeStamp - msg.createdTimeStamp)}MS\n API Latency is ${Math.round(bot.ws.ping)} MS\n 🏓`)
    .setColour('RANDOM')

msg.edit(Embed)
}}
