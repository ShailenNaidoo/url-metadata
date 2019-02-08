# API Usage

The API is super simple, you don't need to write a fancy script because who needs that

## Endpoint

The API consists of three parts:

| Property | Value |
| -------- | ----- |
| Base URL | `https://us-central1-webdata-eeba3.cloudfunctions.net/api` |
| Parameter | `url` |
| Website URL | `https://github.com/ShailenNaidoo/webdata` |

### JSON Response

[Extract GitHub Open Graph Protocol Tags](https://us-central1-webdata-eeba3.cloudfunctions.net/api?url=https://github.com/ShailenNaidoo/webdata) after you click the link, you should get a **JSON** response back which looks exactly like the one below

```json
{
  "title": "GitHub - ShailenNaidoo/webdata: A free online REST API for getting an websites meta tag information relation to the Open Graph Protocol",
  "og": {
    "fb:app_id": "1401488693436528",
    "image": "https://avatars1.githubusercontent.com/u/26552540?s=400&amp;v=4",
    "site_name": "GitHub",
    "type": "object",
    "title": "ShailenNaidoo/webdata",
    "url": "https://github.com/ShailenNaidoo/webdata",
    "description": "A free online REST API for getting an websites meta tag information relation to the Open Graph Protocol - ShailenNaidoo/webdata"
  },
  "manifest":  {
    "name": "GitHub",
    "icons": [
      {
        "sizes": "114x114",
        "src": "https://github.githubassets.com/apple-touch-icon-114x114.png"
      },
      {
        "sizes": "120x120",
        "src": "https://github.githubassets.com/apple-touch-icon-120x120.png"
      },
      {
        "sizes": "144x144",
        "src": "https://github.githubassets.com/apple-touch-icon-144x144.png"
      },
      {
        "sizes": "152x152",
        "src": "https://github.githubassets.com/apple-touch-icon-152x152.png"
      },
      {
        "sizes": "180x180",
        "src": "https://github.githubassets.com/apple-touch-icon-180x180.png"
      },
      {
        "sizes": "57x57",
        "src": "https://github.githubassets.com/apple-touch-icon-57x57.png"
      },
      {
        "sizes": "60x60",
        "src": "https://github.githubassets.com/apple-touch-icon-60x60.png"
      },
      {
        "sizes": "72x72",
        "src": "https://github.githubassets.com/apple-touch-icon-72x72.png"
      },
      {
        "sizes": "76x76",
        "src": "https://github.githubassets.com/apple-touch-icon-76x76.png"
      }
    ]
  },
  pwa: true
}

```
#### JSON Response Info

| Property | Info |
| -------- | ----- |
| `title` | Extracted from the `<title>` tag |
| `og` | Extracted data from all `<meta>` tags that conform to the [Open Graph Protocol](http://ogp.me/) |
| `manifest` | Extracted from the `<link>` tag where `rel="manifest"` |
| `pwa` | If `manifest` exists, then is `true` |

### Demo

There are two options for you to choose from:

* [No fancy script method](https://us-central1-webdata-eeba3.cloudfunctions.net/api?url=https://github.com/ShailenNaidoo/webdata)

* [Fancy script method](https://jsbin.com/rekozec/edit?js,console) 