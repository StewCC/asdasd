module.exports = {
    info: {
        name: "create",
        description: "[ ADMIN ONLY ] create a clan",
        usage: "[name]",
        aliases: []
    },

    run: async function(client, message, args){
        //Command execute starts from here
  message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Insufficient Permissions");  

  let PARSER = message.guild.roles.cache.find(role => role.id == '932089812264054815');   
message.guild.roles.create({
  data: {
    name:  `${args.join(' ')}`,
    color: '#ff8000',
    position: PARSER.position + 1,
  },
  reason: `New clan (${args.join(' ')}) by ${message.author.username}!`,
})
    }
}