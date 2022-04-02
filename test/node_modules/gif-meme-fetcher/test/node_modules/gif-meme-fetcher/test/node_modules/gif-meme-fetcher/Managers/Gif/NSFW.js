const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const fetchAnime = async (action) => {

  if(!action) throw new TypeError("No Action has been provided in fetchAnime()")

  let array = ["waifu", "neko", "trap", "blowjob"];

  if (!array.find(x => x === action.toLowerCase())) {
    throw new TypeError("Unknown Action name, options of action are - " + array.join(", "))
  }
  let res = await fetch("https://api.waifu.pics/nsfw/" + action.toLowerCase());

  var json = await res.json();

  return json.url
}

module.exports = fetchAnime;