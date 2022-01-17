module.exports = {
    info: {
        name: "battleban",
        description: "[ Staff Only ] Give the Battle Ban role to a user",
        usage: "[user]",
        aliases: ['bb']
    },

    run: async function(client, message, args){
        //Command execute starts from here
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Insufficient Permissions");   
  
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 

if(member === undefined){
  return message.author.send('Mention someone nob.')
}

  let BB = message.guild.roles.cache.find(role => role.name == 'Battlebanned');   
if(args[1] === 'rem'){
  member.roles.remove(BB).catch(console.error)
} else{
member.roles.add(BB).catch(console.error)
}
    }
} 