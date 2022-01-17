//const Database = require("@replit/database")
//const db = new Database()


module.exports = {
    info: {
        name: "clan-info",
        description: "I shall display the clans info.",
        usage: "[Clan Tag]",
        aliases: ['claninfo', 'clan-i']
    },

    run: async function(client, message, args){

return

        //Command execute starts from here
let clanRole = message.guild.roles.cache.find(role => role.name == args[0]);

if(!clanRole) {
  return message.reply('Imagine not supplying a valid role.')
}

const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == clanRole)).map(member => member.user).join("\n");

let clanWins = await db.get(`${args[0]}_win`);

let clanLoss = await db.get(`${args[0]}_loss`);

let clanMoto = await db.get(`${args[0]}_moto`);

if(clanWins === null) clanWins = 0;
if(clanLoss === null) clanLoss = 0;
if(clanMoto === null) clanMoto = 'No Motto';

message.channel.send({embed: {
  title: `${args[0]} Info`,
  color: 'RANDOM',
  description: `Role: ${clanRole}\n\nClan Members: \n${Members}\n\nClan Wins: ${clanWins}\n\nClan Losses: ${clanLoss}\n\nClan Motto: ${clanMoto}\n\n\`If any information is wrong contant an Admin and/or above.\``,
}})

    }
}