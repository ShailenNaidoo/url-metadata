"use strict";
exports.__esModule = true;
var himalaya_1 = require("himalaya");
var _ = require("lodash");
var axios_1 = require("axios");
function tag(tag) {
    return { tagName: tag };
}
function getHeadTag(parsed) {
    var html = _.filter(parsed, tag("html"))[0].children;
    var head = _.filter(html, tag("head"))[0].children;
    return head;
}
function getTitleTag(head) {
    var title = _.filter(head, tag("title"))[0].children[0].content;
    return title;
}
function getOpenGraphTags(head) {
    return _.chain(head)
        .filter(tag("meta"))
        .map("attributes")
        .map(function (att) { return _.map(att, function (_a) {
        var key = _a.key, value = _a.value;
        var _b;
        return (_b = {}, _b[key] = value, _b);
    }); })
        .map(function (att) { return _.assign.apply(_, att); })
        .flatten()
        .filter("property")
        .value();
}
function metadata(h) {
    var parsed = himalaya_1.parse(h);
    var head = getHeadTag(parsed);
    var title = getTitleTag(head);
    var openGraphTags = getOpenGraphTags(head);
    return {
        title: title,
        open_graph_tags: openGraphTags
    };
}
axios_1["default"].get("https://github.com/ShailenNaidoo/url-metadata").then(function (res) {
    console.log(metadata(res.data));
});
//# sourceMappingURL=index.js.map