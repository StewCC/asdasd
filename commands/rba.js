const Discord = require("discord.js");
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

module.exports = {
    info: {
        name: "rba",
        description: "[ Staff Only ] Remove users from wanted Battle Role, Change Channel Emoji, Delete All Messages.",
        usage: "[battle number]",
        aliases: []
    },

    run: async function(client, message, args){
        //Command execute starts from here
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient Permissions");   

        const Role = message.guild.roles.cache.find(role => role.name == `Battle ${args[0]}`);
let bois = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role));

bois.map(member => member.roles.remove(Role));
bois.map(member => message.channel.send(`Removed ${member.user} from Battle ${args[0]}`))

  const emoji =  `🔒`;
  const emoji1 =  `✅`;
  const emoji2 = `❌`;

let chn = message.guild.channels.cache.filter(channel => channel.name.includes(`battle-${args[0]}${emoji1}`)).map(chn => chn.id);

if(!message.guild.channels.cache.get(`${chn}`)) chn = message.guild.channels.cache.filter(channel => channel.name.includes(`battle-${args[0]}${emoji}`)).map(chn => chn.id);

if(!message.guild.channels.cache.get(`${chn}`)) chn = message.guild.channels.cache.filter(channel => channel.name.includes(`battle-${args[0]}${emoji2}`)).map(chn => chn.id);

let chnO = message.guild.channels.cache.get(`${chn}`);
chnO.send(`Changed <#${chn}>'s emoji to ${emoji}`)
chnO.setName(`battle-${args[0]}${emoji}`)

sleep(7000)

for (var i = 0; i < 25; i++) {
chnO.bulkDelete(99)
}
    }
}