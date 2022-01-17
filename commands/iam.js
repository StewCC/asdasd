module.exports = {
  info: {
      name: "iam",
      description: "Join a clan with this command!",
      usage: "[clan]",
      aliases: []
  },

  run: async function(client, message, args){
      //Command execute starts from here
message.delete();

if(!args[0]){
return message.channel.send({embed: {
  color: 'RED',
  title: 'Error #IDK',
  description: 'um so Clan When?',
  timestamp: `${message.createdAt}`
}})
}

let logchannel = message.guild.channels.cache.get('932089855662493716');

let member = message.member;  
let ClanMember = message.guild.roles.cache.find(role => role.name == 'Kingdomship Members');  
let Clanless = message.guild.roles.cache.find(role => role.name == 'Unenrolled');   
let ClanRep = message.guild.roles.cache.find(role => role.name == 'Kingdomship Devotee');   
let ClanOwner = message.guild.roles.cache.find(role => role.name == 'Kingdomship Rulers');    

//===============ROLE===============HAS===============
let RoleHas = member.roles.cache.find(role => role.hexColor == '#ff8000') || member.roles.cache.find(role => role.hexColor == '#c0c0c0') || member.roles.cache.find(role => role.hexColor == '#ffd700') || member.roles.cache.find(role => role.hexColor == '#b9f2ff') || member.roles.cache.find(role => role.hexColor == '#e0115f') || member.roles.cache.find(role => role.hexColor == '#a85656') || member.roles.cache.find(role => role.hexColor == '#dd3223');
//===============ROLE===============HAS===============

if(args.join(' ').toLowerCase().includes('rep') || args.join(' ').toLowerCase().includes('devotee')) {

if(!member.roles.cache.some(role => role.name === 'Kingdomship Members') && !member.roles.cache.some(role => role.name === 'Kingdomship Rulers') && !member.roles.cache.some(role => role.name === 'Kingdomship Devotee')) {
    return message.channel.send({embed: {
    color: 'RED',
    title: `Error #NotInAClan`,
    description: `Imagine not being in a clan`,
    timestamp: `${message.createdAt}`      
  }})
}
if(member.roles.cache.some(role => role.name === 'Kingdomship Devotee')) {
      return message.channel.send({embed: {
    color: 'RED',
    title: `Error #Rep`,
    description: `You can't just become a double rep`,
    timestamp: `${message.createdAt}`      
  }})
}
if(member.roles.cache.some(role => role.name === 'Kingdomship Rulers')) {
        return message.channel.send({embed: {
    color: 'RED',
    title: `Error #TF`,
    description: `Imagine tryna leave your clan 🤡`,
    timestamp: `${message.createdAt}`      
  }})
}

  return client.channels.cache.get('932673014791806996').send({embed: {
  color: 'RANDOM',
  title: 'Question:',
  description: `${message.author} is asking for ${RoleHas} Rep.`,
  timestamp: `${message.createdAt}`
}})
}

if(member.roles.cache.some(role => role.name === 'Kingdomship Rulers')){
return message.channel.send({embed: {
color: 'RED',
title: 'Error #ClanOwner',
description: 'You\'re a Clan Owner you can\'t leave.',
  timestamp: `${message.createdAt}`
}})
}

if(member.roles.cache.some(role => role.name === args[0])){
return message.reply({embed: {
color: 'RED',
title: 'Error #69420',
description: `You are already in ${args[0]}`,
timestamp: `${message.createdAt}`
}})
}

//CLANLESS==============================================
if(args.join(' ').toLowerCase().includes('clanless') || args.join(' ').toLowerCase().includes('unenrolled')) {
if(member.roles.cache.find(role => role.hexColor == '#c0c0c0') || member.roles.cache.find(role => role.hexColor == '#ffd700') || member.roles.cache.find(role => role.hexColor == '#b9f2ff') || member.roles.cache.find(role => role.hexColor == '#e0115f')){
if(new Date().getDay() === 1){
member.roles.remove(RoleHas).catch(console.error)
member.roles.remove(ClanMember).catch(console.error)
member.roles.remove(ClanRep).catch(console.error)
member.roles.remove(ClanOwner).catch(console.error)
member.roles.add(Clanless).catch(console.error)
let username1 = `[Unenrolled] ${member.user.username}`;
    if(username1.length > 32) {
while(username1.length > 32) {
username1 = username1.slice(0, -1)
}
    }
member.setNickname(`${username1}`).catch(console.error)
return logchannel.send({embed: {
color: 'RANDOM',
description: `I have given ${message.author} the ${Clanless} role.\n\n I have removed ${message.author}s ${RoleHas} role.`
}})
} else{
return message.channel.send({embed: {
  color: 'RED',
  title: 'Error #ClanHop',
  description: `ClanHop is enabled ;-;`,
  timestamp: `${message.createdAt}`
}})
}
} else{
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
return logchannel.send({embed: {
color: 'RANDOM',
description: `I have given ${message.author} the ${Clanless} role.\n\n I have removed ${message.author}s ${RoleHas} role.`
}})
}
}
//CLANLESS==============================================

let MapTop = message.guild.roles.cache.find(role => role.id == '932700494013534228');
let MapBottom = message.guild.roles.cache.find(role => role.id == '932089812264054815');  
let ClanMap = message.guild.roles.cache.find(role => role.name == args[0]);

if(!ClanMap){
  return await message.channel.send({embed: {
    color: 'RED',
    title: `Error #CantFind**${args[0]}**`,
    description: `A) I don't think ${args[0]} exists.\nB) It'S CaSe SeNsItiVe`,
    timestamp: `${message.createdAt}`      
  }})
}
if(ClanMap.position < MapBottom.position){
  return await message.channel.send({embed: {
    color: 'RED',
    title: 'Error',
    description: 'You know what you did',
    timestamp: `${message.createdAt}`         
  }})
}
if(ClanMap.position > MapTop.position){
  return await message.channel.send({embed: {
    color: 'RED',
    title: 'Error',
    description: 'You know what you did',
    timestamp: `${message.createdAt}`         
  }})
}

if(member.roles.cache.find(role => role.hexColor == '#c0c0c0') || member.roles.cache.find(role => role.hexColor == '#ffd700') || member.roles.cache.find(role => role.hexColor == '#b9f2ff') || member.roles.cache.find(role => role.hexColor == '#e0115f')){
if(new Date().getDay() === 1){
member.roles.add(ClanMap).catch(console.error)
member.roles.add(ClanMember).catch(console.error)
member.roles.remove(RoleHas).catch(console.error)
member.roles.remove(ClanRep).catch(console.error)
member.roles.remove(Clanless).catch(console.error)
let username1 = `[${args[0]}/Member] ${member.user.username}`;
    if(username1.length > 32) {
while(username1.length > 32) {
username1 = username1.slice(0, -1)
}
    }
member.setNickname(`${username1}`).catch(console.error)
return logchannel.send({embed: {
color: 'RANDOM',
description: `I have given ${message.author} the ${ClanMap} role.\n\n I have removed ${message.author}s ${RoleHas} role.`
}})
} else{
return message.channel.send({embed: {
  color: 'RED',
  title: 'Error #ClanHop',
  description: `ClanHop is enabled ;-;`,
  timestamp: `${message.createdAt}`
}})
}
} else{
member.roles.add(ClanMap).catch(console.error)
member.roles.add(ClanMember).catch(console.error)
member.roles.remove(RoleHas).catch(console.error)
member.roles.remove(ClanRep).catch(console.error)
member.roles.remove(Clanless).catch(console.error)
let username1 = `[${args[0]}/Member] ${member.user.username}`;
    if(username1.length > 32) {
while(username1.length > 32) {
username1 = username1.slice(0, -1)
}
    }
member.setNickname(`${username1}`).catch(console.error)
message.channel.send(`${message.author} joined **${args[0]}**.`);

logchannel.send({embed: {
color: 'RANDOM',
description: `I have made ${message.author} part of ${ClanMap} and have removed their ${RoleHas}.`
}})
}

member.roles.add(ClanMap).catch(console.error)
member.roles.add(ClanMember).catch(console.error)
member.roles.remove(RoleHas).catch(console.error)
member.roles.remove(ClanRep).catch(console.error)
member.roles.remove(Clanless).catch(console.error)
let username1 = `[${args[0]}/Member] ${member.user.username}`;
    if(username1.length > 32) {
while(username1.length > 32) {
username1 = username1.slice(0, -1)
}
    }
member.setNickname(`${username1}`).catch(console.error)
  }
}