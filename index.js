const express = require('express');
const app = express();
const port = 3000;
//this is public
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================


require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");

const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection

client.on("guildMemberAdd", (member) => {

client.channels.cache.get('883261281996513280').send(`${member.user} ping an admin to get verified.`)

console.log('a')

let username1 = `[Clanless] ${member.user.username}`;
    if(username1.length > 32) {
while(username1.length > 32) {
username1 = username1.slice(0, -1)
}
    }

let role1 = member.guild.roles.cache.find(role => role.name === "Not Verified");
            member.setNickname(username1);
       member.roles.add(role1);
          });

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    console.log(eventName);    
    client.on(eventName, event.bind(null, client));
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(commandName);
    client.commands.set(commandName, props);
  });
});

//Logging in to discord
client.login(process.env.TOKEN)
