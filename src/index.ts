import { parse } from "himalaya";
import * as _ from "lodash";

function tag(tag:string): { tagName: string } {
  return { tagName: tag }
}

function getHeadTag(parsed: object) : [object] {
  const [{ children: html }] = _.filter(parsed,tag("html"));
  const [{ children: head }] = _.filter(html,tag("head"));
  return head;
}

function getTitleTag(head: object) : string {
  const [{ children: [{ content: title }]}] = _.filter(head,tag("title"));
  return title;
}

function getOpenGraphTags(head: object) : [object] {
  return _.chain(head)
    .filter(tag("meta"))
    .map("attributes")
    .map((att) => _.map(att,({ key, value }) => ({ [key]: value })))
    .map((att) => _.assign(...att))
    .flatten()
    .filter("property")
    .value();
}

function metadata(h) : { title: string, open_graph_tags: [object] } {
  const parsed = parse(h);
  const head = getHeadTag(parsed);
  const title = getTitleTag(head);
  const openGraphTags = getOpenGraphTags(head);

  return {
    title,
    open_graph_tags: openGraphTags
  }
}

export default metadata;