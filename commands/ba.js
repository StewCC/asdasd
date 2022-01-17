const Discord = require("discord.js");

module.exports = {
    info: {
        name: "ba",
        description: "Give users the wanted Battle Role.",
        usage: "[clan-tag] [battle number]",
        aliases: ['battle']
    },

    run: async function(client, message, args){
        //Command execute starts from here
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient Permissions");   

  let a3 = message.guild.roles.cache.find(role => role.name == `Battle ${args[1]}`); 

  let a1 = message.guild.roles.cache.find(role => role.name == args[0]); 

    let b1 = message.guild.roles.cache.find(role => role.name == 'Kingdomship Devotee'); 
    let b2 = message.guild.roles.cache.find(role => role.name == 'Kingdomship Rulers');     

const Members = message.guild.members.cache.filter(member => member.roles.cache.has(`${a1.id}`));

const againMembers = Members.filter(member => member.roles.cache.has(`${b1.id}`)); 
const againMembers1 = Members.filter(member => member.roles.cache.has(`${b2.id}`)); 

againMembers1.map(rep => rep.roles.add(a3))
againMembers1.map(rep => message.channel.send(`Added ${rep.user} to Battle ${args[1]}`))

againMembers.map(rep => rep.roles.add(a3))
againMembers.map(rep => message.channel.send(`Added ${rep.user} to Battle ${args[1]}`))
    }
}