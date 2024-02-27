const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

/**
 * @typedef {Object} MemeOptions
 * @property {Number} limit
 */

/**
 * @typedef {Array} Meme
 * @property {String} title
 * @property {String} postLink
 * @property {String} author
 * @property {String} url
 * @property {String} subreddit
 * @property {Boolean} nsfw
 * @property {Number} upvotes
 * @property {Boolean} spoiler
 */

/** 
 * @param {MemeOptions} memeOptions
 * @returns {Promise<Meme>}
 */

const Meme = async(memeOptions) => {

    let limit = memeOptions.limit;

    if(!limit || !memeOptions) throw new Error("Invalid Meme Options: TYPE and LIMIT are required options")

    if(typeof limit !== "number" || typeof memeOptions !== "object") throw new Error("Invalid Meme Options: LIMIT must be a number")

    if(limit > 50) throw new Error("Limit cannot be greater than 50")

    const url = `https://meme-api.com/gimme/${limit}`

    const res = await fetch(url);

    const data = await res.json();

    let meme = [];

    console.log(data.memes[0])

    data.memes.forEach(m => meme.push({ title: m.title, postLink: m.postLink, author: m.author, url: m.url, subreddit: m.subreddit, nsfw: m.nsfw, upvotes: m.ups, spoiler: m.spoiler }) )

    return meme;
}

module.exports = Meme;