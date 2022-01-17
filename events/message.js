require("dotenv").config()
const smartestchatbot = require('smartestchatbot');
const Keyv = require('keyv');
const keyv = new Keyv();

module.exports = async (client, message) => {
  
  if (message.author.bot) return;

//if(message.channel.id === '797579840940408852' || message.channel.id === '797582698980966420' || message.channel.id === '797582704182034462'){

  //message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
  //if (message.content.includes(`@`)) {
    //return message.channel.send(`**:x: Please dont mention anyone**`);
  //}
  //message.channel.startTyping();
  //if (!message.content) return message.channel.send("Please say something.");
  //smartestchatbot.chat({message: message.content, name: client.user.username, owner:"ICUP", user: message.author.id }).then(reply => {
  //message.channel.send(`> ${message.content} \n ${message.author.tag} ${reply}`);
  //})
  //message.channel.stopTyping();

//}

  //Prefixes also have mention match
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : '.';
  
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //Making the command lowerCase because our file name will be in lowerCase
  const command = args.shift().toLowerCase();

  //Searching a command
  const cmd = client.commands.get(command);
  //Searching a command aliases
  const aliases = client.commands.find(x => x.info.aliases.includes(command))

  if(message.channel.type === "dm")return message.channel.send("None of the commands work in DMs. So please use commands in server!")

  //Executing the codes when we get the command or aliases
  if(cmd){
    cmd.run(client, message, args);
  }else if(aliases){
    aliases.run(client, message, args);
  }else return
};