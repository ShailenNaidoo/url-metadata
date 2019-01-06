module.exports = {
  title: 'WebData',
  head: [
    ["link",{ rel: "icon", href: "/logo.png" }],
    ["link",{ rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css", integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/", crossorigin: "anonymous"}]
  ],
  description: "WebData is a free online REST API that you can use when you want to get any websites meta tag information relating to the Open Graph Protocol",
  themeConfig: {
    search: false,
    sidebarDepth: 2,
    sidebar: [
      {
        title: "Guide",
        collapsable: false,
        children: [
          "/",
          "/guide/"
        ]
      },
      {
        title: "Info",
        collapsable: false,
        children: [
          "/contributors/"
        ]
      }
    ],
    nav: [
      {
        text: "Examples",
        items: [
          { text: "Vue", link: "https://codepen.io/Naidoo/pen/QzryBj?editors=1010" },
          { text: "React", link: "https://codepen.io/schalkventer/pen/xmjwGK" },
          { text: "Angular", link: "" }
        ]
      },
      {
        text: "Quick Demo",
        link: "https://jsbin.com/rekozec/edit?js,console"
      },
      {
        text: "GitHub",
        link: "https://github.com/ShailenNaidoo/webdata"
      }
    ]
  }
}