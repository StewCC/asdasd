module.exports = {
    info: {
        name: "emoji",
        description: "[ Staff Only ] change battle channel emojis.",
        usage: "[BattleChannelNumber] [TYPE]",
        aliases: []
    },

    run: async function(client, message, args){
        //Command execute starts from here
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient Permissions"); 

  const emoji =  `🔒`;
  const emoji1 =  `✅`;
  const emoji2 = `❌`;

if(args[1] === 'close' || args[1] === ':x:') {

var chn;

chn = message.guild.channels.cache.filter(channel => channel.name.includes(`battle-${args[0]}${emoji}`)).map(chn => chn.id);

if(!message.guild.channels.cache.get(`${chn}`)) 
chn = message.guild.channels.cache.filter(channel => channel.name.includes(`battle-${args[0]}${emoji1}`)).map(chn => chn.id);


let chnO = message.guild.channels.cache.get(`${chn}`);
chnO.setName(`battle-${args[0]}${emoji2}`)
.then(chn1 => chn1.send(`Changed <#${chn}>'s emoji to ${emoji2}`))
}

if(args[1] === 'lock' || args[1] === ':lock:') {

var chn;

chn = message.guild.channels.cache.filter(channel => channel.name.includes(`battle-${args[0]}${emoji1}`)).map(chn => chn.id);

if(!message.guild.channels.cache.get(`${chn}`)) chn = message.guild.channels.cache.filter(channel => channel.name.includes(`battle-${args[0]}${emoji2}`)).map(chn => chn.id);


let chnO = message.guild.channels.cache.get(`${chn}`);
chnO.setName(`battle-${args[0]}${emoji}`)
.then(chn1 => chn1.send(`Changed <#${chn}>'s emoji to ${emoji}`))
}

if(args[1] === 'open' || args[1] === ':white_check_mark:') {

var chn;

chn = message.guild.channels.cache.filter(channel => channel.name.includes(`battle-${args[0]}${emoji}`)).map(chn => chn.id);

if(!message.guild.channels.cache.get(`${chn}`))
chn = message.guild.channels.cache.filter(channel => channel.name.includes(`battle-${args[0]}${emoji2}`)).map(chn => chn.id);


let chnO = message.guild.channels.cache.get(`${chn}`);
chnO.setName(`battle-${args[0]}${emoji1}`)
.then(chn1 => chn1.send(`Changed <#${chn}>'s emoji to ${emoji1}`))

}



    }
}