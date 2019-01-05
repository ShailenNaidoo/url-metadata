const { parse } = require("himalaya");
const axios = require("axios");

const _ = require("lodash");

axios.get("https://dev.to/shailennaidoo/using-v-model-with-a-custom-component-in-vuejs-4i05").then(({ data }) => {
  const parsed = parse(data);

  const [html] = _.filter(parsed,["tagName","html"]);
  const [head] = _.filter(html.children,["tagName","head"]);
  const meta = _.filter(head.children,["tagName","meta"]);
  const attributes = _.map(meta,"attributes");
  const convertKeys = _.map(attributes,function(v) {
    return _.map(v,function({ key, value }) {
      return {
        [key]: value
      }
    })
  });

  const flatten = _.flatten(_.map(convertKeys,function(v) {
    return _.assign(...v);
  }));

  const metaProperties = _.filter(flatten,function(v) {
    if(v.property) {
      return v.hasOwnProperty("property")
    }
  });

  const [{ children: [{ content: title }] }] = _.filter(head.children,["tagName","title"]);

  const metadata = {
    title,
    open_graph_tags: metaProperties
  }

  console.log(JSON.stringify(metadata,null,2));
})
