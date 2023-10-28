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

        if(!options || !options.tenorApiKey) {
            global.tenorApiKey = null;
            return;
        }

        global.tenorApiKey = options.tenorApiKey;

    }

}

module.exports = { GMF }