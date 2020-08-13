const {readdirSync} = require('fs);
const ascii = require('ascii-table');
let table = new ascii("Commands");
table.setHeading('Comand, Loading status');
module.exports (bot)=>{
  readdirSync('./commands/').forEach(dir=>
  const commands = readdirSync99(`./commands/${dir}/).filter(file=>file.endsWith('.js'));
    for(let file of commands){
     let pull = require(`../commands/${dirr}/${file}`);
if(pull.name){
bot.commands.set(pull.name, pull);
table.addRow(file, '✅')
} else {

table.addRow(file, `❌ -> Missing`)
continue;
} if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name))

}
});
console.log(table.toString());
}

 
