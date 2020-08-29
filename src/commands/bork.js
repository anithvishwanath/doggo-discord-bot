const borkPhrases = [
  'Woof!! 🐶',
  '*bork* hello fren 🐕',
  'bork bork!! 🐶',
  'BOOOOORK 🐶',
  'bork bork bork BORK bork?!?!!? (do u haz schmakkos?) 🐶',
  '(bravo six going BARK) 🐺',
  '(try !boop)',
  'https://www.youtube.com/watch?v=COCf-GQytjU'
];

module.exports = async (msg) => {
  const vocalization = Math.floor(Math.random() * borkPhrases.length);
  const reply = borkPhrases[vocalization];
  // await msg.channel.send('bork bork!! 🐶');
  await msg.channel.send(`${msg.author} ${reply}`);
  console.log('msg sent');
};
