const {readdirSync} = require('fs);
const ascii = require('ascii-table');
let table = new ascii("Commands");
table.setHeading('Comand, Loading status');
module.exports (bot)=>{
  readdirSync('./commands/').forEach(dir=>
  const commands = readdirSync99(`./commands/${dir}/).filter(file=>file.endsWith('.js'));


 
