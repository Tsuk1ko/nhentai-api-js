# nhentai-api-js
## Example
```javascript
const nHentaiAPI = require('nhentai-api-js');
let api = new nHentaiAPI();

// Details of https://nhentai.net/g/263492/
api.g(263492).then(data => console.log(JSON.stringify(data)));

// Search "艦隊これくしょん"
api.search('艦隊これくしょん').then(data => console.log(JSON.stringify(data)));
```

There are what you will get (formatted):

```json
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

```json
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
- `nHentaiAPI.g(id: string | number): Promise` — Get doujin details
  - `id` — Gallery ID
- `nHentaiAPI.homepage(page?: number): Promise` — Get doujin list from homepage
  - `page` — Page num
- `nHentaiAPI.random(): Promise` — Get a random doujin
- `nHentaiAPI.search(keyword: string, page?: number, sort?: string): Promise`  
  `nHentaiAPI.tag(tag: string, page?: number, sort?: string): Promise`  
  `nHentaiAPI.artist(artist: string, page?: number, sort?: string): Promise`  
  `nHentaiAPI.character(character: string, page?: number, sort?: string): Promise`  
  `nHentaiAPI.parody(parody: string, page?: number, sort?: string): Promise`  
  `nHentaiAPI.group(group: string, page?: number, sort?: string): Promise`  
  - `page` — Page num
  - `sort` — "date" (defalut) or "popular"
