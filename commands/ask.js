module.exports = {
    info: {
        name: "ask",
        description: "Ask a question or for Rep/Owner for a Clan!",
        usage: "[Question]",
        aliases: []
    },

    run: async function(client, message, args){
  message.delete();
if(!args.join(' ')) {
  return message.channel.send('Question When?')
}    
client.channels.cache.get('932286464920805426').send({embed: {
  color: 'RANDOM',
  title: 'Question:',
  description: `<@${message.author.id}> \`is asking: '${args.join(' ')}'\``,
  timestamp: `${message.createdAt}`
}})
    }
}