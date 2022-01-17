const Discord = require("discord.js");

module.exports = {
    info: {
        name: "rb",
        description: "[ Staff Only ] Remove users from wanted Battle Role.",
        usage: "[battle number]",
        aliases: ['remb']
    },

    run: async function(client, message, args){
        //Command execute starts from here
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient Permissions");   

        const Role = message.guild.roles.cache.find(role => role.name == `Battle ${args[0]}`);
let bois = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role));

bois.map(member => member.roles.remove(Role));
bois.map(member => message.channel.send(`Removed ${member.user} from Battle ${args[0]}`))

    }
}