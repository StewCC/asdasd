//const Database = require("@replit/database")
//const db = new Database()


module.exports = {
    info: {
        name: "setmotto",
        description: "[ Admin Only ] Sets a motto for a clan.",
        usage: "[clan] [motto]",
        aliases: ['setmotto']
    },

    run: async function(client, message, args){
        //Command execute starts from here

return

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Insufficient Permissions");  

let clan = `${args[0]}`;

args.shift();

await db.set(`${clan}_moto`, `${args.join(' ')}`)

message.reply(`Master ${message.author} I have made it so inside my brain the clan ${clan} has the motto "${args.join(' ')}"`)

    }
}