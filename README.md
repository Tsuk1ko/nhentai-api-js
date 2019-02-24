# nhentai-api-js

## Example

```javascript
const nHentaiAPI = require('nhentai-api-js');
let api = new nHentaiAPI();

// Details of https://nhentai.net/g/263492/
api.g(263492).then(gallery => {
    console.log(JSON.stringify(gallery));     // (1)
    console.log(gallery.getPages());          // (2)
    console.log(gallery.getPagesThumbnail()); // (3)
    console.log(gallery.getCover());          // (4)
    console.log(gallery.getCoverThumbnail()); // (5)
});

// Search "艦隊これくしょん"
api.search('艦隊これくしょん').then(data => console.log(JSON.stringify(data))); // (6)
```

There are what you will get (formatted):

### (1) Doujin details (same as the official original API)

```javascript
{
    "id": 263492,
    "media_id": "1367250",
    "title": {
        "english": "(C95) [Sawayaka Tokunou Milk (Arumamai Ayuka+)] Hibiki-chan no Fuwafuwa Tsuihoshuu! (Kantai Collection -KanColle-) [Chinese] [山樱汉化]",
        "japanese": "(C95) [爽やか特濃みるく (在誠舞あゆか+)] 響ちゃんのふわふわ追補習! (艦隊これくしょん -艦これ-) [中国翻訳]",
        "pretty": "Hibiki-chan no Fuwafuwa Tsuihoshuu!"
    },
    "images": {
        "pages": [
            {
                "t": "p",
                "w": 1280,
                "h": 1803
            },
            ...
        ],
        "cover": {
            "t": "p",
            "w": 350,
            "h": 493
        },
        "thumbnail": {
            "t": "p",
            "w": 250,
            "h": 352
        }
    },
    "scanlator": "",
    "upload_date": 1550445627,
    "tags": [
        {
            "id": 1841,
            "type": "parody",
            "name": "kantai collection",
            "url": "/parody/kantai-collection/",
            "count": 11888
        },
        ...
    ],
    "num_pages": 24,
    "num_favorites": 0
}
```

### (2) Pages `string[]`

```javascript
[
    'https://i.nhentai.net/galleries/1367250/1.png',
    'https://i.nhentai.net/galleries/1367250/2.png',
    'https://i.nhentai.net/galleries/1367250/3.png',
    ...
    'https://i.nhentai.net/galleries/1367250/24.png'
]
```

### (3) Pages thumbnail `string[]`

```javascript
[
    'https://t.nhentai.net/galleries/1367250/1t.png',
    'https://t.nhentai.net/galleries/1367250/2t.png',
    'https://t.nhentai.net/galleries/1367250/3t.png',
    ...
    'https://t.nhentai.net/galleries/1367250/24t.png'
]
```

### (4) Cover `string`

```
https://t.nhentai.net/galleries/1367250/cover.png
```

### (5) Cover thumbnail `string`

```
https://t.nhentai.net/galleries/1367250/thumb.png
```

### (6) Search

```javascript
{
    "num_results": 11706,
    "num_pages": 469,
    "results": [
        {
            "id": "263511",
            "title": "(C87) [Hiroshikidou (Hiroshiki)] Yuudachi Satte Hi ga Shizumu (Kantai Collection -KanColle-)[Chinese][基德漢化組]",
            "language": "chinese",
            "thumbnail": {
                "s": "https://t.nhentai.net/galleries/1367411/thumb.jpg",
                "w": "250",
                "h": "353"
            }
        },
        ...
    ]
}
```

## APIs

### nHentaiAPI

- `constructor nHentaiAPI(baseURL?: string): nHentaiAPI`
  - `baseURL` — Default is `'https://nhentai.net'`
- `nHentaiAPI.g(id: string | number): Promise<nHentaiGallery>` — Get doujin details
  - `id` — Gallery ID
- `nHentaiAPI.homepage(page?: number): Promise` — Get doujin list from homepage
  - `page` — Page num
- `nHentaiAPI.random(): Promise` — Get a random doujin
- `nHentaiAPI.search(keyword: string, page?: number, sort?: string): Promise`  
  - `keyword` — Keyword [(learn more)](https://nhentai.net/info/)
  - `page` — Page num (default is `1`)
  - `sort` — `'date'` (default) or `'popular'`
- `nHentaiAPI.tag(name: string, page?: number, sort?: string): Promise`  
  `nHentaiAPI.artist`  
  `nHentaiAPI.character`  
  `nHentaiAPI.parody`  
  `nHentaiAPI.group`
  - `name` — Name of tag / artist / character / parody / group
  - `page` — Page num (default is `1`)
  - `sort` — `'date'` (default) or `'popular'`

### nHentaiGallery

- `nHentaiGallery.getPages(baseURL?: string): string[]` — Get a URL list of pages
  - `baseURL` — Default is `'https://i.nhentai.net'`
- `nHentaiGallery.getPagesThumbnail(baseURL?: string): string[]` — Get a URL list of pages thumbnail  
  `nHentaiGallery.getCover(baseURL?: string): string` — Get a URL of cover  
  `nHentaiGallery.getCoverThumbnail(baseURL?: string): string` — Get a URL of cover thumbnail
  - `baseURL` — Default is `'https://t.nhentai.net'`
