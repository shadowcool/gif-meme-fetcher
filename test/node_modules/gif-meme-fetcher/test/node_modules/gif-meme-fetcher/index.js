module.exports = {
    GMF: {
          gif: {
              sfw: {
                  fetchAnime: require("./Managers/Gif/SFW")
              }, 
              nsfw: {
                fetchAnime: require("./Managers/Gif/NSFW")
              }
          },
          fetchMeme: require("./Managers/Meme")
    }
  }