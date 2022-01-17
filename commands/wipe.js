module.exports = {
    info: {
        name: "wipe",
        description: "[ Admin Only ] Deletes a clan.",
        usage: "[clan]",
        aliases: []
    },

    run: async function(client, message, args) {
        //Command execute starts from here

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Insufficient Permissions");  

let clanRole = message.guild.roles.cache.find(role => role.name == args.join(' '));
  let ClanMember = message.guild.roles.cache.find(role => role.name == 'Kingdomship Members');  
  let Clanless = message.guild.roles.cache.find(role => role.name == 'Unenrolled'); 
  let ClanRep = message.guild.roles.cache.find(role => role.name == 'Kingdomship Devotee');   
  let ClanOwner = message.guild.roles.cache.find(role => role.name == 'Kingdomship Rulers');  
        const Role = message.guild.roles.cache.find(role => role.name == args.join(' '));
let MapTop = message.guild.roles.cache.find(role => role.id == '932700494013534228');
let MapBottom = message.guild.roles.cache.find(role => role.id == '932089812264054815');       
let ClanMap = message.guild.roles.cache.find(role => role.name == args.join(' '));
if(ClanMap.position < MapBottom.position){
  return message.channel.send({embed: {
    color: 'RED',
    title: 'Error',
    description: 'You know what you did',
    timestamp: `${message.createdAt}`         
  }})
}
if(ClanMap.position > MapTop.position){
  return message.channel.send({embed: {
    color: 'RED',
    title: 'Error',
    description: 'You know what you did',
    timestamp: `${message.createdAt}`         
  }})
}

if(!clanRole) {
  return message.reply('Imagine not supplying a valid role.')
}

message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.setNickname(`[Unenrolled] ${member.user.username}`));

message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => message.channel.send(`Removed ${member.user}'s ${clanRole.name}!`));

let member12 = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role));

member12.map(member => member.roles.add(Clanless));
member12.map(member => member.roles.remove(ClanMember));
member12.map(member => member.roles.remove(ClanRep));
member12.map(member => member.roles.remove(ClanOwner));

clanRole.delete(`${message.author.tag} made me delete ${clanRole.name}`);

    }
}