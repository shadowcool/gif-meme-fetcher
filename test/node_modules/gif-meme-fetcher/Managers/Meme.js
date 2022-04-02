const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function fetchMeme() {

  let tag = ["memes", "me_irl", "dankmemes", "comedyheaven", "Animemes"]
  tag = tag[Math.floor(Math.random() * tag.length)]

  let res = await fetch(`https://www.reddit.com/r/${tag}/random/.json`);

  json = await res.json()
  if (!json) throw new Error("Error 01: Unable to access the json content of API")
  json = json[0].data.children[0].data;

  let content = {
      url: json.is_video ? "https://freepikpsd.com/wp-content/uploads/2019/10/no-image-png-5-Transparent-Images.png" : json.url,
      title: json.title
  }

  return content;
}


module.exports = fetchMeme