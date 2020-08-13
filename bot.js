const {Collection, Client, Discord} = require('discord.js);
const fs = require('fs);
const bot = new Client({
  disableEveryone: true;
)}

bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/);
["command"].forEach(handler=>{
   require('./handlers/${handler}')(bot);
)}

bot.on('ready', ()=>{
 bot.setActivity("Aegean Airlines")
 console.log("Ready!")
})

bot.on("guildMemberAdd", member => {
const welcomeChannel = member.guild.channels.cache.find(channel => channel.name == 'Welcome-Goodbye')
let embed = new Disocrd.MessageEmbed()
.setTitle(`Welcome to Aegean`)
.addField("**Name:**", Welcome to Aegean ${member.user})
.addFiled("**Tag:**", ${member.user.tag}
.addField("**Position:**", member.guild.memberCount + "Members")
welcomeChannel.send(embed)
});
