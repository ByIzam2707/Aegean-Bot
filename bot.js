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
