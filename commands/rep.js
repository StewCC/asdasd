const Discord = require("discord.js");

module.exports = {
    info: {
        name: "rep",
        description: "[ Staff Only ] Give users the rep role.",
        usage: "[user] [clan]",
        aliases: []
    },

    run: async function(client, message, args){
        //Command execute starts from here
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient Permissions");   



let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 

if(!member){
  return message.author.send('Mention someone.')
} else if(!args[1]){
    return message.author.send('Clan When?')
}

  let ClanMap = message.guild.roles.cache.find(role => role.name == args[1]);
  let ClanMember = message.guild.roles.cache.find(role => role.name == 'Kingdomship Members');  
  let Clanless = message.guild.roles.cache.find(role => role.name == 'Unenrolled'); 
  let ClanRep = message.guild.roles.cache.find(role => role.name == 'Kingdomship Devotee');   
  let ClanOwner = message.guild.roles.cache.find(role => role.name == 'Kingdomship Rulers');   

//check  
  if(!ClanMap){
    return await message.channel.send(`**${args[1]}** is not a Clan ${message.author}. (Case Sensative)`)
  }
let MapTop = message.guild.roles.cache.find(role => role.id == '932700494013534228');
let MapBottom = message.guild.roles.cache.find(role => role.id == '932089812264054815');      

  if(ClanMap.position < MapBottom.position){
    return await message.channel.send(`**${args[1]}** is not a Clan ${message.author}. (Dont try to glitch the system)`)
}
  if(ClanMap.position > MapTop.position){
    return await message.channel.send(`**${args[1]}** is not a Clan ${message.author}. (Dont try to glitch the system)`)
}

//check end

member.roles.add(ClanMap).catch(console.error)
member.roles.remove(ClanMember).catch(console.error)
member.roles.add(ClanRep).catch(console.error)
member.roles.remove(ClanOwner).catch(console.error)
member.roles.remove(Clanless).catch(console.error)
let username1 = `[${args[1]}/Rep] ${member.user.username}`;
    if(username1.length > 32) {
while(username1.length > 32) {
username1 = username1.slice(0, -1)
}
    }
member.setNickname(`${username1}`).catch(console.error)

let logchannel = message.guild.channels.cache.get('932089855662493716');

  let Embed = new Discord.MessageEmbed()
      .setDescription("Person turned into a clan member.")
      .setColor("RANDOM")
      .addField("Rep user", member)
      .addField('Role', ClanMap)
      .addField("Done by", `<@${message.author.id}> with ID: ${message.author.id}`)
      .addField("Set in", message.channel)
      .addField("Set on", message.createdAt)

logchannel.send(Embed);  
    }
}