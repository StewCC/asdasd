const Discord = require("discord.js");

module.exports = {
    info: {
        name: "support-clear",
        description: "Delete messages in support chat.",
        usage: "[amount]",
        aliases: ['s-clear', 'sclear']
    },

    run: async function(client, message, args){
        //Command execute starts from here
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient Permissions");

if(!args[0]) {
  return message.channel.send('Bruh specify an amount?')
}

let amount = args[0];

if(amount > 100) amount = 100

let channel1 = message.guild.channels.cache.get('932286464920805426');

await channel1.bulkDelete(
  (await channel1.messages.fetch({limit: amount}))
    .filter(m => !m.pinned)
)
    }
}