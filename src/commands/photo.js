const fetch = require("node-fetch");

async function grab_data() {
  const apiLink = `https://dog.ceo/api/breeds/image/random`;

  const response = await fetch(apiLink);
  const json = await response.json();

  const imgLink = json.message;

  return imgLink;
}

module.exports = async (msg) => {
  var img = await grab_data();
  await msg.channel.send(`${msg.author} ` + img);
  console.log("Picture sent!");
};
