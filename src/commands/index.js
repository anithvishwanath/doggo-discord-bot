const bork = require('./bork'); 
const boop = require('./boop');
const photo = require('./photo');

const guildID = process.env.GUILD_ID;
const channelID = process.env.CHANNEL_ID;

const commands = {
  'sup': bork,
  'boop': boop,
  'pic': photo
};

module.exports = async (msg) => {
  console.log(msg);
  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    const args = msg.content.split(" ");
    if (args.length == 0 || args[0].charAt(0) !== '!') return;
    const command = args.shift().substr(1);
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};
