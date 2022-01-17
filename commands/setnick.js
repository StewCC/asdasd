const Discord = require('discord.js');

module.exports = {
    info: {
        name: "setnick",
        description: "[ Staff Only ] Change users nickname.",
        usage: "[user] [name]",
        aliases: []
    },

    run: async function(client, message, args){
        //Command execute starts from here
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient Permissions"); 

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 

if(member === undefined){
  return message.author.send('Mention someone.')
}
args.shift()
let nickname = args.join(' ');

let logchannel = message.guild.channels.cache.get('932089855662493716');

    if(nickname.length > 32) {
while(nickname.length > 32) {
nickname = nickname.slice(0, -1)
}
    }
member.setNickname(`${nickname}`, `${message.author.tag}Made me change ${member.user.username} to ${nickname}`).catch(console.error)
  let Embed = new Discord.MessageEmbed()
      .setDescription("Changed Nickname")
      .setColor("RANDOM")
      .addField("Changed username of", member)
      .addField("Done by", `<@${message.author.id}> with ID: ${message.author.id}`)
      .addField("Set in", message.channel)
      .addField("Set on", message.createdAt)

logchannel.send(Embed);  

    }
}