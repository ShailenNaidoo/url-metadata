# API Usage

The API is super simple, you don't need to write a fancy script because who needs that

## Endpoints

::: tip
The base URL is `https://webdataapi.co.za/api/v1/`
:::

### `/api/v1/get-metadata [GET]`

This a very simple endpoint, all you do is pass a query to the endpoint.

```
https://webdataapi.co.za/api/v1/get-metadata?url=https://github.com
```

### `/api/v1/get-metadata [POST]`

If you prefer sending a json object with the URL intended for scraping, you can do that to. 

```javascript
fetch("https://webdataapi.co.za/api/v1/get-metadata",{
	method: "POST",
	headers: {
		"Accept": "application/json",
		"Content-Type": "application/json"
    },
	body: JSON.stringify({ url: "https://dev.to" })
}).then(res => res.json())
.then(res => console.log(res));
```

### `/api/v1/get-metadata/manifest [GET]`

You can also get the `manifest.json` file of a website

```
https://webdataapi.co.za/api/v1/get-metadata/manifest?url=https://github.com
```

## JSON Response

[Extract GitHub Open Graph Protocol Tags](https://webdataapi.co.za/api?url=https://github.com/ShailenNaidoo/webdata) after you click the link, you should get a **JSON** response back which looks exactly like the one below

#### `/api/v1/get-metadata` response

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
#### `/api/v1/get-metadata/manifest` response

```json
{
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
  }
}
```

## Demo

There are two options for you to choose from:

* [No fancy script method](https://webdataapi.co.za/api/v1/get-metadata?url=https://github.com/ShailenNaidoo/webdata)

* [Fancy script method](https://jsbin.com/rekozec/edit?js,console) 