const Discord = require('discord.js');

module.exports = {
    info: {
        name: "reps",
        description: "This lists all reps in that clan.",
        usage: "[clan]",
        aliases: []
    },

    run: async function(client, message, args){
        //Command execute starts from here
        const Role = message.guild.roles.cache.find(role => role.name == args[0]);

if(!Role){
  return message.channel.send(`Smh ${args[0]} dosent exist.`)
}

        const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role.id === '843042418089656320')).filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user).join("\n");
        let USERS = new Discord.MessageEmbed({
        "title": `Reps in the ${Role.name} Clan`,
        "description": `${Members}`,
        "color": 'RANDOM'
    });
    message.channel.send(USERS)
        
             
    }        
    }