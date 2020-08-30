const fetch = require("node-fetch");

async function grab_data() {
  const gifKey = process.env.GIF_KEY;
  const searchTerm = "boop-dog";
  const lmt = 1;
  const fltr = "minimal";

  const apiLink = `https://api.tenor.com/v1/random?q=${searchTerm}&key=${gifKey}&limit=${lmt}&media_filter=${fltr}`;

  const response = await fetch(apiLink);
  const json = await response.json();

  const gifResults = json["results"];
  const gifLink = gifResults[0].media[0].gif.url;

  return gifLink;
}

module.exports = async (msg) => {
  var gif = await grab_data();
  await msg.channel.send(`${msg.author} ` + gif);
  console.log("Boop GIF sent");
};