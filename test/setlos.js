//const Database = require("@replit/database")
//const db = new Database()


module.exports = {
    info: {
        name: "setlos",
        description: "[ Admin Only ] Sets losses for a clan.",
        usage: "[clan] [losses]",
        aliases: ['setloss']
    },

    run: async function(client, message, args){
        //Command execute starts from here

return

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Insufficient Permissions");  

await db.set(`${args[0]}_loss`, `${args[1]}`)

message.reply(`Master ${message.author} I have made it so inside my brain the clan ${args[0]} has ${args[1]} losses.`)

    }
}