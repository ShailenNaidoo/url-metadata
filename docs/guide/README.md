# API Usage

The API is super simple, you don't need to write a fancy script because who needs that

## Endpoint

The API consists of three parts:

| Property | Value |
| -------- | ----- |
| Base URL | `https://url-metadata.firebaseapp.com` |
| Parameter | `url` |
| Website URL | `https://github.com/ShailenNaidoo/webdata` |

### JSON Response

[Extract GitHub Open Graph Protocol Tags](https://url-metadata.firebaseapp.com/?url=https://github.com/ShailenNaidoo/webdata) after you click the link, you should get a **JSON** response back which looks exactly like the one below

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
  }
}

```
#### JSON Response Info

| Property | Info |
| -------- | ----- |
| `title` | Extracted from the `<title>` tag |
| `og` | Extracted data from all `<meta>` tags that conform to the [Open Graph Protocol](http://ogp.me/) |

### Demo

There are two options for you to choose from:

* [No fancy script method](https://url-metadata.firebaseapp.com?url=https://github.com/ShailenNaidoo/webdata)

* [Fancy script method](https://jsbin.com/rekozec/edit?js,console) 