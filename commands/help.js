require("dotenv").config()
const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
        usage: "[Command]",
        aliases: ["commands"]
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="``"+process.env.prefix+cmdinfo.name+" "+cmdinfo.usage+"`` ~ "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()
        .setAuthor("Commands of "+client.user.username, client.user.displayAvatarURL())
        .setColor("BLUE")
        .setDescription(allcmds)
        .setFooter(`To get info of each command you can do ${process.env.prefix}help [command]`)
        message.react('🩸')
        message.reply('a DM has been sent to you! 🩸')
        if(!args[0])return message.author.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.author.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("YELLOW")
            .setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`)
            message.author.send(commandinfo)
        }
    }
}
