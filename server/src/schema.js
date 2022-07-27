const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get track array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules tat teaches about specific topic"
  type Track {
    id: ID!
    "the track'"
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's photo"
    photo: String
  }
`;

module.exports = typeDefs;
