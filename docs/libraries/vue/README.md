# <Icon name="vuejs"/> Vue

## Linxios 

Linxios is a Vue component that utilizes the **WebData API** to provide you with metadata of any website compliant with the [Open Graph Protocol](http://ogp.me/). Basically with this component you can generate custom **link previews** 

#### Slack example 

![Slack Link Preview](/linkpreview.png)

::: tip
You could build beautiful link previews like the **Slack** example above
:::

::: tip
The component makes use of the Vue.js' [Slot Scope](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) API
:::

#### Why the name Linxios?

The name was inspired from the popular AJAX library **Axios**, because axios provides a little more features than the generic **Fetch** API. Linxios is more than just a generic link preview component :wink:

### Demo

Check out this sweet CodePen [demo](https://codepen.io/Naidoo/pen/GPGaqe?editors=1000) of a link preview of my [Dev.to](https://dev.to) account

::: tip
Feel free to try out your own site url `<linxios url="<your url>"/>`
:::

## Usage
### Installation
```
npm i --save @webdataorg/linxios-vue
```

#### CDN

```html
<head>
  <!-- all your generic head tags -->
  <script src="https://unpkg.com/@webdataorg/linxios-vue@1.1.0/dist/linxios-vue.min.js">
</head>
```

#### Global

```js
import Linxios from "@webdataorg/linxios-vue";

Vue.use(Linxios);
```
```vue
<template>
  <linxios>
    <div slot-scope="{ state, actions }">
        // slot your markup here
    </div>
  </linxios>
</template>
```
#### Local

```vue
<template>
  <linxios url="https://dev.to">
    <div slot-scope="{ state, actions }">
        // slot your markup here
    </div>
  </linxios>
</template>

<script>
import { Linxios } from "@webdataorg/linxios-vue";

export default {
  components: {
    Linxios
  }
}
</script>
```

### API

#### Slot Scope Props Structure

```
{
  state {
    meta {
      title
      og {
        title
        description
        ...
        ...
      }
      manifest
    }
    loading
    loaded
    imageLoading
    imageLoaded
  }
  actions {
    setImageLoaded
  }
}
```

The slot scope props structure is pretty simple, it has two root props called **state** and **actions**, all you need to know is that state contains *properties* and actions contains *methods* 

#### State Props

| Property | Info |
| -------- | ---- | 
| `meta` | contains the metadata about the site url provided. Refer to the **WebData API** Guide |
| `loading` | default value is `false` and is set to `true` when AJAX request is made then set back to `false` once AJAX is complete. Perfect for toggling the loader state | 
| `loaded` | default value is `false` and then set to `true` once AJAX request is complete |
| `imageLoading` | default value is `true` and set to `false` once `setImageLoaded` method is invoked by `@load` event on an image  |
| `imageLoaded` | default value is `false` and set to `true` once `setImageLoaded` method is invoked by `@load` event on an image |

#### Meta Props

The props found in the **meta prop** are extracted from `html > head > [meta]`

| Property | Info |
| -------- | ---- |
| `title` | Extracted from `<title></title>` |
| `og` | Extracted from `<meta proptery="og:*" content="*">`. For all possible `og` meta tags, refer to [Open Graph Protocol](http://ogp.me/) |
| `manifest` | Extracted if site contains a `manifest.json` file |

#### Actions Props

| Method | Info |
| ------ | ---- |
| `setImageLoaded` | This method should be called on the `@load` event on an image, it sets the `imageLoaded` prop to `true` |