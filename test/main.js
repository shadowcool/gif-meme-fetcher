const { GMF } = require('../index')

// Initialize GMF Client

const gmfClient = new GMF({
    tenorApiKey: "YOUR_TENOR_API_KEY"
})

// Fetch GIF

async function createGIF(limit, query) {
    const gif = await gmfClient.Gif({ limit, query });
    return gif;
}

// Fetch Meme

async function createMeme(type, limit) {
    const meme = await gmfClient.Meme({ type, limit });
    return meme;
}

createGIF(10, "dog") // Fetches 10 GIFs of dogs
createMeme(10, "normal") // Fetches 10 memes from the "normal" category