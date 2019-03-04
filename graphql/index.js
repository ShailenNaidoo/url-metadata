const { ApolloServer, gql } = require("apollo-server-express");
const { GraphQLURL } = require("graphql-custom-types");
const axios = require("axios");
const cache = require("../cache");
const main = require("../lib");

const CustomTypes = gql`
  scalar URL
`

const Query = gql`
  type Query {
    _: Boolean
  }
`

const ScrapeURL = gql`
  extend type Query {
    scrapeURL(url: URL!): WebsiteMetadata!
  }
`

const ScrapeURLs = gql`
  extend type Query {
    scrapeURLs(urls: [URL!]!): [WebsiteMetadata!]!
  }
`

const WebsiteMetadata = gql`
  type WebsiteMetadata {
    title: String
    og: OpenGraphTags
    pwa: Boolean!
  }
`

const OpenGraphTags = gql`
  type OpenGraphTags {
    type: String
    url: String
    title: String
    image: String
    description: String
    site_name: String
  }
`

const server = new ApolloServer({
  playground: true,
  introspection: true,
  tracing: true,
  typeDefs: [Query,ScrapeURL,ScrapeURLs,WebsiteMetadata,OpenGraphTags,CustomTypes],
  resolvers: {
    URL: GraphQLURL,
    Query: {
      async scrapeURL(_,{ url }) {
        try {
          return await cache.get(url);
        } catch (e) {
          const metadata = await main(url);
          cache.set(url,metadata);
          return metadata;
        }
      },
      async scrapeURLs(_,{ urls }) {
        try {
          return await Promise.all(urls.map(async url => await cache.get(url)));
        } catch(e) {
          const metadata = await Promise.all(urls.map(async url => ({ key: url, data: await main(url)})));
          metadata.map(url => cache.set(url.key,url.data));
          return metadata.map(({ data }) => data);
        }
      }
    }
  }
});

module.exports = server;