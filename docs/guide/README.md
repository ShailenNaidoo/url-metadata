# API Usage

The API is super simple, you don't need to write a fancy script because who needs that

## Endpoints

::: tip
The base URL is `https://webdata.co.za/api`
:::

### `/api [GET]`

This a very simple endpoint, all you do is pass a query to the endpoint.

```
https://webdataapi.co.za/api?url=https://github.com
```

### `/api [POST]`

If you prefer sending a json object with the URL intended for scraping, you can do that to. 

```javascript
fetch("https://webdataapi.co.za/api",{
	method: "POST",
	headers: {
		"Accept": "application/json",
		"Content-Type": "application/json"
    },
	body: JSON.stringify({ url: "https://dev.to" })
}).then(res => res.json())
.then(res => console.log(res));
```

### `/api/multi [POST]`

If you want to scrape a bunch of URLs, you can do that as well.

```javascript
const urls = ["https://dev.to","https://github.com"];

fetch("https://webdataapi.co.za/api/multi",{
	method: "POST",
	headers: {
		"Accept": "application/json",
		"Content-Type": "application/json"
    },
	body: JSON.stringify({ urls })
}).then(res => res.json())
.then(res => console.log(res));
```

### `/api/graphql`

I love GraphQL so i thought why not build a GraphQL API as well, check out the [playground](https://webdataapi.co.za/api/graphql)

## JSON Response

[Extract GitHub Open Graph Protocol Tags](https://webdataapi.co.za/api?url=https://github.com/ShailenNaidoo/webdata) after you click the link, you should get a **JSON** response back which looks exactly like the one below

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

## Demo

There are two options for you to choose from:

* [No fancy script method](https://webdataapi.co.za/api?url=https://github.com/ShailenNaidoo/webdata)

* [Fancy script method](https://jsbin.com/rekozec/edit?js,console) 