module.exports = async (msg) => {
  await msg.channel.send(`${msg.author} ` + 'https://tenor.com/view/dog-nose-boop-massage-gif-11159084');
  console.log("boop sent");
};

//TODO: Use Tenor to embed random GIFs