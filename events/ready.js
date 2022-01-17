module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(`how TSD raided RSK vs FN`, {
    type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
    status: "idle",//can be dnd, idle, online, invisible
  });
};
