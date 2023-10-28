const { GMF } = require('../index')

// Initialize GMF Client

const gmfClient = new GMF()

// Fetch GIF

async function createGIF(query, limit) {
    const gif = await gmfClient.Gif({ query, limit });
    return gif;
}

// Fetch Meme

async function createMeme(type, limit) {
    const meme = await gmfClient.Meme({ type, limit });
    return meme;
}

createGIF("dog", 10) // Fetches 10 GIFs of dogs
createMeme("normal", 10) // Fetches 10 memes from the "normal" category