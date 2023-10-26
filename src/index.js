const Gif = require('./gif/gif')
const Meme = require('./meme/meme')

/**
 * @typedef {Object} GMFOptions
 * @property {String} tenorApiKey
*/

class GMF {

    /**
    * @param {GMFOptions} options
    */

    constructor(options) {

        this.Gif = Gif;

        this.Meme = Meme;

        global.tenorApiKey = options.tenorApiKey || null;

    }

}

module.exports = { GMF }