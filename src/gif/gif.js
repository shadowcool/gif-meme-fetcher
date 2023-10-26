const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

/**
 * @typedef {Object} Gif
 * @property {Number} limit
 * @property {String} query
 */

/**
 * 
 * @param {Gif} gifOptions
 * @returns {Array}
 */

const Gif = async(gifOptions) => {
    const limit = gifOptions.limit;
    const query = gifOptions.query.toLowerCase();

    if(!limit || typeof limit !== "number") throw new Error("Invalid GIF Options: Limit must be a provided number");

    if(limit > 50) {
        throw new Error("Invalid GIF Options: Limit cannot be greater than 50");
    }

    if(!query || typeof query !== "string") throw new Error("Invalid GIF Options: Query must be a provided string");

    if(query.length > 100) throw new Error("Invalid GIF Options: Query cannot be greater than 100 characters");

    const apiKey = global.tenorApiKey;

    if(apiKey === null) throw new Error("Invalid GMF Options: Tenor API Key is not provided")

    const url = `https://g.tenor.com/v1/random?key=${apiKey}&q=${query}&limit=${limit}`;

    const res = await fetch(url);

    const data = await res.json();

    if(![200, 201].includes(res.status)) throw new Error("Invalid GIF Options: Error fetching GIFs, please try again later\nTenor Error Code: " + res.status + "\nTenor Error Text: " + res.statusText);

    const gif = [];

    data.results.forEach(g => gif.push({ title: g.title, url: g.url, id: g.id, media: g.media, itemurl: g.itemurl, tags: g.tags }))

    return gif;

}

module.exports = Gif;