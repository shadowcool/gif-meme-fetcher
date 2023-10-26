# gif-meme-fetcher
A Package which allows you to Fetch Funny Gif's and Memes

# Installation
```bash
npm install gif-meme-fetcher
```

# Usage

## Initialize Client

```js
const { GMF } = require('gif-meme-fetcher');

const gmfClient = new GMF({
    tenorApiKey: "YOUR_TENOR_API_KEY",
})
```
## Fetch GIF

```js
gmfClient.Gif({
    limit: 10,
    query: "QUERY"
})
```

## Fetch Meme

```js
gmfClient.Meme({
    limit: 10,
    type: "normal" // Normal by Default, you can choose it to be DANK or NORMAL
})
```


# License

[MIT](https://choosealicense.com/licenses/mit/)

# Author

- [ShadoW](https://github.com/shadowcool)
