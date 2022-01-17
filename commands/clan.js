const Discord = require("discord.js");

module.exports = {
    info: {
        name: "clan",
        description: "[ Staff Only ] Give users the clan role.",
        usage: "[user] [clan]",
        aliases: []
    },

    run: async function(client, message, args){
        //Command execute starts from here
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient Permissions");   



let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 

if(member === undefined){
  return message.author.send('Mention someone.')
} else if(!args[0]){
  message.author.send('Clan When?')
}

//===============ROLE===============HAS===============
  let RoleHas = member.roles.cache.find(role => role.hexColor == '#ff8000') || member.roles.cache.find(role => role.hexColor == '#c0c0c0') || member.roles.cache.find(role => role.hexColor == '#ffd700') || member.roles.cache.find(role => role.hexColor == '#b9f2ff') || member.roles.cache.find(role => role.hexColor == '#e0115f') || member.roles.cache.find(role => role.hexColor == '#a85656') || member.roles.cache.find(role => role.hexColor == '#dd3223');
//===============ROLE===============HAS===============
  let ClanMap = message.guild.roles.cache.find(role => role.name == args[1]);
  let ClanMember = message.guild.roles.cache.find(role => role.name == 'Kingdomship Members');  
  let Clanless = message.guild.roles.cache.find(role => role.name == 'Unenrolled'); 
  let ClanRep = message.guild.roles.cache.find(role => role.name == 'Kingdomship Devotee');   
  let ClanOwner = message.guild.roles.cache.find(role => role.name == 'Kingdomship Rulers');    

//check  
let MapTop = message.guild.roles.cache.find(role => role.id == '932700494013534228');
let MapBottom = message.guild.roles.cache.find(role => role.id == '932089812264054815');    

  if(!ClanMap){
    return await message.channel.send({embed: {
      color: 'RED',
      title: `Error #CantFind**${args[0]}**`,
      description: `A) I don't think ${args[0]} exists.\nB) It'S CaSe SeNsItiVe`,
      timestamp: `${message.createdAt}`      
    }})
  }
  if(ClanMap.position < MapBottom.position){
    return await message.channel.send(`**${args[1]}** is not a Clan ${message.author}. (Dont try to glitch the system)`)
}
  if(ClanMap.position > MapTop.position){
    return await message.channel.send(`**${args[1]}** is not a Clan ${message.author}. (Dont try to glitch the system)`)
}

//check end
member.roles.remove(RoleHas).catch(console.error)
member.roles.remove(ClanRep).catch(console.error)
member.roles.remove(ClanOwner).catch(console.error)
member.roles.remove(Clanless).catch(console.error)
member.roles.add(ClanMap).catch(console.error)
member.roles.add(ClanMember).catch(console.error)
let username1 = `[${args[1]}/Member] ${member.user.username}`;
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
      .addField("Clan user", member.user.tag)
      .addField('Role', ClanMap)
      .addField("Done by", `<@${message.author.id}> with ID: ${message.author.id}`)
      .addField("Set in", message.channel)
      .addField("Set on", message.createdAt)

logchannel.send(Embed);  
    }
}