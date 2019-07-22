# Introduction

[![Build Status](https://travis-ci.org/webdataorg/webdata-api.svg?branch=master)](https://travis-ci.org/webdataorg/webdata-api)
[![](https://img.shields.io/badge/language-TypeScript-blue.svg)]()

**WebData** is a free online **REST and GraphQL API** that you can use when you want to get any websites `meta` tag information relating to the [**Open Graph Protocol**](http://ogp.me/), `manifest.json` and can tell if a site is a **PWA** or not

### Example

Run this code in a console or from any site:

```js
const url = "https://github.com/"

fetch(`https://webdataapi.co.za/api?url=${url}`)
  .then(response => response.json())
  .then(json => console.log(json));

```

## What is Web Metadata?

Webapp metadata is basically just data that describes what exactly a site is all about, like for example, **YouTube** is a video sharing platform on the web, therefore, it should have metadata that describes that.

### How does a website store metadata?

```html
<meta name="tag" content="i am a meta tag"/>
```
I'm pretty sure you have seen that little guy hiding in your **HTML** document. Now that is what you call a `meta` tag. **Meta** tags are responsible for describing what your HTML document is and what is the purpose of it

Here are some of the meta tags found in the GitHub HTML document

```html
<!-- Document character encoding -->
<meta charset="utf-8"> 
<!-- Document description -->
<meta name="description" content="GitHub is where people build software...">
```
These are some of the most standard meta tags you would find on most sites. Then you get meta tags that follow the [**Open Graph Protocol**](http://ogp.me/)

> The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.

These are some of the tags that can be found in the **Open Graph Protocol**

```html
<meta property="og:site_name" content="GitHub">
<meta property="og:title" content="Build software better, together">
<meta property="og:description" content="GitHub is where people build software...">
```