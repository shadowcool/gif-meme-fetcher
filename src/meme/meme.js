const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

/**
 * @typedef {Object} Meme
 * @property {String} type
 * @property {Number} limit
 */

/**
 * 
 * @param {Meme} memeOptions
 * @returns {Array}
 */

const Meme = async(memeOptions) => {

    const type = memeOptions.type.toLowerCase();
    const limit = memeOptions.limit;

    if(!limit || !memeOptions) throw new Error("Invalid Meme Options: TYPE and LIMIT are required options")

    if(typeof type !== "string" || typeof limit !== "number" || typeof memeOptions !== "object") throw new Error("Invalid Meme Options: TYPE must be a string and LIMIT must be a number")

    const memeOptionsTypes = [
        "dank",
        "normal"
    ]

    if(type && !memeOptionsTypes.includes(type)) {
        throw new Error("Invalid Meme Option Type: Types can only be DANK or NORMAL")
    } 

    if(!type) type = "normal"

    if(limit > 100) throw new Error("Limit cannot be greater than 100")

    const url = `https://meme.breakingbranches.tech/api?limit=${limit}&type=${type}`

    const res = await fetch(url);

    const data = await res.json();

    let meme = [];

    data.memes.forEach(m => meme.push({ title: m.title, author: m.author, url: m.url, type: type }) )

    return meme;
}

module.exports = Meme;