const { GMF } = require('gif-meme-fetcher')

async function LogMeme() {
    const Meme = await GMF.fetchMeme()
    console.log(Meme)
}

async function LogNSFW_GIF() {
    const Gif = await GMF.gif.nsfw.fetchAnime("waifu") // At the place of the function fetchAnime. You have to put 1 thing out of a array of actions.
    console.log(Gif)
}

async function LogSFW_Gif() {
    const Gif = await GMF.gif.sfw.fetchAnime("pat") // At the place of the function fetchAnime. You have to put 1 thing out of a array of actions.
    console.log(Gif)
}

LogMeme();
LogNSFW_GIF();
LogSFW_Gif();