const Discord = require("discord.js");

module.exports = {
    info: {
        name: "clanless",
        description: "[ Staff Only ] Give users the clanless role.",
        usage: "[user]",
        aliases: []
    },

    run: async function(client, message, args){
        //Command execute starts from here
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient Permissions");   

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 

if(!member){
  return message.author.send('Mention someone.')
}

//===============ROLE===============HAS===============
  let RoleHas = member.roles.cache.find(role => role.hexColor == '#ff8000') || member.roles.cache.find(role => role.hexColor == '#c0c0c0') || member.roles.cache.find(role => role.hexColor == '#ffd700') || member.roles.cache.find(role => role.hexColor == '#b9f2ff') || member.roles.cache.find(role => role.hexColor == '#e0115f') || member.roles.cache.find(role => role.hexColor == '#a85656') || member.roles.cache.find(role => role.hexColor == '#dd3223');
//===============ROLE===============HAS===============

  let ClanMember = message.guild.roles.cache.find(role => role.name == 'Kingdomship Members');  
  let Clanless = message.guild.roles.cache.find(role => role.name == 'Unenrolled'); 
  let ClanRep = message.guild.roles.cache.find(role => role.name == 'Kingdomship Devotee');   
  let ClanOwner = message.guild.roles.cache.find(role => role.name == 'Kingdomship Rulers');    

member.roles.remove(RoleHas).catch(console.error)
member.roles.remove(ClanMember).catch(console.error)
member.roles.remove(ClanRep).catch(console.error)
member.roles.remove(ClanOwner).catch(console.error)
member.roles.add(Clanless).catch(console.error)
let username1 = `[Clanless] ${member.user.username}`;
    if(username1.length > 32) {
while(username1.length > 32) {
username1 = username1.slice(0, -1)
}
    }
member.setNickname(`${username1}`).catch(console.error)
  
    }
}