module.exports = {
    info: {
        name: "battletext",
        description: "Display Battle Text.",
        usage: "[BattleNumber]",
        aliases: []
    },

    run: async function(client, message, args){
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient Permissions");   

  let battle = message.guild.roles.cache.find(role => role.name == `Battle ${args[0]}`); 

message.channel.send(`${battle}`)
  .then(msg => {
    msg.delete({ timeout: 1000 })
  })
  .catch(console.error);
message.channel.send({embed: {
description: `Hello, Battle ${args[0]}, I need you guys to discuss a war date/number count/& server for this war to happen.

:clock1: **Date & Time:**

The specific time you want the war to happen.

:no_entry_sign: **RESTRICTIONS:**

Can only happen Monday - Sunday

:busts_in_silhouette: **Number Count:**

The specific amount of numbers of members you want to come to war.

:no_entry_sign:**RESTRICTIONS:**

Can not be lower then a 5v5 or higher than a 15v15

:island:  **Server:**

The server region you want to play on for war for example: Silicon, Miami, Frankfurt etc....

:no_entry_sign: **RESTRICITONS:**

Make sure when you decide a server it's playable for both leaders.

:island: **Server:** (MooMoo.io Server)
:clock1: **Time & Date:** (Day & Time)
:busts_in_silhouette: **Number Count:** (Member Amount)
:sparkles: **Special Effects:**`
}})
    }
}

